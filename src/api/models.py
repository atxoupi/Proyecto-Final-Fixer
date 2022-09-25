from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from geopy.geocoders import Nominatim


db = SQLAlchemy()

# Full user data, from user signup
class User_signup(db.Model):
    __tablename__='user_signup'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    tlf_number = db.Column(db.Integer, unique=True, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=True)
    adress = db.Column(db.String(120), unique=False, nullable=True)
    postcode = db.Column(db.String(5), unique=False, nullable=True)
    pictures = db.Column(db.String(), unique=False, nullable=True)
    works = db.relationship('Work', backref='user_signup', lazy=True)
    ratings = db.relationship('Ratings', backref='user_signup', lazy=True)
    login = db.relationship('Login', backref='user_signup', lazy=True)
    budget = db.relationship('Budget', backref='user_signup', lazy=True)
                            
    def __repr__(self):
        return f'<User_signup {self.email}>' 
 
    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "lastname":self.lastname,
            "tlf_number":self.tlf_number,
            "email": self.email,
            "city":self.city,
            "adress":self.adress,
            "postcode":self.postcode,
            "pictures":self.pictures
        }

 # Full worker/business data, from worker signup 
class Worker_signup(db.Model):
    __tablename__='worker_signup'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    tlf_number = db.Column(db.Integer, unique=True, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=True)
    sector = db.Column(db.String(120), unique=False, nullable=True)
    adress = db.Column(db.String(120), unique=False, nullable=True)
    postcode = db.Column(db.String(5), unique=False, nullable=True)
    cif = db.Column(db.Integer, unique=True, nullable=True)
    pictures = db.Column(db.String(500), unique=False, nullable=True)
    description = db.Column(db.String(1000), unique=False, nullable=True)
    works = db.relationship('Work', backref='worker_signup', lazy=True)
    ratings = db.relationship('Ratings', backref='worker_signup', lazy=True)
    login = db.relationship('Login', backref='worker_signup', lazy=True)
    budget = db.relationship('Budget', backref='worker_signup', lazy=True)
    

    def __repr__(self):
        return f'<Worker_signup {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "tlf_number":self.tlf_number,
            "email": self.email,
            "city":self.city,
            "sector": self.sector,
            "adress":self.adress,
            "postcode":self.postcode,
            "cif":self.cif,
            "pictures":self.pictures,
            "description":self.description
        }

    def basic_info(self):
        worker_loc=None
        if self.adress and self.city:
            worker_geo = Nominatim(user_agent="MyApp")
            worker_adress=(self.adress)+ " " + (self.city)
            worker_loc=worker_geo.geocode(worker_adress)
        
        return {
            "id": self.id,
            "name":self.name,
            "tlf_number":self.tlf_number,
            "email": self.email,
            "sector": self.sector,
            "adress":self.adress,
            "city":self.city,
            "latitude":worker_loc.latitude if worker_loc is not None else None,
            "longitude":worker_loc.longitude if worker_loc is not None else None,
            "coordinates":{"lat":worker_loc.latitude,"lng":worker_loc.longitude} if worker_loc is not None else None
        }    

 # Login data  
class Login(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    id_user= db.Column(db.Integer,db.ForeignKey('user_signup.id'), nullable=True)
    worker_id = db.Column(db.Integer, db.ForeignKey('worker_signup.id'), nullable=True)

    def __repr__(self):
        return f'<Login {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "id_worker": self.worker_id,
            "id_user": self.id_user
        }

 # Posted works data
class Work(db.Model):
    __tablename__='work'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('user_signup.id'), nullable=False)
    worker_id = db.Column(db.Integer, db.ForeignKey('worker_signup.id'), nullable=True)
    location = db.Column(db.String(120), unique=False, nullable=True)
    sector = db.Column(db.String(120), unique=False, nullable=True)
    status = db.Column(db.Boolean, unique=False, nullable=True)
    cost = db.Column(db.Float, unique=False, nullable=True)
    duration = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(500), unique=False, nullable=False)
    pictures = db.Column(db.String(500), unique=False, nullable=True)
    title=db.Column(db.String(180), unique=False, nullable=True)
    budget = db.relationship('Budget', backref='work', lazy=True)
    rating = db.relationship('Ratings', backref='work', lazy=True)
    

    def __repr__(self):
        return f'<Work {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id":self.user_id,
            "worker_id":self.worker_id,
            "location": self.location,
            "sector": self.sector,
            "status":self.status,
            "cost":self.cost,
            "description":self.description,
            "title":self.title,
            "pictures":self.pictures   
        }

 # Ratings data
class Ratings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_signup_id = db.Column(db.Integer,db.ForeignKey('user_signup.id'), nullable=False)
    worker_id = db.Column(db.Integer, db.ForeignKey('worker_signup.id'), nullable=False)
    work_id = db.Column(db.Integer, db.ForeignKey('work.id'), nullable=True)
    rating = db.Column(db.Integer, unique=False, nullable=True)
    description = db.Column(db.String(500), unique=False, nullable=True)
    

    def __repr__(self):
        return f'<Ratings {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_signup_id":self.user_signup_id,
            "worker_id":self.worker_id,
            "work_id":self.work_id,
            "rating":self.rating,
            "description":self.description,
            "user":self.user_signup.serialize()
        }

class Budget(db.Model):
    __tablename__='budget'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('user_signup.id'), nullable=False)
    worker_id = db.Column(db.Integer, db.ForeignKey('worker_signup.id'), nullable=False)
    work_id = db.Column(db.Integer, db.ForeignKey('work.id'), nullable=False)
    url = db.Column(db.String(120), unique=False, nullable=False)
    duration = db.Column(db.String(120), nullable=False)
    price = db.Column(db.Float, unique=False, nullable=True)
    status= db.Column(db.Boolean, unique=False, nullable=True)
#  tener dos servicios uno de work(empresarios miran las ofertas ) y otro de budget(para personas q vean los presupuestos q le han enviado)
    def __repr__(self):
        return f'<Budget {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id":self.user_id,
            "worker_id":self.worker_id,
            "work_id":self.work_id,
            "url":self.url,
            "duration":self.duration,
            "price":self.price,
            "status":self.status,
            "work": self.work.serialize(),
            "worker": self.worker_signup.serialize()
        }

# class Ubications(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     date = db.Column(db.DateTime)
#     address = db.Column(db.String(500), unique=False, nullable=False)

#     latitude = db.Column(db.String(80), unique=False, nullable=True)
#     longitude = db.Column(db.String(80), unique=False, nullable=True)
#     aditional_info = db.Column(db.String(500), unique=False, nullable=True)
#     def __repr__(self):
#         return f'<Ubications {self.id}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "address": self.address,
#             "date": self.date,
#             "latitude": self.latitude,
#             "longitude": self.longitude,
#             "aditional_info": self.aditional_info
#         }