import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <ChakraButton onClick={onClick}>{text}</ChakraButton>;
};

export default Button;
