import React, { createContext, useContext, useState } from 'react';

type SearchContextType = {
    searchString: string;
    setSearchString: (s: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchString, setSearchString] = useState("");

    return (
      <SearchContext.Provider value={{ searchString, setSearchString }}>
        {children}
      </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const ctx = useContext(SearchContext);
    if (!ctx) throw new Error("useSearch must be used within a SearchProvider");
    return ctx;
};
