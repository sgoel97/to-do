import { useState, useEffect } from "react";
import axios from "axios";
import { ListItem as ListItemType } from "./types/apiTypes";

import { Container, Column } from "./components/layout";
import { ListItem } from "./components/list-item";
import { Button } from "./components/button";
import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const App = () => {
  const [items, setItems] = useState<ListItemType[]>([]);
  const [itemName, setItemName] = useState<string>("");
  const [itemDescription, setItemDescription] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);

  const fetchItems = () => {
    axios.get("http://localhost:8000/items").then((res) => setItems(res.data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = () => {
    if (!itemName) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!itemDescription) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }

    if (itemName && itemDescription) {
      axios
        .post("http://localhost:8000/items", {
          title: itemName,
          description: itemDescription,
          timestamp: "Tuesday",
        })
        .then((res) => {
          if (res.status == 200) {
            setItems([...items, res.data]);
            setItemName("");
            setItemDescription("");
            setNameError(false);
          } else {
            console.log("error");
          }
        });
    }
  };

  return (
    <Container>
      <Column width="50%">
        <Heading as="h1" size="2xl">
          To-Do List
        </Heading>
        <VStack spacing={4} mt={items.length !== 0 ? 4 : 0}>
          {items.map((item, index) => (
            <ListItem
              id={item.id}
              title={item.title}
              description={item.description}
              timestamp={item.timestamp}
              onDelete={fetchItems}
              key={index}
            />
          ))}
        </VStack>
      </Column>
      <Column width="50%">
        <form>
          <FormControl mb={4} isInvalid={nameError}>
            <FormLabel>Item Name</FormLabel>
            <Input
              type="text"
              placeholder="item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <FormErrorMessage>Enter a name</FormErrorMessage>
          </FormControl>

          <FormControl mb={4} isInvalid={descriptionError}>
            <FormLabel>Item Description</FormLabel>
            <Input
              type="text"
              placeholder="item description"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
            <FormErrorMessage>Enter a description</FormErrorMessage>
          </FormControl>
        </form>
        <Button text="add item" onClick={addItem} />
      </Column>
    </Container>
  );
};

export default App;
