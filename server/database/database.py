from sqlmodel import SQLModel, create_engine

db_file_name = "./database/database.db"
db_url = f"sqlite:///{db_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(db_url, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
