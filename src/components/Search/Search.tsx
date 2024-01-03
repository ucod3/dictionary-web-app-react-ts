import { useState } from 'react';
import useSWR from 'swr';
import SearchInput from '../SearchInput';

const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error('Error fetching data');
  }
  return res.json();
}

function Search() {
  const [inputWord, setInputWord] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const { data, error } = useSWR(
    searchWord ? () => `${api}${searchWord}` : null,
    fetcher,
  );

  if (error) return <div>Error: {error.message}</div>;
  if (!data && searchWord) return <div>Loading...</div>;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchWord(inputWord);
    console.log(data[0].meanings[0].definitions[0].definition);
  }

  return (
    <SearchInput setInputWord={setInputWord} handleSubmit={handleSubmit} />
  );
}

export default Search;
