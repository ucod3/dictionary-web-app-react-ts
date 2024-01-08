import { useId } from 'react';

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputWord(e.target.value);
  }

  return (
    <form
      className='relative flex items-center justify-between '
      onSubmit={handleSubmit}
    >
      <label htmlFor={`search-input-${Id}`} className='sr-only'>
        Search
      </label>
      <input
        id={`search-input-${Id}`}
        type='text'
        name='search'
        value={inputWord}
        onChange={handleChange}
        placeholder='Search for any word…'
        className='relative block w-full py-4 pl-6 font-bold border-0 shadow-sm rounded-2xl text-body-m bg-secondary text-primary-foreground ring-1 ring-inset ring-secondary placeholder:text-primary-foreground placeholder:opacity-25 focus:ring-2 focus:ring-inset focus:ring-primary-accent '
      />

      {/* <img
        src='icon-search.svg'
        alt='Search'
        className='absolute right-0 pr-3 pointer-events-none inset-y-4 '
      /> */}
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
