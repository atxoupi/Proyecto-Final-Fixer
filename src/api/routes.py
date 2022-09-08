"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, Login, Worker_signup, User_signup, Work, Budget,Ratings
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt
from flask_mail import Mail
from flask_mail import Message
import datetime 
from geopy.geocoders import Nominatim

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
    
    
    access_token = create_access_token(identity=email, expires_delta=datetime.timedelta(minutes=60))
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
    tlf_number=request.json.get("tlf_number", None)

    pw_hash = current_app.bcrypt.generate_password_hash(password).decode("utf-8")
    user = Worker_signup(name=name, email=email, password=pw_hash, city=city, sector=sector, tlf_number=tlf_number)
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
    title=request.json.get("title", None)
    
    user=User_signup.query.filter_by(email=mail).first()
    work = Work(location=city, sector=sector, description=description, user_id=user.id, title=title)
    db.session.add(work)
    db.session.commit()

    companys = Worker_signup.query.filter_by(city=work.location).filter_by(sector=work.sector).all()
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
        print(user)
    
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
        works = Work.query.filter_by(location=user.city).filter_by(sector=user.sector).all()
        sent_budgets = Budget.query.filter_by(worker_id=user.id).all()
        if sent_budgets==[] :
            result= list(map(lambda work: work.serialize(),works)) 
            return jsonify(result), 200  
        libres=[]    
        for budget in sent_budgets:
            libres=list(filter(lambda work: work.id != budget.work_id, works))
            
        result= list(map(lambda libre: libre.serialize(),libres))
    
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

@api.route("/workers", methods=["GET"])
# @jwt_required()
def get_workers():
    # Access the identity of the current user with get_jwt_identity
    # current_user = get_jwt_identity()
    
    fixers = Worker_signup.query.order_by(Worker_signup.name).all()

    result= list(map(lambda fixer: fixer.serialize(),fixers))
    
    return jsonify(result), 200

##save_budget
##Recibe el id de la propuesta, la url del archivo PDF y los datos para mostrar sin abrir el presupuesto detallado como el precio y la duración en días de la reforma
##toda esta información la guarda en la tabla Budget de BBDD
##Ruta sólo accesible si estás logueado
@api.route("/save_budget", methods=["POST"])
@jwt_required()
def sbudget():
    current_user = get_jwt_identity()
    url = request.json.get("url", None)
    id_work = request.json.get("id_work", None)
    duration = request.json.get("duration", None)
    price = request.json.get("price", None)
    worker = Worker_signup.query.filter_by(email=current_user).first()
    tarea = Work.query.filter_by(id=id_work).first() 
    status=False

    budget = Budget(user_id=tarea.user_id , worker_id=worker.id, work_id=tarea.id, url=url, duration=duration, price=price,status=status)
    db.session.add(budget)
    db.session.commit()
    
    

    response_body = {
            "message": "Presupuesto Almacenado"
        }

    return jsonify(response_body), 200

    
@api.route("/listbudget", methods=["GET"])
@jwt_required()
def listbudgets():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User_signup.query.filter_by(email=current_user).first()
    budgets = Budget.query.filter_by(user_id=user.id)
    
    result= list(map(lambda budget: budget.serialize(),budgets))
    
    return jsonify(result), 200


# Nos devuelve el listado de presupuestos referentes a una oferta concreta, 
# le pasamos el id como parámetro
@api.route("/listbudget/<int:id>", methods= ["GET"])
@jwt_required()
def listbudgetsForWork(id):
    # Access the identity of the current user with get_jwt_identity
    budgets_obj= Budget.query.filter_by(work_id=id).all()
    print(id)
    budgets=[budget.serialize() for budget in budgets_obj]
    
    return jsonify(budgets), 200

#--Updateworker
#Recibe datos de Usuario o de Worker y los actualiza en la BD
@api.route("/update_worker", methods=["PUT"])
@jwt_required()
def updateworker():
    current_user = get_jwt_identity()
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    city = request.json.get("city", None)
    sector = request.json.get("sector", None)
    tlf_number=request.json.get("tlf_number", None)
    adress=request.json.get("adress", None)
    postcode=request.json.get("postcode", None)
    worker=Worker_signup.query.filter_by(email=current_user).first()
    worker.name=name
    worker.tlf_number=tlf_number
    worker.adress=adress
    worker.email=email
    worker.city=city
    worker.sector=sector
    worker.postcode=postcode

    #actualizando worker
    db.session.commit()

    login=Login.query.filter_by(email=current_user).first()
    login.email=email
    
    db.session.commit()

    response_body = {
        "message": "Datos Actualizados"
        }
 
    return jsonify(response_body), 200
   

