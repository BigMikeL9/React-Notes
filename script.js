< REACT JS >

// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / General Things to remember 
  
 - React is a JavaScript library for building user interfaces. HTML, CSS & JavaScript are about building user interfaces as well. React just makes building complex interactive and reactive user            interfaces SIMPLER.
 
 - ⭐ React uses a 'Declarative' Approach. With declarative code, we tell JavaScript what we want to be done, and let JavaScript take care of performing the steps. React is declarative because we write the code that we want and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result. Like so 👇 {with React we just define the required end state and React will then generate these instructions behind the scenes to bring that on to the screen in the browser}

For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.


 ------------------
    const App = () => {
      return (
        <div>
          <h2>Let's get started!</h2>
          <p>This code is created using a Declarative Approach</p>
        </div>
      );
    };

    export default App;
------------------
 
 - On the other hand with Vanilla JavaScript we use an 'Imperative' Approach because we are giving the browser clear step by step instructions of what JavaScript and the browser should be doing, for example when creating an element using JS and then changing its textContent, like so 👇 {Very combersome and rendundant as our project gets bigger and we have too many elements}
------------------
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is an Imperative way of creating an HTML element using JS'
    document.getElemenetById('root').append(paragraph); 
------------------
  
 - To start seeing the changes live on the browser, you need to run "npm start" in the directory's/folder location (which uses node.js [backend server-side] to update the browser automatically) 
  
 - In React, we build a component tree that has one root node. A component tree is when we build a tree by nesting components into each other - just as when we build an HTML tree when building a standard HTML document.

 
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / ⭐⭐⭐⭐⭐⭐ STARTING A NEW REACT APP ⭐⭐⭐⭐⭐⭐

 'https://create-react-app.dev/docs/getting-started'  or 'https://github.com/facebook/create-react-app' --> for a guide on how to start a new React App
  
// Or run these Terminal commands
npx create-react-app {PROJECT NAME HERE}
cd {PROJECT NAME HERE}
npm start

// -- Other Terminal Commands 👇
'npm start'
    Starts the development server.

'npm run build'
    Bundles the app into static files for production.

'npm test'
    Starts the test runner.

'npm run eject'
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
      
      

``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / React App files structure
     
 - 'src' folder is where the files that we will write our react code is located.
 
 - All react code is JavaScript code. 
      
 - ⭐ In React the "index.js" file is the FIRST file to be executed when running in the browser, unlike in Native Javascript where the "index.html" file is the first to be executed and then the rest.
  
 - React only has one HTML file because in React we build Single page Applications. So only one HTML file is delivered to the browser, and then rendered, hosted by the browser. But on this single HTML file, we render the finished react application code which then updates what we see on the screen, giving us the illusion of a multiple page website (multiple HTML pages), when in fact it is only one page (one HTML file), only the stuff/elements on it changes.
 
 - React tranforms our code into code that the browser would understand. For instance,  "import './index.css'" does NOT work with Vanilla Javascript (invalid syntax). We cant import a CSS file into a JavaScript file in vanilla JavaScript. But React does its magic behind the scenes and converts the code into something the browser will understand.
 
 - We ommit the ".js" when importing javascript script files in the "index.js" file. Example: "import App from './App';"    NOT     "import App from './App.js';"
  BUT if its another file type like a css file, then we keep the ".css". Like so: "import './index.css';"


/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / What is JSX?

 - JSX code (Javascript XML) is HTML code inside Javscript. [HTML is XML] 
    JSX only works in React. React transforms this JSX code to valid code/syntax that the browser can undertsand before delivering it to the browser, in a browser-friendly way which the browser can understand. The React transformation code, transforms our JSX code behind the scenes and then delivers it to the browser in way just as if we wrote it in normal HTML, CSS, and Javscript code.
    
 - In the past, developers had to add "import React from 'react'" in every component or in any file that has JSX code inside. But this is not the case in newer versions of React Apps. We dont need to import React from 'react' in every file anymore (Add it from now on tho. Also try 'console.log(React)' to see all the built-in React methods).  
  
---- 🌟 'REACT JSX TRANSFORMATION, UNDER THE HOOD' 🌟 ----
 - How JSX is compiled to code that the browser can understand, UNDER THE HOOD 👇👇
 
        // ------ JSX code ------
              import Expenses from "./components/Expenses";

              const App = () => {
                return (
                  <div>
                    <h2>Let's get started!</h2>
                    <p>This code is done using a Declarative Approach</p>
                  
                    <Expenses expenses={expenses}></Expenses>
                  </div>
                );
              };

              export default App;


       // ------ SAME OUTPUT AS 👆👆👆 -> React taking our JSX code 👆 and transforming it to browser friendly code, under the hood ------
              import Expenses from "./components/Expenses";

              const App = () => {
                // React.createElement(type, props, children)
                return React.createElement(
                  "div",
                  {},
                  React.createElement("h2", {}, "Let's get started!"),
                  React.createElement("p", {}, "This code is done using a Declarative Approach"),
                  React.createElement(Expenses, { expenses: expenses })
                );
              };

              export default App;

   
`` 
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / What are Components in React?
    
 - A COMPONENT IN REACT, IS JUST A JAVASCRIPT FUNCTION that returns JSX code (HTML inside Javascript) which is transformed behind the scene by react into a browser-friendly code.

 - React is all about "Components". Components are just custom HTML elements. They are named like this "<App />".
    An example of Components is the "<App />" in the "index.js" file.

 - ⭐⭐ The "App.js" file is a SPECIAL kind of component. It will be our ROOT component which means its the main component being rendered in our starting file (the "index.js" file). All other components that we create will be nested inside the "App.js" file or nested inside of other components which in the end are nested in "App.js".        LOOK AT --> {React Component Tree} image  
    
 - ⭐ It is considered good practice to create new files for different components, so that we have one file per component.
        Which means that we will have ALOT of files in react projects.
        
 - Create a folder called 'components' where you place all the new components you create in to keep it organized. Excluding "App.js" and "index.js"
   
 - When naming component files in react, its a common convention to make every word capitalized. Ex: "ExpenseItem.js"
    
 - The conventional way of the naming a function/component in react, is to name it the same thing as its file name.
 
 - In React, we ultimately build our own custom HTML elements, which are COMPONENTS. So components in react are simply custom HTML elements.
 
 - ⭐ Our own custom Components *MUST* start with an uppercase character when we are using them in JSX (ie: <ExpenseItem></ExpenseItem>) , so that React is able to detect that this is a custom component.
      So the simple rule in React is that lowsercase elements (ie: <div></div>) are built-in HTML elements, whereas elements starting with an uppercase are custom elements defined by a developer.
                        We also have to use the name that we define in the import, as our custom HTML tag when used in JSX. 
                              
                                                               
--- So it is always these steps in React when creating and using custom compoenents--> 
              1. We create a component, which is a JavaScript function that returns HTML code
              2. We then Export that function (ie: export default ExpenseItem;)
              3. Then import the function as a custom HTML element in the file that we want to use it in.(ie: import ExpenseItem from './components/ExpenseItem')
              4. Finally use the imported function in the JSX code as an HTML element with the exception that every word is capitalized (ie: <ExpenseItem></ExpenseItem>)
                                        ⭐⭐ ' IMPORTANT NOTE: If there is no content inside a custom component, we can make it a self closing custom component (ie: <ExpenseItem />)
                                                                                                                                         
   
    
  - ⭐🌠⭐🌠 When creating React components, an IMPORTANT rule to remember about the JSX code inside the JavaScript function, is that it MUST have only ONE root element per 'return' statement or per JSX code snippet (ie: example of root element -> '<div></div>'). The reason why it is not allowed will be explained later in the course.
              A workaround if we want multiple elements inside the JSX code snippet, is to wrap the entire JSX code with a '<div></div>' element or angle brackets '<> </>'. And then wrapping the whole               thing in brackets (). In short, the return value of React components must return only one root element which can have any code/number of elements inside. Like so 👇 

  // -- using a '<div></div>' element 💨 (so here we have ONE root element which is the '<div></div>' element wrapping the around the whole JSX code snippet) 💨
const ExpenseItem = () => {
  return (
    <div>
      <h2>Date</h2>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </div>
  );
};

 // -- using angle brackets '<></>'  💨 (so here we have ONE root element which is the '<></>' element wrapping the around the whole JSX code snippet) 💨
const ExpenseItem = () => {
  return (
    <>
      <h2>Date</h2>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </>
  );
};



``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / Organizing Components into Sub-Folders

 - As the application gets bigger and bigger, it good practice to organize components into sub-folders 👇
 
 src/
|-- components/
|   |-- UI/
|   |   |-- Card.js
|   |   |-- Card.scss
|   |-- Expenses/
|   |   |-- Expenses.js
|   |   |-- Expenses.scss
|   |   |-- ExpenseItem.js
|   |   |-- ExpenseItem.scss
|   |   |-- ExpenseDate.js
|   |   |-- ExpenseDate.scss
    



    
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /   STYLING Components in React

- We style React components normally using CSS or any preprocessor (ie: Sass)

- We ussually create a CSS file for each componeNts. And give it the same name as the componenet JS file that it will belong to. Then we put them in the same folder.

- We then add our styling for that component in the component's CSS file. 

- Then link the component's CSS file to the component's JavaScript function using 'import' statement . Like so 👉 (import './ExpenseItem.css')

- 🌟 IMPORTANT -> The linked CSS file styling is NOT SCOPED to just the JS component function they are linked to. They are available GLOBALLY. See section below that explains how to make component styling SCOPED (only available to the component they are linked to)
    
- ADDING CLASSES to JSX code in React -> We dont use 'class' attribute as we would do in regular HTML, instead we use the 'className' attribute. Thats because React component code is NOT HTML it is JSX, a special syntax that only React understands. In the end, under the hood, it is still JavaScript code. And since it is JavaScript code in the end we cant use 'class' attribute becuase it is a reserved word in JavaScript which is why 'className' attribute was created to replace it. (NOTE: most attributes in JSX are the same as HTML attributes, but not all, like 'class' attribute for instance)


    // Example: 
          import "./ExpenseItem.scss";

          const ExpenseItem = () => {
            return (
              <div className="expense-item">
                <div>December 12, 2022</div>

                <div className="expense-item__description">
                  <h2>Car Insurance</h2>
                  <div className="expense-item__price">$312.56</div>
                </div>
              </div>
            );
          };

          export default ExpenseItem;


// ---------------------------
    ⭐⭐⭐ IMPORTANT ->' Why not to use Bootstrap or other CSS library '
// ---------------------------

In a React app like in every other website you can use Bootstrap for styling, or any other framework, or the native CSS features - CSS flexbox (https://css-tricks.com/snippets/css/a-guide-to-flexbox/), CSS grid (https://www.youtube.com/watch?v=FEnRpy9Xfes&list=PLbSquHt1VCf1x_-1ytlVMT0AMwADlWtc1) etc..

These native CSS features are much more powerful today (and much more flexible) than Bootstrap etc. can ever be, and they don't require additional nested markup.

So from my point of view you should use Bootstrap in real apps only if you are forced to use it, by working in a company which at this point of time has not yet recognized the huge advantages of the modern native CSS techniques. But as Prateek wrote, that's not at all related to React, the topic of this course.



``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /   Outputting Dynamic Data & Working with Expressions in JSX  

 - Typically in React Applications, we dont have hardcoded data in HTML, instead they are fetched from somewhere and then DYNAMICALLY inserted into the JSX code.
 
 - To output DYNAMIC data in JSX code, we use special syntax created by React inside the JSX code snippets. Which is wrapping basic JavaScript expressions (for instance: variables) inside curly braces '{}'. Like so: '<h2>{2 + 4}</h2>'

    // Example:
          import "./ExpenseItem.scss";

          const ExpenseItem = () => {
            const expenseDate = new Date();
            const expenseTitle = "Car Insurance";
            const expenseAmount = 316.56;

            return (
              <div className="expense-item">
                <div>{expenseDate.toUTCString()}</div>

                <div className="expense-item__description">
                  <h2>{expenseTitle}</h2>
                  <div className="expense-item__price">{expenseAmount}</div>
                </div>
              </div>
            );
          };

          export default ExpenseItem;



``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /   Passing Data via "Props" (stands for PROPERTIES) in React (VERY IMPORTANT IN REACT) 🌟🌟🌟

// GOOD EXPLANATION -> https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0#:~:text=%E2%80%9CProps%E2%80%9D%20is%20a%20special%20keyword,way%20from%20parent%20to%20child)

- React is a component-based library that divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using 'props'.

- 'Props' is a special keyword in React, which stands for PROPERTIES and is used for passing data from one component to another. But the important part here is that data get passed with props in a uni-directional flow. (one way from PARENT to CHILD)

- Remember, 'props' is used to pass data from PARENT to CHILD, and NOT the other way around (CHILD to PARENT)

- Furthermore, 'props' data is read-only, which means that data coming from the parent should not be changed by child components. 
                          [Parent is -> the React component which '<ExpenseItem></ExpenseItem>' custom Element is being used inside. ie: const App = () => { return ('<ExpenseItem></ExpenseItem>') }. So 'App' component is the parent] 
                          [Child is -> the custom Element React component itself. ie: const ExpenseItem = () => { return (....) }]

- React components can ONLY have ONE argument, which is 'props' (Can be named anything tho). Which holds all the values that we passed in attributes, in custom Elements. We can define our own attributes & assign values, to custom Elements, with interpolation '{ }'                                                         ('<ChildComponent text={“I’m the 1st child”} />').

- Also when passing data using 'props' from parent to child, we CANNOT skip components in between.
                          
- 'props' (which is passed in as an argument in React components), returns back an object from which we can access all the data passed in to the custom elements (attribute and its value (data)). 
We get key-value pairs from the 'props' object. Keys are the attribute names passed in the custom element. And values are the values of these attributes. 

-- USING 'props' in React -> // (Remember React components are JavaScript functions)
        1. Firstly, define an attribute and its value (data) in a custom Element being used in another React component (ie: '<ExpenseItem></ExpenseItem>') 👇
                      We already know that we can assign attributes and values to HTML tags: '<a href="www.google.com">Click here to visit Google</a>;'
                      Likewise, we can do the same for React components. We can define our own attributes & assign values with interpolation '{ }': 
                                                            '<ChildComponent someAttribute={value} anotherAttribute={value}/>'
                                                            '<ChildComponent text={“I’m the 1st child”} />'

        2. Then we pass 'props' as an argument to the custom Element React component (ie: 'ChildComponent') which brings all the necessary data  👇
                      Pass 'props' as an argument to the React component:
                                        const ChildComponent = (props) => {  
                                          return (...) 
                                        };
                      'props' return back an object. Try 'console.log(props);'

        3. Finally, render the Props Data. We will render the props object by using string interpolation '{ }' in the JSX code. 👇
                                 const ChildComponent = (props) => {  
                                    return <p>{props.text}</p>; 
                                 };

// --- EXAMPLE 👇👇👇👇👇

// ---------- [PARENT] ----------
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New LED UHD TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This code is done using a Declarative Approach</p>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  );
};

export default App;

// ---------- [Child (custom element's component)] ----------
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  console.log(props);

  return (
    <div className="expense-item">
      <div>{props.date.toUTCString()}</div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;



``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /   Splitting Components into Multiple components (Preference)

 - As we work on React Applications, our react components eventually gets BIGGER and BIGGER, as we have more logic in the App. 
 
 - Which is why React has this components aspect, which allows us to split our application into smaller building blocks. Where every component/building block is focused on one core task.
 
 - This makes each compoenent small and manageable, while still being able to build complex applications by combining these componenets/building blocks.

 
 
 
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /    The concept of 'Composition' ("children-props") ['props.children' && 'props.className']
 
---- 'What is composition? 
  〰 Composition is the act of assembling components or elements to build a whole. React gives a powerful tool that helps with composition, which is 'children-props'. 

---- 'Why Use React Composition?
  〰 This pattern gives us the power to build more scalable reusable components, especially when building a tool, a library, or components used by a large number of people with varying needs.
  〰 It prevents us from building too many similar components containing DUPLICATE CODE and allows us to build fewer components that can be reused anywhere within our application, making them easier to understand and maintain.


  - ⭐⭐⭐ Remember that the JSX code inside a component MUST only have ONE root element per 'return' statement (ie: example of root element is '<div></div>' in 'return()'-> 'return( <div>...</div> )'). But that root element can be a custom HTML element, with styling that will be reused all over our App. 
                - But in React, we CANNOT use custom HTML Elements as root elements or wrappers around other custom Elements. So inorder to make it work
                        1. We pass in 'props' as an argument in the wrapper custom Element's component function 
                        2. And then we call the 'children' method on the 'props' object (which is available in ALL react components) between curly braces, inside the custom                                                          Element's component JSX code. (ie: "<div className="card">{props.children}</div>" ) 
 

  - The 'props.children' property is available on every component, that has custom HTML Elements nested inside. It contains the content between the opening and closing tags of a custom HTML Element that is being used as a root element/wrapper. So in the example below 'props.children' is equal to everything in between the '<Card> ... </Card>' custom element.

                        3. Also 'className="..."' DOES NOT work when used on custom wrapper Elements (🛑'<Card className="expense-item"> ... </Card>'🛑) because they do NOT support 'className="..."' attributes, like default HTML tags does. 
                            So inorder to make 'className="..."' (that is set on our custom wrapper element) WORK, we need to dynamically add any 'className' values that is added to our wrapper custom element (ie: '<Card className="expense-item"> ... </Card>'), to the wrapper custom element component function, by doing somehting like this 👇
                                                                                                                   const classes = `card ${props.className}`;   // -> using TEMPLATE LITERAL
                                                                                                                   const classes = 'card ' + props.className;    // -> using CONCATENATION
  
// --- example 👇👇
                            // ---- [Card] wrapper component ----
                            import "./Card.scss";

                            const Card = (props) => {
                              console.log(props.children);

                              const classes = `card ${props.className}`;

                              return <div className={classes}>{props.children}</div>;
                            };

                            export default Card;


                            // ---- [ExpenseItem] component ----
                            import ExpenseDate from "./ExpenseDate";
                            import Card from "./Card";
                            import "./ExpenseItem.scss";

                            const ExpenseItem = (props) => {
                              return (
                                <Card className="expense-item"> // 'className' values will be availabe to '<Card> </Card>' wrapper element through 'props.className'
                                  //  [content that will be available through 'props.children']
                                </Card>
                              );
                            };

                            export default ExpenseItem;



``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /   Listening to Events & working with Event Handlers in React

 - On ALL built-in/native HTML elements (ie: <div></div>) ⭐[NOT custom HTML elements (ie: <Card></Card>)]⭐, we have full access to the native DOM events which we can listen to.
                                                                                                              // List of HTML DOM Events: https://www.w3schools.com/jsref/dom_obj_event.asp
                                                           
 - Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences: -> 
            
          1. React events are named using camelCase, rather than lowercase (ie: 'onClick={}'.)
          2. With JSX you pass a function as the event handler, rather than a string.
          
     〰 So instead of doing this, like in Vanilla JavaScript (Imperative Approach) -->  document.querySelector('button').addEventListener('click', funciton() { ... }); 
                                This 👆 would be imperative code, we're not using React's features with this code and you would trigger some function that lives outside of React components and hence                                     wouldn't be able to interact with React component state.

     〰 We simply add an inline HTML DOM event, of the event we want to listen to, to the HTML element in the JSX code. As shown below 👇
                                       -- in HTML -->  <button onclick="activateLasers()"> Activate Lasers </button>

                                       -- in React --> <button onClick={activateLasers}> Activate Lasers </button>  

🛑 IMPORTANT: We dont add parentheses to the event Handler function, because we DONT want to execute it in the JSX code, we just want to point at it so that it gets called whenever we click the button. If we do add parentheses to it then JavaScript will execute it as the component's JSX code is being parsed, NOT as we click the button itself. Nothing would happen if we click the button.

    〰 We then create a funciton that will get executed when the event is triggered 👇
              const activateLasers = (event) => {
                event.preventDefault(); // if we need to prevent default behavior of an element
                console.log('Pew Pew 🚀')
              };



``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / What are HOOKS in React

 - Hooks are FUNCTIONS that let you “hook into” React state and lifecycle features from function components. 
                〰 We call such components 'function components' because they are literally JavaScript functions. 
                〰 Hooks don’t work inside classes — they let you use React without classes.
                        With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a                                   Class component in React.
                  

 - Hooks functions start with 'use' keyword (ie: 'useState')

 - Two main Rules for React Hooks: 
            1. Make sure to not use Hooks inside loops, conditions, or nested functions. Because Hooks must always run in the same order, in every component render.
                           MUST be in TOP LEVEL of our 'function component' with nothing around them. 
                           
            2. We can ONLY use Hooks inside React Function components. 
                           Cant use them in Class components (ie: class App extends React.Component { ... } ), because classes already have their own way to do things that Hooks do.

📝 SIDE NOTE -> A component function is a function that return JSX code.

  

}
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / 'State' concept in React
 
 - In object-oriented programming, the 'state' of an object is the combination of the original values in the object plus any modifications made to them. 

 - 'State' is a plain JavaScript object used by React to represent an information about the component's current situation.
                It's managed in the component (just like any variable declared in a function)

      

}
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / 'useState()' Hook                   [Most IMPORTANT react hook]

 - A component needs 'state' when some data associated with it, changes over time. 
      For example, a Checkbox component might need isChecked in its state, and a NewsFeed component might want to keep track of fetchedPosts in its state.
         
 - The most important difference between state and props is that props are passed from a parent component, but state is managed by the component itself.
      A component cannot change its props, but it can change its state.

 - The 'useState()' hook allows React developers to update, handle and manipulate state inside functional components without needing to convert it to a class component. 
 
 - To use hooks in React, we use NAMED imports, to extract/destructure functions from the React library  --> "import React, { useState } from 'react'"
 
 -- Lets say we want to change an element on the page as we click a button. Inorder to do so we would need to rerun/rerender the component function for that ELEMENT, that we want to change, inorder for the change to appear in the browser. The is where 'useState()' hook comes in. It allows us to rerun/rerender a Component function when its 'state' changes, ⭐ NOT the whole page, just the component inwhich 'useState' hook is being used in ⭐. 
 
      - 'useState()' hook takes in ONE argument which is the INITIAL STATE or default state of the element. (ie: 'useState((initialState))')
      - It then returns an array with two elements, which we can use destructuring to extract them from the Array. 
                    〰 FIRST element is our CURRENT state, at every iteration of the render component. 
                    〰 SECOND element is a function which we can call to set a new value to CURRENT state. Calling that function will also trigger React to re-evaluate/re-render the component. It creates a completely NEW state and DOESNOT UPDATE the Current State.

                                  🌟 IMPORTANT -> everytime we CALL the update funciton (second variable 👆) 
                                                        1. The CURRENT state value (First variable) changes. [doesnt change right away tho, instead React SCHEDULES it to change.]
                                                        2. And then the function component gets RERENDERED or gets executed again (react calls the function again), with the new state of the component.
                                                                This is how we can see changes in the browser.
                                  
                        💨 So in short, when the state of the component changes, 'useState' hook rerenders the component function.
                        
                        💨 We setup 'useState' like this -> 'const [{current state}, {state update function}] = useState({initial state})'  or  'const [title, setTitle] = useState(props.title)'


            -----------
          🛑🛑 IMPORTANT -> 〰〰 React keeps track of the component funciton 'CURRENT state' variables and ensures they stay up-to-date on subsequent re-renders of the component.
                                (trust me when I say this — that is some JavaScript closures magic happening there). 
                              
                            〰〰 React does NOT RE-ASSIGN/override the the 'CURRENT state' value, in a given component instance, as it re-renders the component. It just keeps track of it somewhere under                                 the hood (closures?), and then when the component is re-rendered, the latest 'CURRENT state' is fetched from React, wherever it is stored. So we always get a new                                         snapshot of the 'CURRENT  state' when the component function re-executes. 
                            
                                Which is why we can use 'const' when destructuring 'useState({initial state})' because the 'CURRENT state' never gets reassigned/overriden in the function component.
                      
                            〰〰  React also keeps track of when we call 'useState()' hook/function, in a given component instance. 
                                 By doing so, React uses the 'initial state' value as the 'CURRENT state', only ⭐ONCE⭐, which is when the component is rendered for THE FIRST TIME. After that React                                    uses the 'CURRENT state', which it keeps track of with every state change, as it re-renders the function component, and ignores the 'initial state' value.   
                                 This is why the 'initial state' value does not override the new 'CURRENT state' value everytime we re-render the function component.
           --------------------------------------------                      
                    
                    // example 👇👇
                          function App() {
                            const [age, setAge] = useState(19); // age is the initial state. So 'age = 19'
                            
                            const handleClick = () => setAge(age + 1) // onClick age gets updated by adding 1 
                            const handleClick = () => setAge((previousAge) => previousAge + 1)  // 🌟🌟🌟🌟 Funciton version --> CORRECT way of updating a state based on the PREVIOUS state. [USE THIS]                                                                                                                  [ -- EXPLAINED MORE BELOW IN NEXT PART -- ] 🌟🌟🌟🌟
                            
                            return 
                                <div> 
                                    I am {age} Years Old 
                                  <div> 
                                  <button onClick={handleClick}>Increase my age! </button>
                                </div>
                             </div>
                          }
                          
