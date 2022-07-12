"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, Login, Worker_signup, User_signup
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt

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
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token) 

#--SignUp
#Recibe datos de Usuario o de Worker y los inserta en la BD
@api.route("/worker_signup", methods=["POST"])
def wsignup():
    name = request.json.get("name", None)
    tlf = request.json.get("tlf_number", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    city = request.json.get("city", None)
    adress = request.json.get("adress", None)
    cp = request.json.get("postcode", None)
    cif = request.json.get("cif", None)
    pictures = request.json.get("pictures", None)

    pw_hash = current_app.bcrypt.generate_password_hash(password).decode("utf-8")
    user = Worker_signup(name=name, tlf_number=tlf, email=email, password=pw_hash, city=city, adress=adress, postcode = cp, cif=cif, pictures=pictures)
    db.session.add(user)
    db.session.commit()
    
    login = Login(email=email, password=pw_hash)
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
    tlf = request.json.get("tlf_number", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    city = request.json.get("city", None)
    adress = request.json.get("adress", None)
    cp = request.json.get("postcode", None)
    pictures = request.json.get("pictures", None)

    pw_hash = bcrypt.generate_password_hash(password).decode("utf-8")
    
    user = User_signup(name=name, lastname=lastname, tlf_number=tlf, email=email, password=pw_hash, city=city, adress=adress, postcode = cp, pictures=pictures)
    db.session.add(user)
    db.session.commit()

    login = Login(email=email, password=pw_hash)
    db.session.add(login)
    db.session.commit()
    response_body = {
        "message": "Usuario Añadido"
    }

    return jsonify(response_body), 200