import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Select from 'react-select';
import * as api from '../api/nysseApi';

const SearchBar = ({ setSelected }) => {

  // TODO: Add error handling
  const { isLoading, error, data } = useQuery('linesData', api.getLines);
  const options = data?.body.map((item) => ({ value: item.name, label: `${item.name} - ${item.description}` }));

  return (
    <div className="w-full">
      <Select options={options} onChange={(e) => setSelected(e.value)} />
    </div>
  );
}

export default SearchBar;