//---------
/ Other USE CASES for 'useState()' hook (other than events), would be 👇
          1. For Http requests where we want to update the state of the component function, based on the Http response we got back
          2. Or we could be updating the state of the component function due to a timer getting expired, using 'setTimout()' for example.
          3. Another use case, is to store our component state variable inorder to detach it from the component function, so that when the component funciton is re-rendered, the state variable is stored and survives (ie: the data/state variable is not lost due to React storing it for us somewhere, under the hood).
 
    And many more other use cases.
    
    
    
//---------
// Having multiple 'useState()' function in a component. 
}
    / [2 WAYS -- Depends on personal Preference]
    
1. We can call 'useState()' more than once in a component function, to manage different states of the component 👇 [VERY COMMON IN REAL WORLD APP]   {🌟 USE THIS 🌟}

   // --- Example --- 
      const ExpenseForm = () => {
        const [title, setTitle] = useState("");
        const [amount, setAmount] = useState("");
        const [date, setDate] = useState("");
        
        const titleChangeHandler = (event) => {
          setTitle(event.target.value);
        };

        const amountChangeHandler = (event) => {
          setAmount(event.target.value);
        };

        const dateChangeHandler = (event) => {
          setDate(event.target.value);
        };


        return (<div> ... <div/>);
      };


2. Using 'useState()' once to store/manage multiple states, but using an OBJECT as an argument. Inside that OBJECT argument, we can group together our multiple states.
        The difference between this way and the first way, is that whenever we want to update one of the states/keys in the object, we HAVE TO update ALL of the other states/keys as well (even if we           dont want to update their state to a new value). If we dont, React will not merge the other states/keys to the current state , and they will be lost.
               
        In short, the object entered as an argument in 'useState({...})' gets replaced everytime we re-render the component function with a new state, so we have to ensure that we include all the states/keys in the Object as we change the state of the component function.
        
        We can use the spread operator (...), to include all the states/keys in the object, and then override the state that we want to change in the Object, as shown in the example below 👇
                                    
   // --- Example ---           
        const ExpenseForm = () => {
          // 🟠 Another way of handling multiple states, but using one 'useState()' function
          const [enteredInput, setEnteredInput] = useState({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: "",
          });
          
          console.log(enteredInput.enteredTitle);
          console.log(enteredInput.enteredAmount);
          console.log(enteredInput.enteredDate);

          const titleChangeHandler = (event) => {
            // 🟠 Updating one state using other way --> have to include other states/keys in the object as well.
            setEnteredInput((prevState) => {
              console.log(prevState);
              return { ...prevState, enteredTitle: event.target.value };
            });
          };

          const amountChangeHandler = (event) => {
            // 🟠 Updating one state using other way --> have to include other states/keys in the object as well.
            setEnteredInput((prevState) => {
              return {
                ...prevState,
                enteredAmount: event.target.value,
              };
            });
          };

          const dateChangeHandler = (event) => {
            // 🟠 Updating one state using other way --> have to include other states/keys in the object as well.
            setEnteredInput((prevState) => {
              return {
                ...prevState,
                enteredDate: event.target.value,
              };
            });
          };


          return (<div> ... <div/>);
        };   


// -------------------------------------------------------------------------------
// -------------------------------------------------------------
     / 🟠 CORRECT way of updating a state based on the **PREVIOUS state**.
⭐⭐⭐⭐⭐ IMPORTANT -> Whenever we update a state while we are dependent on the previous state (as in the example below), we should pass in a function inside the updating state function:
        
                                // -- 🟢🟢🟢 --
                                  setEnteredInput((prevState) => {                // 🌟🌟 'prevState' argument return an object containing the previus state/states of the component funtion.
                                    ...prevState,
                                    enteredTitle: event.target.value,
                                  });

                      [Safer way to ensure that we always operate on the latest state snapshot. So use this function syntax whenever our state update is dependant on the previous state]

                We do it like this because React scedules state updates, it doesnt perform them instantly. So if we schedule alot of state updates at the same time, we could be dependant on an outdated or incorrect state, when updating to the new state. So dont use this approach 👇 use that approach instead 👆, where we pass in a function as an argument inside the update state function

                              // -- 🔴🔴🔴 --
                                setEnteredInput({
                                  ...enteredInput,
                                  enteredTitle: event.target.value,
                                });  

                              // -- 🔴🔴🔴 -- another example of how to NOT update the state of a component based on the previous component's state
                                const [counter, setCounter] = useState(1);
                                ...
                                setCounter(counter + 1);

                      

}
// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / Two-Way Binding in FORMS                      / [VERY USEFULL IN FORMS]

// Two-Way Binding in forms means that we dont just listen to changes, we also pass/feed a new value back into the input upon submission of the form, using 'value={...}' attribute. 

  / ⭐⭐⭐ Allows us to store/gather user input and also change it, upon form submission, using 'useState()'

// ---- Example ----
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseDate);

    // -- 🔵🟡🟢 Clear inputs in form using 'Two-Way Binding'
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}              // -- 🔵🟡🟢 Set the value to be the same as the current state, so that when we submit the form we reset the input value to be an empty string 👆
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}             // -- 🔵🟡🟢 Set the value to be the same as the current state.
            type="number"
            step="1"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}               // -- 🔵🟡🟢 Set the value to be the same as the current state.
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};



``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / Passing Props/Data From *CHILD to PARENT* Component [UP] in React.js

- 🟠🟠 ⭐ Remember, 'props' is used to pass data from PARENT to CHILD [[DOWN]] only, and NOT the other way around (CHILD to PARENT).
                          So the parent component passes props to the child component and the child can then access the data from the parent via 'props' argument, in the component function.
                          
                          
                          // passing data from PARENT to CHILD -  example 👇
                                  import React from 'react';

                                  function Parent(){
                                      const data = 'Data from parent';
                                      return(
                                          <div>
                                              <Child dataParentToChild = {data}/>
                                          </div>
                                      )
                                  }
                                              -------
                                  function Child (props){
                                      return(
                                          <div>
                                              {props.dataParentToChild}
                                          </div>
                                      )
                                  }

                                  export default Child;

// ----------- 🌟🌟 VERY IMPORTANT PATTERN in React 🌟🌟 -------------
 - 🟡🔵🟢🔴 Passing the data from the CHILD to PARENT component [UP] is a bit trickier. In order to do this, we need to do the following steps:

                    1. Create a callback function in the parent component. This callback function will get the data from the child component.
                    2. Pass the callback function in the parent as a prop to the child component.
                    3. The child component calls the parent callback function using props.
  
                  
                 // passing data from CHILD to PARENT -  example 👇
                    
                                import React from 'react';

                                  function Parent(){
                                      // gets submitted data from child component 'ExpenseForm.js'
                                      const getData = (enteredData) => {
                                        const data = {
                                          ...enteredData, // pull all key/value pairs from passed in argument
                                          id: Date.now().toString(), // generate random id
                                        };
                                      };
                                    
                                      return(
                                          <div>
                                              <Child dataChildToParent = {getData}/>
                                          </div>
                                      )
                                  }
                                              -------
                                  function Child (props){
                                     const submitHandler = () => {
                                        const childData = {
                                          title: enteredTitle,
                                          amount: enteredAmount,
                                          date: new Date(enteredDate),
                                        };

                                      // -- pass Data to PARENT component 'NewExpense.js'
                                      props.dataChildToParent(childData);
                                    };           
                                                
                                      return(
                                          <div> ..... </div>
                                      )
                                  }

                                  export default Child;

  


// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / Lifting State Up.    [Passing data/state between SIBLING components through a common Parent]       // Same as above 👆👆👆👆 but explained further       ////// IMPORTANT //////

                    // Look at 'Lifting State Up' image

- 🌟 We can ONLY communicate/pass data from PARENT to CHILD, and from CHILD to PARENT. 
                          🛑🛑 We CANNOT communicate/pass data between SIBLING components 🛑🛑.   [No direct connection between two sibling components]

- So inorder to communicate between sibling components, we pass the data to the parent component that has direct or indirect access to both sibling components, and then pass that data to another child component, that needs that data. 
                                    (ie of commonn Parent is: both sibling components are being rendered by the same parent component)

- We do so by, Passing data (state) from CHILD to PARENT component [UP], as shown in previous section example/explanation 👆👆👆👆👆 And then from PARENT to CHILD component (sibling of other component that passed the data to parent).


           -----
        ⭐⭐⭐ In short, 'Lifting State Up' is about moving data from a CHILD component to some PARENT component, to either use that data in the PARENT component, or pass it down to some other CHILD                   component and use it there. 
        
                So we lift the data high enough in the component tree (from a Child component to a Parent component), until we reach a parent component that has access to both sibling components (for instance: a child component that generates data and a child a component that needs that data, which both have or share the same parent component, directly or indirectly).
      
                
                
                
}            
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /  'Controlled' components vs 'Uncontrolled' components in React            / 🛑🚏 `[INTERVIEW Question ]` 🛑🚏

- When talking about 'Controlled' components vs 'Uncontrolled' components in React, we are ussually referring to ***FORM*** elements such as '<input>', '<textarea>', and '<select>'.

                      ---- [🌟 USE 🟢 'Controlled' components [using 'useState'] 🟢, instead of ⛔ 'Uncontrolled' components [using 'useRef'] ⛔ 🌟] ----

-- 'Controlled' components: 👇           --- ['useState' hook] ---             
                    1. In React, 'Controlled' Components are those in which the form’s data is handled by the component’s state. 
                    2. An '<input>' form element whose value is controlled by React is called a 'Controlled' component.
                    3.  React handles 'Controlled' component form data through state ('useState' hook). It updates that state on every keystroke. And then feed that state back to the '<input>' form                           element, through the 'value' prop. So we can use 'setState' to reset the 'value' prop on an '<input>' element after submitting the form.
                                         Hence, these '<input>' form elements are called 'Controlled' components becaus etheir internal state is controlled by React.
 
                            
     // ------- Example -------
                            
                                import React, { useState } from "react";
                                import Card from "../UI/Card";
                                import Button from "../Button/Button";
                                import styles from "./UserForm.module.scss";

                                const UserForm = (props) => {

                                  // -- 🔴 USING 'useState' [not best when we just want to read a value] --
                                  const [enteredUsername, setEnteredUsername] = useState("");
                                  const [enteredAge, setEnteredAge] = useState("");


                                  const submitHandler = (event) => {
                                    event.preventDefault();

                                    // -- Forward User data to parent ('App.js') --
                                    const userData = {
                                      username: enteredUsername,
                                      age: enteredAge,
                                    };
                                    props.onSubmitUserData(userData);

                                    // -- Resetting inputs --
                                    // -- 🔴 USING 'useState' --
                                    setEnteredUsername("");
                                    setEnteredAge("");
                                  };

                                  // -- 🔴 USING 'useState' --
                                  const usernameChangeHandler = (event) => {
                                    setEnteredUsername(event.target.value);
                                  };

                                  // -- 🔴 USING 'useState' --
                                  const ageChangeHandler = (event) => {
                                    setEnteredAge(event.target.value);
                                  };

                                  return (
                                      <form className={styles.form} onSubmit={submitHandler}>
                                        <label htmlFor="username">Username</label>
                                        <input
                                          id="username"
                                          type="text"
                                          // -- 🔴 USING 'useState' --
                                          onChange={usernameChangeHandler}
                                          value={enteredUsername}
                                        />

                                        <label htmlFor="age">Age(Years)</label>
                                        <input
                                          id="age"
                                          type="number"
                                          step="1"
                                          // -- 🔴 USING 'useState' --
                                          onChange={ageChangeHandler}
                                          value={enteredAge}
                                        />

                                        <Button type="submit">Add User</Button>
                                      </form>
                                    </Card>
                                  );
                                };

                                export default UserForm;

                            
              
                    

-- 'Uncontrolled' components: 👇           --- ['useRef' hook] ---
                    1. In an 'Uncontrolled' component, form data is handled by the DOM itself, and we can acces the values of that data through the 'useRef' hook.
                    2. To write an uncontrolled component, instead of writing an event handler for every state update, we can use a 'ref' prop in the HTML element, with the 'useRef' hook, to get form                        values from the DOM. 
                    3. The approach of using 'ref' prop with the 'useRef' hook to interact with DOM elements, specifically with Input elements, is called 'Uncontrolled' components, inwhich we access                          DOM element values with 'ref' attribute and 'useRef' hook. 
                    4. Because the form input data/values internal state, is NOT controlled by React, it is called an 'Uncontrolled' component. 
                       We rely on the default behavior of the input element, where the user enters data in the input, and we then just fetch it using the 'useRef' hook, but we dont feed data back into                        the input element, like we do with 'useState' hook.
                                     (ie: ' <input type="text" ref={usernameRef} /> ') --> is an Uncontrolled component.
                                     
                                     
                                     
     // ------- Example -------
                            
                      import React, { useState, useRef } from "react";
                      import Card from "../UI/Card";
                      import Button from "../Button/Button";
                      import styles from "./UserForm.module.scss";

                      const UserForm = (props) => {
                        // console.log(props);

                        // -- 🟠 USING 'useRef' --
                        const usernameRef = useRef();
                        const ageRef = useRef();


                        const submitHandler = (event) => {
                          event.preventDefault();

                          // -- 🟠 USING 'useRef' --
                          const enteredUsername = usernameRef.current.value;
                          const enteredAge = ageRef.current.value;

                          // -- Forward User data to parent ('App.js') --
                          const userData = {
                            username: enteredUsername,
                            age: enteredAge,
                          };
                          props.onSubmitUserData(userData);

                          // -- Resetting inputs --
                          // -- 🟠 USING 'useRef' [USE this hook when we just want to read a value and not manipulate it] --
                          // 📝 NOTE ->  not good practice to manipulate 'value' through 'useRef', but its okay here with resetting input values
                          usernameRef.current.value = "";
                          ageRef.current.value = "";
                        };


                        return (
                            <form className={styles.form} onSubmit={submitHandler}>
                              <label htmlFor="username">Username</label>
                              <input
                                id="username"
                                type="text"
                                // -- 🟠 USING 'useRef' --
                                ref={usernameRef}
                              />

                              <label htmlFor="age">Age(Years)</label>
                              <input
                                id="age"
                                type="number"
                                step="1"
                                // -- 🟠 USING 'useRef' --
                                ref={ageRef}
                              />

                              <Button type="submit">Add User</Button>
                            </form>
                          </Card>
                        );
                      };

                      export default UserForm;
 

``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /  Stateless vs Stateful components           ---- IMPORTANT PATTERN ----

- 'Stateful' components are components that manages some state, inside their component function, using the 'useState()' hook. 


- 'Stateless' (dumb) components are components that does NOT manage any state, inside their component function. 
                      Also called presentational or Dumb components because it doesnt have any internal state, it just outputs some data to th user.  


        -------- ⭐⭐ In most React applications, we will have *MORE* 'Stateless' (dumb) components than 'Stateful' (smart) component ⭐⭐ --------
                      Because only a few components manages states and then distributes those states to 'Stateless' componets through 'props', which then 'Stateless' components output these states
                      
       
                      
}                   
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / Rendering elements dynamically, based on an Array of data 
  
   
   - Use curly braces '{}' because we want to execute a dynamic expression in JSX code.
   
   - Use '.map()' array method to loop over the data array and render elements based on the data in the array.
             We use the '.map()' method because it returns an array of items which React can then render to the screen whereas the '.forEach()' method just loops over the elements in the array withour returning anything. 
             
    ⭐⭐⭐ IMPORTANT -> If we have an Array of custom elements in our JSX code (ie: '{[<Card />, <Card />]}' ), React is capable of rendering these elements in the array, individually side-by-side, even tho they are in an Array. Which is why we use the '.map()' method which returns an array of elements.
    
    
    // ---- Example ---- 

const App = () => {

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New LED UHD TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <>
      <Expenses expenses={expenses}></Expenses>
    </>
  );
};

export default App;

------

const Expenses = (props) => {

  return (
    <Card className="expenses">
      
      {props.expenses.map((expense) => {
        const expense_Item = (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
  
        return expense_Item;
      })}

    </Card>
  );
};

export default Expenses;




/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / "Key" prop in React


- React has a special concept when it comes to rendering lists of data, which is the 'key' attribute/prop in custom React elements or built-in HTML elements. 
        A concept that exists to ensure that React is able to update and render such lists efficiently without performance loses or bugs which may occur.

- The 'key' attribute helps React identify these individual items in the list/Array.  
- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity.

- 'key' attribute/prop values used within arrays should be unique among their siblings. However, they don’t need to be globally unique. We can use the same keys when we produce two different arrays

- 🌟 If we dont add a unique 'key' to every list item that we render on the screen (from an array ), then React will render/add the new item at the end of the list (in the DOM) and then RE-RENDER ALL of the elements in the list (in the DOM), inorder make them match the order inwhich the elements are arranged in the Array (in JSX code).       ---- Very bad for performance ----

- 🌟 Also if some of the rendered array elements have their own state, then that state will be LOST when the DOM elements are re-rendered to match the order of the array in JSX code. 
                    ---- Which could cause alot of bugs ----

- We can always add the 'key' prop to either custom elements or built-in HTML elements in React

- We can use any Primitive value as a unique Identifier. Any number, string etc....
            ⛔ DONT use the index of the an array element as a unique ID ⛔


// ---- Exmaple
      props.expenses.map((expense, expense_Index) => {
        const expense_Item = (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );

        return expense_Item;
      })




⭐⭐⭐ In short --> ALWAYS add 'key' attributes with unique values to list of items in React. 
                    Gnerate unique value using ( 'Date.now().toString()' ) which generates a random id.
                           ⛔ DONT use the index of the an array element as a unique ID ⛔
                    
}        




/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / Adding Dynamic STYLING to elements in JSX    [⛔ DONT USE ⛔]

- We can add styling dynamically in JSX code by using the 'style' attribute. 'style' attribute works a but differently when building a React application.

- The value of the 'style' attribute will be dynamic, so wrapped around curly braces 'style={}' .

- Then the 'style' attribute in React takes in a ⭐ JAVASCRIPT OBJECT ⭐ as a value, with the styling element styling inside as key/value pairs. 
                    - 'keys' are the CSS property names 
                             -- in camelCase without quotation -> '(style={{backgroundColor: props.elementColor}})' [USE THIS]
                             -- OR, with the actual CSS property name with quotations (string) ->     '( style={{"background-color": props.elementColor}}) ')
                    - 'values' are the CSS property values.
                              (ie: 'style={{height: props.elementHeight, backgroundColor: 'red'}}' attribute)

// Example: 
        <div
          className="chart-bar__fill"
          style={{ height: barFill_Height }}
        ></div>




}
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / Styling Components
  
  
  
/ 〰 Things discussed in this section: 👇

    -- Conditional & Dynamic Styling
    -- 🌟🌟 Two popular appraches for SCOPING styles to Components. (setting up styles that only affect a certain component, and is not added as Global CSS)
                          1. Using 'Styled Components' approach. A popular Third-party library that allows us to setup PRE-STYLED components with their own scoped styles.
                          2. Using 'CSS Modules' approach.
                          
- ⭐ REMEMBER -- IMPORTANT -> The linked CSS file (import './ExpenseItem.css') styling is NOT SCOPED to just the JS component function they are linked to. They are available GLOBALLY. 




// --------------------------------------------------------------------------
// ------------------------------------------------------
  / -- Conditional & Dynamic Styles     (Setting styles dynamically depending on user Input.)


  // In this example, we change the styling of the input and label, if the user enters something invalid in the input (ie: doesnt leave the input empty)
    
          / 👇👇 EXAMPLE -> conditional styling using 'INLINE-STYLES' 
                                               [⛔🤚⛔🤚 DONT USE becuase inline-styles have highest priority. Bad Practice ⛔🤚⛔🤚] 

                                  const CourseInput = (props) => {
                                    const [enteredValue, setEnteredValue] = useState("");

                                    // 🟡🟡 -- user input state (checks if user input is valid) 🟢🟢
                                    const [isValid, setIsValid] = useState(true);

                                    const goalInputChangeHandler = (event) => {
                                      // 🟡🟡 -- Change to valid as user types 🟢🟢
                                      if (event.target.value.length > 0) setIsValid(true);

                                      setEnteredValue(event.target.value);
                                    };

                                    const formSubmitHandler = (event) => {
                                      event.preventDefault();

                                      // 🟡🟡 -- If user input is inValid (empty) -> then change the 'label' and 'input' tags styling 🟢🟢
                                      if (enteredValue.trim().length === 0) {
                                        setIsValid(false);
                                        return;
                                      }

                                      props.onAddGoal(enteredValue);
                                    };

                                    return (
                                      <form onSubmit={formSubmitHandler}>
                                        <div className="form-control">
                                          {/* ------------- 🟡🟡 Contidional Styling 🟢🟢 ------------- */}
                                          <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
                                          <input
                                            style={{
                                              backgroundColor: !isValid ? "#ff000040" : "transparent",
                                              border: !isValid ? "2px solid red" : "1px solid #ccc",
                                            }}
                                          {/* ------------------------------------------------------------- */}
                                            type="text"
                                            onChange={goalInputChangeHandler}
                                          />
                                        </div>
                                        <Button type="submit">Add Goal</Button>
                                      </form>
                                    );
                                  };

                                  export default CourseInput;


  / -----------
        / 👇👇 EXAMPLE -> conditional styling using 'CSS Classes Dynamically' (using template literals)                       [🟢🟢  USE THIS  🟢🟢 ]  
                                                                             
                                                                            

                                      const CourseInput = (props) => {
                                        const [enteredValue, setEnteredValue] = useState("");
                                        const [isValid, setIsValid] = useState(true);

                                        const goalInputChangeHandler = (event) => {
                                          if (event.target.value.length > 0) setIsValid(true);

                                          setEnteredValue(event.target.value);
                                        };

                                        const formSubmitHandler = (event) => {
                                          event.preventDefault();

                                          if (enteredValue.trim().length === 0) {
                                            setIsValid(false);
                                            return;
                                          }

                                          props.onAddGoal(enteredValue);
                                        };

                                        return (
                                          <form onSubmit={formSubmitHandler}>
                                            /* ------------- 🟡🟡 Contidional Styling using Template Literals 🟢🟢 ------------- */
                                            <div className={`form-control ${!isValid ? "invalid" : ""}`}>        👈👈👈👈👈👈👈👈👈
                                              <label>Course Goal</label>
                                              <input type="text" onChange={goalInputChangeHandler} />
                                            </div>
                                            <Button type="submit">Add Goal</Button>
                                          </form>
                                        );
                                      };

                                      export default CourseInput;



