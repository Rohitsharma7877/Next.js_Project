const reactdata = [
  {
    heading: "What is React",
    content: `
        React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.

React is a tool for building UI components.
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

    `,
    video: "",
    code: `
        import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);

    `,
    // video:""
  },
  {
    heading: `React Events`,
    content: `Just like HTML DOM events, React can perform actions based on user events.

        React has the same events as HTML: click, change, mouseover etc.`,
    video: "",
    code: `{
        function Football() {
            const shoot = (a, b) => {
              alert(b.type);
              /*
              'b' represents the React event that triggered the function,
              in this case the 'click' event
              */
            }
          
            return (
              <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
            );
          }
          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<Football />);
    }`,
  },
  {
    heading: `React Forms`,
    content: `Just like in HTML, React uses forms to allow users to interact with the web page.`,
    video: ``,
    code: `{
        import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
    }`,
  },
  {
    heading: `React Router`,
    content: `Create React App doesn't include page routing.

    React Router is the most popular solution.`,
    video: ``,
    code: `import ReactDOM from "react-dom/client";
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import Layout from "./pages/Layout";
    import Home from "./pages/Home";
    import Blogs from "./pages/Blogs";
    import Contact from "./pages/Contact";
    import NoPage from "./pages/NoPage";
    
    export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
    
    `,
  },
  {
    heading: `Styling React Using CSS`,
    content: `There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

        Inline styling
        CSS stylesheets
        CSS Modules`,
    video: ``,
    code: `{
        const Header = () => {
            return (
              <>
                <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
                <p>Add a little style!</p>
              </>
            );
          }
    },
{
    body {
        background-color: #282c34;
        color: white;
        padding: 40px;
        font-family: Sans-Serif;
        text-align: center;
      }
},
{
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './App.css';
    
    const Header = () => {
      return (
        <>
          <h1>Hello Style!</h1>
          <p>Add a little style!.</p>
        </>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />); 
}`,
  },
  {
    heading: `React Hooks`,
    content: `
        Hooks allow us to "hook" into React features such as state and lifecycle methods.
        Hooks were added to React in version 16.8.

        Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
        
        Although Hooks generally replace class components, there are no plans to remove classes from React.`,
    video: ``,
    code: `
        {import React, { useState } from "react";
    import ReactDOM from "react-dom/client";
    
    function FavoriteColor() {
      const [color, setColor] = useState("red");
    
      return (
        <>
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Blue</button>
          <button
            type="button"
            onClick={() => setColor("red")}
          >Red</button>
          <button
            type="button"
            onClick={() => setColor("pink")}
          >Pink</button>
          <button
            type="button"
            onClick={() => setColor("green")}
          >Green</button>
        </>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<FavoriteColor />);}`,
  },
  {
    heading: `React useState Hook`,
    content: `The React useState Hook allows us to track state in a function component.

        State generally refers to data or properties that need to be tracking in an application.`,
    video: ``,

    code: `{
        import { useState } from "react";

    function FavoriteColor() {
      const [color, setColor] = useState("");
    }.}`,
  },
  {
    heading: `React useEffect Hooks`,
    content: `The useEffect Hook allows you to perform side effects in your components.

        Some examples of side effects are: fetching data, directly updating the DOM, and timers.
        
        useEffect accepts two arguments. The second argument is optional.
        
        useEffect(<function>, <dependency>)`,
    video: ``,
    code: `{
        import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
    }`,
  },
  {
    heading: `React useContext Hook`,
    content: `React Context
        React Context is a way to manage state globally.
        
        It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.`,
    video: ``,
    code: `{
        import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()
    },{
        function Component1() {
            const [user, setUser] = useState("Jesse Hall");
          
            return (
              <UserContext.Provider value={user}>
                <h1>{'Hello !'}</h1>
                <Component2 user={user} />
              </UserContext.Provider>
            );
          }
    }`,
  },
];
export default reactdata;
