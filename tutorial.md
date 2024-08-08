# 0 Tips

This file is called a markdown file, basically a glorified text file. If you open it "raw" it will look like any other text file, however if you use VS Code you can press Ctrl + Shift + P and search markdown: open preview and press enter, it should open the markdown file in a new window where it looks prettier :)

If you get stuck or need some reminders, check out the [Cheat sheet](#cheat-sheet) section.

# 1. Getting started

Start by creating a new Vite project. To do this, run `npm create vite@latest`. When prompted to choose a project name, type "." (a dot) and select "Ignore files and continue." Then choose `React` and `Typescript + SWC`. Follow the instructions provided.

1. Remove the boilerplate code, including `index.css`, `App.css`, and everything inside the return statement in `App.tsx`. Be sure to leave an empty div or fragment so the app can render something.

2. Run `npm run dev` if you haven't done so already, and ensure it starts without any errors. The page is expected to be entirely blank.

<br/>
<details>
  <summary>Notes</summary>
  <hr/>
   Vite is only one of many tools that's used for creating React applications, essentially some of it's responsibilites are
   - Creating a dev server so that you can view your application (localhost:XXXX)
   - Bundling your code to pure javascript so that the browser can understand it.
</details>

# 2. Our first component.

Since this is a tutorial, we'll start by creating some basic components. Our first will be a navigation bar.

1. Create a folder named `components` in the source directory.

2. Create a navigation component. This can look however you like! Check out W3Schools for examples if you'd like. At the moment, it doesn't matter exactly what it routes to; we'll fix that in the future. If you want to add styling to it you can do so by adding the css to `index.css`, remember to import the css file in `main.tsx`. Also React is slighty different in the way that you add class names to elements. Instead of using the `class` attribute you use `className`.

3. Add the component to `App.tsx`, and make sure it shows up. Congratulations, you've created your first component!

<details>
<summary> Hints </summary>
1. Create a filed called `Navigation.tsx` for example in the components folder, it can also be called `Menu.tsx`, the exact name isn't the important part, as long as you and other people can understand it.

2- Add the code for the navigation component

```js
function Navigation() {
  return (
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  );
  export default Navigation;
}
```

Add some extra styling if you want to!

</details>

# 3 Routing

This part is a bit complicated, but it's necessary to enable navigation. Push through it, and it will get easier!

Routing in React is not as straightforward as when you're only using HTML. However, with the help of libraries and some basic boilerplate code, we can make it work quite easily.

1. First, modify your navigation bar so that it contains three items: "Home," "Lists," and "News." When clicking on each of them, the URL should change to:

   - localhost:5173/news when you click on News
   - localhost:5173/lists when you click on Lists
   - localhost:5173 when you click on Home

2. To show different pages, we'll use the TanStack Router library. The quick start guide can be found [here](https://tanstack.com/router/latest/docs/framework/react/quick-start), but we'll make some slight modifications.

3. Follow the "Install the Vite Plugin and the Router Devtools" section in the quick start guide. You will also need to add `@vitejs/plugin-react-swc` by running `npm i -D @vitejs/plugin-react-swc`.

4. Follow the "Configure the Vite Plugin" section in the quick start guide. The file you're modifying is called `vite.config.ts`. Do not create the files specified in the tutorial yet; instead, go to the next step in this tutorial.

At the end, your `vite.config.ts` should look like this:

```js
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact()],
});
```

5. Create src/routes/\_\_root.tsx, add the following code to it, it's expected for you to not understand exactly what it does at this momement and that's okay!

**src/routes/\_\_root.tsx**

```js
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../index.css";

export const Route = createRootRoute({
  component: () => (
    <>
      {/**  Add your navigation bar here */}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
```

In this file also add your navigation bar, check out your page and make sure it renders!
For tanstack/router to properly work you'll need to update the `main.tsx` file. Simply copy and paste the code from [here](https://tanstack.com/router/latest/docs/framework/react/quick-start#srcmaintsx) to your `main.tsx` file.

At this moment a "Not found" will be shown, that's because we haven't told tanstack/router what to show here, but that comes next.

6. Add `src/routes/index.tsx`. You'll notice that code will be added as soon that you create the file, that's because tanstack/router creates some of the necessary code for us, automatically!
   Now you should see "Hello /!" on your page, if it doesn't make sure that the url is `http://localhost:5173/`

- note, vite will use port 5173 as default, if that port is already taken then it will use 5174 instead

7. Next up create `routes/lists.tsx` and `routes/news.tsx` Currently the menu won't properly navigate to these pages, but we'll fix that soon.

8. The navigation in tanstack/router works a bit differently than regular html, we cannot use `<a>` tags but instead will have to use the built-in <Link> which tanstack/router provides for us, and it works very similary. Now replace any code that might look like this `<a href="/">Home</a>` to `<Link to="/">Home</Link>`. If the automatic import doesn't work (VS Code will complain that Link doesn't exist), add this to your Navigation component `import { Link } from "@tanstack/react-router";
`

