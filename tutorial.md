# 0 Tips

This file is called a markdown file, basically a glorified text file. If you open it "raw" it will look like any other text file, however if you use VS Code you can press Ctrl + Shift + P and search markdown: open preview and press enter, it should open the markdown file in a new window where it looks prettier :)

If you get stuck or need some reminders, check out the [Cheat sheet](#cheat-sheet) section.

# 1. Getting started

Start by creating a new Vite project. To do this, run `npm create vite@latest`. When prompted to choose a project name, type "." (a dot) and select "Ignore files and continue." Then choose `React` and `Typescript + SWC`. Follow the instructions provided.

1. Remove the boilerplate code, including `index.css`, `App.css`, and everything inside the return statement in `App.tsx`. Be sure to leave an empty div or fragment so the app can render something.

2. Run `npm run dev` if you haven't done so already, and ensure it starts without any errors. The page is expected to be entirely blank.

# 2. Our first component.

Since this is a tutorial, we'll start by creating some basic components. Our first will be a navigation bar.

1. Create a folder named `components` in the source directory.

2. Create a navigation component. This can look however you like! Check out W3Schools for examples if you'd like. At the moment, it doesn't matter exactly what it routes to; we'll fix that in the future.

3. Add the component to `App.tsx`, and make sure it shows up. Congratulations, you've created your first component!

# 3 Routing

This part is a bit complicated, but it's necessary to enable navigation. Push through it, and it will get easier!

Routing in React is not as straightforward as when you're only using HTML. However, with the help of libraries and some basic boilerplate code, we can make it work quite easily.

1. First, modify your navigation bar so that it contains three items: "Home," "Lists," and "News." When clicking on each of them, the URL should change to:

   - localhost:5173/news when you click on News
   - localhost:5173/lists when you click on Lists
   - localhost:5173 when you click on Home

2. To show different pages, we'll use the TanStack Router library. The quick start guide can be found [here](https://tanstack.com/router/latest/docs/framework/react/quick-start), but we'll make some slight modifications.

3. Follow the "Install the Vite Plugin and the Router Devtools" section in the quick start guide. You will also need to add `@vitejs/plugin-react` by running `npm i -D @vitejs/plugin-react`.

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

In this file also add your navigation bar, check out your page and make sure it renders! At this moment a "Not found" will be shown, that's because we haven't told tanstack/router what to show here, but that comes next.

6. Add src/routes/index.tsx. You'll notice that code will be added as soon that you create the file, that's because tanstack/router creates some of the necessary code for us, automatically!
   Now you should see "Hello /!" on your page, if it doesn't make sure that the url is `http://localhost:5173/`

- note, vite will use port 5173 as default, if that port is already taken then it will use 5174 instead

7. Next up create src/routes/lists.tsx and src/routes/news.tsx. Currently the menu won't properly navigate to these pages, but we'll fix that in the next step.

8. The navigation in tanstack/router works a bit differently than regular html, we cannot use `<a>` tags but instead will have to use the built-in <Link> which tanstack/router provides for us, and it works very similary. Now replace any code that might look like this `<a href="/">Home</a>` to `<Link to="/">Home</Link>`. If the automatic import doesn't work, add this to your Navigation component `import { Link } from "@tanstack/react-router";
`

9. Now your navigation should work! When you click the menu the you should be greeted with "Hello /lists" if you're on the lists page, "Hello /news" if you're on the news page and so on.

10. Lastly, in order to split up our code a bit, create a new folder called pages in the source directory. This folder will contain the code for our pages. Create three components

-Index
-Lists
-News

A example if the index component is

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


Now check again that the navigation works, and we're done with the hard pard! Good job!
```

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

# 5 Component and props!

Now let's create a basic Title component which has some styling, we want to display a title on the page, and we don't want to re-write the code everytime we want a title.

- Create a component called title, place it in the components folder. It should take a prop that's the text we want to display.
- The finished component should be able to be used like this

```js
<Title text={"Hello index"} />
```

Add the title component to your pages, replace the existing greeting with the title instead!

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

Files in the pages folder uses PascalCase as the filename, `About.tsx` for example

Files in the components folder uses lowercase as the filename, `button.tsx` for example. If it contains multiple word, use a "-" as a delimieter, `red-button.tsx` for example.

Components are named using PascalCase, `function ComponentName ()` for example.

Functions that are not components uses camelCase for naming. For example `function calculateNumbers ()` or `const renderDiv = () =>`

Variables uses camelCase for naming, such as `const rootElement`, `const items` or `let shoppingItems`

Types and interfaces uses PascalCase for naming, such as `type ButtonProps {}` or `interface ListProps = {}`

## Syntax

### Types and Interfaces

Types and interfaces are essentially the same but there are some subtle differences that we won't delve into. As a guideline always use `type`.

For example,

`type HeadingProps {
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
