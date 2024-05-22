import { ItemsProvider } from "./context/ItemsContext";
import { SearchProvider } from "./context/SearchContext";
import './App.css'
import List from './list/List'

function App() {

  return (
    <div className="App">
      <SearchProvider>
        <ItemsProvider>
          <List />
        </ItemsProvider>
      </SearchProvider>
     
    </div>
  )
}

export default App
