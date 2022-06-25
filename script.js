< REACT JS >

// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / General Things to remember 
  
 - React is a JavaScript library for building user interfaces. HTML, CSS & JavaScript are about building user interfaces as well. React just makes building complex interactive and reactive user            interfaces SIMPLER.
 
 - ⭐ React uses a Declarative Approach. With declarative code, we tell JavaScript what we want to be done, and let JavaScript take care of performing the steps. React is declarative because we write the code that we want and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result. Like so 👇 {with React we just define the required end state and React will then generate these instructions behind the scenes to bring that on to the screen in the browser}

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
 
 - On the other hand with Vanilla JavaScript we use an Imperative Approach because we are giving the browser clear step by step instructions of what JavaScript and the browser should be doing, for example when creating an element using JS and then changing its textContent, like so 👇 {Very combersome and rendundant as our project gets bigger and we have too many elements}
------------------
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is an Imperative way of creating an HTML element using JS'
    document.getElemenetById('root').append(paragraph); 
------------------
  
 - To start seeing the changes live on the browser, you need to run "npm start" in the directory's/folder location (which uses node.js [backend server-side] to update the browser automatically) 
  
 - In React, we build a component tree that has one root node. A component tree is when we build a tree by nesting components into each other - just as when we build an HTML tree when building a standard HTML document.

 
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------
   // ⭐⭐⭐⭐⭐⭐ STARTING A NEW REACT APP ⭐⭐⭐⭐⭐⭐

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


// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------
   // React App files structure
     
 - 'src' folder is where the files that we will write our react code is located.
 
 - All react code is JavaScript code. 
      
 - ⭐ In React the "index.js" file is the FIRST file to be executed when running in the browser, unlike in Native Javascript where the "index.html" file is the first to be executed and then the rest.
  
 - React only has one HTML file because in React we build Single page Applications. So only one HTML file is delivered to the browser, and then rendered, hosted by the browser. But on this single HTML file, we render the finished react application code which then updates what we see on the screen, giving us the illusion of a multiple page website (multiple HTML pages), when in fact it is only one page (one HTML file), only the stuff/elements on it changes.
 
 - React tranforms our code into code that the browser would understand. For instance,  "import './index.css'" does NOT work with Vanilla Javascript (invalid syntax). We cant import a CSS file into a JavaScript file in vanilla JavaScript. But React does its magic behind the scenes and converts the code into something the browser will understand.
 
 - We ommit the ".js" when importing javascript script files in the "index.js" file. Example: "import App from './App';"    NOT     "import App from './App.js';"
  BUT if its another file type like a css file, then we keep the ".css". Like so: "import './index.css';"


// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  // What is JSX?

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

   
    
// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  // What are Components in React?
    
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


// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  // Organizing Components into Sub-Folders

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
    

    
// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  // STYLING Components in React

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


// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  // Outputting Dynamic Data & Working with Expressions in JSX  

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


// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  // Passing Data via "Props" (stands for PROPERTIES) in React (VERY IMPORTANT IN REACT) 🌟🌟🌟

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


// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  // Splitting Components into Multiple components (Preference)

 - As we work on React Applications, our react components eventually gets BIGGER and BIGGER, as we have more logic in the App. 
 
 - Which is why React has this components aspect, which allows us to split our application into smaller building blocks. Where every component/building block is focused on one core task.
 
 - This makes each compoenent small and manageable, while still being able to build complex applications by combining these componenets/building blocks.

 
// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  // The concept of 'Composition' ("children-props") ['props.children' && 'props.className']
 
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



// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  // Listening to Events & working with Event Handlers in React

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


// -------------------------------------------------------------------------------
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


                                    }
// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / 'State' concept in React
 
 - In object-oriented programming, the 'state' of an object is the combination of the original values in the object plus any modifications made to them. 

 - 'State' is a plain JavaScript object used by React to represent an information about the component's current situation.
                It's managed in the component (just like any variable declared in a function)

      
 }
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


// -------------------------------------------------------------------------------
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
                
                
                
// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / 'Controlled' components vs 'Uncontrolled' components in React            / 🛑🚏 `[INTERVIEW Question ]` 🛑🚏

- When talking about 'Controlled' components vs 'Uncontrolled' components in React, we are ussually referring to *FORM* elements such as '<input>', '<textarea>', and '<select>'.

-- 'Controlled' components: 👇           --- ['useState' hook] ---
                    1. In React, 'Controlled' Components are those in which the form’s data is handled by the component’s state. 
                    2. An '<input>' form element whose value is controlled by React is called a 'Controlled' component.
                    3.  React handles 'Controlled' component form data through state ('useState' hook). It updates that state on every keystroke. And then feed that state back to the '<input>' form                           element, through the 'value' prop. So we can use 'setState' to reset the 'value' prop on an '<input>' element after submitting the form.
                                         Hence, these '<input>' form elements are called 'Controlled' components becaus etheir internal state is controlled by React.
 
                            
     // ------- Example -------
                            
                                import React, { useState, useRef } from "react";
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
                    2. To write an uncontrolled component, instead of writing an event handler for every state update, we can use a 'ref' prop in the HTML element, with the 'useRef' hook, to get form values from the DOM. 
                    3. The approach of using 'ref' prop with the 'useRef' hook to interact with DOM elements, specifically with Input elements, is called 'Uncontrolled' components, inwhich we access DOM element values with 'ref' attribute and 'useRef' hook. 
                    4. Because the form input data/values internal state, is NOT controlled by React, in an 'Uncontrolled' component. 
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
 

// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / Stateless vs Stateful components           ---- IMPORTANT PATTERN ----

- 'Stateful' components are components that manages some state, inside their component function, using the 'useState()' hook. 


- 'Stateless' (dumb) components are components that does NOT manage any state, inside their component function. 
                      Also called presentational or Dumb components because it doesnt have any internal state, it just outputs some data to th user.  


        -------- ⭐⭐ In most React applications, we will have *MORE* 'Stateless' (dumb) components than 'Stateful' (smart) component ⭐⭐ --------
                      Because only a few components manages states and then distributes those states to 'Stateless' componets through 'props', which then 'Stateless' components output these states
                      
                  
                      
// -------------------------------------------------------------------------------
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


// -------------------------------------------------------------------------------
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


// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / Adding Dynamic STYLING to elements in JSX

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


// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------
  / Styling Components
  
}  
  
/ Things discussed in this section: 👇

    -- Conditional & Dynamic Styling
    -- 🌟🌟 Two popular appraches for SCOPING styles to Components. (setting up styles that only affect a certain component, and is not added as Global CSS)
                          1. Using 'Styled Components' approach. A popular Third-party library that allows us to setup PRE-STYLED components with their own scoped styles.
                          2. Using 'CSS Modules' approach.
                          
- ⭐ REMEMBER -- IMPORTANT -> The linked CSS file (import './ExpenseItem.css') styling is NOT SCOPED to just the JS component function they are linked to. They are available GLOBALLY. 


            // --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// -------------------------------------------------------------
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
        / 👇👇 EXAMPLE -> conditional styling using 'CSS Classes Dynamically' (using template literals) 
                                                                            
                                                                              [🌟🌟 USE THIS 🌟🌟] 

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
      /* ------------- 🟡🟡 Contidional Styling using Template Literals 🟢🟢 ------------- */
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>        👈👈👈
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;



`

         // --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// -------------------------------------------------------------
  / -- 'styled-components' library/package   --->   [Approach 1 for scoped component styling]        [🌟🌟 prefer 'CSS modules' over 'styled-components'. DONT USE??🌟🌟]
 

- ⭐ REMEMBER -- IMPORTANT -> The linked CSS file (import './ExpenseItem.css') styling is NOT SCOPED to just the JS component function they are linked to. They are available GLOBALLY. 

                🎎🎍 Its totally fine. But it might cause bugs when alot of developers are working on the same project and duplicate css class names are accidently created. 
                      Which is why we use scoped component styling.
                
                      
   - The 'Styled Components' library helps us build components which have certain styles attached to them. Where the styling is scoped to the component its attached to. Cant access those styles on any other component in the App.
   
   
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
        
        - 🌟 IMPORTANT -> then ' button`` ' method will then return a NEW '<button>' component. ('Styled Components' library has methods for ALL HTML elements. ie: ' p`` ' method, ' h1`` ' method,                  etc...)
        - So a ' .button`` ' method returns a button element. An ' .h1`` ' method returns an h1 element. etc.....

        
      - 🔵🟢 So in 'const Button = styled.button``;':
                     1. 'button``' metod will return a Button element.
                     2. The styling between specified in between the backticks ' `` ', will be attached to the returned Button element as scoped styling. 
                     3. The returned button is then stored in the 'Button' variable.
                     4. 🌟🌟🌟 The returned button also has all the 'props' passed to the component function's custom element. Cannot console.log() it?
      

      - 🟤🟠 'Styled Components' syntax: 
                     1. " import styled from 'styled-components'; " --> in every component file that uses 'Styled Components' library.
                     2. Styling between backticks dont take in selectors/classes (ie: ⛔ '.button { ... }' ⛔)
                     3. It is similar to Sass in a way that we can use '&' to style psuedo-elements (ie: '&:hover', '&:focus'),  or target a child element (ie: '& input')
                     


// --------------------------------------------------------------
/`  How does 'Styled Components' make the styling SCOPED to the returned element??   `
      'Styled Components' make the styling SCOPED to the returned element, by dynamically generating and adding unique classes to the returned element, that are not shared by any other elements in the       app.
      So in the end the styling is available GLOBALLY, but with unique classes that are dynamically assigned to elements that the styling belong to. Inorder to avoid accidently spilling styles to other components.
// --------------------------------------------------------------

      
   // ----- Exmaple  👇👇👇
   
// -------- 👇 Using 'styled-components' library 👇 --------
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
  2. Another feature of 'styled-components' is adding 'props' to our styled-components, and then utilize thos 'props' inside out backticks in the 'styled-components' function. [ prefer this as well]
           

    - since we are between backticks ' `` ', we can use template literal syntax '${}'.
    - And inside '${}' , 'styled-components' lets us pass in an arrow-function which takes in 'props' as an argument. 
    - 'props' argument will contain all the 'props' passed into the styled-component custom element (ie: ' <FormControl inValid={!isValid}>'), which we can then use to dynamically/conditionally style       the component depending on the 'props' value (true or false).

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
// -------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------
// -------------------------------------------------------------
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
  / -- 'Fragements' 

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
 
// --------------------------------------------------------------------------
// -------------------------------------------------------------
  /` Difference between 'react' & 'react-dom' packages in 'package.json' file         `
  
- the 'react' library (shown in 'package.json' file) -> is a javascript library, designed for building better user interfaces.
- the 'react-dom' library (shown in 'package.json' file) -> is a complimentary library to React which glues React to the browser DOM. 'react-dom' binds the idea of React to a web browser


- Side note:  〰 'react-dom' package is used with 'react' package to create browser/web apps.
              〰 'react-native' package is used with 'react' package to create mobile apps.
              
// --------------------------------------------------------------------------
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

      /` 📝 SIDE NOTE: - ussually we dont need to use ' document.getElementById('...') ' or document.querySelector('...'), etc.. in React. But in this case we DO need to use it.
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


