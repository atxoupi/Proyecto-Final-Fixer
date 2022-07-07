from flask_sqlalchemy import SQLAlchemy
from flask import Flask


db = SQLAlchemy()

# tabla de ejemplo. No la necesitamos
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
# Full user data, from user signup
class User_signup(db.Model):
    __tablename__='user_signup'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    tlf_number = db.Column(db.Integer, unique=True, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(15), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=True)
    adress = db.Column(db.String(120), unique=False, nullable=True)
    postcode = db.Column(db.Integer, unique=False, nullable=True)
    pictures = db.Column(db.String(500), unique=False, nullable=True)
    works = db.relationship('Work', backref='user_signup', lazy=True)
    ratings = db.relationship('Ratings', backref='user_signup', lazy=True)

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
            "adress":self.address,
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
    # cuando decimos unico, pero puede coincidir con el dato de otra tabla, no?
    password = db.Column(db.String(15), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=True)
    adress = db.Column(db.String(120), unique=False, nullable=True)
    # añado address por si más adelante consideramos ponerlo, sino lo quitamos
    postcode = db.Column(db.Integer, unique=False, nullable=True)
    cif = db.Column(db.Integer, unique=True, nullable=True)
    pictures = db.Column(db.String(500), unique=False, nullable=True)
    works = db.relationship('Work', backref='worker_signup', lazy=True)
    ratings = db.relationship('Ratings', backref='worker_signup', lazy=True)

    def __repr__(self):
        return f'<Worker_signup {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "tlf_number":self.tlf_number,
            "email": self.email,
            "city":self.city,
            "adress":self.address,
            "postcode":self.postcode,
            "cif":self.cif,
            "pictures":self.pictures
        }

 # Login data 
class Login(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(15), unique=False, nullable=False)
   
    def __repr__(self):
        return f'<Login {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email
        }

 # Posted works data
class Work(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('user_signup.id'), nullable=False)
    worker_id = db.Column(db.Integer, db.ForeignKey('worker_signup.id'), nullable=False)
    location = db.Column(db.String(15), unique=False, nullable=True)
    status = db.Column(db.String(120), unique=False, nullable=True)
    # el estado no acabo de entender que significa
    cost = db.Column(db.Integer, unique=False, nullable=True)
    # no sé que quiere decir lo de double en el money
    term = db.Column(db.String(120), unique=False, nullable=True)
    # el plazo lo pongo en string xq pueden poner "2 días"
    description = db.Column(db.String(500), unique=False, nullable=False)
    pictures = db.Column(db.String(500), unique=False, nullable=True)

    def __repr__(self):
        return f'<Work {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id":self.user_id,
            "worker_id":self.worker_id,
            "location": self.location,
            "status":self.status,
            "cost":self.cost,
            "term":self.term,
            "description":self.description,
            "pictures":self.pictures
        }

 # Ratings data
class Ratings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('user_signup.id'), nullable=False)
    worker_id = db.Column(db.Integer, db.ForeignKey('worker_signup.id'), nullable=False)
    rating = db.Column(db.Integer, unique=False, nullable=True)
    description = db.Column(db.String(500), unique=False, nullable=False)

    def __repr__(self):
        return f'<Ratings {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id":self.user_id,
            "worker_id":self.worker_id,
            "rating":self.rating,
            "description":self.description,
        }

