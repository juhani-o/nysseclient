import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import SearchBar from './components/SearchBar';
function App() {

  const [selected, setSelected] = React.useState();
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center justify-center h-screen py-2 bg-transparent">
          <div className="flex flex-col items-center justify-center h-full">
            {!selected && <SearchBar setSelected={setSelected}/>}
          </div>
        <div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App;
