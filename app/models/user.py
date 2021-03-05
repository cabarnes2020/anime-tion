from .db import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_pic = db.Column(db.String(500), nullable=True)
    fav_anime_id = db.Column(db.Integer, db.ForeignKey('animes.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())


    @property
    def password(self):
        return self.hashed_password


    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)


    def check_password(self, password):
        return check_password_hash(self.password, password)


    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email,
          "fav_anime_id": self.fav_anime_id,
          "profile_pic": self.profile_pic
        }
