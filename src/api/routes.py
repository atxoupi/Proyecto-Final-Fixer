"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, Login, Worker_signup, User_signup, Work
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt
from flask_mail import Mail
from flask_mail import Message

api = Blueprint('api', __name__)


#--Login--
#Comprobación de datos de usuario, recibe mail y pass y comprueba que existan en la BD
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = Login.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "Usuario no existe"}), 404
    comprobacion=current_app.bcrypt.check_password_hash(user.password, password)
    if email != user.email or comprobacion == False:
        return jsonify({"msg": "Bad username or password"}), 401 

    missing = User_signup.query.filter_by(email=email).first()
    if (missing is None):
        segmento="Empresa"
    else:
        segmento="Usuario"
    
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token,tipo=segmento) 

#--SignUp
#Recibe datos de Usuario o de Worker y los inserta en la BD
@api.route("/worker_signup", methods=["POST"])
def wsignup():
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    city = request.json.get("city", None)
    sector = request.json.get("sector", None)

    pw_hash = current_app.bcrypt.generate_password_hash(password).decode("utf-8")
    user = Worker_signup(name=name, email=email, password=pw_hash, city=city, sector=sector)
    db.session.add(user)
    db.session.commit()
    
    id_worker=Worker_signup.query.filter_by(email=email).first()
    login = Login(email=email, password=pw_hash,worker_id=id_worker.id)
    db.session.add(login)
    db.session.commit()

    response_body = {
        "message": "Empresa Añadida"
    }

    return jsonify(response_body), 200

@api.route("/user_signup", methods=["POST"])
def usignup():
    name = request.json.get("name", None)
    lastname = request.json.get("lastname", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    pw_hash = current_app.bcrypt.generate_password_hash(password).decode("utf-8")
    
    user = User_signup(name=name, lastname=lastname,  email=email, password=pw_hash)
    db.session.add(user)
    db.session.commit()

    id_user=User_signup.query.filter_by(email=email).first()
    login = Login(email=email, password=pw_hash,id_user=id_user.id)
    db.session.add(login)
    db.session.commit()
    response_body = {
        "message": "Usuario Añadido"
    }

    return jsonify(response_body), 200
##--Work_Request--
##Recibe por parámetros un objeto Json con la ciudad, el sector, la descripcion y el mail del usuario que realiza la consulta 
##Introduce los datos en la tabla Work de BBDD
@api.route("/work_request", methods=["POST"])
def wrequestp():
    city = request.json.get("city", None)
    sector = request.json.get("sector", None)
    description = request.json.get("description", None)
    mail=request.json.get("mail", None)
    
    user=User_signup.query.filter_by(email=mail).first()
    work = Work(location=city, sector=sector, description=description, user_id=user.id)
    db.session.add(work)
    db.session.commit()

    companys = Worker_signup.query.filter_by(city=work.city).filter_by(sector=work.sector).all()
    with current_app.mail.connect() as conn:
        for company in companys:
            message = 'Hemos detectado que hay ofertas para realizar trabajos en su sector en su área de influencia, acceda a su zona privada en nuestra web para porder revisarlas'
            subject = "Hola, %s. Nueva solicitud de trabajo para un Fixer de su zona" % company.name
            msg = Message(recipients=[company.email],
                        body=message,
                        subject=subject)

            conn.send(msg)


    

    response_body = {
        "message": "Solicitud de trabajo Añadida"
    }

    return jsonify(response_body), 200

##--Profile--
##No recibe nada por parámetros y devuelve los datos de usuario
##Ruta sólo accesible si estás logueado
@api.route("/profile", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    missing = User_signup.query.filter_by(email=current_user).first()
    if (missing is None):
        user = Worker_signup.query.filter_by(email=current_user).first()
    else:
        user = User_signup.query.filter_by(email=current_user).first()
    
    
    return jsonify(user.serialize()), 200
##--ListWork--
##No recibe nada por parámetros y devuelve un array con:
## -las solicitudes de trabajo en caso de ser un usuario
## -Las ofertas de trabajo en caso de ser una empresa
##Ruta sólo accesible si estás logueado
@api.route("/listwork", methods=["GET"])
@jwt_required()
def listworks():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    missing = User_signup.query.filter_by(email=current_user).first()
    if missing is None:
        user = Worker_signup.query.filter_by(email=current_user).first()
        works = Work.query.filter_by(worker_id=user.id).all()
    else:
        user = User_signup.query.filter_by(email=current_user).first()
        works = Work.query.filter_by(user_id=user.id).all()

    result= list(map(lambda work: work.serialize(),works))
    
    return jsonify(result), 200

##Zone List Work
##No recibe nada por parámetros y devuelve un array con:
## -Las ofertas de trabajo en en la zona de la empresa que hace la consulta empresa
##Ruta sólo accesible si estás logueado
@api.route("/zone_listwork", methods=["GET"])
@jwt_required()
def zonelistworks():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = Worker_signup.query.filter_by(email=current_user).first()
    works = Work.query.filter_by(city=user.city).filter_by(sector=user.sector).all()

    result= list(map(lambda work: work.serialize(),works))
    
    return jsonify(result), 200

##Fixer zone
##No recibe nada por parámetros y devuelve un array con:
## los fixers de la zona
##Ruta sólo accesible si estás logueado
@api.route("/fixer_zone", methods=["GET"])
@jwt_required()
def fixers_zone():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User_signup.query.filter_by(email=current_user).first()
    fixers = Worker_signup.query.filter_by(city=user.city).all()

    result= list(map(lambda fixer: fixer.serialize(),fixers))
    
    return jsonify(result), 200