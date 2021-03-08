let decks = {
    Javascript: {
        title: 'Deck1',
        questions: [
            {
                question: 'What is hoisting in Javascript?',
                answer: 'Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top of the scope (global or local).'
            },
            {
                question: 'What is the difference between "==" and "===" in Javascript?',
                answer: 'Both are comparison operators. The difference between both the operators is that, “==” is used to compare values whereas, “===“ is used to compare both value and types.'
            },
            {
                question: 'Is Javascript a static or dynamically typed language?',
                answer: 'JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to statically typed language, where the type of a variable is checked during compile-time.  Variables in JS are not associated with any type. A variable can hold the value of any data type.'
            }
        ]
    },
    React: {
        title: 'React',
        questions: [
            {
                question: 'What are React Components?',
                answer: 'Components are the building materials React uses to create website and application UI’s.  Components break a UI down into reusable parts (one of React’s core competencies). React then renders each UI component as needed (separately from the others), which is a big part of React’s fast performance speeds.'
            },
            {
                question: 'Whats the difference between props and state?',
                answer: '“State” describes a default data value in a React component that can change over time (usually based on user actions that call for changes in a UI).“Props” (or properties) describe the way a React component is configured. Props do not change. State is mutable (changeable based on user actions) while props are not'
            },
            {
                question: 'What is the difference between React and React Native?',
                answer: 'React JS is a front end, open source JavaScript library used for building UIs.  React Native is an open source, MOBILE framework that allows developers to use React on platforms like Android and iOS.'
            }
        ]
    }
}