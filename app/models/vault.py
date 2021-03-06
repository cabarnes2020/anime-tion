from .db import db
from .user import User
from datetime import datetime
from .vaultanime import vault_anime


class Vault(db.Model):
    __tablename__ = 'vaults'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship('User', back_populates='vaults')
    anime_list = db.relationship('Anime', secondary=vault_anime, back_populates='vault')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
            "anime": [anime.to_dict() for anime in self.anime_list]
        }