#--UpdateUser
#Recibe datos de Usuario y los actualiza en la BD
@api.route("/update_user", methods=["PUT"])
@jwt_required()
def updateuser():
    current_user = get_jwt_identity()
    name = request.json.get("name", None)
    lastname = request.json.get("lastname", None)
    email = request.json.get("email", None)
    city = request.json.get("city", None)    
    tlf_number=request.json.get("tlf_number", None)
    adress=request.json.get("adress", None)
    postcode=request.json.get("postcode", None)
    pictures=request.json.get("pictures", None)

    

    user=User_signup.query.filter_by(email=current_user).first()

    user.name=name
    user.lastname=lastname
    user.email=email
    user.city=city
    user.adress=adress
    user.tlf_number=tlf_number
    user.postcode=postcode
    # user.pictures=postcode
    
    db.session.commit()  
    login=Login.query.filter_by(email=current_user).first()
    login.email=email
    
    db.session.commit()

    response_body = {
        "message": "Datos Actualizados"
    }

    return jsonify(response_body), 200

##WorkerProfile
##Recibe el id del worker y devuelve un array con los datos del trabajador

@api.route("/worker_profile/<int:id>", methods=["GET"])

def workerprofile(id):
    # Access the identity of the current user with get_jwt_identity

    worker = Worker_signup.query.filter_by(id=id).first()
    
    return jsonify(worker.serialize()), 200

@api.route("/work/delete/<int:id>", methods=["DELETE"])

def delete_work(id):

    work = Work.query.filter_by(id=id).first()
    if work.worker_id is None:
        db.session.delete(work)
        db.session.commit()
    else:
        budgets= Budget.query.filter_by(work_id=work.id).all()
        for budget in budgets:
            db.session.delete(budget)
            db.session.commit()
        db.session.delete(work)
        db.session.commit()
    
    response_body = {
        "message": "Tarea eliminada"
    }
    return jsonify(response_body), 200

#--AddRating
#Manda la puntuación de la valoración al front, pasa como parámetros:
# el valor de la valoración
#el id del trabajador y un comentario
@api.route("/add_rating", methods=["POST"])
@jwt_required()
def addRating():
    current_user = get_jwt_identity()
    ratingNum = request.json.get("ratingNum", None)
    worker_id=request.json.get("worker_id",None)
    comment= request.json.get("comment",None)
    work_id= request.json.get("work_id",None)

    work=Work.query.filter_by(id=work_id).first()
    user=User_signup.query.filter_by(email=current_user).first()
    if (worker_id==work.worker_id): 
        ratings = Ratings(rating=ratingNum, user_signup_id=user.id, worker_id=worker_id, description=comment,work_id=work_id)
        # print(ratings)
        ratingExist= Ratings.query.filter_by(user_signup_id=user.id,work_id=work_id).first()
        if ratingExist == None :
            db.session.add(ratings)
            db.session.commit()
        
            response_body = {
                "message": "Valoración realizada con éxito",
                "rating":True
            }
            return jsonify(response_body),200
        else:
            response_body = {
                "message": "Ya habías valorado este trabajo con anterioridad"
            }
            return jsonify(response_body),404

    else:
        response_body = {
            "message": "No puedes valorar a este trabajador"
        }
    #comprobar el else, si no hay valoracion y si ya existe, condicionar en el front    
   
        return jsonify(response_body), 400

#Trae los ratings de un trabajador, usando worker_id como parámetro
@api.route("/worker/<int:id>/ratings", methods=["GET"])
def getRatings(id):
    ratings = Ratings.query.filter_by(worker_id=id).all()

    result= list(map(lambda rating: rating.serialize(),ratings))
    print(result)
    return jsonify(result), 200

