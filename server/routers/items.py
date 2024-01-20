from typing import List
from fastapi import APIRouter
from sqlmodel import Session, select
from database.database import engine
from models.models import ListItem

router = APIRouter()


@router.get("/items", response_model=List[ListItem])
def get_items():
    with Session(engine) as session:
        return session.exec(select(ListItem)).all()


@router.get("/items/{item_id}", response_model=ListItem)
def get_item(item_id: int):
    with Session(engine) as session:
        item = session.get(ListItem, item_id)
        return item


@router.post("/items", response_model=ListItem)
def add_item(item: ListItem):
    with Session(engine) as session:
        session.add(item)
        session.commit()
        session.refresh(item)
        return item


@router.delete("/items/{item_id}", response_model=ListItem)
def delete_item(item_id: int):
    with Session(engine) as session:
        item = session.get(ListItem, item_id)
        session.delete(item)
        session.commit()
        return item
