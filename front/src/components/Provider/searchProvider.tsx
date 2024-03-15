"use client";
import { createContext, useState } from "react";

type Searchtype = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export const SearchContext = createContext<Searchtype>({} as Searchtype);

export const SearchProvider = ({ children }: any) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
