import React from "react";
import { Flex } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Flex w="100vw" minH="100vh" align="center" justify="center">
      {children}
    </Flex>
  );
};

export default Container;
