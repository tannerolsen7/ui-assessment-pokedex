import { useState } from 'react';

export const useSearch = () => {
  const [searchString, setSearchString] = useState('');

  return {
    searchString,
    setSearchString
  };
};
