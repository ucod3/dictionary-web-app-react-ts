import { useCallback, useState } from 'react';
import useSWR from 'swr';
import SearchInput from '../SearchInput';
import WordDisplay from '../WordDisplay';

const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function Search() {
  const [inputWord, setInputWord] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [wordNotFound, setWordNotFound] = useState(false);
  const [result, setResult] = useState(null);

  const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('No Definitions Found');
    }

    const data = await response.json();
    return data[0];
  };

  const { data, error } = useSWR(
    searchWord ? `${api}${searchWord}` : null,
    fetcher,
    {
      onError: () => setWordNotFound(true),
      onSuccess: (apiData) => {
        setResult(apiData);
        setWordNotFound(false);
      },
    },
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

  if (!data && searchWord && !wordNotFound) return <div>Loading...</div>;

  return (
    <search className='text-primary-foreground'>
      <SearchInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        handleSubmit={handleSubmit}
      />
      {result && (
        <WordDisplay
          result={result || null}
          setSearchWord={updateSearchWord}
          wordNotFound={wordNotFound}
        />
      )}
    </search>
  );
}

export default Search;
