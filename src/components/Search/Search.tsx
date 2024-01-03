import { useState } from 'react';
import SearchInput from '../SearchInput';

function Search() {
  const [search, setSearch] = useState('');
  return <SearchInput setSearch={setSearch} />;
}

export default Search;
