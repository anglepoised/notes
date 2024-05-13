module.exports = [
  {
    type: "input",
    name: "title",
    message: "Post title (sentence case)?",
  },
  {
    type: "confirm",
    name: "createBranch",
    message: "Do you want to create a new branch for this post?",
    default: false, // Default no to avoid accidental branch creation
  },
];
