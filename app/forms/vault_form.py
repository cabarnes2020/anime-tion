from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Vault


class VaultForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
