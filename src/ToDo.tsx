import React, { FC } from "react";

interface ToDoProps {
  text: string;
}


const ToDo: FC<ToDoProps> = ({ text }) => {
  return <li>{text}</li>;
};

export default ToDo;