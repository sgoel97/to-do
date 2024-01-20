from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session

from models.models import ListItem
from database.database import create_db_and_tables

from routers import items

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(items.router)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


@app.get("/")
def get_index():
    return {"hello": "world"}
