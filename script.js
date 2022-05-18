< REACT JS>

// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / General Things to remember 
  
 - React is a JavaScript library for building user interfaces. HTML, CSS & JavaScript are about building user interfaces as well. React just makes building complex interactive and reactive user            interfaces SIMPLER.
 
 - ⭐ React uses a Declarative Approach. With declarative code, we tell JavaScript what we want to be done, and let JavaScript take care of performing the steps. React is declarative because we write the code that we want and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result. Like so 👇 {with React we just define the required end state and React will then generate these instructions behind the scenes to bring that on to the screen in the browser}
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
   // ⭐⭐⭐ STARTING A NEW REACT APP ⭐⭐⭐

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

- We style React components normally using CSS or any preprocessor (ie: Sass {try later})

- We ussually create a CSS file for each compoenets. And give it the same name as the componenet JS file that it will belong to. Then we put them in the same folder.

- We then add our styling for that component in the component's CSS file. 

- And after that we link the component's CSS file to the component's JavaScript function using 'import' statement . Like so 👉 (import './ExpenseItem.css')
    
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

- 'Props' is a special keyword in React, which stands for PROPERTIES and is used for passing data from one component to another. But the important part here is that data get passed with props in a uni-directional flow. (one way from parent to child)

- Furthermore, 'props' data is read-only, which means that data coming from the parent should not be changed by child components. 
                          [Parent is -> the React component which '<ExpenseItem></ExpenseItem>' custom Element is being used inside. ie: const App = () => { return ('<ExpenseItem></ExpenseItem>') }. So 'App' component is the parent] 
                          [Child is -> the custom Element React component itself. ie: const ExpenseItem = () => { return (....) }]

- React components can ONLY have ONE argument, which is 'props' (Can be named anything tho). Which holds all the values that we passed in attributes, in custom Elements. We can define our own attributes & assign values, to custom Elements, with interpolation '{ }'                                                         ('<ChildComponent text={“I’m the 1st child”} />').
                          
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
      - It then returns an array with two variables/values, which we can use destructuring to extract them from the Array. 
                    〰 FIRST variable is our CURRENT state, at every iteration of the render component. 
                    〰 SECOND variable is a function that will allow us to update that CURRENT state of the component, by providing a new state. 
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
     / 🟠 CORRECT way of updating a state based on the PREVIOUS state.
⭐⭐⭐⭐⭐ IMPORTANT -> Whenever we update a state while we are dependent on the previous state (as in the example below), we should pass in a function inside the updating state function:
        
                                // -- 🟢🟢🟢 --
                                  setEnteredInput((prevState) => {                // 🌟🌟 'prevState' argument return an object of containing the previus state/states of the component funtion.
                                    ...prevState,
                                    enteredTitle: event.target.value,
                                  });

                We do it like this because React scedules state updates, it doesnt perform them instantly. So if we schedule alot of state updates at the same time, we could be dependant on an outdated                 or incorrect state, when updating to the new state. So dont use this approach 👇 use that approach instead 👆, where we pass in a function as an argument inside the update state function

                              // -- 🔴🔴🔴 --
                                setEnteredInput({
                                  ...enteredInput,
                                  enteredTitle: event.target.value,
                                });  

                      [Safer way to ensure that we always operate on the latest state snapshot. So use this function syntax whenever our state update is dependant on the previous state]

}
// -------------------------------------------------------------------------------
// -------------------------------------------------------------
  / Two-Way Binding in FORMS                      / [VERY USEFULL IN FORMS]

// Two-Way Binding in forms means that we dont just listen to changes, we also pass/feed a new value back into the input upon submission of the form. 

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

