export type Ingredient = {
  name: string;
  amount: string;
};
type UnorderedListProps = {
  list: Ingredient[];
};

const UnorderedList = (props: UnorderedListProps) => {
  return (
    <div>
      <ul>
        {props.list.map((ingredient) => (
          <li>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnorderedList;
