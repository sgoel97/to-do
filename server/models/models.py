from typing import Optional
from sqlmodel import SQLModel, Field


class ListItem(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str
    timestamp: int
