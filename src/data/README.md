Project name :- Dev Stack

Description :- Dev Stack is a responsive React and TypeScript web application
that helps developers explore different technologies and build their own development stack.

Technologies Used :-

 React
 TypeScript
 Tailwind CSS
 React-Toastify
 JSON
 Vite

 Features

1. Explore different frontend, backend, database, and development
   technologies from a responsive technology grid.

2. Add technologies to a personal stack and remove individual
   technologies or clear the entire stack.

3. Responsive design with loading states and toast notifications
   for add, duplicate, remove, and remove-all actions.

React Questions :-

1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside
JavaScript or TypeScript. React uses JSX to make UI code easier
to write and understand.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it?

useState is used to create and manage changing data in a React
component. In this project, I used it to store the technologies,
selected stack items, and loading state.

4. What does the useEffect hook do, and why did you need it?

useEffect is used to perform side effects in a React component.
I used it to fetch the technology data from the local JSON file
when the application loads.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key
helps React efficiently update the correct item when the list
changes.

6. What is conditional rendering?

Conditional rendering means showing different UI depending on
a condition. In this project, I show an empty stack message when
the selected stack has no technologies.

7. How do you pass data from a parent component to a child component,
and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send
information back by calling a function passed to it through props.