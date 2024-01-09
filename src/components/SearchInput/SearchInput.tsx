import React, { useId, useCallback, useState } from 'react';
// import { ErrorMessage, Field } from '../fieldset';
import Input from '../input';

type SearchInputProps = {
  inputWord: string;
  setInputWord: (search: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function SearchInput({
  inputWord,
  setInputWord,
  handleSubmit,
}: SearchInputProps) {
  const Id = useId();
  const [isError, setIsError] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputWord(e.target.value);
      if (isError) {
        setIsError(false);
      }
    },
    [setInputWord, isError],
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputWord.trim()) {
      setIsError(true);
      return;
    }
    handleSubmit(e);
    // setIsError(false);
  };

  return (
    <form
      className='relative flex items-center justify-between py-6 md:py-12'
      onSubmit={handleFormSubmit}
    >
      {/* <Field> */}
      <label htmlFor={`search-input-${Id}`} className='sr-only'>
        Search
      </label>
      <Input
        aria-label='Search'
        id={`search-input-${Id}`}
        type='text'
        name='search'
        value={inputWord}
        onChange={handleChange}
        placeholder='Search for any word…'
        invalid={isError}
      />
      {isError && (
        <div className='text-error' id={`search-input-${Id}-error`}>
          Whoops, can&apos;t be empty...
        </div>
      )}
      {/* </Field> */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='absolute right-0 w-6 h-6 mr-6 pointer-events-none text-primary-accent'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
        />
      </svg>
    </form>
  );
}

export default SearchInput;
