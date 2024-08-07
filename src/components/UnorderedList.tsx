type Ingredient = {
  name: string;
  amount: string;
};

const UnorderedList = () => {
  const array: string[] = ["Wheat - 1g", "Milk - 4l", "Flour - 3 pieces"];
  const ingredient: Ingredient = {
    name: "milk",
    amount: "4l",
  };
  const ingredients: Ingredient[] = [
    {
      name: "milk",
      amount: "4l",
    },
    { name: "wheat", amount: "3g" },
  ];

  return (
    <div>
      <ul>
        {ingredient.amount}
        {ingredient.name}
        {array.map((item) => (
          <li> {item}</li>
        ))}

        {ingredients.map((ingredient) => (
          <li>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnorderedList;
