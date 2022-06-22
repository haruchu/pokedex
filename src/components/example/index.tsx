import React from "react";

type ExampleProps = {
  text: string;
};

export const Example = ({ text }: ExampleProps) => {
  return (
    <>{text}</>
  );
};
