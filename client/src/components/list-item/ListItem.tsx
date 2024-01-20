import React from "react";
import axios from "axios";

import { Button } from "../button";
import { Flex, Text, Heading } from "@chakra-ui/react";

interface ListItemProps {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  onDelete?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  title,
  description,
  timestamp,
  onDelete,
}) => {
  const deleteItem = () => {
    axios.delete(`http://localhost:8000/items/${id}`).then(onDelete);
  };

  return (
    <Flex py={3} px={6} borderRadius="lg" border="1px solid red">
      <Flex flex={7} direction="column" pr={3}>
        <Heading as="h3" size="lg" mb={1}>
          {title}
        </Heading>
        <Text mb={3} color="gray">
          Created at: {timestamp}
        </Text>
        <Text>{description}</Text>
      </Flex>
      <Flex flex={1} pl={3}>
        <Button text="delete" onClick={deleteItem} />
      </Flex>
    </Flex>
  );
};

export default ListItem;
