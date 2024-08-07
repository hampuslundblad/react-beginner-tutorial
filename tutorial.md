# 0 Tips

This file is called a markdown file, basically a glorified text file. If you open it "raw" it will look weird, however if you use VS Code you can press Ctrl + Shift + P and search markdown: open preview and press enter, it should open the markdown file in a new window where it looks prettier :)

# 1. Getting started

Start with creating a new Vite project, to do this run ` npm create vite@latest`. When choosing a project name, simply type "." (a dot) and then select "Ignore files and continue" Then selecting `React` and then `Typescript + SWC`. Follow the instructions given

1. Remove the boilerplate code, this includes, index.css, App.css and the JSX in App.tsx. Make sure to leave and empty div or fragment for the app to render something at least.

2. Run `npm run dev`, make sure it starts without any errors.

# 2. Our first component.

Since this is a tutorial we'll start with creating some basic components. Our first will be a navigation bar.

1. Create a folder named componennts in the source directory.

2. Create a navigation component, this can look like whatever you want! Check out W3 schools for exampels if you'd like. At the moment it doesn't matter exactly what it routes to, we'll fix that in the future.

3. Add the component to App.tsx, and make sure it shows, congratulations you created your first component!

# 3 Routing

This part is a bit complicated but it's also necessary in order to be able to use some sort of navigation. Push through it and then it will get easier!

Routing in react is not as straighforward as when you're only using html, however with the help of libraries and some basic boilerplate code we can make it work quite easily.

1. First of, modify your navigation bar so that it containts three items, "Home", "Lists", and "News". When clicking on each of them the url should change to

- localhost:5173/news when you click on news
- localhost:5173/lsits when you click on lists
- localhost:5173 when you click on home.

2. Next up to actually show different pages we'll make use of the tanstack/router library, The quick start guide can be found [here](https://tanstack.com/router/latest/docs/framework/react/quick-start)
   however we'll make some slight modifications.

3. Follow the `Install the Vite Plugin and the Router Devtools` in the quick start guide. You will also need to add @vitejs/plugin-react, do this by running `npm i -D @vitejs/plugin-react`

4. Follow the `Configure the Vite Plugin` in the quick start guide, the file that you're modifying is called `vite.config.ts`. Do not yet created the files that are specified in the tutorial, instead go to the next step in this tutorial.

At the end your vite.config.ts should look like this

```
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

```
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

7. Next up create src/routes/lists.tsx and src/routes/news.tsx. Currently the menu won't properly navigate to these pages, but we'll fix that in the next step.

8. The navigation in tanstack/router works a bit differently than regular html, we cannot use `<a>` tags but instead will have to use the built-in <Link> which tanstack/router provides for us, and it works very similary. Now replace any code that might look like this `<a href="/">Home</a>` to `<Link to="/">Home</Link>`. If the automatic import doesn't work, add this to your Navigation component `import { Link } from "@tanstack/react-router";
`

9. Now your navigation should work! When you click the menu the you should be greeted with "Hello /lists" if you're on the lists page, "Hello /news" if you're on the news page and so on.

10. Lastly, in order to split up our code a bit, create a new folder called pages in the source directory. This folder will contain the code for our pages. Create three components

-Index
-Lists
-News

A example if the index component is

```
function Index() {
  return <div>Hello index!</div>;
}
export default Index;

```

Then change the code in /routes/index.tsx to

```
import { createFileRoute } from "@tanstack/react-router";
import Index from "../pages/Index";

export const Route = createFileRoute("/")({
  component: Index,
});


Now check again that the navigation works, and we're done with the hard pard! Good job!
```

# 4 Our second component!

Now let's create a basic Title component which has some styling, we want to display a title on the page, and we don't want to re-write the code everytime we want a title.

- Create a component called title, place it in the components folder. It should take a prop that's the text we want to display.
- The finished component should be able to be used like this

```
<Title text={"Hello index"} />
```

Add the title component to your pages, replace the existing greeting with the title instead!
