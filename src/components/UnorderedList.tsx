const UnorderedList = () => {
  const array: string[] = ["Wheat - 1g", "Milk - 4l", "Flour - 3 pieces"];
  return (
    <div>
      <ul>
        {array.map((item) => (
          <li> {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnorderedList;
