import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import * as api from '../api/nysseApi';

const SearchBar = ({setSelected}) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [filtered, setFiltered] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const apiresult = data?.body;
    if (search.length > 1 && apiresult.length > 0) {
      const filteredData = apiresult.filter((item) => {
        return (item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()));
      });
      setFiltered(filteredData);
    } else {
      setFiltered([]);
    }
  }, [search, data, setSelected]);

  // TODO: Add error handling
  const { isLoading, error } = useQuery('linesData', api.getLines, {onSuccess: setData});
  console.log('filtered', filtered);
  return (
    <>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input
        type="text"
        value={search}
        className="outline-none shadow-lg block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange}
        placeholder="Kirjoita linja tai pysäkki"
      />
    </div>
    <div className="shadow-xl inset-y-0 left-0 flex flex-col items-start rounded-lg">
      {filtered.map((item) => ( <li>{item.description}</li> ))}
    </div>
    </>
  );
}

export default SearchBar;