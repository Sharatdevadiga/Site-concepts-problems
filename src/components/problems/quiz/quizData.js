const quizData = [
  {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    question: "What is JSX in React?",
    options: [
      "A templating language similar to HTML",
      "A syntax extension for JavaScript",
      "A feature used to directly manipulate the DOM",
      "A way to style React components",
    ],
    answer: "A syntax extension for JavaScript",
  },
  {
    question: "How do you pass data to a child component in React?",
    options: ["Using state", "Using props", "Using context", "Using events"],
    answer: "Using props",
  },
  {
    question:
      "Which lifecycle method is called after the component is rendered for the first time?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "componentDidUpdate",
      "componentWillUnmount",
    ],
    answer: "componentDidMount",
  },
  {
    question: "Which keyword is used to create a class component in React?",
    options: ["class", "function", "component", "constructor"],
    answer: "class",
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useState", "useContext", "useReducer", "useEffect"],
    answer: "useEffect",
  },
  {
    question: "What is the purpose of the 'key' prop in React?",
    options: [
      "To uniquely identify elements in a list",
      "To define the type of element",
      "To bind event listeners to elements",
      "To initialize component state",
    ],
    answer: "To uniquely identify elements in a list",
  },
  {
    question: "Which of the following is true about React components?",
    options: [
      "They must be written as class-based components",
      "They can be reused across different parts of the app",
      "They must be defined inside the `render()` method",
      "They are only available in functional programming",
    ],
    answer: "They can be reused across different parts of the app",
  },
  {
    question: "How do you conditionally render elements in React?",
    options: [
      "Using a ternary operator or if-else statement",
      "Using switch-case statements",
      "Using `render` method only",
      "By wrapping JSX in parentheses",
    ],
    answer: "Using a ternary operator or if-else statement",
  },
  {
    question: "Which of the following can be used to optimize a React app?",
    options: [
      "Avoid using props",
      "Use React.memo for functional components",
      "Only use class components",
      "Use inline functions inside JSX",
    ],
    answer: "Use React.memo for functional components",
  },
];

export default quizData;
