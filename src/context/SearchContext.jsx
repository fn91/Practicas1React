import { createContext,useState } from "react";

export const SearchContext =createContext({});

// eslint-disable-next-line react/prop-types
export function SearchProvider ({children}){

const [search,setSearch]=useState ("");

return(

<SearchContext.Provider value = {{search,setSearch}}>

{children}

</SearchContext.Provider>


)




}