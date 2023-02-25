import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import SearchBar from './components/SearchBar';
function App() {

  const [selected, setSelected] = React.useState([]);
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center justify-center h-screen py-2 bg-transparent">
        <div className="w-7/12 h-4/5">
          <div className="flex flex-col items-center justify-center h-full">
            <SearchBar setSelected={setSelected}/>
          </div>
          <div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App;
