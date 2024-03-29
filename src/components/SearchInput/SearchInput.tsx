import React, { useId, useCallback } from 'react';
import { ErrorMessage, Field } from '../fieldset';
import Input from '../input';

type SearchInputProps = {
  inputWord: string;
  setInputWord: (search: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setResult: (result: null) => void;
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
  setWordNotFound: (wordNotFound: boolean) => void;
};

function SearchInput({
  inputWord,
  setInputWord,
  handleSubmit,
  setResult,
  isSubmitted,
  setIsSubmitted,
  setWordNotFound,
}: SearchInputProps) {
  const Id = useId();
  const isErrored = !inputWord && isSubmitted;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInputWord(value);
    },
    [setInputWord],
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputWord.trim()) {
      setResult(null);
      setIsSubmitted(true);
      setWordNotFound(false);
    } else {
      setIsSubmitted(false);
    }
    handleSubmit(e);
  };

  return (
    <form
      className='relative flex items-center justify-between py-6 md:py-12'
      onSubmit={handleFormSubmit}
    >
      <Field className='w-full'>
        <label htmlFor={`search-input-${Id}`} className='sr-only'>
          Search
        </label>
        <Input
          aria-label='Search'
          id={`search-input-${Id}`}
          type='type'
          name='search'
          value={inputWord}
          onChange={handleChange}
          onBlur={() => {
            if (!inputWord.trim()) {
              setIsSubmitted(false);
            }
          }}
          placeholder='Search for any word…'
          invalid={isErrored}
          autoComplete='off'
          autoFocus
        />
        {isErrored && (
          <ErrorMessage>Whoops, can&apos;t be empty...</ErrorMessage>
        )}
      </Field>

      <div
        className={`absolute flex w-6 h-6  text-primary-accent right-6 ${
          isErrored ? 'top-[38px] md:top-[68px]' : ''
        }`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>
      </div>
    </form>
  );
}

export default SearchInput;
