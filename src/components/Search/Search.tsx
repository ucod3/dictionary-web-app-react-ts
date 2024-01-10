import { useCallback, useState } from 'react';
import useSWR from 'swr';
import SearchInput from '../SearchInput';
import WordDisplay from '../WordDisplay';

const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    return { error: true };
  }
  return res.json();
}

function Search() {
  const [inputWord, setInputWord] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [wordNotFound, setWordNotFound] = useState(false);

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

  const updateSearchWord = (word: string) => {
    setInputWord(word); // update the input field with the new word
    setSearchWord(word); // perform the search with the new word
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!data && searchWord) return <div>Loading...</div>;

  // use only the first result from the API
  const result = data ? data[0] : null;

  return (
    <search className='text-primary-foreground'>
      <SearchInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        handleSubmit={handleSubmit}
      />
      {result && (
        <WordDisplay
          result={result}
          setSearchWord={updateSearchWord}
          wordNotFound={wordNotFound}
        />
      )}
    </search>
  );
}

export default Search;