`
                                            
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------
// ------------------------------------------------------
  / -- 'styled-components' library/package   --->   [Approach 1 for scoped component styling]        [🌟🌟 prefer 'CSS modules' over 'styled-components'. DONT USE??🌟🌟]
 

- ⭐ REMEMBER -- IMPORTANT -> The linked CSS file (import './ExpenseItem.css') styling is NOT SCOPED to just the JS component function they are linked to. They are available GLOBALLY. 

                🎎🎍 Its totally fine. But it might cause bugs when alot of developers are working on the same project and duplicate css class names are accidently created. 
                      Which is why we use scoped component styling.
                
                      
   - ⭐⭐⭐ The 'Styled Components' library helps us build components which have certain styles attached to them. Where the styling is scoped to the component its attached to. Cant access those styles on any other component in the App.
   
   
   - 〰 Installing 'Styled Components' library 👇
                1. cd to project folder
                2. run -> 'npm install --save styled-components'

   - 'Styled Components' uses 'Tagged template literals' which is a default JavaScript feature.

// --------------------------------------------------------------
 /`  What are 'Tagged template literals'? `     [😵 Confusing 😵. No need to understand in depth] 
 
      'Tagged template literals' offers the opportunity to parse template literals in whatever way you want. 
      It works by combining functions with template literals. 
      There are two parts of a tagged template literal, the first one being the tag function and the second, the template literal.
    
// --------------------------------------------------------------  
 
      
 -- const Button = styled.button``; 
                / In this React component function (created using 'Styled Components' library) 👆:
        - 'button' is a special kind of method that instead of using parentheses '()', it uses backticks '``', which is a special kind of syntax called 'Tagged template literals'. 
        - 'button' is being used as a method on the 'styled' Object ('styled' object is imported from the 'Styled Components' library)
        - In the end, ' styled.button`` ' will be executed as a method behind the scenes.
        - What we pass in between the backticks, will be passed to the ' button`` ' method, in a special way.
        
        - 🌟 IMPORTANT -> then ' button`` ' method will then return a NEW '<Button>' component. ('Styled Components' library has methods for ALL HTML elements. ie: ' p`` ' method, ' h1`` ' method, etc...)
        - So a ' .button`` ' method returns a button element. An ' .h1`` ' method returns an h1 element. etc.....

        
      - 🔵🟢 So in 'const Button = styled.button``;':
                     1. 'button``' metod will return a '<Button>' custom element.
                     2. The styling specified in between the backticks ' `` ', will be attached to the returned Button element as scoped styling. 
                     3. The returned button is then stored in the 'Button' variable.
                     4. 🌟🌟🌟 The returned button also has all the 'props' passed to the component function's custom element. Cannot console.log() it?
      

      - 🟤🟠 'Styled Components' syntax: 
                     1. " import styled from 'styled-components'; " --> in every component file that uses 'Styled Components' library.
                     2. Styling between backticks does NOT take in selectors/classes (ie: ⛔ '.button { ... }' ⛔)
                     3. It is similar to Sass in a way that we can use '&' to style psuedo-elements (ie: '&:hover', '&:focus'),  or target a child element (ie: '& input')
                     


// --------------------------------------------------------------
/`  How does 'Styled Components' make the styling SCOPED to the returned element??   `
      'Styled Components' make the styling SCOPED to the returned element, by dynamically generating and adding unique classes to the returned element, that are not shared by any other elements in the app.
      So in the end the styling is available GLOBALLY, but with unique classes that are dynamically assigned to elements that the styling belong to. Inorder to avoid accidently spilling styles to other components.
// --------------------------------------------------------------

      
   // ----- Exmaple  👇👇👇
   
// -------- 👇 Using 'styled-components' library 👇 
                                    import styled from "styled-components";

                                    console.dir(styled);

                                    const Button = styled.button`
                                      font: inherit;
                                      padding: 0.5rem 1.5rem;
                                      border: 1px solid #8b005d;
                                      color: white;
                                      background: #8b005d;
                                      box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
                                      cursor: pointer;

                                      /* ------ 👇 using Media queries in 'styled-components' ------ */
                                      @media screen and (max-width: 37.5em) {  
                                        margin-top: 0.75rem;
                                        width: 100%;
                                      }

                                      &:focus {
                                        outline: none;
                                      }

                                      &:hover,
                                      &:active {
                                        background: #ac0e77;
                                        border-color: #ac0e77;
                                        box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
                                      }
                                    `;

// ------------------------------------------------------------------------------------------------
// -------- 👇⛔ Without 'styled-components' library 👇⛔ --------
// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;



// ------------------
/ 'styled-components' & Dynamic props 

- SIDE NOTE: We can have multiple component function or 'styled-components' in one file.
   
  1. Adding classes dynamically to 'styled-components' 👇      [🌟 prefer this way]

// example 👇

                      import React, { useState } from "react";
                      import styled from "styled-components";

                      import Button from "../../UI/Button/Button";
                      import "./CourseInput.css";

                      // -- Creating a 'styled-component'
                      const FormControl = styled.div`
                        margin: 0.5rem 0;

                        & label {
                          font-weight: bold;
                          display: block;
                          margin-bottom: 0.5rem;
                        }

                        & input {
                          display: block;
                          width: 100%;
                          border: 1px solid #ccc;
                          font: inherit;
                          line-height: 1.5rem;
                          padding: 0 0.25rem;
                        }

                        & input:focus {
                          outline: none;
                          background: #fad0ec;
                          border-color: #8b005d;
                        }

                        &.invalid input {
                          border: 2px solid red;
                          background-color: rgba(250, 128, 114, 0.5);
                        }

                        &.invalid label {
                          color: red;
                        }
                      `;

                      const CourseInput = (props) => {
                        const [enteredValue, setEnteredValue] = useState("");

                        // -- user input state (checks if user input is valid)
                        const [isValid, setIsValid] = useState(true);

                        const goalInputChangeHandler = (event) => {
                          // Change to valid as user types
                          if (event.target.value.length > 0) setIsValid(true);

                          setEnteredValue(event.target.value);
                        };

                        const formSubmitHandler = (event) => {
                          event.preventDefault();

                          // -- If user input is inValid (empty) -> then change the 'label' and 'input' tags styling
                          if (enteredValue.trim().length === 0) {
                            setIsValid(false);
                            return;
                          }

                          props.onAddGoal(enteredValue);
                        };

                        return (
                          <form onSubmit={formSubmitHandler}>
                            {/* 👇 🟢🟢 Using 'styled-components' library to ADD scoped styling to '<FormControl></FormControl>' custom element, and thus it doesn't need a class 🟢🟢 👇 */}
                            <FormControl className={!isValid && "invalid"}>      👈👈👈👈
                              <label>Course Goal</label>
                              <input type="text" onChange={goalInputChangeHandler} />
                            </FormControl>
                            <Button type="submit">Add Goal</Button>

                            {/* 👇 Contidional Styling using Template Literals -- ⛔ WITHOUT 'styled-components' library ⛔ 👇*/}
                            <div className={`form-control ${!isValid ? "invalid" : ""}`}>
                              <label>Course Goal</label>
                              <input type="text" onChange={goalInputChangeHandler} />
                            </div>
                            <Button type="submit">Add Goal</Button>
                          </form>
                        );
                      };

                      export default CourseInput;




// ---------- `
  2. Another feature of 'styled-components' is adding 'props' to our styled-components, and then utilize thos 'props' inside the backticks in the 'styled-components' function. [ prefer this as well]
           

    - since we are between backticks ' `` ', we can use template literal syntax '${}'.
    - And inside '${}' , 'styled-components' lets us pass in an arrow-function which takes in 'props' as an argument. 
    - 'props' argument will contain all the 'props' passed into the styled-component custom element (ie: ' <FormControl inValid={!isValid}>'), which we can then use to dynamically/conditionally style the component depending on the 'props' value (true or false).

// see example below 👇

                        import React, { useState } from "react";
                        import styled from "styled-components";

                        import Button from "../../UI/Button/Button";
                        import "./CourseInput.css";

                        const FormControl = styled.div`
                          margin: 0.5rem 0;

                          & label {
                            font-weight: bold;
                            display: block;
                            margin-bottom: 0.5rem;

                            color: ${(props) => (props.invalid ? "red" : "black")};                             // 👈👈👈 using 'props'
                          }       

                          & input {
                            display: block;
                            width: 100%;
                            font: inherit;
                            line-height: 1.5rem;
                            padding: 0 0.25rem;

                            border: ${(props) => (props.invalid ? "2px solid red" : "1px solid #ccc")};         // 👈👈👈 using 'props'
                            background-color: ${(props) =>
                              props.invalid ? "rgba(250, 128, 114, 0.5)" : "transparent"};                     // 👈👈👈 using 'props'
                          }

                          & input:focus {
                            outline: none;
                            background: #fad0ec;

                            border: ${(props) =>
                              props.invalid ? "2px solid red" : "1px solid #8b005d"};                         // 👈👈👈 using 'props'
                          }
                        `;

                        const CourseInput = (props) => {
                          const [enteredValue, setEnteredValue] = useState("");

                          // -- user input state (checks if user input is valid)
                          const [isValid, setIsValid] = useState(true);

                          const goalInputChangeHandler = (event) => {
                            // Change to valid as user types
                            if (event.target.value.length > 0) setIsValid(true);

                            setEnteredValue(event.target.value);
                          };

                          const formSubmitHandler = (event) => {
                            event.preventDefault();

                            // -- If user input is inValid (empty) -> then change the 'label' and 'input' tags styling
                            if (enteredValue.trim().length === 0) {
                              setIsValid(false);
                              return;
                            }

                            props.onAddGoal(enteredValue);
                          };

                          return (
                            <form onSubmit={formSubmitHandler}>
                              {/* 👇 Using 'styled-components' library to ADD scoped styling to '<FormControl></FormControl>' custom element, and thus it doesn't need a class 👇 */}
                              <FormControl invalid={!isValid}>  // 👈👈👈 using 'props'
                                <label>Course Goal</label>
                                <input type="text" onChange={goalInputChangeHandler} />
                              </FormControl>
                              <Button type="submit">Add Goal</Button>

                              {/* 👇 Contidional Styling using Template Literals -- ⛔ WITHOUT 'styled-components' library ⛔ 👇*/}
                              <div className={`form-control ${!isValid ? "invalid" : ""}`}>
                                <label>Course Goal</label>
                                <input type="text" onChange={goalInputChangeHandler} />
                              </div>
                              <Button type="submit">Add Goal</Button>
                            </form>
                          );
                        };

                        export default CourseInput;




`
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------
// ------------------------------------------------------
  / -- 'CSS Modules'  --->   [Approach 2 for scoped component styling]                  [🌟🌟 prefer this over 'styled-components' 🌟🌟]

  
  - A CSS Module is a CSS file that defines class and animation names that are scoped locally by default

  - 🌟 Prefer 'CSS Modules' because I like the seperation between CSS and JavaScript. And like having clean JavaScript files without CSS in them. 
                   🌟 Best of both worlds  -> We have our styles in their own CSS files, but they are still scoped to the components where we import them. 
                                              By having unique dynamically generated classes, which contain our styles.

  - 'CSS Modules' is only available in projects that are configured to support it, because it needs a code transformation that need to be done, before the code runs in the browser.

  - React apps are already configured to use 'CSS Modules'

-- Using 'CSS Modules' in React: 👇
        1. Rename the component's CSS file to be like this --> 'Button.module.css'
        2. instead of importing CSS files to component function like this -> " import './Button.css' ",
           inorder to use 'CSS Modules' we import the CSS file like this  -> " import styles from './Button.module.css' "       
                        
                              / NOTE:  -- 'styles' is an object generated by 'CSS Modules', which can be named to anything we want. 
                                       -- The 'styles' object contains all the classes in the 'Button.module.css' file, as properties
                                       
        3. Inorder to use the styling in the 'styles' object we dynamically add the class to the element, like so 👇
   
                              import React from "react";

                              // importing 'CSS Module' file
                              import styles from "./Button.module.css";

                              // console.log(styles);

                              const Button = (props) => {
                                return (                               👇👇👇👇👇👇👇
                                  <button type={props.type} className={styles.button} onClick={props.onClick}>
                                    {props.children}
                                  </button>
                                );
                              };

                              export default Button;

    // ----
      ⭐⭐⭐ IMPORTANT -> if the class name has a dash (ie: 'form-control') using it like this ' className={styles.form-control} ', will give us an error
                           So we can use a different syntax to access that class through CSS modules like so --> ' className={styles['form-control']} '
                                            BECAUSE STRINGS are VALID KEYS in JavaScrip OBJECTS.

                                       👇👇👇👇👇👇👇                        👇👇👇👇👇👇👇
                   <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`} >                                            `
                    <label>Course Goal</label>
                    <input type="text" onChange={goalInputChangeHandler} />
                  </div>
    // ----
``
/ ------ 'CSS Modules' build-process behind the scenes works ijn a way that it takes the CSS classes in the 'Button.moudle.scss' file, and changes those class name to be unique in this format                                                                       -->   [filename]\_[classname]\_\_[hash]





    🌟 Section SUMAMRY --> use 'CSS Modules'



/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / Fragements, Protals, & "Refs"


- 'Fragements' ['<React.Fragment> </React.Fragment>' OR '<> </>'] let us group a list of children without adding extra nodes to the DOM.

- 'Portals' lets us render elements somewhere else in the DOM, than it would normally go to.

- "Refs" provide a way to access DOM nodes or React elements created in the render method.


// --------------------------------------------------------------------------
// -------------------------------------------------------------
  / -- 'Fragments' 

- JSX limitations 👇: (See Images in 'React Notes' folder)
      
      1. We can NOT return more than one "root" JSX element. We also can NOT store more than one "root" JSX element in a variable.
                      Solutions:            1. Wrap the adjacem JSX elements with an custom element or a built-in HTML element (As we've been doing).
                                               🛑🚏🛑 Problem --> is that we can end up with a "<div> Soup". Where we have UNNECESSARY DIVs bring rendered in the DOM ONLY because of this JSX                                                                             limitation inwhich we can only have ONE root element. 
                                                                - 👆 Not good practice because we are rendering too many (unnecessary elements) which makes our app slower. 
                                                                - Another problem with unnecessary div wrappers in the DOM, is that it might break our styling, if nested CSS selectors are used.
                                                                                                                                
                                            2. Put all the JSX elements in an Array, (each JSX element in  its own spot, seperated by commas), this is because React can render elements in Arrays just                                                like with the 'map()' method which returns an array of elements that React can render to the DOM. Each JSX element will need to have a unique key tho.                                                   [⛔ DONT USE ⛔]

                                            3. A Trick we can use is -> Creating a <Wrapper> custom element, that return 'props.children', then wrapping our other components with it. This won't create                                                unnecessary elements in the DOM. Like so: 

                                                              const Wrapper = (props) => {
                                                                return props.children;
                                                              };

                                                              export default Wrapper;
                                                      / --------

                                                              function App() {
                                                                return (
                                                                  <Wrapper>
                                                                    <UserForm onSubmitUserData={submitUserDataHandler} />

                                                                    <UserList userData={userData} />
                                                                  </Wrapper>
                                                                );
                                                              }

                                            4. 🌟🌟🌟🌟 Best solution is using either '<React.Fragment>' or Fragmenents '<> </>'  --> 
                                                                          '<React.Fragment>' --> Works on all projects. Will always work.
                                                                          '<> </>' --> depends on our poroject setup. Our build workflow needs to support this. 
                                                                                       Can be used the same way you’d use any other element except that it doesn’t support keys or attributes.
                                                                                                                        
                                                              function App() {
                                                                return (
                                                                  <React.Fragment>
                                                                    <UserForm onSubmitUserData={submitUserDataHandler} />

                                                                    <UserList userData={userData} />
                                                                  </React.Fragment>
                                                                );
                                                              }
                                                       / ------
                                                              function App() {
                                                                return (
                                                                  <>
                                                                    <UserForm onSubmitUserData={submitUserDataHandler} />

                                                                    <UserList userData={userData} />
                                                                  </>
                                                                );
                                                              }
                                                              
 ``   
 
 
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  /` Difference between 'react' & 'react-dom' packages in 'package.json' file         `
  
- the 'react' library (shown in 'package.json' file) -> is a javascript library, designed for building better user interfaces.
- the 'react-dom' library (shown in 'package.json' file) -> is a complimentary library to React which glues React to the browser DOM. 'react-dom' binds the idea of React to a web browser


- Side note:  〰 'react-dom' package is used with 'react' package to create browser/web apps.
              〰 'react-native' package is used with 'react' package to create mobile apps.
    
              
              
              
}            
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / -- 'Portals'

- 'Portals' provide a first-class way to render children into a DOM node, that exists outside the DOM hierarchy of the parent component.

- Lets us render elements somewhere else in the DOM, than it would normally go to. 
          (ie: if a '<Modal />' custom element is rendered inside a '<form>' element for some reason, it might still work fine due to styling, but it is not good practice in terms of accessibility)


- Using Portals -> 
                    1. Create the 'container' elements in the 'index.html' file located in the 'public' folder.
                                              (ie: '<div id="modal-root"><div/>')  ['container' DOM element should have an 'id' with a value like so -> ' id="{anyName}-root" ']

                    2. Go to the modal component function file and import the 'react-dom' package inorder to use the 'createPortal' method available in it.  (ie: ' import ReactDOM from "react-dom"; ')
                    (See explanation above for what 'react-dom' package is).                                                       
                    
                    3. The 'createPortal()' method needs two argumemts -> 'ReactDOM.createPortal(child, container)'
                                                -- FIRST, argument 'child' is the react node that we want to render somewhere in the DOM. Have to be JSX (ie: '<Modal />')
                                                -- SECOND, argument 'container' is a pointer to the 'container' DOM element, inwhich we want to render the 'child' DOM element in. 
                                                                      (ie: " document.getElementById('modal-root') ")

                                           [ie -->  " ReactDOM.createPortal(<Modal />, document.getElementById('modal-root')) "]

      /` 📝 SIDE NOTE: - ussually we dont need to use ' document.getElementById('...') ' or document.querySelector('...'), etc.. in React (instead we use 'ref' attribute and 'useRef' Hook). But in this case we DO need to use it.
                       - Also wherever we would normally use a components in JSX (<Modal />), we can use 'ReactDOM.createPortal()' method instead to make the component element render somewhwere else                            in the DOM
                       
`
                                                                      
//  Example: 👇                                                                   
                                                                      
      // ----- Index.html -----
        <body>
          <div id="modal-root"></div>
          <div id="root"></div>
        </body>

    // ----- Modal.js ----- 
          import React from "react";
          import ReactDOM from "react-dom";
          import Button from "../Button/Button";

          import styles from "./Modal.module.scss";

          const ModalWindow = (props) => {
            const classes = `${styles.modal} ${styles[props.className] || ""}`;

            const closeModalHandler = () => {
              props.onCloseModal();
            };

            return (
              <div className={classes}>
                <div className={styles.modal__backdrop} onClick={closeModalHandler} />

                <div className={styles.modal__inner}>
                  <h2>{props.errorTitle}</h2>
                  <p>{props.errorMessage}</p>

                  <Button
                    type="button"
                    className={styles["modal__inner-button"]}
                    onClick={closeModalHandler}
                  >
                    Okay
                  </Button>
                </div>
              </div>
            );
          };

          // 👇👇👇
          const Modal = (props) => {
            return (
              <>
                {ReactDOM.createPortal(
                  <ModalWindow
                    className={props.className}
                    errorTitle={props.errorTitle}
                    errorMessage={props.errorMessage}
                    onCloseModal={props.onCloseModal}
                  />,
                  document.getElementById("modal-root")
                )}
              </>
            );
          };

          export default Modal;




}
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / 'useRef' Hook and 'ref' attribute

                                        ⭐⭐⭐ The equivalent of the 'document.querySelector()' method in React is using 'refs' and 'useRef()' hook. ⭐⭐⭐


- 'refs' are powerful. In their most basic form, they allow us to gain access to other DOM elements and work with them. 

- 🧨 The 'ref' attribute can only be used on built-in HTML elements. 
          Inorder to use 'ref' on component function elements, we need to use 'React.forwardRef()' method && 'useImperativeHandle()' Hook, which is covered later. 

- 🛑 It is bad practice to access DOM directly when using React. (ie: ' document.getElementById("myInput").focus() ').
                          Therefore, we use 'useRef()' hook along with 'ref' attribute on Built-in HTML elements           [🌟 cant use 'ref' attribute on custom function elements]



- 'useRef' key features: 👇
                  1. Remember, like all React Hooks, 'useRef' is only usable/functional INSIDE React component functions.
                  
                  2. Using 'useRef' ->  -- 'useRef' returns a mutable Object with a 'current' property that is initialised with the value of the argument passed into the 'useRef()' Hook. 
                                                           (ie: 'initialValue' in -> ' const refContainer = useRef(initialValue); ')

                                        -- We can then use the 'ref' prop, available on ALL HTML elements inside JSX code, to CONNECT the HTML element to one of the specified 'useRef' variables. 
                                                               [very often used in INPUT elements, when we just want to FETCH/READ input data, nothing more]
                                                                   example: '<input type="text"  ref={refContainer} .> '

                                        -- 🌟🌟 Using 'ref' prop on an HTML element will set the 'current' property value of that 'useRef' hook, to the CORRESPONDING DOM node whenever that node **CHANGES**. 🌟🌟       
                                                          🧵 IMPORTANT -> So what will end-up as a value of the 'current' property, is a DOM Node itself which contains a value of the element.
                                                          
                                                From there we can acces the 'value' property available on ALL DOM nodes to get the value of the connected HTML element. 
                                                    (ie: 'refContainer.current.value') 🌟🌟
                                        
                                        -- 🔴🔴🔴 One things to note is that it is not good practice to manipulate the 'value' property of a DOM element using 'useRef' 🔴🔴🔴
                                                    (like so -> ' refContainer.current.value = 0 ').     
                                        If we want to manipulate the 'value' property of that connected DOM Node, use 'useState' instead. One exception tho inwhich its fine, is if we want to reset                                         an '<input>' value after we read it using 'useRef'. 
                                                ⭐ So RARELY use 'useRef' to manipulate the DOM ⭐
                                       

- Keep in mind that 'useRef' doesn’t notify you when its content changes. Mutating the 'current' property doesn’t cause a re-render.

- 📝 SideNote: 'ref' attribute can only be used on built-in HTML elements. And NOT on component function elements. ie: ⛔ ' <Login ref={loginRef} />' ⛔ -->  WILL NOT WORK

- SUMMARY --> use 'useRef' Hook instead of 'useState', when we just want to read a value without changing anything or re-render that component.

- using 'useState' to just read the current value of input elements, for example, is not the best solution because it re-renders the whole components everytime the input value changes. Whereas 'useRef' just lets us read the value and thats it.


// EXAMPLE 👇
            import React, { useState, useRef } from "react";

            const UserForm = (props) => {
              // -- 🟠 USING 'useRef' -- 
              const usernameRef = useRef();
              const ageRef = useRef();

              console.log(usernameRef, ageRef);

               // -- 🔴 USING 'useState' [not best when we just want to read a value] --
              // const [enteredUsername, setEnteredUsername] = useState("");
              // const [enteredAge, setEnteredAge] = useState("");

              const submitHandler = (event) => {
                event.preventDefault();

                // -- 🟠 USING 'useRef' -- 
                const enteredUsername = usernameRef.current.value;
                const enteredAge = ageRef.current.value;

                console.log(usernameRef, ageRef);

                // -- Forward User data to parent ('App.js') --
                const userData = {
                  username: enteredUsername,
                  age: enteredAge,
                };
                props.onSubmitUserData(userData);

                // -- Resetting inputs --
                // -- 🟠 USING 'useRef' [USE this hook when we just want to read a value and not manipulate it] --
                // 📝 NOTE ->  not good practice to manipulate 'value' through 'useRef', but its okay here with resetting input values
                usernameRef.current.value = "";
                ageRef.current.value = "";

                // -- 🔴 USING 'useState' [not best when we just want to read a value] --
                // setEnteredUsername("");
                // setEnteredAge("");
              };

              // -- 🔴 USING 'useState' [not best when we just want to read a value] --
              // const usernameChangeHandler = (event) => {
              //   setEnteredUsername(event.target.value);
              // };

              // -- 🔴 USING 'useState' [not best when we just want to read a value] --
              // const ageChangeHandler = (event) => {
              //   setEnteredAge(event.target.value);
              // };

              return (
                <Card>
                  <form className={styles.form} onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      // -- 🟠 USING 'useRef' --
                      ref={usernameRef}

                      // -- 🔴 USING 'useState' --
                      // onChange={usernameChangeHandler}
                      // value={enteredUsername}
                    />

                    <label htmlFor="age">Age(Years)</label>
                    <input
                      id="age"
                      type="number"
                      step="1"
                      // -- 🟠 USING 'useRef' --
                      ref={ageRef}

                      // -- 🔴 USING 'useState' --
                      // onChange={ageChangeHandler}
                      // value={enteredAge}
                    />

                    <Button type="submit">Add User</Button>
                  </form>
                </Card>
              );
            };

            export default UserForm;





/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / What are 'Side Effects' also called 'Effect'?
    
    
 - 'Side effects' are basically anything that affects something outside of the scope of the current function that’s being executed. 
  
            In React, component functions main job is to --> ' Render the UI & React to User Input '
                                                                ie: 1. Evaluate & Render JSX code
                                                                    2. Manage State & Props
                                                                    3. React to (User) events & Input
                                                                    4. Re-evaluate Component function upon State & Prop Changes

 🌟🌟🌟 So anything else other than these tasks 👆👆👆👆 in React are called 'Side Effects' or 'Effects'. 
                                                                ie: 1. Storing data in browser storage
                                                                    2. Sending Http Requests to Backend Servers
                                                                    3. Setting & Managing timers
                                                                    4. etc...
                                                                    
          ⭐ Thus these 'Side Effects' tasks must be done OUTSIDE of the our React component function and render cycle -- especially because they might block/delay rendering due to Http requests.
                                                                1. Remember, React component functions gets re-rendered whenever a state in the component changes. 
                                                                   It re-executes the component function's JSX CODE inorder to check for the new result of that component function and compare it to the                                                                    previous result of the function. Then apply those changes to the real DOM.



// --------------------------------------------------------------------------
// -------------------------------------------------------------
  / 'useEffect' hook         ⭐⭐⭐ [Besides 'useState', 'useEffect' hook is one of the most important hooks in React] ⭐⭐⭐
  
              [Handles 'Side Effect' or 'Effects' AFTER the component function render is committed to the screen]

/` 📝 See --> 'react-user-authentication-app' project where 'useEffect' hook is used. `
  
- The 'useEffect' hook lets run some additional code after React has updated the DOM.                        

- using 'useEffect' hook --> ' useEffect(() => { ... }, [dependencies]) '           

                         - The 'useEffect' hook takes in two arguments:
                                          1. The FIRST argument, is a function that will be executed AFTER the component is evaluated/rendered to the screen. 
                                              (After every evaluation of the component)
                                                 
                                          2. The SECOND argument *[OPTIONAL]*, is an array of dependencies that allow the 'useEffect' hook to execute only if any of those dependencies change,                                                      otherwise it wont.
                                              
                                              / `⭐⭐ IMPORTANT -> Dependencies are external variables that is no inside the hook.`
                                          
                                          
        ⭐⭐ IMPORTANT -> - By default, 'useEffect' hook runs after every completed render. 

                          - 🔵 If we specify an empty array in the second argument, ie: if we leave it empty and DONT specifiy any dependencies, then the 'useEffect' first argument function 
                                (called "Side Effect" function) will only run 'ONCE' when the component is rendered for the first time.  
                                            -- So the 'useEffect' first argument function, will only run 'ONCE' when the app startsup for the first time. And thats it. --
                                                                (ie: ' useEffect(() => { console.log("This will only run once") }, [] '))
                                            
                                          👆 USED WHEN --> we want some code to run only 'ONCE' when the component starts-up for the first time. 👆
                                                



                          - 🟡 If we do specify dependencies in the second argument, then the 'useEffect' hook first argument function will get executed everytime any of the specified dependencies                                    change. 
                                        Specified dependencies are ussually variables/states that are in the first argument function ("Side Effect" function). 
                                        No need to add these as dependencies --> 1. state updating function (ie: 'setFormIsValid')
                                                                                 2. Browser 'built-in' APIs or functions (ie: 'setTimout()')
                                                                                 3. Variables and functions that are defined OUTSIDE of our component. 
                                                               
                                `/ Example of what to add and what to NOT add as dependencies in 'useEffect()' hook ` -->  
                                                                                ' https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25871518 ' 


                                                                (ie: 'useEffect(() => {
                                                                        setFormIsValid(
                                                                          enteredEmail.includes("@") && enteredPassword.trim().length > 6
                                                                        );
                                                                      }, [enteredEmail, enteredPassword]); '))
                                                                
                                          👆 USED WHEN --> we want to execute certain code ONLY when a variables/dependencies change (usually a state or prop). HELPS us avoid 'DUPLICATE' code. 👆

  


                          
                          - 🟠 If we DO NOT specify ANYTHING in the second argument, then the 'useEffect' hook first argument function ("Side Effect" function) will get executed on every component re-                                render. The 'useEffect' hook will be USELESS because if we move the "Side Effect" function outside of the 'useEffect' hook, it will also get executed on                                                every component function re-render.
                                                                (ie: ' useEffect(() => { console.log("This will on every component function re-rerender")} '))
                                                      
                                           👆 USED WHEN --> NEVER? USELESS??. 👆



/` ----- Example of 'useEffect' hook WITHOUT dependencies -----`

                      import React, { useState, useEffect } from "react";
                      import Login from "./components/Login/Login";
                      import Home from "./components/Home/Home";
                      import MainHeader from "./components/MainHeader/MainHeader";

                      function App() {
                        const [isLoggedIn, setIsLoggedIn] = useState(false);

                        // -------------------------------------
                        /* 🟠 - Using the 'useEffect' Hook here to access data stored in the browser storage. So that when page refreshes the user is still logged in.
                              - The 'useEffect' Hook first argument function, will only run *ONCE* when the app starts-up for the first time, ⭐ since there are NO dependencies specified in the second                                 argument of the hook. 
                              - The 'useEffect' hook itself runs with every Render, but the first argument function executes ONLY if the specified dependencies change. Since no dependencies are                                       specified, the first argument function will NOT be executed with every re-render after the app starts.  
                              👇👇👇
                      */
                        useEffect(() => {
                          const localStorage_LogInStatus = +localStorage.getItem("isLoggedIn");

                          if (localStorage_LogInStatus === 1) {
                            console.log("LOGGED IN 💃💃");
                            setIsLoggedIn(true);
                          }
                        }, []);
                        // -------------------------------------

                        const loginHandler = (email, password) => {
                          // - Browser has multiple storages we can use. Most common for this case, is cookies storage or Local storage.
                          // - We'll use local storage because it is easy to work with (built-into the browser). Can access local storage in browser through the 'application' tab
                          // - Storing 'isLoggedIn' state value in local storage using -> 'localStorage' GLOBAL object, available in the browser.
                          localStorage.setItem("isLoggedIn", "1"); //    --> value of '1' means LOGGED IN 🟢.
                          setIsLoggedIn(true);
                        };

                        const logoutHandler = () => {
                          localStorage.setItem("isLoggedIn", "0"); //    --> value of '0' means NOT LOGGED IN 🔴.
                          setIsLoggedIn(false);
                        };

                        return (
                          <React.Fragment>
                            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
                            <main>
                              {!isLoggedIn && <Login onLogin={loginHandler} />}
                              {isLoggedIn && <Home onLogout={logoutHandler} />}
                            </main>
                          </React.Fragment>
                        );
                      }

                      export default App;


// -------
/ 'useEffect' hook WITH Dependencies `

