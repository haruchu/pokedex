import React, { useState } from "react";
import { Search } from "./index";

export default {
  title: "Parts/Search",
  component: Search,
};

export const Basic = () => {
  const [search, setSearch] = useState("");
  const SearchFunc = (search: string) => {
    setSearch(search);
    console.log(search);
  };

  return <Search searchFunc={(search: string) => SearchFunc(search)} />;
};