<details>
<summary> Extra information on Root.tsx</summary>
If you looked at the previous notes I explained briefly on how file-based routing works. Well then you might be confused on what route _root.tsx is shown, basically the root is present on all pages! That's the reason why we add the Menu here, since we want to show it on all of our pages. 
</details>
</br>
9. Now your navigation should work! When you click the menu the you should be greeted with "Hello /lists" if you're on the lists page, "Hello /news" if you're on the news page and so on.

10. Lastly, in order to split up our code a bit, create a new folder called pages in the source directory. This folder will contain the code for our pages. Create three components

- Index
- Lists
- News

A example of the index component is

```js
function Index() {
  return <div>Hello index!</div>;
}
export default Index;
```

Then change the code in /routes/index.tsx to

```js
import { createFileRoute } from "@tanstack/react-router";
import Index from "../pages/Index";

export const Route = createFileRoute("/")({
  component: Index,
});
```

Do the same for Lists and News.
Now check again that the navigation works. If you click on "News" then you should be shown whatever is present in your News.tsx file. and we're done with the hard pard! Good job!

<details>
  <summary>Notes</summary>
  What we're using here (and will be using) is called file-based routing. It means that the the folder structure in our project reflects the way our application's routes are setup. For example
  if we go to "/about" then tanstack/router will look for a file named "About.tsx" in our routes folder. If we want further nesting such as "/about/me" then you would use dot notation to expand the url. For this scenario it would look like this `about.me.tsx`.  One of the caveats is the starting route (/), for which you have to name the route `index.tsx`.
</details>

# 4 Gettings some reps in.

Now we'll get to work. Creating components is a fundamental in react. Therefore we'll create a bunch of them now, not all will be very useful, but it let's us get some experience in creating them.

## 4.1 Unordered list

Create a component called unordered list, remember to use the proper naming convention!.

It should contain a heading called "Ingredients". Then an unordered lists with three items, eggs, flour, wheat.

Add this component to Lists.tsx

<details>
  <summary>Hints</summary>

1. Create a file in the components folder called `UnorderedList.tsx`

In UnorderedList.tsx

```js
function UnorderedList() {
  return {
    /*** Place your html here! */
  };
}
export default UnorderedList;
```

In Lists.tsx

```js
import UnorderedList from "../components/UnorederedList";

function Lists() {
  return (
    <div>
      <h1> Ingredients</h1>
      <UnorderedList />
    </div>
  );
}
export default Lists;
```

</details>

## 4.2 Ordered list

Create a component called ordered list, remember to use the proper naming convention!

It should contain a heading called "Steps". Then an ordered list with three items, 1. Mix it, 2. Drop it, 3. Smack it

Add this component to Lists.tsx

## 4.3 Lists, lists and more lists!

Often we want to render a list from some sort of data, and we don't always know what this data contains. So we cannot always simply hard code what the list should look like, instead we need to iterate on the data and create the list from data! Now we will render a list given a array of strings.

This section assumes that we're working in the UnorderedList.tsx component.

1. Create an array that contains "Wheat", "Flour", "Milk".
2. Instead of rendering your list like this

```js
...
<li> Milk </li>
<li> Flour </li>
<li> Wheat </li>
...

```

Use the array to render the same elements. The end result should be identical as if you "hardcoded" the values.

3. For practice purpose we want to specify what type our array has, typescript can sometimes figure out what type the variable has, but we'll need this later ;)
   Specify the type for ingredients, it should look something like this

```js
const ingredients : string[] = ...
```

Here the `: string[]` specifies that this should be an array of strings. The brackets here are important as the specify that it's an array, and not just a string.

## 4.4 We need more data

We'll start of easy, update your unordered list so that it shows the amount we need for each ingredient, an example could look like this

```js
<li> Milk - 4L </li>
```

You can either hard code the values or update your array!

We will expand on this in the next section, see you there!

# 5. Types and objects

