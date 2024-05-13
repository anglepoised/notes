module.exports = [
  {
    type: "input",
    name: "title",
    message: "Article title (sentence case)?",
  },
  {
    type: "confirm",
    name: "createBranch",
    message: "Do you want to create a new branch for this article?",
    default: false, // Default no to avoid accidental branch creation
  },
];
