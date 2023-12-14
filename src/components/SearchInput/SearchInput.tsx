import { useId, useState } from 'react';

function SearchInput() {
  const id = useId();
  const [search, setSearch] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <div className='relative flex items-center mt-2'>
      <input
        type='text'
        name='search'
        id={`search-${id}`}
        value={search}
        onChange={handleChange}
        placeholder='Search'
        className='block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
      <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
        <img src='icon-search.svg' alt='Search' />
      </div>
    </div>
  );
}

export default SearchInput;
