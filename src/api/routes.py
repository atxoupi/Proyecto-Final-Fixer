"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Login
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

api = Blueprint('api', __name__)


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = Login.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "Usuario no existe"}), 404
    comprobacion=bcrypt.check_password_hash(user.password, password)
    if email != user.email or comprobacion==False:
        return jsonify({"msg": "Bad username or password"}), 401 
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token) 
    