``
// --------------------------------------------------------------------------
// -------------------------------------------------------------
  / 'refs' using the 'useRef' Hook

- 'refs' are powerful. In their most basic form, they allow us to gain access to other DOM elements and work with them.

- 'useRef' key features: 👇
                  1. Remember, like all React Hooks, 'useRef' is only usable/functional INSIDE React component functions.
                  2. Using 'useRef' ->  -- 'useRef' returns a mutable Object with a 'current' property that is initialised with the value of the argument passed into the 'useRef()' Hook. 
                                                           (ie: 'initialValue' in -> ' const refContainer = useRef(initialValue); ')

                                        -- We can then use the 'ref' prop, available on ALL HTML elements inside JSX code, to CONNECT the HTML element to one of the specified 'useRef' variables. 
                                                               [very often used in INPUT erlements, because we just want to fetch input data, nothing more]
                                                                   example: '<input type="text"  ref={refContainer} .> '

                                        -- 🌟🌟 Using 'ref' prop on an HTML element will set the 'current' property value of that 'useRef' hook, to the CORRESPONDING DOM node whenever that node                                                       **CHANGES**.        IMPORTANT -> So what will end-up as a value of the 'current' property, is a DOM Node itself which contains a value of the element.
                                                From there we can acces the 'value' property available on ALL DOM nodes to get the value of the connected HTML element. 
                                                    (ie: 'refContainer.current.value') 🌟🌟
                                        
                                        -- 🔴 One things to note is that it is not good practice to manipulate the 'value' property of a DOM element using 'useRef' 
                                                    (like so -> ' refContainer.current.value = 0 ').     
                                        If  we want to do manipulate the 'value' property of that connected DOM Node, use 'useState' instead. One exception tho inwhich its fine, is if we want to reset                                         an '<input>' value after we read it using 'useRef'. 
                                                ⭐ So RARELY use 'useRef' to manipulate the DOM ⭐
                                       

- Keep in mind that 'useRef' doesn’t notify you when its content changes. Mutating the 'current' property doesn’t cause a re-render.

- SUMMARY --> use 'useRef' Hook instead of 'useState', when we just want to read a value without changing anything or re-render that component.

- using 'useState' to just read the current value of input elements, for example, is not the best solution because it re-renders the whole components everytime the input value changes. Whereas 'useRef' just lets us read the value and thats it.


// EXAMPLE 👇
            import React, { useState, useRef } from "react";
            import Card from "../UI/Card";
            import Button from "../Button/Button";

            import styles from "./UserForm.module.scss";

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
                                                                1. Remember, React component functions get re-rendered whenever a state in the component changes. 
                                                                   It re-executes the component function's JSX CODE inorder to check for the new result of that component function and compare it to the                                                                    previous result of the function. Then apply those changes to the real DOM.



// --------------------------------------------------------------------------
// -------------------------------------------------------------
  / 'useEffect' hook         [Handles 'Side Effect' or 'Effects']
         
                                                                                  
- using 'useEffect' hook --> ' useEffetc(() => { ... }, [dependencies]) '

                         - The 'useEffect' hook takes in two arguments:
                                          1. The FIRST argument, is a function that will be executed AFTER the component is evaluated/rendered to the screen. (After every evaluation of the component)
                                                 👆 🌟🌟 By default, 'useEffect' hook runs after every completed render. But if we specify dependencies in the second argument, then the                                                                                                    'useEffect' hook will only be executed if the dependencies change. 🌟🌟 👆

                                          2. The SECOND argument *[OPTIONAL]*, is an array of dependencies that allow the 'useEffect' hook to execute only if any of those dependencies change,                                                      otherwise it wont.
     

  
                            
