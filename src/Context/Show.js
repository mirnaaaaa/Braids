import React, { createContext, useState } from "react";

export const Show = createContext(null);

export const ShowProvider = ({ children }) => {
  const [select, setSelect] = useState(false);
  const [book, setBook] = useState("");
  const [choose, setChoose] = useState("");

  const value = {
    select,
    setSelect,
    book,
    setBook,
    setChoose,
    choose
  };

  return <Show.Provider value={value}>{children}</Show.Provider>;
};
