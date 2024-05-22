import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import ListView from "./ListView";


function List(){
  const {items} = useContext(ItemsContext);

  return (
    <ListView items={items} />
  )
}

export default List;