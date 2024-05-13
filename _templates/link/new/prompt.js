module.exports = [
  {
    type: "input",
    name: "title",
    message: "Post title (sentence case)?",
  },
  {
    type: "input",
    name: "linkUrl",
    message: "Link URL?",
  },
  {
    type: "confirm",
    name: "createBranch",
    message: "Do you want to create a new branch for this article?",
    default: false, // Default no to avoid accidental branch creation
  },
];
