"""empty message

Revision ID: b82ea975b25a
Revises: c2dac9dc2d4f
Create Date: 2021-03-19 16:02:28.245727

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b82ea975b25a'
down_revision = 'c2dac9dc2d4f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('animes_vault_id_fkey', 'animes', type_='foreignkey')
    op.drop_column('animes', 'vault_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('animes', sa.Column('vault_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('animes_vault_id_fkey', 'animes', 'vaults', ['vault_id'], ['id'])
    # ### end Alembic commands ###