- We often DO need to specify dependencies in the 'useEffect' hook, because we dont want 'useEffect' to only run once when the app starts-up for the first time. 
      But after every component re-rerender, if any specified dependencies change.

- 'useEffect' hook is a very important hook, that lets us execute certain code, is response to something. 
                        In addition to the 'Side Effects' mentioned above. That something could be: 
                                                               1. The component being loaded for the first time. 
                                                               2. An '<input>' value (state) being updated by user input.
                                                               3. etc...
                  So for-instance we can use it to re-execute a component funciton using 'setState', inresponse to a 'state' being changed. Even tho this is not one of the 'Side Effects' mentioned                       above, we can consider it as such. 👇👇👇
                  
                                      import React, { useState, useEffect } from "react";

                                      const Login = (props) => {
                                        const [enteredEmail, setEnteredEmail] = useState("");
                                        const [emailIsValid, setEmailIsValid] = useState();
                                        const [enteredPassword, setEnteredPassword] = useState("");
                                        const [passwordIsValid, setPasswordIsValid] = useState();
                                        const [formIsValid, setFormIsValid] = useState(false);

                                        // ---------------------------
                                        /* 🟠 using 'useEffect' hook. 
                                              - Another usecase of 'useEffect' hook is that it helps us avoid duplicate code by having that code in one place (in the 'useEffect' hook FIRST argument), 
                                                and then executing that code, whenever certain variables/dependencies change, usually a state or prop (specified in the 'useEffect' hook SECOND                                                           argument). 
                                              - SIDE NOTE: we can consider the case below as a side effect, and thus use 'useEffect' to execute code in response to a 'state' being changed.
                                      */
                                        useEffect(() => {
                                          setFormIsValid(
                                            enteredEmail.includes("@") && enteredPassword.trim().length > 6
                                          );
                                        }, [enteredEmail, enteredPassword]);

                                        // ---------------------------

                                        return (
                                          <Card className={classes.login}>
                                            <form onSubmit={submitHandler}>
                                              <div
                                                className={`${classes.control} ${
                                                  emailIsValid === false ? classes.invalid : ""
                                                }`}
                                              >
                                                <label htmlFor="email">E-Mail</label>
                                                <input
                                                  type="email"
                                                  id="email"
                                                  value={enteredEmail}
                                                  onChange={emailChangeHandler}
                                                  onBlur={validateEmailHandler}
                                                />
                                              </div>

                                              <div
                                                className={`${classes.control} ${
                                                  passwordIsValid === false ? classes.invalid : ""
                                                }`}
                                              >
                                                <label htmlFor="password">Password</label>
                                                <input
                                                  type="password"
                                                  id="password"
                                                  value={enteredPassword}
                                                  onChange={passwordChangeHandler}
                                                  onBlur={validatePasswordHandler}
                                                />
                                              </div>

                                              <div className={classes.actions}>
                                                <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                                                  Login
                                                </Button>
                                              </div>
                                            </form>
                                          </Card>
                                        );
                                      };

                                      export default Login;
                                      
                                      
`     
// ----------------------------------------------------------                                             
/ ` Adding Nested Properties As Dependencies To useEffect `
                                                
                                           https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/26043040#questions
                                                
                                                
 - In the previous lecture, we used object destructuring to add object properties as dependencies to 'useEffect()'.

                               ` const { value: someProperty } = someObject;

                                useEffect(() => {
                                  // code that only uses someProperty ...
                                }, [someProperty]); `


 - This is a very common pattern and approach,that is commonly used.

 - The key thing is NOT that we use destructuring but that we pass 'specific properties' instead of the entire object as a dependency.

 - We could also write this code and it would work in the same way.

                                useEffect(() => {
                                  // code that only uses someProperty ...
                                }, [someObject.someProperty]);

                              ` 👆 This works just fine as well! ⛔ DONT USE ⛔ 👆`

 - But we should avoid this code 👆:

                                useEffect(() => {
                                  // code that only uses someProperty ...
                                }, [someObject]);

 - Why?
Because now the effect function would re-run whenever 'ANY' property of someObject changes - not just the one property (someProperty in the above example) our effect might depend on.                                                

// -----------------------------------------------------------------------------
/` Using the 'useEffect' CLEANUP function `
                                                
   There is an optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!
                                                
    
If our 'useEffect' returns a function, React will run it when it is time to clean up.

This cleanup mechanism can be usefull to implement a 'Debounce' Pattern as the user types something in the input field which sends an HTTP request to the backend for a search result for instance.
See below for explanation on what 'Debounce' pattern is 👇.


// ------------
    /` ⭐ What is Debaouncing pattern? ⭐`   ' https://skilled.dev/course/debounce '            / `[ INTERVIEW QUESTION ]`

 - Debouncing is a good method for controlling events that require sporadic user actions such as typing in an input field or clicking a button. 
 - In the case of a search bar that makes API calls according to user input, implementing a debounce is a good way to reduce the number of calls made to the API.
      It is a practical solution used in real-world applications to improve performance and demonstrates that you understand the tools to write good code for real users.

 -- A 'debounce' pattern is utilized when you only care about the final state. 
                    For example, waiting until a user stops typing to fetch typeahead search results.
 -- A 'throttle' pattern is best used when you want to handle all intermediate states but at a controlled rate. 
                    For example, track the screen width as a user resizes the window and rearrange page content while it changes instead of waiting until the user has finished.

Common scenarios for a debounce are resize, scroll, and keyup/keydown events. In addition, you should consider wrapping any interaction that triggers excessive calculations or API calls with a debounce.



/ ` 👇👇 Generic Debounce funciton using Vanilla JS 👇👇`
                                              // Returns a function, that as long as it continues to be invoked, will not
                                              // be triggered. The function will be called after it stops being executed for
                                              // `wait` milliseconds.
                                              const debounce = (func, wait) => {
                                                let timeout;

                                                // This is the function that is returned and will be executed many times
                                                // We spread (...args) to capture any number of parameters we want to pass
                                                return function executedFunction(...args) {

                                                  // The callback function to be executed after
                                                  // the debounce time has elapsed
                                                  const later = () => {
                                                    // clear the timeout to indicate the debounce ended
                                                    // and make sure it is all cleaned up
                                                    clearTimeout(timeout);

                                                    // Execute the callback
                                                    func(...args);
                                                  };

                                                  // This will reset the waiting every function execution.
                                                  // This is the step that prevents the function from
                                                  // being executed because it will never reach the
                                                  // inside of the previous setTimeout
                                                  clearTimeout(timeout);

                                                  // Restart the debounce waiting period.
                                                  // setTimeout returns a truthy value
                                                  timeout = setTimeout(later, wait);
                                                };
                                              };


                                              // -----------
                                              // Using the Vanilla JS Debounce Function
                                              var returnedFunction = debounce(function() {
                                                // All the taxing stuff you do
                                              }, 250);

                                              window.addEventListener('resize', returnedFunction);


// ------------
/ ` 'Debouncing' Pattern using 'useEffect' cleanup function ` 

- We can return something in the 'Side Effect' funciton inside the 'useEffect' hook's 'first argument.
- The returned SOMEHTING needs to be a FUNCTION itself. Can be an anonymous arrow funciton, or a named funciton. The returned function is called the 'Cleanup' function.
- ⭐⭐ The 'Cleanup' function runs (as a cleanup process):
                                  1. *BEFORE* every 'Side Effect' funciton execution 
                                  2. and when the component is REMOVED or ADDEDD to the DOM. ⭐⭐
          🌟🌟🌟🌟 It does NOT run before the *FIRST* 'Side Effect' function execution, tho (ie: the 'Cleanup' function does NOT run as the app startsup for the first time).
        

 - With every keystroke we clear the timout. So that we only have one ongoing timer at a time.
          So as long as the user keeps typing, the timer keeps resetting. 
                Once they stop typing, the returned function ('Cleanup' function) gets executed.

  
// ---- example 

                    useEffect(() => {
                      const runLater = setTimeout(() => {
                        setFormIsValid(
                          enteredEmail.includes("@") && enteredPassword.trim().length > 6
                        );
                      }, 500);

                      // -- 'Cleanup' function inside 'Side Effect' function 👇
                      return () => {
                        // - cancels the timeout of previously executed side Effect function (ie: the 'runLater' function) as long as user types
                        clearTimeout(runLater);
                      };
                    }, [enteredEmail, enteredPassword]);




/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / 'useReducer' Hook 
  
  
 - The 'useReducer' Hook is similar to the 'useState' Hook.

 - It allows for custom state logic.

 - If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
 
 - use 'useReducer' hook when: 
                          1. We have multiple states that belong together
                                        ie:     const [enteredEmail, setEnteredEmail] = useState("");            ---- 🔵
                                                const [emailIsValid, setEmailIsValid] = useState();              ---- 🔵
                                                const [enteredPassword, setEnteredPassword] = useState("");      ---- 🟠
                                                const [passwordIsValid, setPasswordIsValid] = useState();        ---- 🟠
                                                const [formIsValid, setFormIsValid] = useState(false);

                          2. 🌟 Or if we want to update a state that depends on ANOTHER state.
                                  Inwhich case we can NOT use the function form of 'setState' function. --> ' setAge((previousAge) => previousAge + 1); '
                                                              👇👇                             👇👇
                                      ie: ' setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim().length > 6); '      --> previous state for 'setFormIsValid' function is 'formIsValid'
                                                                                  && 
                                                            ' setEmailIsValid(enteredEmail.includes("@")); '                    --> previous state for 'setEmailIsValid' function is 'emailIsValid',                                                                                                                                         thus using previousState function form to access the previous state of a different state                                                                                                                                    will not work.
                                                            

// ----
/ ` Using the 'userReducer' hook `


        const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

- Just like 'useState', 'userReducer' returns an array with exactly two values.
              So we can use destrucuting to pull out these values and store them in variables.
              
             💨 'state' --> is the latest 'state' snaphsot
             
             💨 'dispatchFn' --> a function that allows us to update the 'state' snapshot.  Dispatches an ACTION.
                                     Same as 'useState' hook, with some difference:
                                                    〰 Instead of just setting a new 'state' value, the 'dispatchFn' function dispatches an ACTION,
                                                                  which will be consumed by the 'reducerFn' function.
                                                    〰 'dispatchFn' can have any type as an argument. But as a convention, it is usually an Object:
                                                        1. with a 'type' property with a value of a string in ALL CAPS, that describes the state.
                                                        2. and another property that holds a value of what we want the state to be updated to when we call the 'dispatchFn()' function
                                           ie -> ' dispatchFn({type: "INPUT_VALUE", val: entry.target.value}) '

                               🌟 ARGUMENTS PASSED INTO 'dispatchFn' funciton WILL BE AVAILABLE IN THE 'reducerFn' function's second parameter 🌟
                                                                  
             💨 'reducerFn' --> a function that receives two arguments: 
                                              1. the LATEST 'state' snapshot 
                                              2. and the LAST ACTION that was dispatched from the 'dispatchFn' function, which triggered the 'useReducer' function execution. 
                                                          (argument passed into the 'dispatchFn' function)  
                                 🌟 Then we should return a newState in the 'reducerFn' function (Could be of any type, Object for instance)
                                 'reducerFn' is usually defined outside of the scope of the component function.
                                 
                                 ie -> ' const dispatchFn => ( [latest state snapshot], ["dispatchFn" argument] ) { return(...) } '   OR     ' const dispatchFn => ( state, action ) { return(...) } '
                                  
             💨 'initialState' --> Sets an 'initialState' for the 'state' snapshot. 

             💨 'initFn' --> a function that sets the 'initialState'



    // EXAMPLE 👇

                            // 🔴🔴 -- using 'useReducer' Hook --
                            const reducerEmail = (state, action) => {
                              if (action.type === "EMAIL_INPUT") {
                                return { value: action.value, isValid: action.value.includes("@") };
                              }

                              if (action.type === "EMAIL_BLUR") {
                                // using LATEST state
                                return { value: state.value, isValid: state.value.includes("@") };
                              }

                              return { value: "", isValid: false };
                            };

                            // ---
                            // 🔴🔴 -- using 'useReducer' Hook --
                            const initialEmailState = { value: "", isValid: null };

                            // ----------
                            // 🔴🔴 -- using 'useReducer' Hook --
                            const reducerPassword = (state, action) => {
                              if (action.type === "PASSWORD_INPUT") {
                                return { value: action.value, isValid: action.value.length > 6 };
                              }

                              if (action.type === "PASSWORD_BLUR") {
                                // using LATEST state
                                return { value: state.value, isValid: state.value.length > 6 };
                              }

                              return { value: "", isValid: null };
                            };

                            // ---
                            // 🔴🔴 -- using 'useReducer' Hook --
                            const initialPasswordState = { value: "", isValid: null };

                            // ---------------- Component Function --------------------------------------
                            const Login = () => {
                              // ---------------------------
                              // 🟠 -- using 'useState' --
                              // const [enteredEmail, setEnteredEmail] = useState("");
                              // const [emailIsValid, setEmailIsValid] = useState();
                              // const [enteredPassword, setEnteredPassword] = useState("");
                              // const [passwordIsValid, setPasswordIsValid] = useState();
                              const [formIsValid, setFormIsValid] = useState(false);

                              // ---------------------------
                              // 🔴🔴 -- using 'useReducer' Hook --
                              const [email, dispatchEmail] = useReducer(reducerEmail, initialEmailState);
                              const [password, dispatchPassword] = useReducer(
                                reducerPassword,
                                initialPasswordState
                              );

                              // ---------------------------
                              // 🟠 using 'useEffect' hook 
                              // ⭐⭐ IMPORTANT - Common pattern  -> Object Destructuring with newly assigned variable names 👇
                              const { isValid: emailIsValid } = email;
                              const { isValid: passwordIsValid } = password;

                              useEffect(() => {
                                const runLater = setTimeout(() => {
                                  console.log("Debouncing -- Checking Form Validity!!!");

                                  setFormIsValid(emailIsValid && passwordIsValid);

                                  console.log(emailIsValid, passwordIsValid);
                                }, 500);

                                // -- 'Cleanup' function inside 'Side Effect' function 👇
                                return () => {
                                  console.log("CLEANUP");
                                  // -- cancels the timeout of previously executed side Effect function (ie: the 'runLater' function) as long as use types
                                  clearTimeout(runLater);
                                };
                              }, [emailIsValid, passwordIsValid]);
                              // ---------------------------

                              const emailChangeHandler = (event) => {
                                // 🔴🔴 -- using 'useReducer' Hook --
                                dispatchEmail({
                                  type: "EMAIL_INPUT",
                                  value: event.target.value,
                                });

                                // 🟠 -- using 'useState' --
                                // setEnteredEmail(event.target.value);
                                // setFormIsValid(email.isValid && password.isValid);
                              };

                              const passwordChangeHandler = (event) => {
                                // 🔴🔴 -- using 'useReducer' Hook --
                                dispatchPassword({ type: "PASSWORD_INPUT", value: event.target.value });

                                // 🟠 -- using 'useState' --
                                // setEnteredPassword(event.target.value);
                                // setFormIsValid(email.isValid && password.isValid);
                              };

                              const validateEmailHandler = () => {
                                // 🔴🔴 -- using 'useReducer' Hook --
                                dispatchEmail({ type: "EMAIL_BLUR" });

                                // 🟠 -- using 'useState' --
                                // setEmailIsValid(enteredEmail.includes("@"));
                              };

                              const validatePasswordHandler = () => {
                                // 🔴🔴 -- using 'useReducer' Hook --
                                dispatchPassword({ type: "PASSWORD_BLUR" });

                                // 🟠 -- using 'useState' --
                                // setPasswordIsValid(enteredPassword.trim().length > 6);
                              };

                              // ---------------------------
                              // -- 🟡 'Forwarding refs' ->  Creating References to component function elements
                              const emailInputRef = useRef();
                              const passwordInputRef = useRef();

                              // ---------------------------
                              const submitHandler = (event) => {
                                event.preventDefault();

                                if (formIsValid) {
                                  // -- 🔵 using 'useContext'
                                  authContextData.onLogin(email.value, password.value);

                                  // 🟠 -- using 'useState' --
                                  // props.onLogin(enteredEmail, enteredPassword);
                                } else if (!emailIsValid) {
                                  // -- 🟡 'Forwarding refs' ->  focus email input if invalid
                                  emailInputRef.current.focus();
                                } else {
                                  passwordInputRef.current.focus();
                                }
                              };

                              // -- 🔵 using 'useContext'
                              const authContextData = useContext(AuthContext);

                              return (
                                <Card className={classes.login}>
                                  <form onSubmit={submitHandler}>
                                    <Input
                                      ref={emailInputRef}
                                      isValid={emailIsValid}
                                      value={email.value}
                                      id="email"
                                      label="E-mail"
                                      type="email"
                                      onChange={emailChangeHandler}
                                      onBlur={validateEmailHandler}
                                    />

                                    <Input
                                      ref={passwordInputRef}
                                      isValid={passwordIsValid}
                                      value={password.value}
                                      id="password"
                                      label="Password"
                                      type="password"
                                      onChange={passwordChangeHandler}
                                      onBlur={validatePasswordHandler}
                                    />

                                    <div className={classes.actions}>
                                      <Button type="submit" className={classes.btn}>
                                        Login
                                      </Button>
                                    </div>
                                  </form>
                                </Card>
                              );
                            };

                            export default Login;



// --------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------
  / When to use 'useState' and when to use 'useReducer'

 
    Check image in React Notes folder called ' When to use useState vs useReducer hook '  
            
                                             ' https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599238#questions '



/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / Context API

- 'Context API' is a component-wide, "behind the scenes" State Stroage.

- The 'Context API' is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from child to parent to GrandParent and then to the child that needs that prop, and so on. So we pass these props to components that dont need or use them, just to reach the component that needs that prop.

- Context is designed to share data that can be considered “global” for a tree of React components.

- ⭐⭐ Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

- These prop chains could get inconvenient and unmanageable as apps get bigger and bigger.

- 'Context API' allows us to manage states behind the scenes, such that we are able to direclty change those states from any component in our app, and directly pass it to any compoennt in our app, without building a prop chain.


- We can have multiple contexts for multiple global states in our app. Or just one Context that contains all of our global states.



-- 🌟🌟 Using Context API: 
                      1. Create a folder called 'content' or 'store' in our app. In there add a file called 'auth-context.js' 
                                                    (we added 'auth-' to the file name since we are going to manage an authentication state in that file)
                                                           (Also not in PascalNotation 'AuthCantext.js' since this file wont be storing component)

                                              // ------------

                      2. In 'auth-context.js' file:  
                                        1) We import React (' import React from "react" ')

                                        2) Then create Context Object, which takes in a default context as an argument. The default argument can be anything but is ussually an object.
                                                            (The context Object is our app or component-wide state)
                                                             
                                                                        ie: 'const AuthContext = React.createContext(defaultValue) '

                                        3) ' const AuthContext = React.createContext(defaultValue) ' returns an Object that CONTAINS components, which will be stored in the 'AuthContext' variable.
                                        
                                        4) Then export the 'AuthContext' Object, to make it available in other files/components.
                                        
                                                 ie ->   import React from "react";

                                                         const AuthContext = React.createContext({ isLoggedIn: false });

                                                         export default AuthContext; 
                                               // ------------

                      3. 'Provide' the Context to components that need to have access to it, by wrapping the components JSX code with ' <ContextName.Provider> ... <ContextName.Provider/> '
                  
                              - Tell react to give access to the context, to components that are wrapped by the Context.
                                  To do so -> We wrap all the components that need to access to this Context Object with this ' <ContextName.Provider> ... <ContextName.Provider/> ',                                                 in their returned JSX code. 
                                                             
                                                      
                      ⭐⭐ Components wrapped with the ' <ContextName.Provider> ... <ContextName.Provider/> ' will have ACCESS to that Context, along with ALL their DESCENDANT components.                                                                So all their children components, and their children children components, and so on ⭐⭐
                                  The purpose for having a Context Provider wrap around children is to keep track of state and props
                                            
                              - Then specify the values that we want to pass on to components that consumes the Context, using the 'value={ ... }' prop                                                                             available on all ' <ContextName.Provider> '. 



                            ie ->                             function App() {
                                                                const [isLoggedIn, setIsLoggedIn] = useState(false);

                                                                return (
                                                                  <AuthContext.Provider value={{isLoggedIn: isLoggedIn}}>     👈👈👈👈👈👈      
                                                                    <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> 
                                                                    <main>
                                                                      {!isLoggedIn && <Login onLogin={loginHandler} />}
                                                                      {isLoggedIn && <Home onLogout={logoutHandler} />}
                                                                    </main>
                                                                  </AuthContext.Provider>    👈👈👈👈👈👈
                                                                );
                                                              }

                                                              export default App;


                      4. 'Listen' to or 'Consume' the Context in components that need to access the Context Data.
                                There are 'TWO' ways to Listen or Consume the context in components.
                                
      [🔴 DONT USE 🔴] -->    💨💨 FIRST way, using ' <ContextName.Consumer> ... <ContextName.Consumer/> '
                                       To get access to the Provided Context values in 'value={ ... }' prop, we need wrap the components that want to consume the context with                                                               ' <ContextName.Consumer> ' which should have an anonymous function inside it as a child. The anonymous function will receive all the properties passed into                                          the 'value={ ... }' prop as an argument which we can then use in the component. 
                                             
                             ie -->                      const MainHeader = (props) => {
                                                            return (
                                                              <AuthContext.Consumer>             👈👈👈👈👈👈   
                                                                {(contextData) => {                👈👈👈👈👈👈   
                                                                  console.log(contextData);                 

                                                                  return (
                                                                    <header className={classes["main-header"]}>
                                                                      <h1>A Typical Page</h1>
                                                                      <Navigation
                                                                        isLoggedIn={contextData.isLoggedIn}              👈👈👈👈👈👈   
                                                                        onLogout={props.onLogout}
                                                                      />
                                                                    </header>
                                                                  );
                                                                }}
                                                              </AuthContext.Consumer>                    👈👈👈👈👈👈   
                                                            );
                                                          };

                                                          export default MainHeader;




                                      ⭐⭐ Components that needs to consume the Context need to have access to it first.  Explained in step 3 ' Provide it '  👆👆 ⭐⭐
                                               If the consumer components does NOT have access to the Context. It will use the Context 
                                                    'defaultValue' instead, but wont be able to change the value of the Context values.                                                                        
                                                                   
                                                                                                        
                                                                                                               
      [🟢 USE THIS 🟢] -->   💨💨 SECOND way, using the 'useContext' hook.
                                         ' const value = useContext(MyContext); '

                                    - Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.
                                    - The current context value is determined by the 'value={ ... }' prop of the nearest '<MyContext.Provider>' above the calling component in the tree.

      
      
                                   - Don’t forget that the argument to useContext must be the context object itself. So the Context that we created in the 'contexts' folder.

                                                ie -->  'const contextData = useContext(AuthContext)'

                                  - A component calling 'useContext' will always re-render when the context value changes.
                                  
                                  
                                     // example -->                                        
                                                        import AuthContext from "../contexts/authContext";       👈👈👈👈👈👈   

                                                        const Navigation = (props) => {
                                                          const contextData = useContext(AuthContext);       👈👈👈👈👈👈   
                                                          console.log(contextData);

                                                          return (
                                                            <nav className={classes.nav}>
                                                              <ul>
                                                                {contextData.isLoggedIn && (     👈👈👈👈👈👈   
                                                                  <li>
                                                                    <a href="/">Users</a>
                                                                  </li>
                                                                )}
                                                                {contextData.isLoggedIn && (      👈👈👈👈👈👈   
                                                                  <li>
                                                                    <a href="/">Admin</a>
                                                                  </li>
                                                                )}
                                                                {contextData.isLoggedIn && (         👈👈👈👈👈👈   
                                                                  <li>
                                                                    <button onClick={props.onLogout}>Logout</button>
                                                                  </li>
                                                                )}
                                                              </ul>
                                                            </nav>
                                                          );
                                                        };

                                                        export default Navigation;
                                                                                                                         
                                                                                           
  

// ----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ React Context API Limitations

  - React Context is NOT optimized for hight frequency changes. ie: not optimitzed for states that changes every second or even multiple times/second.

  🌟 If we DO have a state that needs to be Global and that also changes often we can use REDUX.
  - Redux is a state solution that we generally prefer for big applications. You could very well build a medium scale application with just Context and React Hooks, so you don't really need Redux     for it but you can use it there too.

                                                                             
    


}
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /  'Forwarding Refs' technique using --> 'forwardRef()' method && 'useImperativeHandle()' Hook             [RARELY USED --> usefull in reusable component libraries]    
        
                { 😵 confusing topic look at documentation & youtube}
 
                             --- [🛑 Wont and shouldnt be used often because its not the typical react pattern, but could be usefull in some cases 🛑] ---
   
                ⭐⭐  Inorder to be able to use the 'ref' attribute on 'React component function elements' we need to use the 'forwardRef()' method && 'useImperativeHandle()' Hook  ⭐⭐
 
      // -----                                
  - The 'useImperativeHandle()' Hook allows us to expose a value, state, or function inside a parent component function to the child component element, when using 'ref' attribute in the child component element.
          (should be used with 'forwardRef()')

  🌟🌟 Normally, for a parent component to call a function, it must be defined in the parent component and passed down via props to the child component. 'useImperativeHandle()' Hook allows us to break that rule and call a function in the parent component that is defined in the CHILD component.
  
         〰  HAVE TO use 'useRef()' hook when we are using the 'useImperativeHandle()' Hook, in the PARENT component.
         〰 'useImperativeHandle(ref, () => { return { ... }})' takes in two arguments: 
                                                      1. FIRST argument is a 'ref' also available in the Parent component funciton as a parameter, IF a 'ref' attribute was to be set on a Child                                                                  component element from the outside. This 'ref' argument will establish the connection between the child component element 'ref' attribute and                                                            the Parent component.
                                                      2. SECOND argument is a funciton that should return an Object. That Object will contain all the data that we can use from OUTSIDE the Parent                                                                component, by the Child component elements via 'useRef()'
             
     // ----- 
  - The 'forwardRef()' method allows parent components to pass down (i.e., “forward”) 'ref' to their children. Using 'forwardRef' in React gives the child component a reference to a DOM element created by its parent component. This then allows the parent to read and modify its child element anywhere it is being used.
        
      〰 'forwardRef()' method still returns a React component, but a React component that is capable of being bound to a 'ref'. ie: its child component elements can have/use the 'ref' attribute.
  
 
 - With 'forwardRef()' method && 'useImperativeHandle()' Hook, we can expose functionalities from a parent component to its React component elements (child elements)  

     〰 Only things that we will be able to use on Child component elements through 'ref' attribute, is what is specified in the 'useImperativeHandle()' Hook second argument function.
  

  - This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries.
  
  - 🌟 Component functions can have another parameter inaddition to the 'props' parameter, which exists when you define a component with 'React.forwardRef()' call.
                Regular function or class components don’t receive the 'ref' argument, and ref is not available in props either.
                          The 'ref' parameter in component function --> links the parent element to the child component element through 'ref' attribute. 
                                Which is then passed to 'useImperativeHandle(ref, () => { return { ... }})'
                                                                             👆👆

 

  
 --- Using 'Forwarding Refs' technique to call funciton that in the Parent component, from the child component👇          
      
                                        🌠✨ [REAL WORLD USECASE to 'focus()' react component elements using 'forwardRef()' method && 'useImperativeHandle()' Hook ] ✨🌠
 
 // EXAMPLE 👇👇
      // -- PARENT component function -- 
                              import React, { useRef, useImperativeHandle } from "react";
                              import classes from "./Input.module.css";

                              // -- 'ref' attribute contains the data passed in to the 'useImperativeHandle()' second argument, which can be used by the component child elements, through 'ref'
                              const Input = React.forwardRef((props, ref) => {      👈👈👈👈👈👈👈
                                const inputRef = useRef();              👈👈👈👈👈👈👈
                              
                                const focus = () => {
                                  inputRef.current.focus();
                                };

                                // --- Calling this function from Parent to do something to child (uncommon, but could be useful in reusable component libraries)
                                useImperativeHandle(ref, () => {         👈👈👈👈👈👈👈
                                  return { focus: focus };
                                });

                                return (
                                  <div
                                    className={`${classes.control} ${
                                      props.isValid === false ? classes.invalid : ""
                                    }`}
                                  >
                                    <label htmlFor={props.id}>{props.label}</label>
                                    <input
                                      ref={inputRef}          👈👈👈👈👈👈👈
                                      type={props.type}
                                      id={props.id}
                                      value={props.value}
                                      onChange={props.onChange}
                                      onBlur={props.onBlur}
                                    ></input>
                                  </div>
                                );
                              });

                              export default Input;`

 
 
      // -- CHILD component element being used ----

                          const Login = () => {

                            // ---------------------------
                            // -- 🟡 'Forwarding refs' ->  Creating References to component function elements
                            const emailInputRef = useRef();               👈👈👈👈👈👈👈
                            const passwordInputRef = useRef();             👈👈👈👈👈👈👈

                            // ---------------------------
                            const submitHandler = (event) => {
                              event.preventDefault();

                              if (formIsValid) {
                                authContextData.onLogin(email.value, password.value);
                              } else if (!emailIsValid) {
                                // -- 🟡 'Forwarding refs' ->  focus email input if invalid
                                emailInputRef.current.focus();                👈👈👈👈👈👈👈
                              } else {
                                passwordInputRef.current.focus();                 👈👈👈👈👈👈👈
                              }
                            };


                            return (
                              <Card className={classes.login}>
                                <form onSubmit={submitHandler}>
                                  <Input
                                    ref={emailInputRef}                 👈👈👈👈👈👈👈
                                    isValid={emailIsValid}
                                    value={email.value}
                                    id="email"
                                    label="E-mail"
                                    type="email"
                                    onChange={emailChangeHandler}
                                    onBlur={validateEmailHandler}
                                  />

                                  <Input
                                    ref={passwordInputRef}                      👈👈👈👈👈👈👈
                                    isValid={passwordIsValid}
                                    value={password.value}
                                    id="password"
                                    label="Password"
                                    type="password"
                                    onChange={passwordChangeHandler}
                                    onBlur={validatePasswordHandler}
                                  />

                                  <div className={classes.actions}>
                                    <Button type="submit" className={classes.btn}>
                                      Login
                                    </Button>
                                  </div>
                                </form>
                              </Card>
                            );
                          };

                          export default Login;


          
         // ----------------------------------------------------------------------------------------
 --- Another example using 'Forwarding Refs' technique where we just want to use 'ref' in the custom component, WITHOUT calling any function from the Parent component  👇 


        // -- Parent component
                  import React from "react";
                  import classes from "./Input.module.css";

                  const Input = React.forwardRef((props, ref) => {          👈👈👈👈👈👈👈👈👈👈👈👈
                    return (
                      <div className={classes.input}>
                        <label htmlFor={props.inputProps.id}>{props.label}</label>
                        <input ref={ref} {...props.inputProps} />              👈👈👈👈👈👈👈👈👈👈👈👈
                      </div>
                    );
                  });

                  export default Input;




      // -- Child Component element

                import React, { useRef } from "react";
                import Input from "../../UI/Input/Input";
                import classes from "./MealItemForm.module.css";

                const MealItemForm = (props) => {
                  const inputRef = useRef();                      👈👈👈👈👈👈👈👈👈👈👈👈

                  const onSubmitHandler = (event) => {
                    event.preventDefault();
                    const itemAmount = inputRef.current.value;      👈👈👈👈👈👈👈👈👈👈👈👈
                    props.onAddToCart(itemAmount);
                  };

                  return (
                    <form className={classes.form} onSubmit={onSubmitHandler}>
                      <Input
                        ref={inputRef}                         👈👈👈👈👈👈👈👈👈👈👈👈
                        label="Amount:"
                        inputProps={{
                          id: "amount_" + props.mealId,
                          type: "number",
                          min: "1",
                          max: "5",
                          step: "1",
                          defaultValue: "1",
                        }}
                      />
                      <Button type="submit">+ Add</Button>
                    </form>
                  );
                };

                export default MealItemForm;







