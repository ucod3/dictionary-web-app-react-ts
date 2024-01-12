import { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import SearchInput from '../SearchInput';
import WordDisplay from '../WordDisplay';

const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function Search() {
  const [inputWord, setInputWord] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [result, setResult] = useState(null);

  const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('No Definitions Found');
    }

    const data = await response.json();
    return data[0];
  };

  const { data, error, isLoading } = useSWR(
    searchWord ? `${api}${searchWord}` : null,
    fetcher,
    // {
    //   onError: () => setWordNotFound(true),
    //   onSuccess: (apiData) => {
    //     console.log(apiData);
    //     console.log(error);
    //     setResult(apiData);
    //     setWordNotFound(!apiData || apiData.length === 0);
    //   },
    // },
  );

  useEffect(() => {
    if (data) {
      setResult(data);
      // setWordNotFound(false);
      // setWordNotFound(!data || data.length === 0);
    }
  }, [data]);

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

  return (
    <search className='text-primary-foreground'>
      <SearchInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        handleSubmit={handleSubmit}
      />
      {error ? (
        <article className='flex flex-col my-8 text-center  md:my-28 w-full max-w-[736px] mx-auto'>
          <h2 className='my-6 font-bold text-md md:text-lg text-primary-foreground'>
            No Definitions Found
          </h2>
          <p className='order-last text-base md:text-md text-secondary-foreground '>
            Sorry pal, we couldn&#39;t find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
          <p className='order-first text-2xl'>😕</p>
        </article>
      ) : (
        <WordDisplay result={result || null} setSearchWord={updateSearchWord} />
      )}
    </search>
  );
}

export default Search;