We'll leave our arrays for a while, now we'll get started with Objects and types! If you feel a bit rusty check out the Typescript documentation for typed objects [here](https://www.typescriptlang.org/docs/handbook/2/objects.html). Remember to remove any unused code, VS Code usually highlights this with a yellow squiggly line and states that "...is assigned a value but never used."

This section assumes we're working in UnorderedList.tsx, we'll update the previous code.

1. Create an object type called Ingredient, it should contain two properties, name with the type of string, and amount with the type string.

<details>
<summary> Hint </summary>
To get you started a type looks like this

```js
type Ingredient = {
  name: string,
  ...
};
```

</details>

2. Create a variable named `milk` with the type of Ingredient, this is done using ":".
It should have the name = "milk" and amount = "4L"
<details>
<summary> Hint </summary>
Your object could look something like this,

```js
const ingredient: Ingredient = {
  name: "milk",
  amount: "4l",
};
```

</details>

3. This is great! Now we can store or data in a more structured way!
   Try and render our ingredient using our `ingredient` variable, in any way you like, the most important part is that we show "milk" and "4l". If you find it difficult check out this resource [Telerik](https://www.telerik.com/blogs/react-basics-working-react-objects). It covers additional stuff but to filter out relevant information is a skill in itself!

4. So we've learned how to render text from objects, but if we loop back to our array it was very convenient to render several items. In typescript it possible to create an array of objects. Arrays don't really care what they contain, it can be number, string, undefined, or objects! Update the ingredient. Create a variable that has the type "array of ingredient" and name it ingredients. For now it can be an empty array. Don't forget the s! In coding it's important to name something in plural when the variable is an array, and singular when it's just a single object, string, or number.

5. Now add an ingredient to your ingredients, you can either add it as you go with the .push method, or initialize the array with your ingredients, the last option is preffered.
<details>
<summary>  First hint </summary>
A start could look like this

```js
const ingredients: Ingredient[] = [
  {
    /*** Your ingredient in here */
  },
];
```

</details>

<details>
<summary> Final hint </summary>
Was it difficult? Since you opened this hint you'll get a bit of extra homework, add 5 more obejcts to the ingredients array, you can choose the name and amount freely!
Here's how you intialize the array with one object:

```js
const ingredients: Ingredient[] = [
  {
    name: "milk",
    amount: "4l",
  },
];
```

</details>

# 6. Component and props!

## 6.1 Title
Now let's create a basic Title component which has some styling, we want to display a title on the page, and we don't want to re-write the code everytime we want a title.

- Create a component called title, place it in the components folder. It should take a prop that's the text we want to display.
- The finished component should be able to be used like this

```js
<Title text={"Hello index"} />
```

Add the title component to your pages, replace the existing greeting with the title instead!

## 6.2 List, with props?

Open the UnorderedList.tsx file, it's beautiful isn't it? But what if we want to update it in some way? Perhaps we want a button that adds an item to the list when pushed. We'll we could add a button inside this component and that would work. But then it would be a UnorderedListWithButton.tsx. What I'm hinting at here is that we want this component to only care about rendering a list, nothing else. So now we'll make it more flexible.


1. Start with creating a new type, `UnorderedListProps`. It should have one propertly called `list` which has the type of `Ingredients[]`. At this point you should add the "export" keyword to your ingredient type. It enables so that other files can make use of this type!

2. Change the unordered list to instead of having the data inside of the component, use the prop instead.

3. Update Lists.tsx to give the `UnorderedList` component the correct data.




# 7. A bit of a break

Let's relax a little bit, if you haven't done so yet, give your navbar some styling! Perhaps it should have a nice background? Be shown vertically instead of horisontal? Take a few minutes to spice your page up. Make sure to import index.css to main.tsx!

<details>
<summary> Hint </summary>
Hint? For styling? We'll since you're already here.
You can add your css in index.css, if it doesn't work then make sure that it is imported to main.tsx, it should look something like

```js
import "./index.css";
```

Also remember to name your classes cleverly and avoid styling elements directly, since if you style a `<ul>` or `<div>` in a specific way, it will apply to everything in the entire app!

</details>

# 8. On Click
Now we'll get started on some basic on click functionality, I'd suggested reading through the [Cheat sheet](#a-button-with-a-onclick-method) on onClick. Start with that and come back when you're done!

Welcome back! I hope that you learned something useful! Now we'll try and implemenet this ourselves, 

In this section we'll be working in the `index.tsx` file.

1. Create a button element, with a text that says "Log to the console"

2. Create a function called handleClick, all it should do is log "The button has been clicked" to the console.

3. Use the onClick attribute on the button and pass it the handleClick function, refer to the cheat sheet if you're unsure on how to do this.

And we'll, that's pretty much the most exciting onClick gets! onClick is seldom very exciting on it's own, but instead needs to be combined with other functionality in order to achieve what we want. We will get to that, but before we'll need to learn some other stuff first

# 9. useState in React.

useState is an imported function (or hook) that React provides. It's used for managing state and keeping track of what the interface should show. To get stared, open up
`Lists.tsx`, previously we added functionality to pass the UnorderedList some data and that will come in handy now.

1. Create a button with the text "Add item to list"
2. Create a handleClick function, it should push an item to the ingredients array.
3. What happens when you click the button?

<details>
  <summary> Hint - handleClick</summary>
  This is what your handleClick function could look like.
  
  ```js
  function handleClick() {
    ingredients.push({ name: "wheat", amount: "ll" });
  }
```

</details>

Nothing happens, but why? Let's do some debugging, in the handleClick function add a console log after adding an item to the array. Now click the button and check what shows up in the console. Clearly we're adding items to the array, but nothing is happening, why is it so?

This is due to how React handles changes, we need to explicitly tell React that it should keep an eye on our ingredients array and update the UI if the array changes, this is done using the useState hook. Let's update our code using the useState hook.

1. Use the useState hook to create a state variable, set-state function, and initialize it with the same values as the previous array.

   Example on how to use the useState hook

   ```js
   const [name , setName] = useState("Steven")
   ```

  The `name` and `setName` can be anything! However in the same way that you want normal variables to reflect the values they contain, the state variable and set-state function should reflect what they contain, and what they do. Here I choose `name` for the state variable, since I want it to contain a name, and `setName` since, well, it sets the value of the name variable. Check out the [React Documentation](https://react.dev/reference/react/useState#usage) for more information on how the useState hook works.
  


# 10. Conditional Rendering

Work in progress

# Cheat sheet

Some good to know information that's used throughout the tutorial.

## Naming Conventions

Naming conventions are simply names for how you structure your names in coding (sounds confusing but it's not!)

These are some of the more common used in react and web development.

**PascalCase**
Pascal case is where you capitalize the first letter, and the first letter of every new word. So for example **Button**, or **RedButton**.

**camelCase**
The same as pascal case, however you don't capitalize the first word
Example **button**, **redButton**

**kebab-case**
Different from the other to, you always use lower case, and each new word uses "-" as a delimiter

Example: **button**, **red-button**

## Naming in React

- Files in the pages folder uses PascalCase as the filename, `About.tsx` for example

- Files in the components folder uses lowercase as the filename, `button.tsx` for example. If it contains multiple word, use a "-" as a delimieter, `red-button.tsx` for example.

- Components are named using PascalCase, `function ComponentName ()` for example.

- Functions that are not components uses camelCase for naming. For example `function calculateNumbers ()` or `const renderDiv = () =>`

- Variables uses camelCase for naming, such as `const rootElement`, `const items` or `let shoppingItems`

- Types and interfaces uses PascalCase for naming, such as `type ButtonProps {}` or `interface ListProps = {}`

- Folders uses camelCase for naming.

## Syntax

### Types and Interfaces

Types and interfaces are essentially the same but there are some subtle differences that we won't delve into. As a guideline always use `type`.

For example,

`type HeadingProps = {
  title:string;
  body:string;
}`

## A basic function component

A component is really nothing more than a function that returns some JSX, React will interpret this as a component.

```
function ComponentName () {
  return (
    <div> I am a component </div>
  )
}

export default ComponentName

```

this is also valid

```

const ComponentName = () => {
return (
  <div> I am a component </div>
  )
}

export default ComponentName
```

## A basic function component with props

```js
type ComponentNameProps {
  text:string;
}

function ComponentName (props: ComponentNameProps) {
return (<div> {props.text} </div>)
}

```

The prop can be used like this

```js
<ComponentName text={"text"} />
```

## A button with a onClick method

onClick is an attribute that exists on most html elements. Essentially it let's you specify some code that should be executed when the element is clicked, most of the time this is a button.
The onClick expects a function as an argument. Therefore we either need to pass an anonymous function ( `() => {}`) or a function.
**Example**

```
const handleButtonClick = () => {
  console.log("i was clicked!")
}

const Button = () => {
  return <button onClick={handleButtonClick}> Click me! </button>
}

```

or

```
const Button = () => {
  return (
    <button onClick={() => console.log("I was clicked!")}> Click me! </button>
  )
}

```

The first example is often preferred as it's easier to read, however if you want something quick and dirt you can use the second example.

# Resources

[W3 Schools Typescript](https://www.w3schools.com/typescript/index.php)

[React documentation](https://react.dev/reference/react)

[Tanstack/router](https://tanstack.com/router/latest/docs/framework/react/overview)

```

```
