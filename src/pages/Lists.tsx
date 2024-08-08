import { useState } from "react";
import Title from "../components/Title";
import UnorderedList, { Ingredient } from "../components/UnorderedList";

function Lists() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
 
  function handleClick() {
    setIngredients((previousValue => [...previousValue, {name:"wheat", amount:"ll"}]))
    console.log(ingredients);
  }
  return (
    <div>
      <Title text="Hello Lists" />
      <UnorderedList list={ingredients} />
      <button onClick={handleClick}>Add item to list</button>
    </div>
  );
}
export default Lists;