/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / Using Images and Icons to a React component

     1. Create an 'assets' folder in the 'src' folder, where we will placee all project images.
     2. We can 'import' images in React components, just like we import css files. Its not a JavaScript feature, instead its a React feature. 
            Behind the scenes, when importing CSS files or images -> the 'import' is transformed to include the image in the finished application which we could deploy to a server, then React generates a link to that image                which is then dynamically inserted in the generated code.
            
          So in the component that we want to use the image in 👇👇


                    import mealsImage from "../../Assets/meals.jpg";

                    import classes from "./Header.module.css";

                    const Header = () => {
                      return (
                        <>
                          <div className={classes["main-image"]}>
                            <img src={mealsImage} alt="A table full of delicious food!"></img>
                          </div>
                        </>
                      );
                    };

                    export default Header;



    ---- When using 'svg' in React -> We can create a seperate component for it, and then import it like any other component in the component function we want to use it in.
    
            // ---- svg component function
                         const CartIcon = () => {
                            return (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-                                       1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                              </svg>
                            );
                          };

                          export default CartIcon;


          // ---- Component function where we use the svg

                import React from "react"; 
                import CartIcon from "../Cart/CartIcon";    👈👈👈👈👈👈👈👈👈👈


                const HeaderCartButton = (props) => {
                  return (
                    <>
                      <button>
                        <span className={classes.icon}>
                          <CartIcon />                   👈👈👈👈👈👈👈👈👈👈
                        </span>
                      </button>
                    </>
                  );
                };

                export default HeaderCartButton;

 






/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / How React works behind the Scenes   &&   Optimization techniques using 'React.memo()', 'useCallback()' Hook and 'useMemo()' Hook
  
  
              ' https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599576 '

      Also check images in 'React Notes' folder - 'How React works behind the scenes'


 - ⭐⭐ IMPORTANT Note -> React will only rerun a component function and re-evaluate it inorder to compare it to the Virtual-DOM, ONLY when a 'state', 'prop' or 'context' changes.
                                                      [all comes to 'state' changes tho, because 'props' and 'context' can only be changed throyugh 'state']
                                After that, ONLY the changes between current real DOM and virtual-DOM are made to the Real DOM.
                                
 - 🌟 ONLY the component function that manages the 'state' gets re-executed if the 'state' changes. Along with all the child component elements inside it, which causes these child component element's parent component functions to also be re-executed.
  
  

/ ` So is it bad for PERFORMANCE that when a component funciton gets re-executed, all of its child component elements also get re-executed? `
            👇👇👇👇👇👇👇
 
 
 
 // -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ 'React.memo()' Higher order component  -> Preventing unnecessary Re-evaluations of components with                      [PERFORMANCE Optimization]


                                            ' https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599594 '

  - A 'Higher-order component' is a function that takes a component and returns a new component.
 
  
  - 'React.memo()' is a higher order component. Wrapping a component with 'React.memo()', react will skip rendering the component, and reuse the last rendered result. ONLY if the passed in 'props' values does not change.
  
    - 'React.memo()' only checks for 'prop' changes of the wrapped component function. It compares the current props values that the wrapped component function received, with its previous props values. Only if any of the props has changed between executions, then the wrapped component function is re-evaluated.
            So if your function component wrapped in 'React.memo()' has a 'useState', 'useReducer' or 'useContext' Hook in its implementation, it will still rerender when 'state' or 'context' change.
 
    
    
        // example -> 
    
                  const MyComponent = (props) => {
                    /* render using props */
                  }
                  
                  const areEqual = (prevProps, nextProps) => {
                    /*
                    return true if passing nextProps to render would return
                    the same result as passing prevProps to render,
                    otherwise return false
                    */
                  }
                  
                  export default React.memo(MyComponent, areEqual);             👈👈👈👈👈👈👈👈👈👈👈👈
                  
                  
// --------- Could prevent weird BUGS --------------
 - 🛑⭐🚏🤚 VERY IMPORTANT NOTE ⭐🚏✋🛑 -> 'React.memo()' only works on 'props' that have 'Primitive types' as a value (ie: number, string, boolean, ... types), and NOT on 'Reference types' (ie: Objects, arrays, functions, ...) because of the way they are stored in memory. 
 
      Remember -> -- 'Primitive types' are stored in the CALLSTACK. They are also IMMUTABLE. Which means their values cant change. So when a parent component is re-executed, 'props' that has Primitve values DONT change and                         thus the child component function DOESNOT get re-executed when wrapped with 'React.memo()'. 
      
                  -- Whereas 'Reference types' are stored in the HEAP and they are MUTABLE. So whenever the component function is re-executed, a NEW ALLOCATED piece of memory is created in the CALLSTACK which will point to the Object address that is stored in the HEAP. So inshort, if we use a function as a 'prop' value, behind the scenes its a new function with every component funciton re-execution, which is why 'React.memo()' does NOT work with 'Reference types', since they allocate new memory in the CALL STACK with every re-execution of the component function.
// -----------------------
                  
      / `Performance`            
                  
      - 🛑 NOTE:  This method only exists as a performance optimization. Do not rely on it to “prevent” a render, as this can lead to bugs.

      - The process of comparing 'props' between executions for compoennts wrapped with 'React.memo()', can cause performance issues itself which is why it is not used in all components.
            So it all comes to whether it is worth it to use 'React.memo()' and compare the component's props, or simply let it get re-evaluated everytime its parent it re-evaluated. 

      -- It is worth using 'React.memo()' on a parent component that has alot of performance heavy component functions as children, which does not need to be re-executed whenever their parent is re-executed.
                (called 'branch components')






 // -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/   using 'useCallback()' Hook to make 'React.memo()' method work on 'Reference types'



  - 'useCallback()' Hook allows us to STORE 'Reference types' (Objects, arrays, funcitons), across compoennt re-executions. And that function should not be re-executed with every component re-execution.
  
          Stores the function in the same place in memory.
          
          
// What react does behind the scenes when using 'useCallback()' is 👇
          / ` that it creates/saves copy of our function in its storage and then set it equal to our original function so that they both point to the same address in memory  ` 
                        [remember functions are objects behind the scenes, thus 'reference types']

   // example 👇          
             const obj1 = {};
             const obj2 = {};
             obj1 === obj2;  // output --> false
             obj1 = obj2;  // point to same address in memory
             obj1 === obj2;  // output --> true



// using 'useCallback()' Hook 👇

/ We just wrap the function that we want to save/store with the 'useCallback()' Hook, as a FIRST argumment. Then in its SECOND argument it takes an array of depenedcies (same as 'useEffect'). 
         - If array of depenedcies is EMPTY, it means that the function will never change. And so it will never need to be re-stored by react.
         - If dependencies ARE specified then that means that the function will change whenever a dependency value changes, and thus react will need to recreate and store that new function in its storage inorder use it since            it depends on the changed depenendency.            / `⭐⭐ IMPORTANT -> Dependencies are external variables that is no inside the hook.`

      // -- no dependencies
              const [showParagraph, setShowParagraph] = useState(false);
                                                👇👇
              const toggleParagraphHandler = useCallback(() => {
                setShowParagraph((prevShowParagraph) => !prevShowParagraph)
              }, []);                                                                         / `⭐⭐ IMPORTANT -> Dependencies are external variables that is no inside the hook.`





      // -- with dependencies
              const [showParagraph, setShowParagraph] = useState(false);
              const [allowShowParagraph, setAllowShowParagraph] = useState(false);
                                                👇👇
              const toggleParagraphHandler = useCallback(() => {
                if(!allowShowParagraph) return;                   👈👈👈👈👈👈👈👈👈👈
                setShowParagraph((prevShowParagraph) => !prevShowParagraph)
              }, [allowShowParagraph]);         👈👈👈👈👈👈👈👈👈👈                      / `⭐⭐ IMPORTANT -> Dependencies are external variables that is no inside the hook.`
      
              const toggleAllowShowHandler = () => {
                setAllowShowParagraph((prevAllowShowParagraph) => !prevAllowShowParagraph); 
              }

              


``
 // -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ 'state' & Components executions behind the scenes

  - Everything comes down to 'state' when it comes to re-rendering components and changing what on the screen.
  
  ⭐⭐⭐
  / ` Why doesn't the initial state value in the argument passed into 'useState(..)' hook, override the current 'state' value with every re-execution of the component funciton, even tho it gets called with every component         funciton re-execution? `
          (ie: Why doesnt the 'state' get re-initialized with every component function re-execution) 
                      // ' const [showParagraph, setShowParagraph] = useState(false); '

  The reason is that React makes sure that 'useState(defaultValue)' and the defaultValue we pass into it, is only considered ONCE when the component is rendered for the very first time.
      So the very first time the component is rendered, 'useState' creates a new state variable which is handed to and managed by React. React then memorizes which component that 'state' belongs and uses the defaultValue to initialize the 'state' with that value. 
        Then for every re-rerender of the component after the very first render, NO new state is being created, instead React knows that the component already has 'state' variable for that state, which was created in the first render, as a result it just **UPDATES** that 'state' as needed (since the state was already created with the first render of the component).
  
            So the 'state' will only be created when the component function is rendered for the first time, and only if the component was completely removed from the DOM and then re-rendered.   
                    After the first render/initiallization of the component, 'states' in that component are UPDATED whenever the component is re-rendered.
                    
       
                    
                    
// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/  Understanding 'state' scheduling 

          ' https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599626 '

                  Also check image called -> ' Scheduled state change behind the scenes '

  
  - How does React handles 'state' updates
  
        const [showParagraph, setShowParagraph] = useState(false);
  
  - 🌟🌟 When calling 'setShowParagraph(true);' to change the state of 'showParagraph', the 'showParagraph' state does NOT change immediatly, instead React schedules that state change inorder to execute other performance heavy tasks that React considers to have a higher priority that the state change task.
          Eventually the 'state' will change to the new value, and once it is changed -> the compnent function will be re-executed.
  
  - React guarantees tho that 'state' changes to the same 'state' is executed in the order inwhich they are written in the code.
  
  - 🛑🛑 Due to the fact that multiple state changes can be scheduled at the same time (or in the same component function execution), it is recommended to use the function form for updating state that is dependant on thew previous state 👇👇👇👇
  
     ' setShowParagraph((prevShowParagraph) => !prevShowParagraph) '



// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ Understanding 'state' Batching


 - React uses batching to group state updates within event handlers and inbuilt hooks. And thus prevents components from re-rendering for EACH state update. 
      This improves application performance.
      
  
  

      
      
// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ 'useMemo()' Hook             

 / ` Difference between 'useCallback()' and 'useMemo()' Hook `
   'useCallback()' and 'useMemo()' both expect a function and an array of dependencies. The difference is that:
        - 'useCallback()' returns its function when the dependencies change. Caches function type.
        - while 'useMemo()' calls its function and returns the result/value. Caches value type.
   
   
                    We ussually use 'useCallback()' Hook more than 'useMemo()' Hook, because memorizing functions is more useful than memorizing other types of data.
                    
      Might not be worth it to 'useMemo()' on all values, all the time because it occupies some memory and its storing functionality takes up some performance. Unless in example below where we use a performance heavy array method to 'sort()' an array, which would be usefull to only sort once and memorize its value so we dont need to sort it with every re-render.
      
      
      // example 
         // ----- App.js -----
          import React, { useState, useCallback, useMemo } from 'react';
          import './App.css';
          import DemoList from './components/Demo/DemoList';
          import Button from './components/UI/Button/Button';

          function App() {
            const [listTitle, setListTitle] = useState('My List');        

            const changeTitleHandler = useCallback(() => {
              setListTitle('New Title');
            }, []);

            const listItems = useMemo(() => [5, 3, 1, 10, 9], []);          👈👈👈👈👈👈👈👈👈👈👈👈👈👈

            return (
              <div className="app">
                <DemoList title={listTitle} items={listItems} />            👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                <Button onClick={changeTitleHandler}>Change List Title</Button>
              </div>
            );
          }

          export default App;

        
          // ----- DemoList.js -----

          import React, { useMemo } from 'react';
          import classes from './DemoList.module.css';

          const DemoList = (props) => {
            const { items } = props;                  👈👈👈👈👈👈👈👈👈👈👈👈👈👈

            const sortedList = useMemo(() => {            👈👈👈👈👈👈👈👈👈👈👈👈👈👈
              console.log('Items sorted');            
              return items.sort((a, b) => a - b);           👈👈👈👈👈👈👈👈👈👈👈👈👈👈
            }, [items]);                                 👈👈👈👈👈👈👈👈👈👈👈👈👈👈
            console.log('DemoList RUNNING');

            return (
              <div className={classes.list}>
                <h2>{props.title}</h2>
                <ul>
                  {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          };

          export default React.memo(DemoList);


        



``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / Sending Http Requests       (Connecting React Web Applications to a BackEnd & Database)



// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/  How NOT to connect to a Database 


    - ⛔ We should NOT directly connect and fetch data from a Database server using our client-side JavaScript code (React App). 
              Because in doing so we would be exposing our Database credentials to the browser and anyone using the our App can access them. Can also cause performance issues ⛔
              
    - 🟢 So instead of directly connecting to a Database (SQL, NoSQL, etc...) from inside our React App code:
              1. we always use a Backend Application running on another machine, not running in the browser but some server out there. 
              2. The Backend application can be written with any server-side language of our choice -> (NodeJS App, PHP App, ASP.net etc...).
              3. That Backend application will connect to the Database, because we can safely store and use Database credentials on the Backend application since the backend code cant be viewed in the browser, its on a different server.
              4. The React App will then talk to that Backend server/ Backend API, which is a server that exposes different URLs that requests can be sent to.




              
// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ Fetching Data from an API


  - An API can also be called a Backend app. 
       An API backend is a way for developers to link their software and application to cloud-based storage (Database), making it easier to link up with software development kits and APIs.

  - API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. 
            Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.
            
  - When talking about API in the context of HTTP requests, we are often referring to 'REST API' or 'GraphQL Api'.            ' https://www.youtube.com/watch?v=PeAOEAmR0D0 '
          Which are two different standards for a server should expose its data.





// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ Sending a GET Request

 - We can use 'AXIOS' npm package which makes it easy to make Http Requests      ' https://www.npmjs.com/package/axios ' 

 - We can also use the 'fetch API' which is built-in to browsers. It allows us to FETCH and SEND data.
        Can be used to send Http requests and work with responses.
        
        
 / ` A Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. `
        
// using the fetch API
        
        // -- 🟡 using 'then()' method 👇
     function App() {
      const [movies, setMovies] = useState([]);     👈👈👈👈👈👈👈👈👈👈👈

      const fetchMovieHandler = () => {
        // 1. ' fetch(MOVIES_API) ' -> returns a promise that contains a response.
        // 2. ' .then((response) => response.json()) ' returns a promise with a response in JSON format which we transform to a JavaScript object
        // 3. ' .then((data) => console.log(data)) ' returns a JavaScript with the API data

       
        fetch(`https://swapi.dev/api/films`)                                      👈👈👈👈👈👈👈👈👈👈👈
          .then((response) => response.json())                                  👈👈👈👈👈👈👈👈👈👈👈
          .then((data) => {
            const transformedData = data.results.map((movieData) => {         👈👈👈👈👈👈👈👈👈👈👈
              return {
                id: movieData.episode_id,
                title: movieData.title,
                releaseDate: movieData.release_date,
                openingText: movieData.opening_crawl,
              };
            });

            setMovies(transformedData);                                     👈👈👈👈👈👈👈👈👈👈👈
          });
      };

      return (
        <>
          <GlobalStyles />
          <Section>
            <Button onClick={fetchMovieHandler}>Fetch Movies</Button>                      👈👈👈👈👈👈👈👈👈👈👈
          </Section>
          <Section>
            <MoviesList movies={movies} />
          </Section>
        </>
      );
    }

    export default App;


        // ------------
      // -- 🟢 using ASYNC/AWAIT 👇👇     [🌟🌟🌟🌟🌟 USE THIS 🌟🌟🌟🌟🌟🌟]
          function App() {
            const [movies, setMovies] = useState([]);

            const fetchMovieHandler = async () => {                  👈👈👈👈👈👈👈👈👈👈👈
                 // -- 🟢 using ASYNC/AWAIT
              const response = await fetch("https://swapi.dev/api/films");                    👈👈👈👈👈👈👈👈👈👈👈
              const data = await response.json();                                           👈👈👈👈👈👈👈👈👈👈👈

              const transformedData = data.results.map((movieData) => {                     👈👈👈👈👈👈👈👈👈👈👈
                return {
                  id: movieData.episode_id,
                  title: movieData.title,
                  releaseDate: movieData.release_date,
                  openingText: movieData.opening_crawl,
                };
              });

              setMovies(transformedData);                                 👈👈👈👈👈👈👈👈👈👈👈
            };

            return (
              <>
                <GlobalStyles />
                <Section>
                  <Button onClick={fetchMovieHandler}>Fetch Movies</Button>
                </Section>
                <Section>
                  <MoviesList movies={movies} />
                </Section>
              </>
            );
          }

          export default App;





// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ 🔥🔥🔥🔥   Handling LOADING  &&  Data State  🔥🔥🔥🔥     [IMPORTANT]


     - Showing a loading spinner to the user while fetching the data 👇👇👇
     - And Showing a message if done fetching but there are no items in the fetched data 👇👇👇👇
     
     

                  function App() {
                    const [movies, setMovies] = useState([]);
                    const [isFetching, setIsFetching] = useState(false);               👈👈👈👈👈👈👈👈👈👈👈

                    const fetchMovieHandler = async () => {
                      // 💨 Change the 'isFetching' state to 'true' when we start to load/fetch the data
                      setIsFetching(true);                                                                👈👈👈👈👈👈👈👈👈👈👈               
                      
                      const response = await fetch("https://swapi.dev/api/films");
                      const data = await response.json();

                      const transformedData = data.results.map((movieData) => {
                        return {
                          id: movieData.episode_id,
                          title: movieData.title,
                          releaseDate: movieData.release_date,
                          openingText: movieData.opening_crawl,
                        };
                      });

                      setMovies(transformedData);

                      // 💨 Change the 'isFetching' state to 'false' once we're donw fetching the data
                      setIsFetching(false);                                                 👈👈👈👈👈👈👈👈👈👈👈
                    };

                    return (
                      <>
                        <GlobalStyles />

                        <Section>
                          <Button onClick={fetchMovieHandler}>Fetch Movies</Button>
                        </Section>
                        <Section>
                          {/* if still fetching data -> show spinner  */}
                          {isFetching && <CircularProgress />}                                      👈👈👈👈👈👈👈👈👈👈👈

                          {/* if done fetching data -> render 'MoviesList' */}
                          {!isFetching && <MoviesList movies={movies} />}                             👈👈👈👈👈👈👈👈👈👈👈

                          {/* if done fetching data AND there is NO movies -> Render Message */}
                          {!isFetching && movies.length === 0 && <p>No Movies Found 😢</p>}                   👈👈👈👈👈👈👈👈👈👈👈
                        </Section>
                      </>
                    );
                  }

                  export default App;
                           
                           
                           
                           
// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ Handling Http Errors
                           
                           
    - using 'try ... catch' with 'async/await'
                           
                           
                    const App = () => {
                      const [movies, setMovies] = useState([]);
                      const [isFetching, setIsFetching] = useState(false);
                      const [error, setError] = useState(null);


                      // ---------------------------------------------------
                      //  --------- Cleaner JSX code ---------
                      // let content = <p>No movies Found</p>;

                      // if (movies.length > 0) {
                      //   content = <MoviesList movies={movies} />;
                      // }

                      // if (error) {
                      //   content = <p>{error}</p>;
                      // }

                      // if (isFetching) {
                      //   content = <CircularProgress />;
                      // }
                      // ---------------------------------------------------

                      const fetchMovieHandler = async () => {
                        // - Change the 'isFetching' state to 'true' when we start to load/fetch the data. And reset 'error' and 'movies' states.
                        setIsFetching(true);
                        setError(null);
                        setMovies([]);
  
                        try {                                                                   👈👈👈👈👈👈👈👈👈👈👈
                          const response = await fetch("https://swapi.dev/api/films");

                          // 🌟 manually throw an error to stop the execution of the rest of the code if we got error back
                          if (!response.ok) {                                                  👈👈👈👈👈👈👈👈👈👈👈
                            throw new Error("Something went wrong!!");                                    👈👈👈👈👈👈👈👈👈👈👈
                          }

                          const data = await response.json();

                          const transformedData = data.results.map((movieData) => {
                            return {
                              id: movieData.episode_id,
                              title: movieData.title,
                              releaseDate: movieData.release_date,
                              openingText: movieData.opening_crawl,
                            };
                          });

                          setMovies(transformedData);
                        } catch (error) {                                                                            👈👈👈👈👈👈👈👈👈👈👈
                          // 💨 error is the string that we added in ' throw new Error("Something wrong happened!!"); '
                          setError(error.message);                                                          👈👈👈👈👈👈👈👈👈👈👈
                        }

                        // 💨 Change the 'isFetching' state to 'false' once we're done fetching the data
                        setIsFetching(false);                                                 👈👈👈👈👈👈👈👈👈👈👈
                      };

                      return (
                        <>
                          <GlobalStyles />
                          <Section>
                            <Button onClick={fetchMovieHandler}>Fetch Movies</Button>
                          </Section>
                          <Section>
                            {/* if still fetching data -> show spinner  */}
                            {isFetching && <CircularProgress />}

                            {/* if done fetching data -> render 'MoviesList' */}
                            {!isFetching && <MoviesList movies={movies} />}

                            {/* if done fetching data AND there is NO movies AND there is no error -> Render Message */}
                            {!isFetching && movies.length === 0 && !error && (                                            👈👈👈👈👈👈👈👈👈👈👈
                              <p>No Movies Found 😢</p>
                            )}

                            {/* if done fetching AND there is an error -> render error message */}
                            {!isFetching && error && <p>{error}</p>}                                            👈👈👈👈👈👈👈👈👈👈👈

                             //  --------- Cleaner JSX code ---------
                            {/* {content} */}
                          </Section>
                        </>
                      );
                    }

                    export default App;
                             
                             
                             
                             
                             
// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ Using 'useEffect()' hook for Http Requests
                             
                             
      - using 'useEffect()' hook to fetch data from an API (side-effect) as soon as the page loads for the very first time, AND when any of its dependencies change. 
      
      - In the exmaple below, since we are passing a function inside the 'useEffect()' hook, we also need to add that function as a dependency in the 'useEffect()' hook dependencies array. 
              But remember, since functions are objects behind the scenes, with every re-render of the component function, there will be a new version of that function that we passed as a dependency (due to how 'Reference types' are stored in memory) which will result in the data being fetched everytime the component function is re-rendered [infinite-loop].
                 🟢 To avoid that we can use 'useCallback()' hook on the dependency funciton.


// -- example
                      const App = () => {
                        const [movies, setMovies] = useState([]);
                        const [isFetching, setIsFetching] = useState(false);
                        const [error, setError] = useState(null);

                        const fetchMovieHandler = useCallback(async () => {                             👈👈👈👈👈👈👈👈👈👈👈
                          setIsFetching(true);
                          setError(null);

                          try {
                            const response = await fetch("https://swapi.dev/api/films");

                            // 🌟 manually throw an error to stop the execution of the rest of the code if we got error back
                            if (!response.ok) {
                              throw new Error("Something went wrong!!");
                            }

                            const data = await response.json();

                            const transformedData = data.results.map((movieData) => {
                              return {
                                id: movieData.episode_id,
                                title: movieData.title,
                                releaseDate: movieData.release_date,
                                openingText: movieData.opening_crawl,
                              };
                            });

                            setMovies(transformedData);
                          } catch (error) {
                            // error is the string that we added in ' throw new Error("Something wrong happened!!"); '
                            setError(error.message);
                          }

                          // - Change the 'isFetching' state to 'false' once we're done fetching the data
                          setIsFetching(false);
                        }, []);                                                     👈👈👈👈👈👈👈👈👈👈👈

                        // ------------------
                        // -- 'useEffect' hook with Http requests
                        useEffect(() => {                                 👈👈👈👈👈👈👈👈👈👈👈
                          fetchMovieHandler();                      👈👈👈👈👈👈👈👈👈👈👈
                        }, [fetchMovieHandler]);                        👈👈👈👈👈👈👈👈👈👈👈

                        return (
                          <>
                            <GlobalStyles />
                            <Section>
                              <Button onClick={fetchMovieHandler}>Fetch Movies</Button>
                            </Section>
                            <Section>
                              {/* if still fetching data -> show spinner  */}
                              {isFetching && <CircularProgress />}

                              {/* if done fetching data -> render 'MoviesList' */}
                              {!isFetching && <MoviesList movies={movies} />}

                              {/* if done fetching data AND there is NO movies AND there is no error -> Render Message */}
                              {!isFetching && movies.length === 0 && !error && (
                                <p>No Movies Found 😢</p>
                              )}

                              {/* if done fetching AND there is an error -> render error message */}
                              {!isFetching && error && <p>{error}</p>}

                              {/* {content} */}
                            </Section>
                          </>
                        );
                      };

                      export default App;

                             
      // ------------------------------------------------------                         
/ ------- Summmary of SENDING a GET request -------

                  const App = () => {
                    const [movies, setMovies] = useState([]);
                    const [isFetching, setIsFetching] = useState(false);
                    const [error, setError] = useState(null);

                    // ---------------------------------------------------
                    //  --------- Cleaner JSX code ---------
                    // let content = <p>No movies Found</p>;
                    
                    // if (isFetching) {
                    //   content = <CircularProgress />;
                    // }

                    // if (movies.length > 0) {
                    //   content = <MoviesList movies={movies} />;
                    // }

                    // if (error) {
                    //   content = <p>{error}</p>;
                    // }

                    
                    // ---------------------------------------------------

                    const fetchMovieHandler = useCallback(async () => {
                      // -- 🟢 using ASYNC/AWAIT
                      // - Change the 'isFetching' state to 'true' when we start to load/fetch the data. And reset 'error' and 'movies' states.
                      setIsFetching(true);
                      setError(null);

                      try {
                        const response = await fetch("https://swapi.dev/api/films");

                        // 🌟 manually throw an error to STOP the execution of the rest of the code if we got error back
                        if (!response.ok) {
                          throw new Error("Something went wrong!!");
                        }

                        const data = await response.json();

                        const transformedData = data.results.map((movieData) => {
                          return {
                            id: movieData.episode_id,
                            title: movieData.title,
                            releaseDate: movieData.release_date,
                            openingText: movieData.opening_crawl,
                          };
                        });

                        setMovies(transformedData);
                        
                      } catch (error) {
                        // error is the string that we added in ' throw new Error("Something wrong happened!!"); '
                        setError(error.message);
                      }

                      // - Change the 'isFetching' state to 'false' once we're done fetching the data
                      setIsFetching(false);
                    }, []);

                    // ------------------
                    // -- 'useEffect' hook with Http requests
                    useEffect(() => {
                      fetchMovieHandler();
                    }, [fetchMovieHandler]);


                    return (
                      <>
                        <GlobalStyles />

                        <Section>
                          <AddMovies onSubmit={submitHandler} />
                        </Section>

                        <Section>
                          <Button onClick={fetchMovieHandler}>Fetch Movies</Button>
                        </Section>
                        <Section>
                          {/* if still fetching data -> show spinner  */}
                          {isFetching && <CircularProgress />}

                          {/* if done fetching data -> render 'MoviesList' */}
                          {!isFetching && <MoviesList movies={movies} />}

                          {/* if done fetching data AND there is NO movies AND there is no error -> Render Message */}
                          {!isFetching && movies.length === 0 && !error && (
                            <p>No Movies Found 😢</p>
                          )}

                          {/* if done fetching AND there is an error -> render error message */}
                          {!isFetching && error && <p>{error}</p>}

                          {/* {content} */}
                        </Section>
                      </>
                    );
                  };

                  export default App;

                               
                               
                               
// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/  SENDING a POST REQUEST.    ie: SENDING Http requests to store data to a database through a server    -- (for instance when a new user is created)
                           
                           
                           'using Firbase as a backend app to SEND/POST data to a database'
                           
                           // In this example, we send a Movie to a database, then fetch it.

// --- EXAMPLE 👇
                        const App = () => {
                          const [movies, setMovies] = useState([]);
                          const [isFetching, setIsFetching] = useState(false);
                          const [error, setError] = useState(null);

                          const fetchMovieHandler = useCallback(async () => {
                            // - Change the 'isFetching' state to 'true' when we start to load/fetch the data. And reset 'error' and 'movies' states.
                            setIsFetching(true);
                            setError(null);

                            try {
                              const response = await fetch(
                                "https://react-sending-http-reque-bf87b-default-rtdb.firebaseio.com/movies.json"
                              );

                              // 🌟 manually throw an error to stop the execution of the rest of the code if we got error back
                              if (!response.ok) {
                                throw new Error("Something went wrong!!");
                              }

                              const data = await response.json();

                              const movies = Object.values(data);                        

                              const transformedData = movies.map((movieData, movieData_Index) => {
                                return {
                                  id: movieData_Index,
                                  title: movieData.title,
                                  releaseDate: movieData.date,
                                  openingText: movieData.description,
                                };
                              });

                              console.log(transformedData);

                              setMovies(transformedData);
                            } catch (error) {
                              // error is the string that we added in ' throw new Error("Something wrong happened!!"); '
                              setError(error.message);
                            }

                            // - Change the 'isFetching' state to 'false' once we're done fetching the data
                            setIsFetching(false);
                          }, []);

                          // ---------------------------------------------------------------
                          const submitHandler = async (movies) => {                                     👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                            const response = await fetch(                                                             👇👇👇👇👇👇👇👇👇👇👇👇👇
                              "https://react-sending-http-reque-bf87b-default-rtdb.firebaseio.com/movies.json",
                              {
                                method: "POST",
                                body: JSON.stringify(movies),
                                headers: {
                                  "Content-Type": "application/json",
                                },
                              }
                            );

                            // -- Firebase returns a promise after we SEND a post request
                            const data = await response.json();

                            console.log(data);

                            // - Auto fetch movies when we submit a movie
                            // NOTE 📝 ->  Since we have an await in the line before, it's guaranteed that 'fetchMoviesHandler()' won't be called before the movie has been added to the database.
                            fetchMovieHandler();
                          };

                          // ---------------------------------------------------------------
                          // -- 'useEffect' hook with Http requests
                          useEffect(() => {
                            fetchMovieHandler();
                          }, [fetchMovieHandler]);


                          return (
                            <>
                              <GlobalStyles />

                              <Section>
                                <AddMovies onSubmit={submitHandler} />
                              </Section>

                              <Section>
                                <Button onClick={fetchMovieHandler}>Fetch Movies</Button>
                              </Section>
                              <Section>
                                {/* if still fetching data -> show spinner  */}
                                {isFetching && <CircularProgress />}

                                {/* if done fetching data -> render 'MoviesList' */}
                                {!isFetching && <MoviesList movies={movies} />}

                                {/* if done fetching data AND there is NO movies AND there is no error -> Render Message */}
                                {!isFetching && movies.length === 0 && !error && (
                                  <p>No Movies Found 😢</p>
                                )}

                                {/* if done fetching AND there is an error -> render error message */}
                                {!isFetching && error && <p>{error}</p>}

                              </Section>
                            </>
                          );
                        };

                        export default App;

                                 
                                 
                                 
                                 
``
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / Building Custom React Hooks
                                 

  - What are "Custom Hooks" ?
      〰 "Custom Hooks" are in the end just regular functions, same as built-in React hooks. But "Custom Hooks" can contain stateful logic that can be re-used accross the app (such as setting up a subscription and                    remembering the current value), all state and effects inside of it are fully isolated.

      〰 The main reason to write a"Custom Hooks" is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage            logic), you can put that code inside a custom hook and reuse it.
      
      〰 ⭐ Unlike regular functions, 'Custom Hooks' can use built-in React hooks and React State.
      
      
// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ Creating a 'Custom React Hook' function
                                 

  - ⭐⭐ IMPORTANT -> "Custom Hooks" function names nust start with 'use'. (ie: ' const useCounter = () => { ... }; ')
                 It will be regular function in the end, but the 'use' keyword tells React that it will be a custom Hook.       
                 
  - ⭐⭐ We just want to add stateful logic code inside of our "Custom Hooks", and NOT return JSX code. As shown in example below
  
  - All built-in React hooks inside "Custom Hooks" will be TIED/Isolated to the component inwhich we use the "Custom Hook" in. 
                  Just as if we copied the code inside the "Custom Hook" into the component we want to use it in.
                  
  - We can return things in "Custom Hooks". For instance a 'state'.
  
  - Since "Custom Hooks" are just function in the end, they can also accept paramters.
  
  
  
  // --- EXAMPLE ---  
            // ---- Custom Hook ----
            import { useState, useEffect } from "react";

            const useCounter = (direction = "forwards") => {
              const [counter, setCounter] = useState(0);

              let increment = direction === "forwards" ? 1 : -1;

              useEffect(() => {
                const interval = setInterval(() => {
                  setCounter((prevCounter) => prevCounter + increment);
                }, 1000);

                return () => clearInterval(interval);
              }, [increment]);

              return counter;
            };

            export default useCounter;
                                 
            
            // ---- using Custom Hook in a component ----
            import useCounter from "../hooks/useCounter";
            import Card from "./Card";

            const ForwardCounter = () => {
              const counter = useCounter("forwards");          👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

              return <Card>{counter}</Card>;
            };

            export default ForwardCounter;


   
                                 
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
  / `  REDUX (An Alternative to Context API)  `

    - REDUX is a very popular third-party React library, that used to manage app-wide state.
    
// -------------
〰 ' What is REDUX? And why do we use it? '
                                 
    - REDUX is a state management system for 'cross-component state' or 'app-wide state'. 
          Helps us manage state across multiple component or even across the complete App
          
    - Redux is a Flux-like state management library. ?? 


// -------------
〰 ' What is Local State, Cross-Component state, and App-wide state? '
               
    - 'Local state' -> is a state that belongs to a single component and is managed inside that component using 'useState' or 'useReducer'. ie: a controlled input field 
    
    - 'Cross-Component state' -> a state that affects multplie components. ie: an open/close state of a modal window where the trigger to open it, is not inside the modal component function itself.
                                        Can be implemented with 'useState' or 'useReducer' but it would require 'prop chains'/'prop drilling'.        🛑 Not bad just more complex that Local state 🛑
      
    - 'App-wide state' -> a state that does not just affect multiple components, but most/ALL components in an application, 
                                ie: User authentication status, where a user loggs in to their account which changes everything on the page to show their account data. 
                              Can also be managed with 'useState' or 'useReducer' which would require 'prop chains'/'prop drilling'.        🛑 CAN BE VERY CUMBERSOME 🛑 
                              
                              
  
          ⭐ 'Cross-Component state' & 'App-wide state' can be very cumbersome when managed with 'useState' or 'useReducer' ('prop chains'/'prop drilling'), so to avoid this we can sue the:
                                 1. The React built-in 'Context API' which makes managing 'Cross-Component state' or 'App-wide state', easier. Just like we did in the Food-order-App.
                                 2. 'REDUX' is an alternative to 'Context API' which also lets us manage 'Cross-Component state' or 'App-wide state' alot easier.
                                 
                                
                                        🌟  So 'Context API' & 'REDUX' helps us manage 'Cross-Component state' or 'App-wide state' alot easier by avoiding 'prop chains' / 'prop drilling'  🌟
                                                


// -------------
 〰 ' Why do we need 'REDUX' library if we already have the React built-in 'Context-API'? '
                                 
                                 📝 NOTE: We can use both 'Context API' & 'REDUX' in a single App.
                                 
      'Context-API' has a couple of *potential* disadvantages. which might NOT matter depending on the app we are building. 
                                  🛑 IF THESE DISADVANTAGES DONT MATTER, THEN WE SIMPLY DONT NEED REDUX 🛑): 
                                  
               -- 'Context-API' has a couple of *POTENTIAL* disadvantages: 👇
                                 
                                  1. 'Complex Setup/Management'. Managing state with React 'Context API' in large ENTERPRISE level applications, can become COMPLEX, due to many different 'Cross-Component states' or 'App-wide states', like so 
                                                                        `return (
                                                                          <AuthContextPrivider/>
                                                                            <ThemeContextProvider/>
                                                                              <UiInteractionContextProvider/>
                                                                                <MultiStepContextProvider/>
                                                                                 <UserRegistration/>
                                                                                <MultiStepContextProvider/>
                                                                               <UiInteractionContextProvider/>
                                                                            <ThemeContextProvider/>
                                                                          <AuthContextPrivider/>
                                                                        );`
                                    
                                                🛑 NOT A PROBLEM for small and medium size applications thought since we dont have many different 'Cross-Component states' or 'App-wide states'. 🛑
                                 
                                 
                              2. 'Performance'. Another potential disadvantage of using React 'Context API' is performance. 
                                        React 'Context API' is good for changing a theme or maybe even authentication, but its NOT great if our data changes alot.
                                        
                                                🛑 AGAIN, DOES NOT MATTER IS SMALL OR MEDIUM SIZE APPS 🛑
                                        
                                        
                                        
                              👆👆👆👆  For these two POTENTIAL disadvantages, we use 'REDUX' over React 'Context API' to manage 'Cross-Component states' or 'App-wide states'  👆👆👆👆                      
                                        
                                        
