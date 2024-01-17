import { useCallback, useEffect, useState } from 'react';
import SearchInput from '../SearchInput';
import WordDisplay from '../WordDisplay';
import NotFound from '../NotFound';
import useSearchWord from '../../hooks/useSearchWord';
import LoadingSpinner from '../LoadingSpinner';

function Search() {
  const [inputWord, setInputWord] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [result, setResult] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wordNotFound, setWordNotFound] = useState(false);
  const [delayPassed, setDelayPassed] = useState(false);

  const { data, isLoading } = useSearchWord({ searchWord, setWordNotFound });

  useEffect(() => {
    if (data) {
      setResult(data);
    } else {
      setResult(null);
    }
  }, [data]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayPassed(true);
    }, 1000); // 1000ms delay

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const value = inputWord.trim();
      if (value !== '') {
        setSearchWord(inputWord);
      }
    },
    [inputWord],
  );

  const updateSearchWord = (word: string) => {
    setInputWord(word); // update the input field with the new word
    if (word.trim() !== '') {
      setSearchWord(word); // perform the search with the new word
    }
  };

  let content = null;

  if (isLoading && delayPassed) {
    content = <LoadingSpinner />;
  }

  if (wordNotFound && !isLoading) {
    content = <NotFound wordNotFound={wordNotFound} />;
  }

  if (result && !isLoading) {
    content = (
      <WordDisplay result={result || null} setSearchWord={updateSearchWord} />
    );
  }

  return (
    <search className='text-primary-foreground'>
      <SearchInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        handleSubmit={handleSubmit}
        setResult={setResult}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        setWordNotFound={setWordNotFound}
      />
      {content}
    </search>
  );
}

export default Search;
