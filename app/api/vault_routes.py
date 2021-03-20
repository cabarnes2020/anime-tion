from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Vault, User, Anime
from app.forms import VaultForm
import requests

vault_routes = Blueprint('vaults', __name__)


@vault_routes.route('/new', methods=['POST'])
@login_required
def new_vault():
    user = User.query.get(current_user.id)
    form = VaultForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        vault = Vault(
            name=form.data['name'],
            user_id=current_user.id
        )
        db.session.add(vault)
        user.vaults.append(vault)
        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@vault_routes.route('/addAnime', methods=['PUT'])
# @login_required
def add_to_vault():
    user = User.query.get(current_user.id)
    data = request.get_json()
    print(data)
    anime = Anime.query.get(data['animeId'])
    vault = Vault.query.get(data['vaultId'])

    vault.anime_list.append(anime)
    db.session.commit()

    return user.to_dict()