// -------------
〰 ' How Redux works? '
                                 
  
     -- 'REDUX' is all about having ONE 'Central Data (state) Store' in our application.
               ⭐⭐ Always just ONE store for our entire application. No more than ONE store in an application. ⭐⭐          <--  IMPORTANT
                
      So in this 'Central Data (state) Store' we would store Authentication state, Theme state, UserInput state, etc.....
                Whichever 'Cross-Component states' or 'App-wide states' we have, can all be stored in the 'Central Data (state) Store'.
                
      
     -- We have data (state) inside our App 'Central Data (state) Store', which we access from different components in our App. For instance, if an authentication state changes we want to know about it from our components so that we can react acccordingly and update the UI.
      
     
        💨 `  GETING data (state) from the 'Central Data (state) Store' through component SUBSCRIPTIONS ` 👇👇
        
            Inorder for our components to access data (state) inside the 'Central Data (state) Store', components setup 'Subscriptions' to the 'Central Data (state) Store'.
              So components 'subscribe' to the 'Central Data (state) Store', and whenever a certain data (state) that a component needs in the store, changes, the store notifies the component of that state change, so that the component can update the UI accordingly.
              
              
              
        💨 `  CHANGING/UPDATING data (state) INSIDE the 'Central Data (state) Store' ` 👇👇     
        
            ⭐⭐⭐⭐ IMPORTANT -> Components *'NEVER'* directly manipulate data (state) in the store. ⭐⭐⭐⭐
                  
            Instead, inorder to manipulate data in the store, we can use a concept called 'Reducers'. Where we setup a 'Reducer function'.
                🌟 This 'Reducer function', is then responsible for 'mutating/changing the Store data'. 
                
                📝 'Reducer function' is 🛑 NOT the 'useReducer' hook 🛑.  It is a GENERAL programming concept which takes some input, transforms that input/reduce it, and then spit out a new output/result.
                
                   -------- `What is a 'Reducer function'?` ---------   
               〰 A 'Reducer function' is a standard JavaScript funciton which will be called by the 'Redux' library. 
                            - The 'Reducer function' ALWAYS receive two paramters:  1. The old or existing state.
                                                                                    2. And the dispatched 'action' that will change that state.
                            - The 'Reducer function' MUST then return a 'new State Object'. 
                                    Therefore a 'Reducer function' should be a pure function, which means that:
                                                                                    1. The same inputs must lead to same outputs, ie: entered state parameter and returned state object should have same structure.
                                                                                    2. And that there should be no side-effects inside of that function. 
                                                                                              So we must not send an 'HTTP request', save something in 'Local Storage', fetch something from 'Local Storage', etc...
                                      Instead a 'Reducer' should just be a function that takes given inputs provided by Redux, and then produces the expected output, which is a new state object.
                                      
                  // example -> 
                                        
                                                                                                                                                       
             
                            
                                        
        💨 `  CONNECTING components and 'Reducer functions' to manipulate/change data (state) inside the 'Central Data (state) Store'  ` 👇👇   
        
              - Ultimately, components will be the one to 'TRIGGER' data change in the store, through 'Reducer functions'.
                        Like a click on a button that triggers data change in the store.
                        
              - Inorder for comoponents to 'TRIGGER' data change in the store, they dispatch/trigger 'ACTIONS'.
                  An 'Action' is a simple JavaScript Object which desribes the kind of operation that the 'Reducer function' should perform.
             
              After an action is dispatched/triggered by a component   ->   Redux forwards that 'Action' to the 'Reducer function'   ->   Then the 'Reducer function' executes the oparation described in the 'Action' which the manipulates data (state) inside the 'store'.
      
      In short -->  Components dispatches 'Actions' which describe what should be done -> then these 'Actions' are forwarded to the 'Reducer function' -> 'Reducer function' then performs the 'Action' and spits out new 'state' which will replace an exisiting 'state' in the 'Central Data (state) Store'.
      
      When that state in the 'Central Data (state) Store' is updated, subscribed components get notified so that they can update their UI.
      
      
  // ----------------------------------------------------------------
      How Redux works SUMMARY --> 1. Every app has a single 'Store' which stores states
                                  2. Different components in the app can 'SUBSCRIBE' to the store to access these states, and get notified whenever a state changes
                                  3. Components cannot directly change data/states inside the 'store', but can indirectly change data/states in the store through 'Reducer functions'.
                                  4. Components can dispatch 'Actions', which is an object that describes an operation, these 'actions' are then executed by the 'Reducer functions' which changes a state inside the store.
                                  5. Subscribed components then get notified of that change inorder for them to update the UI accordingly.
  // ----------------------------------------------------------------
        

                                  
                                  
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ `  REDUX exmaple WITHOUT React `
                                  
      1. Open a new empty project
      2. create a new .js file, which we will execute using 'Node.js'. 'Node.js' allows us to run JavaScript outide of the browser.
      3. run 'npm init -y' in terminal
      4. run 'npm i redux' 
      5. import redux package in the .js file.      NOTE: Since we will execute the JavaScript with Node.js, We need to use the default Node.js import syntax for importing a third-party package. Like so 👇 
                                                                                                                                                                                      'const redux = require('redux')';
      6. Then in the .js file, we will need to create a 'store', a 'reducer function' to change the store, an 'action', and a component or a function.
      7. To run the code and show output in the Terminal run 'node {name of javascript file}'
                                 

                                 
      / `  Creating a REDUX store  `
                                 
        // Default Node.js import syntax for importing a third-party package
        const redux = require("redux");

        
        / --- 1. Create the store
        // 'createStore()' is method exposed by redux library, which creates a store.
        // The store should manage some data, that data is determined by the 'Reducer function'. Because it is the reducer function that will produce new state snapshots, whenever an 'action' is dispatched.
        // When we run the code for the first time, the 'Reducer function' will be executed with a default 'action' that should spit out the initial state.
        // We pass in the 'Reducer function' as a parameter inside the 'createStore()' function. Because the store needs to know which 'Reducer function' is responsible for changing that store. Because its the 'Reducer'            that works together with the store.
        const store = redux.createStore(counterReducer);
                   
                                 
        / --- 2. Add a 'Reducer function'
        // ⭐ When 'store' is initialized, 'Redux' will execute the passed in 'Reducer function' inside 'createStore()' method, for the first time. So if we dont specify a default or initialValue to our state, it will be               'undefined' which will result in an error.
        // ⭐ So We need to define a default value to the 'state' parameter, so that it is not 'undefined' when we the 'store' is initialized. The defaultValue will ONLY be used when the state would otherwise be                       'undefined'.
        const counterReducer = (state = { counter: 0 }, action) => {
          if (action.type === "increment") {
            return {
              counter: state.counter + 1,
            };
          }

          if (action.type === "decrement") {
            return {
              counter: state.counter - 1,
            };
          }

          // return the unchanged/default state upon initialization. ie: ' { counter: 0 } '
          return state;
        };

                                 
        / --- 3. Create a Subscriber function which gets the latest state     ->  using 'getState()' method.     This will be our component in a React App.
        // 'getState()' is a method available on the 'store'. It will give us the latest state snapshot AFTER it was updated.
        const counterSubscriber = () => {
          const latestState = store.getState();
          console.log(latestState);
        };

                                 
        / --- 4. Make Redux aware of the subscriber function, and tell REDUX to execute it whenever our state changes     ->   using the 'subscribe()' method 👇
        // 'subscribe()' is a method available on the 'store'. Which expects a function as an argument which REDUX will execute whenever the data in the store changes.
        store.subscribe(counterSubscriber);

                                 
        / --- 5. Dispatch an 'action' that will trigger our subscription and change the 'store' state through the 'Reducer function'     ->   using the 'dispatch()' method
        // 'dispatch()' is a method available on the 'store'. Which dispatches an 'action'.
        // An 'Action' is a JavaScript Object, which should have a 'type' property that CONTAINS A unique string that describes the action.
        store.dispatch({ type: "increment" });
        store.dispatch({ type: "decrement" });

                                 
                                 
        // --------------------------------
        // run 'node redux-demo.js' to execute code in terminal
        // --------------------------------


                                 
                                 

// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Installing Redux in a React App `
                                 
                                 
      📝 'Redux' is NOT react specific. It can be used any JavaScript project. It doesnt know anything about React and doesnt care about React.
      
         - To make working with 'Redux' in React applications easier, there is another package which we should install called the 'react-redux' package.
                                                                                                                              
         - 'react-redux' package makes connecting to React applications to 'Redux' stores, reducers, etc..., very simple. For example it will make very simple to subscribe components to the 'Redux' store.
      
                           ⭐⭐⭐   run 'npm i redux react-redux'   ⭐⭐⭐
                           
                           
                           
  - By convention. 'Redux' related files are stored 'store' folder inside the 'src' folder. ie: src/store/counterStore.js
                                 
                                 
                                 
                                 
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Using Redux in a React App `
  
          
    🧨 〰〰〰  Creating 'Redux store' and 'Reducer function'  〰〰〰 🧨
      // -------- counterStore.js file -------- 
                              import { createStore } from "redux;";

                              // 🟢 1. Create 'Reducer function'
                              const counterReducer = (state = { counter: 0 }, action) => {
                                if (action.type === "INCREMENT") {
                                  return {
                                    counter: state.counter + 1,
                                  };
                                }

                                if (action.type === "DECREMENT") {
                                  return {
                                    counter: state.counter - 1,
                                  };
                                }
                                return state;
                              };

                              // 🟢 2. Create the Redux Store and pass in the 'Reducer function'
                              const counterStore = createStore(counterReducer);



                              export default counterStore;
                                 
  
                   -------------   
      🧨 〰〰〰  Providing the 'Redux store' to the React App  〰〰〰 🧨
      // -------- index.js file -------- 
         // 🟢 Provide the Redux store to the React App. ie:  Connect the React app to the Redux store, so that components in this App can dispatch and listen to changes in the store.
           /* 
                 - To provide our Redux store to the React App, we typically go to the 'index.js' file where we render the entire app (the highest level we can go in our React app. Top of the component tree), and wrap                      the '<App/>' component with '<Provider store={...}>...</Provider>'
                 
                 - Only components wrapped with the '<Provider>...</Provider> ' custom component will have access to the store, along with all their children. Just like with 'Context API'
                 
                 - '<Provider>...</Provider> ' custom component has a 'store={}' prop which we can pass our imported Redux store to. Which Provides our Redux store to the React App.
           */
                                 
                              import React from "react";
                              import ReactDOM from "react-dom/client";
                              import { Provider } from "react-redux";           👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                              import "./index.css";
                              import App from "./App";
                              import counterStore from "./store/counterStore";          👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                              const root = ReactDOM.createRoot(document.getElementById("root"));
                              root.render(
                                <Provider store={counterStore}>                     👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                  <App />
                                </Provider>                                       👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                              );
                               
                                 
                                 
                  -------------        
      🧨 〰〰〰  Accessing data/states managed by Redux store in React components --> using 'useSelector()' hook  〰〰〰 🧨
       
          - We can use 'useStore()' hook which gives us direct access to the store. [ 🛑 DONT USE 🛑]
          - 'useSelector()' hook is a React hook that allows us to extract data from the Redux store state. It is more convenient to use that 'useStore()' because it allows us to select a certain state that is managed by              the store.  
          
                🌟 'useSelector()' hook takes in a function as an argument, which determines which state/data we want to extract from the store. 🌟 This function will automatically be executed for us by 'react-redux' 🌟
                              ie: const counter = useSelector((state) => state.counter)
          - ⭐⭐  When we use 'useSelector()', 'react-redux' will automatically subscribe the component inwhich we are using 'useSelector()' in, to the Redux store.  ⭐⭐
                                That subscribed component will then be notified and re-executed whenever the extracted state ('counter') changes in the Redux store. 
                                
     
      // -------- Counter.js file -------- 
                                                   
                  import classes from "./Counter.module.css";
                  import { useSelector } from "react-redux/es/exports";                   👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                  const Counter = () => {
                    // 'useSelector()' will automatically be executed for us by 'react-redux'
                    const counter = useSelector((state) => state.counter);                      👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                    const toggleCounterHandler = () => {};

                    return (
                      <main className={classes.counter}>
                        <h1>Redux Counter</h1>
                        <div className={classes.value}>{counter}</div>                    👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                        <button onClick={toggleCounterHandler}>Toggle Counter</button>
                      </main>
                    );
                  };

                  export default Counter;

                                
                                
                 -------------               
    🧨 〰〰〰 Dispatching Actions from inside components  --> using 'useDispatch()' hook  〰〰〰 🧨
    
          
          - The 'useDispatch()' hook does not receive any arguments, instead when we call it, it returns a dispatch function which we can execute to dispatch an action to our Redux store 
                                  We store that dispatch function in a variable. 
          
          - 🌟 The returned dispatch function can take in an argument which we can pass an OBJECT to. That OBJECT should contain a type property that points to an identifier in our 'Reducer function' in the Redux store,                  that contains the state that we want to return when the dispatch function is executed.
          
          
           // -------- Counter.js file -------- 
          
                              import classes from "./Counter.module.css";
                              import { useSelector, useDispatch } from "react-redux/es/exports";                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                              const Counter = () => {
                                // 'useSelector()' will automatically be executed for us by 'react-redux'
                                const counter = useSelector((state) => state.counter);

                                const dispatch = useDispatch();               👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                                const incrementCounterHandler = () => {
                                  dispatch( { type: "INCREMENT" } );                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                };
                                const decrementCounterHandler = () => {
                                  dispatch( { type: "DECREMENT" } );              👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                };

                                const toggleCounterHandler = () => {};

                                return (
                                  <main className={classes.counter}>
                                    <h1>Redux Counter</h1>
                                    <div className={classes.value}>{counter}</div>
                                    <div className={classes["buttons-container"]}>
                                      <button onClick={incrementCounterHandler}>+</button>                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                      <button onClick={decrementCounterHandler}>-</button>                      👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                    </div>
                                    <button onClick={toggleCounterHandler}>Toggle Counter</button>
                                  </main>
                                );
                              };

                              export default Counter;
          
          
                              
                              
      
    
                                  
                                  
                                 
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / `  React Router  `


 - Multiple pages in a single app. The illusion of having multiple pages, with different URLs to the same Single-Page applications. 
          So are still building a Single-page application where React and the Browser is responsible for updating what the user sees, but we'll  be able to change the URL and use multiple pages.
                               
    
// -------------
  〰 ' What is Routing? '
                               
   -  Routing or router in web development is a mechanism where HTTP requests are routed to the code that handles them. 
        To put simply, in the Router you determine what should happen when a user visits a certain page.
        
   -  Routing means that different paths in the URL, loads different pages.
    
    
// -------------
  〰 ' Why use React Routing for website pages navigation? '

  
    - In reality we want websites that have different 'paths'. These different 'paths' in the URL, load different pages, so that when the URL changes, we change the visible content of the page 
                        (We load different pages for different 'paths'). 
                                                                                  👇👇              
    - 📝 Side Note: 'paths' are after the website domain, ie: ' www.codepen.io/bigmikel9 ')
    
    - The combination of those different pages (inwhich each have their own 'path'), makes up a website.  
      
    
      ------ ` Different between Tradition multi-page websites and a React Single-Page application ` ------
                               
          - In a tradition multi-page website (without React) we would have some server that sends back different HTML files for different URLs. 
          
          - We would build something a tradition multi-page website by creating different HTML files for each page, and store them on a server. 
              Then to open these different pages on the website, the client would send a request to the server which then sends back the HTML page to the client, which is rendered by the browser.   
          
          When we have different HTML pages, that means that we dont have a 'Single-Page app', which means that when we change the URL 👇
                                            1. We leave the browser (We leave all our running client-side app)   
                                            2. Fetch a new page  (client sends a request to the server)
                                            3. Wait for the request-response cycle  
                                            4. and then let the browser render the new HTML page 
                                            
          
                  👆 Which is one of the reasons why we switched to React, because we dont want this traditional flow 👆
                              Instead we want a: 
                                      - A client-side application (a JavaScript web app) which runs in the browser
                                      - And we want to utilize this application to change whats visible on the screen WITH JavaScript --> 
                                         🤩 so that we can provide this instant reactive user experience, which we can do with JavaScript through React in the browser.
                                         
        - So we use React to build 'Single-Page applications' which: 
                                            1. Has ONE HTML page which is initially loaded when the user first visits our website, thereafter JavaScript takes over
                                                  (Only ONE initial HTML request & response)
                                            2. We can then manipulate the URL (the 'path' after our domain) with JavaScript, which changes what we see on the screen when the URL changes or when a link is clicked, WITHOUT                                                sending a request to the server to render a new HTML file (fetch a new HTML file).
                                                             [Page (URL) changes are handled by client-side (React) code]
                                               ⭐⭐ Instead React blocks that browser default to send a request to the server, and instead it updates whats visible on the screen with client-side JavaScript (React).
                    
                    

                                               
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Installing React Router `

    - 'React Router' lets us create multi-page React applications. 
    
    - It provide Client-side Routing. So Routing functionalities in our client-side React app.
    
    - Remember -> Routing means that different paths in the URL, loads different pages
    
    
    
    - run 'npm i react-router-dom@5'      ->   installs React Router version 5. change to 'npm i react-router-dom@6' after learning about version 6.
                               
                               
                               
                               
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Defining & using Routes `
    
    - We want to handle 'paths' after the domain, to render different components on to the screen
            
                   ie: 'www.our-domain.com/'                --> render component A
                       'www.our-domain.com/products'        --> render component B
                       
    - We could just use React and state to render different components when the URL path changes and prevent the default browser behavior to sending a request to a server when a link is clicked,
                but 'react-router-dom' package does all that for us.
                               
    - The 'react-router-dom' package makes registering different routes or 'paths' in the URL, and rendering different for a certain path    -->   very very EASY.
                               
                               
                               
         〰  Import 'Route' component from 'react-router-dom'  -> import { Route } from 'react-router-dom';  
                      The 'Route' component allows us to define a certain 'path', and then the react component that should be rendered when that 'path' becomes active in the URL.
                      
                      
         ---------- '<Route />' component  ----------
         
                  - '<Route />' component element takes a 'path="..."' prop, which will be the path in the URL.
                           ie: '  <Route path="/home" />  '  --> this means that this route should become active when we have '/home' in our URL  'www.our-domain.com/home'
       
                  - Then in between the opening and closing '<Route path="/home">...</Route>' component element, we add the component element for the component that we want to render when the URL path is equal                                to the value of the 'path="..."' prop.
                             The '<Route/>' component will make sure that the component in between its opening and closing tags, is ONLY rendered on the screen when the URL path is equal to the value of its 'path="..."'                              props (ie: when the Route is active).         
                             
                             
                   // ----- app.js file -----
                             
                              import { Route } from "react-router-dom";                   👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                              import Welcome from "./pages/Welcome";                    👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                              import Products from "./pages/Products";                          👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                              function App() {
                                return (
                                  <div>
                                    <Route path="/welcome">                           👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                      <Welcome />                               👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                    </Route>                                              👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                    <Route path="/products">                          👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                      <Products />                                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                    </Route>                                               👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                  </div>
                                );
                              }

                              export default App;
                             
                          
                             
          
                             
        ---------- '<BrowserRouter/>' component  ----------
                           
                - To be able to use the '<Route />' component and other React router fetaures in our app, we need to wrap our root component '<App/>' with the '<BrowserRouter/>' compoennt provided by                                        'react-router-dom' package.
                           
                - 'paths' that are not defined in the '<Route path="/home">...</Route>' component element, will not render anythinf on the page.
                
                
                // ----- index.js file -----
                                
                                  import ReactDOM from "react-dom/client";
                                  import { BrowserRouter } from "react-router-dom";               👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                                  import "./index.css";
                                  import App from "./App";

                                  const root = ReactDOM.createRoot(document.getElementById("root"));
                                  root.render(
                                    <BrowserRouter>                                     👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                      <App />
                                    </BrowserRouter>                                                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                  );
                           
                          
               
                  
      - 📝 NOTE: We ussually put all the page components in a 'pages' folder. Page components, in the end, are just regular React components that contain all the components that we want to render for a                                    certain page.
      
      
     
      
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Working with Links `
      
        ---------- Adding Links that takes us to different pages  ----------
          
                           🛑🛑 This approach has a BIG FLAW 🛑🛑
    - If we add standard links / anchor tags to take us to other pages in the App, the traditional way like so 👇👇, instaed of rendering different components on the page, the link will load a *NEW HTML page*, we send a brand new request to the server as if we are using a traditional multi-page application. Which is NOT what we want.
    
          👆 This works, but it means we leave the active Single-page application, we start new one and we lose any application states that we might have in the application 👆
                             Which goes against the idea of building a Single-page application.
                             
 
          // ------ 🛑🛑 Flaw example 🛑🛑 ------
                             
                              import React from "react";
                             
                              const Header = () => {
                                return (
                                  <header>
                                    <nav>
                                      <ul>
                                        <li>
                                          <a href="/welcome">Welcome</a>
                                        </li>
                                        <li>
                                          <a href="/products">Products</a>
                                        </li>
                                      </ul>
                                    </nav>
                                  </header>
                                );
                              };

                              export default Header;
                                    
                             
                             
         👆👆👆👆  To prevent this behavior, we can use the '<Link/>' component provided by 'react-router-dom'  👇👇👇👇
                             
                             
         
        ---------- '<Link/>' component  ----------
                             
                             
      - The '<Link/>' component takes in a 'to="/about"' which holds the address or path that we want to navigate to.
                       ie:  ' <Link to="/about">About</Link> '
      
      - React router will render an anchor tag to the DOM from the '<Link/>' component.
      - React router will then listen to clicks on this anchor tag (generated from the '<Link/>' component), and prevents the browser default of sending a request to the server and loading a new HTML page. 
                             
      - React router will manually update the URL for us so it looks like we switched to a new page when in reality it renders components that belong to URL path, to the screen.  (Fake Navigation)
            So with '<Link/>' components --> 1. We dont send new requests to the server, 
                                             2. We stay on the loaded Single-page application,
                                             3. We dont loose any state by loading a new HTML page
                                             4. And we give the user the illusion of switching to different pages.
              
                               
                               
                 // ------ example ------
                                             
                                              import React from "react";
                                              import { Link } from "react-router-dom";                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                                              const Header = () => {
                                                return (
                                                  <header>
                                                    <nav>
                                                      <ul>
                                                        <li>
                                                          <Link to="/welcome">Welcome</Link>                  👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                                        </li>
                                                        <li>
                                                          <Link to="/products">Products</Link>                    👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                                        </li>
                                                      </ul>
                                                    </nav>
                                                  </header>
                                                );
                                              };

                                              export default Header;
                        
                             
                             
        ---------- '<NavLink/>' component  ----------   [Highlighting the ACTIVE link in the navigation]
                             
  - A special version of the '<Link/>' component that will add styling attributes to the rendered element when it matches the current URL.
                             
    - To highlight the ACTIVE link of the page, React Router has a component that helps us which is the '<NavLink/>' component. 
          So we can use the '<NavLink/>' component for Navbar links which works exactly like the '<Link/>' component, with the difference that  👇
          
          〰 '<NavLink/>' component have an 'activeClassName' prop which takes in a classname that gets added to the NavLink whenever that link is active, ie: whenever we are on the page that the NavLink belongs to. 
           
                      ie: ' <NavLink to="/faq" activeClassName="active"> FAQ </NavLink> '   
                             
                             - 📝 SideNote if we dont sepcify an 'activeClassName="selected"' props. The class 'active' automatically gets added to the active '<NavLink/>'
                   

      // ----- example -----
                             
                      import React from "react";
                      import {
                        HeaderStyled,
                        NavBar,
                        NavList,
                        NavItem,
                        NavLinkS,
                      } from "./HeaderStyles";

                      const Header = () => {
                        return (
                          <HeaderStyled>
                            <NavBar>
                              <NavList>
                                <NavItem>
                                  <NavLink activeClassName="active" to="/welcome">             👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                    Welcome
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink activeClassName="active" to="/products">              👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                    Products
                                  </NavLink>
                                </NavItem>
                              </NavList>
                            </NavBar>
                          </HeaderStyled>
                        );
                      };

                      export default Header;
                             

                             
                            
          〰 🔴🔴 React router Docs says to use the function 'className' props to apply classnames to either active or inactive NavLink components, instaed of the 'activeClassName' prop 👇
          
                                              '  https://v5.reactrouter.com/web/api/NavLink/classname-string-func  '
                             
                             
                             
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` What is difference between Route and Link ? `                            
                             
