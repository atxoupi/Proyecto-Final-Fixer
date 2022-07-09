"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Login
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt

api = Blueprint('api', __name__)


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = Login.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "Usuario no existe"}), 404
    # comprobacion=bcrypt.check_password_hash(user.password, password)
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad username or password"}), 401 
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token) 

@api.route("/worker_signup", methods=["POST"])
def wsignup():
    name = request.json.get("name", None)
    tlf = request.json.get("tlf_number", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    city = request.json.get("city", None)
    addres = request.json.get("adress", None)
    cp = request.json.get("postcode", None)
    cif = request.json.get("cif", None)
    pictures = request.json.get("pictures", None)
    
    user = Worker_signup(name=name, tlf_number=tlf, email=email, password=password, city=city, addres=addres, postcode = cp, cif=cif, pictures=pictures)
    db.session.add(user)
    db.session.commit()

    response_body = {
        "message": "Empresa Añadida"
    }

    return jsonify(response_body), 200