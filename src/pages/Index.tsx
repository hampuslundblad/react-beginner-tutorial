import Title from "../components/Title";

function handleClick() {
  console.log("The button has been clicked");
}

function Index() {
  return (
    <div>
      <Title text="Hello index" />
      <button onClick={handleClick}> Log to the console </button>
    </div>
  );
}
export default Index;