'<Route>' is used to define a path for your page components or views whereas a '<Link>' is used to define an anchor element to link the pages of the components with each other but '<Link>' makes sure that when you switch between pages, the page does not reloads, instead there is a switch between views on the same index.html that gets loaded in the browser.      
  
  
                             

// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Adding Dynamic Routes with Params `
                             

    - If we have a list of products and we want to always load the same page (a Product Details page) with different content for each product we click on, we can use 'dynamic routes'. 
      
                    So we are rendering the same component when we click on a product link, but we are dynamically displaying different content on it.
                      To do so we need to tell React Router for which product should the Product Detail page be loaded to, so the the right data can be displayed  👇 
                    
                    To do so we can define 'dynamic routes' by: 
        
                          - Creating a '<Route/>' component with a ' path="..." ' attribute that takes us to the Product Details page, and then use a special syntax -->  
                                   〰 a colon folowed by ANY identifier of our choice  -> ' :<id> ' ->  this is a dynamic segment that can take in ANY value we want 
                             
                             
                             👆👆👆 This is a 'Dynamic colon segment'. Its tells React Router that the overall path for which this page should be loaded will be something like this 👇 
                                                                                                                                                              ' our-domain.com/product-detail/<any value> '
                             
                             
                             // --- index.js file ----
                             
                             import { Route } from "react-router-dom";

                            import Header from "./layout/Header/Header";

                            import Welcome from "./pages/Welcome";
                            import Products from "./pages/Products";
                            import ProductsDetails from "./pages/ProductsDetails";                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                            function App() {
                              return (
                                <>
                                  <Header />
                                  <main>
                                    <Route path="/welcome">
                                      <Welcome />
                                    </Route>
                                    <Route path="/products">
                                      <Products />
                                    </Route>
                                    <Route path="/products/:productId">   // URL WILL BE --->  '  our-domain.com/products/<any value>  '            👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                      <ProductsDetails />
                                    </Route>
                                  </main>
                                </>
                              );
                            }

                            export default App;

                             
                             
                             
                             
                   ---------- 'useParams()' hook  ----------     
                             
       -  To utilize the Dynamic Path feature, we need access to the concrete value entered in the URL, INSIDE of the loaded component. We can do that using the 'useParams()' hook.    
       
       - 'useParams()' hook returns an object of key/value pairs, where the 
                            〰 keys are the 'Dynamic segments' leading to that page, which we specified in the 'path="..."' prop in '<Route/>' component        
                                                                                                                                                  👇👇👇   
                                                                                                              '<Route path="/prodtucts-details/:anyValue"/> ' .
                            〰 Values are whatever we enter in the URL inplace of that 'Dynamic segments'
                                                                                                              👇👇👇
                                                                            ' our-domain.com/product-detail/anything-here '
                                                                        
                                                                      
                          
                               
                // ---------- ProductDetails.js file ----------   [which is the SINGLE page that will render different data for different products]
                                                                                                              
                                import React from "react";
                                import { useParams } from "react-router-dom";                 👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                                const ProductsDetails = () => {
                                  const params = useParams();                 👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                                  console.log(params);       // Output:  '{ productId: 'anything-here' } '

                                  return (
                                    <div>
                                      <h1>Product Detail</h1>
                                      <h2>{params.productId}</h2>               👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                    </div>
                                  );
                                };

                                export default ProductsDetails;
                        
      
     
                             


// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Using 'switch' and 'exact' for configuring Routes `  
                             
                             [ALWAYS USE '<Switch/>' component to prevent rendering muliplte pages at the same time in our App]  <-- This is due to just how React router works. It loads ALL paths that match the current Route -> and in React router match means the start of the path, all paths after that is ignored. ie:
                                                    👇 ---> start path
                                    <Route path="/products">
                                            &&                                       React router will set both of these routes, active since their start path are the same. 
                                    <Route path="/products/:productId">
                                      
                             👆👆 To prevent this and always gave one ACTIVE route, we use '<Switch/>' component and 'exact' prop 👆👆
                             
    - The '<Switch>' component looks through all of its child routes and it displays the first one whose 'path' matches the current URL. 
          ⭐ This component is what we want to use in most cases for most applications, because we have multiple routes and multiple plate pages in our app but we only want              to show one page at a time.
          
        - 📝 SIDE NOTE: URL paths basically work like a folder structure, so if we have a 'products' page that open up a 'product-details' page when we click on a products, then we write the path in the '<Route>' like                this 👇
                                              👇👇
                              <Route path="/products/:productId">   // URL WILL BE --->  '  our-domain.com/products/<any value>  '           
                                   <ProductsDetails />
                              </Route>
                             
                             
                             
                             🛑✋⛔ INSTEAD of this ⛔✋🛑
                             
                                                👇👇👇
                              <Route path="/product-detail/:productId">   // URL WILL BE --->  '  our-domain.com/product-detail/<any value>  '            
                                   <ProductsDetails />
                              </Route>
                             
                             
                             
    〰️ If we just use '<Switch>' component, React router will activate the FIRST route that matches the URL, no matter how specific our paths are (so in order).
    
            // URL  --->  '  our-domain.com/products/<any value>  '
    
                           <Switch>           👇👇 -> start path
                             <Route path="/products">                               ----> `This Route will be ACTIVE`
                                   <ProductsDetails />                      
                              </Route>
                                                👇👇👇
                              <Route path="/products/:productId">             ---> `This Route will NOT be active even tho its more specific`
                                   <ProductsDetails />
                              </Route>
                            <Switch>
    
    
            👆👆 To avoid this we use the 'exact' prop available on '<Route/>' components 👆👆
   - The 'exact' prop, avaialabe on '<Route/>' components, disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url.
   
                        // URL  --->  '  our-domain.com/products/<any value>  '
   
                           <Switch>           👇👇 -> start path
                             <Route path="/products" exact>                               ----> `This Route will NOT be active`
                                   <ProductsDetails />                      
                              </Route>
                                                👇👇👇
                              <Route path="/products/:productId" exact>             ---> `This Route will be active`
                                   <ProductsDetails />
                              </Route>
                            <Switch>
                                
                                
                                
    // ------ App.js file ------
                                
                                import { Route, Switch } from "react-router-dom";               👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                import Header from "./layout/Header/Header";

                                import Welcome from "./pages/Welcome";
                                import Products from "./pages/Products";
                                import ProductsDetails from "./pages/ProductsDetails";

                                function App() {
                                  return (
                                    <>
                                      <Header />
                                      <main>
                                        <Switch>                            👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                          <Route path="/welcome">
                                            <Welcome />
                                          </Route>
                                          <Route path="/products" exact>                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                            <Products />
                                          </Route>
                                          <Route path="/products/:productId">
                                            <ProductsDetails />   
                                          </Route>      
                                        </Switch>                                       👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                      </main>
                                    </>
                                  );
                                }

                                export default App;
                             
                             
    // ------ Products.js file ------
                            
                              import React from "react";
                              import { Link } from "react-router-dom";

                              const Products = () => {
                                return (
                                  <div>
                                    <h1>This is the PRODUCTS page</h1>
                                    <ul>
                                      <Link to="/products/book">A Book</Link>
                                      <Link to="/products/carpet">A Carpet</Link>
                                      <Link to="/products/online-course">An Online Course</Link>
                                    </ul>
                                  </div>
                                );
                              };

                              export default Products;
      
   
   
                             


// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Working with Nested Routes ` 
                             

    - We are not limited to defining <Route/> in one place only in the App. We can define new Routes in defferent pages as well (Nested Routes). 
    
    - If these Nested Routes are in a component that is currently active, then React Router will evaluate these Nested Routes.
    
    - So we can define Routes '<Route/>' in other components/pages. Then load more content if we have a more specific path in those pages.
    
    
    
    // ------ App.js file ------
                                
                                import { Route, Switch } from "react-router-dom";               
                                import Header from "./layout/Header/Header";

                                import Welcome from "./pages/Welcome";
                                import Products from "./pages/Products";
                                import ProductsDetails from "./pages/ProductsDetails";

                                function App() {
                                  return (
                                    <>
                                      <Header />
                                      <main>
                                        <Switch>                            
                                          <Route path="/welcome">
                                            <Welcome />
                                          </Route>
                                          <Route path="/products" exact>                
                                            <Products />
                                          </Route>
                                          <Route path="/products/:productId">
                                            <ProductsDetails />   
                                          </Route>      
                                        </Switch>                                       
                                      </main>
                                    </>
                                  );
                                }

                                export default App;
                             
                             
    
    // ---- Welcome.js file ----
                             
                              import React from "react";
                              import { Route } from "react-router-dom";

                              const Welcome = () => {
                                return (
                                  <div>
                                    <h1>This is the WELCOME page</h1>

                                    <Route path="welcome/user-login" exact>       👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                      <p>User Login page</p>                    👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                    </Route>                                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                  </div>
                                );
                              };

                              export default Welcome;
    
    
  
 
                                 

    
    
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Redirecting the User ` 
    
    
    - A feature in React Router that lets us Redirect the user to a different page using the '<Redirect/>' component.
    
    
      // ---- example =====  
    
       import { Route, Switch, Redirect } from "react-router-dom";        👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

      import Header from "./layout/Header/Header";

      import Welcome from "./pages/Welcome";
      import Products from "./pages/Products";
      import ProductsDetails from "./pages/ProductsDetails";

      function App() {
        return (
          <>
            <Header />
            <main>
              <Switch>
                <Route path="/" exact>              👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈              / IMPORTANT -> if we dont add 'exact' props to 'path="/"' then all pages will open the <Welcome/> page since all paths 
                  <Redirect to="/welcome" />              👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈                        start with a "/".    ie: ' our-domain.com/ '  is the same as ' our-domain.com '
                </Route>                                  👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                <Route path="/welcome">
                  <Welcome />
                </Route>
                <Route path="/products" exact>
                  <Products />
                </Route>
                <Route path="/products/:productId">
                  <ProductsDetails />
                </Route>
              </Switch>
            </main>
          </>
        );
      }

      export default App;
                             
                             

/ 📝 ⭐ Side Note: When setting a Homepage path set the path to path="/" and add the 'exact' keyword to the <Route/>
                             
                <Route path="/" exact>            
                  <Home/>             
                </Route>   
                             
                             
                      
                             
                             
                             
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` Adding a '404' page ` 
                
                
    
   - If the user enters a totally unknown Route in the URL (a Route that we didnt specify in the 'path' prop in '<Route path="...">' component) --> then the page content will be ⬜ BLANK/EMPTY.     
   
          👆👆👆 In this situations, in the real world, we want to display a '404' page, that tells the user that this page doesnt exist, instead of just showing a blank page.
          
    - So if the user enters an unsupported path in the URL, we can show a '404' page by:
                             1. Adding a fallback '<Route/>' component at the end of our '<Switch/>' statement which will be a fallback if none of the Routes above it match.
                             2. This fallback '<Route/>' should have a ' path="*" ' props with a '*' character as a value, which is a wildcard path that signals to React Router that this Route should match for ANY/ALL                                   paths/URLs in the App.
                                    - So this Route ' <Route path="*"/> ' will MATCH for ALL URLs, which is why we put it at the end of the '<Switch/>' so that it doesnt consume one of the Requests to the actual Routes                                            defined above it, in the '<Switch/>'.
                                
                             
                             
               // ----- example -----
                                    
                                    import { Switch, Route, Redirect } from "react-router-dom";
                                    import Header from "./layout/Header/Header";
                                    import { Main } from "./layout/Main/Main";
                                    import QuotesPage from "./pages/QuotesPage";
                                    import QuoteDetailPage from "./pages/QuoteDetailPage";
                                    import NewQuotePage from "./pages/NewQuotePage";
                                    import NotFoundPage from "./pages/NotFoundPage";

                                    function App() {
                                      return (
                                        <>
                                          <Header />

                                          <Main>
                                            <Switch>
                                              <Route path="/" exact>
                                                <Redirect to="/quotes" />
                                              </Route>

                                              <Route path="/quotes" exact>
                                                <QuotesPage />
                                              </Route>

                                              <Route path="/quotes/:quoteId">
                                                <QuoteDetailPage />
                                              </Route>

                                              <Route path="/new-quote" exact>
                                                <NewQuotePage />
                                              </Route>

                                              {/* Fallback Route 👇👇 */}
                                              <Route path="*">                    👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                                <NotFoundPage />                          👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                              </Route>                                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                            </Switch>
                                          </Main>
                                        </>
                                      );
                                    }

                                    export default App;
                             
                             
               
                             
                             
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ ` using 'useHistory' Hook    -->  to Programmatically (Imperatively) navigate user to a different page  ` 
                             
    
      - 'useHistory' hook allows us to change the browser history of pages the user visited. 
            It gives us access to the history instance which we may use to navigate to different pages.
            
      - ⭐ To navigate to a new page using 'useHistory' hook  ->  
                - we either use the 'push' method on the returned 'useHistory' object, which pushes a new page to the stack of pages in our history
                - or we can use the 'replace' method, which replaces the current page
                
                Difference between 'push' & 'replace' methods on the history object, is that with 'push' we can go back with the back button to the page we are coming from, but with 'replace' method we CANT.
                
                So 'replace' is like 'redirect' where we change the current page, whereas 'push' adds a NEW page.

                   🌟🌟 use 'push' to implement prgrammatic navigation with React Router.
                   

      // ----- example -----
                   
                   import React from "react";
                  import { useHistory } from "react-router-dom";                        👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                  import QuoteForm from "../components/quotes/QuoteForm";

                  const NewQuotePage = () => {
                    const history = useHistory();                                             👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                    const addQuoteHandler = (quoteData) => {
                      // send data to server
                      console.log(quoteData);

                      // After data is sent successfully to server -> Imperatively Navigate user to Home page using 'useHistory' hook
                      history.push("/quotes");                                            👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                    };

                    return <QuoteForm onAddQuote={addQuoteHandler} />;
                  };

                  export default NewQuotePage;
                             
                             
                             
``                       
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ `  '<Prompt/>' component   ` 


  - Used to prompt the user before navigating away from a page, just like 'prompt()' method in Vanilla JavaScript.
          When your application enters a state that should prevent the user from navigating away (like a form is half-filled out), render a <Prompt> component.
          
  - The '<Prompt/>' component takes in two props: 
                             - 'when' prop where we pass in 'true' or 'false' defining whether this Prompt should be shown or not, depending on whether the user changes the URL or not. 
                                   so if 'isFormFocued' is true, the prompt will be shown if the user tries to leave the page, in example shown below 👇👇.
                                   
                             - 'message' prop which takes in a function that should return a string with the text that we want to show to the user, if they try to leave.
                                      In this function we get the 'location' object which hold information about the page we are trying to go to. This would allow us to include the path of the page we are going to in the                                       message string we are showing the user.
                                      
                                        ie: '  <Prompt when={isFormFocused} message={(location) =>`Are you sure you want to leave? '${location.pathname}' page`};  '
                             

     // ----- example -----
                             
                              import { useEffect, useRef, useState } from "react";
                              import { Prompt } from "react-router-dom";                                👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                              import Card from "../UI/Card/Card";
                              import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";


                              const QuoteForm = (props) => {
                                const [isFormFocused, setIsFormFocused] = useState(false);                  👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

                                const authorInputRef = useRef();
                                const textInputRef = useRef();

                                const formFocusHandler = (event) => {                       👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                  setIsFormFocused(true); 
                                };

                                const buttonClickHandler = () => {                                            👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                  //  we don't add this 👇 in 'submitFormHandler()' function because it would be too late and the Prompt will render.
                                  setIsFormFocused(false);                                      👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                };  

                                function submitFormHandler(event) {
                                  event.preventDefault();

                                  const enteredAuthor = authorInputRef.current.value;
                                  const enteredText = textInputRef.current.value;

                                  // optional: Could validate here
                                  props.onAddQuote({ author: enteredAuthor, text: enteredText });
                                }

                                return (
                                  <>
                                    <Prompt                                                          👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                      when={isFormFocused}                                                      👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                      message={(location) =>                                             👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                        `Are you sure you want to leave? All entered data will be lost. 
                                         You will go to page with this '${location.pathname}' page`
                                      }
                                    />
                                    <Card>
                                      <Form onFocus={formFocusHandler} onSubmit={submitFormHandler}>
                                        {props.isLoading && (
                                          <LoadingSpinnerContainer>
                                            <LoadingSpinner />
                                          </LoadingSpinnerContainer>
                                        )}

                                        <FormControl>
                                          <label htmlFor="author">Author</label>
                                          <input type="text" id="author" ref={authorInputRef} />
                                        </FormControl>

                                        <FormControl>
                                          <label htmlFor="text">Text</label>
                                          <textarea id="text" rows="5" ref={textInputRef}></textarea>
                                        </FormControl>

                                        <FormActions>
                                          <FormButton
                                            onClick={buttonClickHandler}                          👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈
                                            className="btn"
                                            type="submit"
                                          >
                                            Add Quote
                                          </FormButton>
                                        </FormActions>
                                      </Form>
                                    </Card>
                                  </>
                                );
                              };

                              export default QuoteForm;




``
// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ `    ` 

                             
            
                   
                    
                
                
                
                                 
                                 
                                 
                                 

/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 / 🚀🚀🚀🚀🚀🚀   Deploying React Apps      ---      [From Development to Production]    🚀🚀🚀🚀🚀🚀
                                 

    - During development we work on React Apps locally. 
            When we build a website we want to push it to a server, so that users can access it.
            
            
// -------------------------------------------------------------------------------------
// -----------------------------------------------------------------
/ Deployment steps 👇     [How to push it to real server]
                                 
    1. Test code
    
    2. Optimize code   --  For instance adding 'Lazy Loading' using 'React.lazy()' method and 'Suspense' react built-in component.
    
    3. 'Build' app for production   --  By executing a script written for us by React to convert all the JS code to code that the browser understands. 
              - The script will output a production ready bundle for our code, which is minified and automatically optimized to be as small as possible. We can then take that optimized output bundle and move it to a                     server which will serve it to users in a highly optimized code package.
              
    4. Upload Production code to Server  --  Deploy our production package to a server. Different hosting providers we can choose from.
    
    5. Configure our server or hosting provider 
    
    
    -----------------------------------------------------------------------    
    / ` Steps above explaned `
    
    2. Optimize code   -->  For instance adding 'Lazy Loading' which means load code only when its needed. Easy to implement when using routing. Using 'React.lazy()' method and 'Suspense' react built-in component.
                                  [WATCH this lecture again once I finish 'React Routing' module]         ' https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600978#overview '
                             
               
                                 
    3. Build app for production   -->  〰 'npm start' :  For 'DEVELOPMENT', runs a script that transforms our code to code that the browser understands, BUT it doesnt optimize the code. It also sets up a development                                                               server which hosts the development code.
    
                                    ⭐ 〰 'npm run build' : For 'PRODUCTION', this will also transform our code to code that the browser understands, but will also OPTIMIZE and shrink it as much as possible. And will NOT                                                                 start a server. 
                                    
                                                               - It will build an optimized production output in a 'build' folder. The 'build' folder holds ALL the code/files that we will need to move to a server later,                                                                  inorder to deploy the app and make run it on that server. 'build' folder will get overitten everytime we run 'npm run build'. 
                                                               
                                                               - We add files to the 'public' folder tho, like the favicon for instance.
                                                               
                                                               - The 'static' folder in the 'build' folder contains our optimized js and css files.
                                                      
                                      〰 'npm run serve'  -> We can then run this script to preview the production app on our local machine.
                             
                 
                                      
                                 
    4. Upload Production code to Server  --> A React static page application (or any SPA no matter what framework we used)  is a 'STATIC website'. Which means that it is only made up of HTML, CSS & JavaScript ('Client-                                                side' code), there is NO server-side code involved (NO 'Node.js', 'PHP' code).
                                            
                                             - Since React apps are 'STATIC websites', we need a 'Static Site Host'. We DONT need a hosting provider that lets us run 'Server-side code' like 'Node.js' or 'PHP'. 
                                                                     Google/search for a 'Static website hosting provider' in order to find different host providers for our React application. 
                                                                                   [We used 'Firebase' in the course to host the React app]
                               
       ⭐⭐⭐ IMPORTANT -> When the Hosting provider asks ' What do you want to use as your 'public directory'? ' -> CHOOSE our app 'BUILD' folder by writing 'build' in the console.
                
              
       
       
   5. Configure our server or hosting provider   -->  Then when it asks ' Configure as a single-page app (rewrite all urls to /index.html)? ' -> Write 'y' for yes. So the path in the url that the user sent as a request,                                                        is IGNORED by the server and we always return or single page application code no matter what the URL was. Then let 'React-router' handle which page to render                                                                depending on the path in the URL.
          
                                   [ Check video for explanation -> ' https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600992#overview ']
                                 
                - 'File build/index.html already exists. Overwrite? ' -> 'No'
                                 
                                 
                                 
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
/ ==============================================================================================================================================================================================
// -------------------------------------------------------------
 /
                                 