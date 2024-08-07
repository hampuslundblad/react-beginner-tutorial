import Title from "../components/Title";
import UnorderedList, { Ingredient } from "../components/UnorderedList";

function Lists() {
  const ingredients: Ingredient[] = [
    {
      name: "milk",
      amount: "ll",
    },
  ];
  return (
    <div>
      <Title text="Hello Lists" />
      <UnorderedList list={ingredients} />
    </div>
  );
}
export default Lists;
