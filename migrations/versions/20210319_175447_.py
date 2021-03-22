"""empty message

Revision ID: 506cf7dc7ccd
Revises: b82ea975b25a
Create Date: 2021-03-19 17:54:47.159800

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '506cf7dc7ccd'
down_revision = 'b82ea975b25a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('vault_animes')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('vault_animes',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('anime_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('vault_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['anime_id'], ['animes.id'], name='vault_animes_anime_id_fkey'),
    sa.ForeignKeyConstraint(['vault_id'], ['vaults.id'], name='vault_animes_vault_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='vault_animes_pkey')
    )
    # ### end Alembic commands ###
