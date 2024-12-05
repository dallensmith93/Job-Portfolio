document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "Budgetly Django",
      image: "assets/budget.jpg",
      link: "https://github.com/dallensmith93/budgetlyapp.git",
    },
    {
      title: "Chatbox",
      image: "assets/chatbox.jpg",
      link: "https://github.com/dallensmith93/chatbox.git",
    },
    {
      title: "Task Maker",
      image: "assets/todolist.jpg",
      link: "https://github.com/dallensmith93/todolist.git",
    },
    {
      title: "Poll makes",
      image: "assets/pollmakes.jpg",
      link: "https://github.com/dallensmith93/pollmakes.git",
    },
  ];

  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.title;

    const projectOverlay = document.createElement("div");
    projectOverlay.classList.add("project-overlay");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.textContent = "View Project";

    projectOverlay.appendChild(projectTitle);
    projectOverlay.appendChild(projectLink);

    projectElement.appendChild(projectImage);
    projectElement.appendChild(projectOverlay);

    projectsContainer.appendChild(projectElement);
  });
});