@api.route("aceptbudget/<int:id>", methods=["PUT"])
@jwt_required()
def acept_budget(id):
    current_user = get_jwt_identity()
    budget = Budget.query.filter_by(id=id).first()
    budget.status=True
    db.session.commit()
    work = Work.query.filter_by(id=budget.work_id).first()
    user=User_signup.query.filter_by(id=budget.user_id).first()
    worker=Worker_signup.query.filter_by(id=budget.worker_id).first()
    budgets=Budget.query.filter_by(work_id=budget.work_id).all()
    for bud in budgets:
        if bud.id!=id:
            db.session.delete(bud)
            db.session.commit()
    subject="Hola "+worker.name+", su presupuesto ha sido aceptado."
    body="Hola, su presupuesto ha sido aceptado. Puede ponerse en contacto con "+user.name+" para concretar el trabajo."
    msg = Message(body=body,
                  sender="fixer4geeks@gmail.com",
                  recipients=[worker.email],
                  subject=subject)
    if work.worker_id is None:
        work.worker_id=budget.worker_id
        db.session.commit()
        current_app.mail.send(msg)
        response_body = {
           "message": "Presupuesto Aceptado"
        }

    else :
        response_body = {
           "message": "El presupuesto ya había sido aceptado, no se puede volver a aceptar"
        }
    return jsonify(response_body), 200


@api.route("rejectbudget/<int:id>", methods=["DELETE"])
@jwt_required()
def reject_budget(id):
    current_user = get_jwt_identity()
    budget = Budget.query.filter_by(id=id).first()
    user=User_signup.query.filter_by(id=budget.user_id).first()
    worker=Worker_signup.query.filter_by(id=budget.worker_id).first()
    subject="Hola "+worker.name+", su presupuesto ha sido rechazado."
    body="Hola, su presupuesto enviado a "+user.name+" ha sido rechazado. Desde Fixer le deseamos más suerte para la próxima vez."
    msg = Message(body=body,
                  sender="fixer4geeks@gmail.com",
                  recipients=[worker.email],
                  subject=subject)
    
    db.session.delete(budget)
    db.session.commit()
    current_app.mail.send(msg)
    response_body = {
        "message": "Presupuesto Rechazado"
    }


    return jsonify(response_body), 200

@api.route("/profile_user", methods=["PUT"])
@jwt_required()
def profileimage():
    current_user = get_jwt_identity()
    pictures = request.json.get("pictures", None)
    user_type = request.json.get("userType", None)
    if user_type == "user":
        user = User_signup.query.filter_by(email=current_user).first()
    else :
        user = Worker_signup.query.filter_by(email=current_user).first()
        
    user.pictures= pictures
            
    # user_signup= User_signup(pictures=pictures)
    
    db.session.commit()
    
    response_body = {
            "message": "foto Almacenada"
        }

    # Access the identity of the current user with get_jwt_identity
    

    return jsonify(response_body), 200


@api.route("/login_google", methods=["POST"])
def googlelogin():
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    photo = request.json.get("photo", None)
    print(name)

    missing = Login.query.filter_by(email=email).first()
    if missing is None:
        pw_hash = current_app.bcrypt.generate_password_hash("google").decode("utf-8")
        user = User_signup(name=name, lastname="auto",  email=email, password=pw_hash, pictures=photo)
        db.session.add(user)
        db.session.commit()

        id_user=User_signup.query.filter_by(email=email).first()
        login = Login(email=email, password=pw_hash,id_user=id_user.id)
        db.session.add(login)
        db.session.commit()
    


    access_token = create_access_token(identity=email, expires_delta=datetime.timedelta(minutes=60))
    return jsonify(access_token=access_token,tipo="usuario", email=email),200
#Ruta para la ubicación

@api.route('/map', methods=['GET'])
@jwt_required()
def map():
    
    current_user = get_jwt_identity()

    user = User_signup.query.filter_by(email=current_user).first()
    if user:
        adress = f"{user.adress} {user.city}"
    else:
        user = Worker_signup.query.filter_by(email=current_user).first()
        adress = f"{user.adress} {user.city}"

    geo = Nominatim(user_agent="MyApp")
    
    loc = geo.geocode(adress)
    print(adress)
    print(loc)
    latitud = (loc.latitude)
    longitud = (loc.longitude)
    print (latitud, longitud)
    
    iframe = f"https://maps.google.com/?q={latitud},{longitud}&z=14&t=m&output=embed"
    

    return jsonify({"url":iframe})

