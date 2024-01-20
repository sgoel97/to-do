import React from "react";
import { Flex } from "@chakra-ui/react";

interface ColumnProps {
  width: string;
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ width, children }) => {
  return (
    <Flex
      w={width}
      minH="100vh"
      direction="column"
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  );
};

export default Column;
