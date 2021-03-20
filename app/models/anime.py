from .db import db
from datetime import datetime
from .vaultanime import vault_anime

class Anime(db.Model):
    __tablename__ = 'animes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(60), nullable=False, unique=True)
    image = db.Column(db.String(500), nullable=False)
    release_date = db.Column(db.String(40), nullable=False)
    trailer_url = db.Column(db.String(500), nullable=False)
    description = db.Column(db.Text, nullable=False)
    # vault_id = db.Column(db.Integer, db.ForeignKey('vaults.id'))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    vault = db.relationship('Vault', secondary=vault_anime, back_populates='anime_list')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "release_date": self.release_date,
            "image": self.image,
            "trailer": self.trailer_url,
            "description": self.description
        }
