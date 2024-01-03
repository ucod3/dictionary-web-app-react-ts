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
    <form className='flex items-center mt-2' onSubmit={handleSubmit}>
      <label htmlFor={`search-input-${Id}`} className='sr-only'>
        Search
      </label>
      <input
        id={`search-input-${Id}`}
        type='text'
        name='search'
        value={inputWord}
        onChange={handleChange}
        placeholder='Search'
        className='block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />

      <img
        src='icon-search.svg'
        alt='Search'
        className='inset-y-0 right-0 flex items-center pr-3 pointer-events-none'
      />
    </form>
  );
}

export default SearchInput;
