from flask.cli import AppGroup
from .users import seed_users, undo_users
from .animes import seed_animes, undo_animes
from .vaults import seed_vaults, undo_vaults


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_animes()
    seed_users()
    seed_vaults()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_animes()
    undo_users()
    undo_vaults()
    # Add other undo functions here
