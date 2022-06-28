import React, { useRef, useState } from "react";
import { Input, ShowButton } from "./story";
import { AiOutlineSearch } from "react-icons/ai";

type SearchProps = {
  searchFunc: (search: string) => void;
};

export const Search = ({ searchFunc }: SearchProps) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const InputRef = useRef<HTMLInputElement>(null!);
  const [isOpen, setIsOpen] = useState(false);

  const showSearch = () => {
    setIsOpen(!isOpen);
    InputRef.current.focus();
  };

  return (
    <>
      <Input
        type="text"
        ref={InputRef}
        onChange={() => searchFunc(InputRef.current.value)}
        isOpen={isOpen}
        placeholder={"例: ピカチュウ"}
      />
      <ShowButton onClick={() => showSearch()}>
        <AiOutlineSearch />
      </ShowButton>
    </>
  );
};
