import React, { FC } from "react";

interface Props {
  text: string;
}

const ToDo: FC<Props> = ({ text }) => {
  return <li>{text}</li>;
};

export default ToDo;