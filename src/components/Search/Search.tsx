import { useCallback, useState } from 'react';
import useSWR from 'swr';
import SearchInput from '../SearchInput';
import WordDisplay from '../WordDisplay';

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

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearchWord(inputWord);
    },
    [inputWord],
  );

  if (error) return <div>Error: {error.message}</div>;
  if (!data && searchWord) return <div>Loading...</div>;

  // use only the first result from the API
  const result = data ? data[0] : null;

  return (
    <>
      <SearchInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        handleSubmit={handleSubmit}
      />
      {result && <WordDisplay result={result} />}
    </>
  );
}

export default Search;
