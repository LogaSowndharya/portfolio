const projects = [
    {
        name: "Project 1",
        link: "https://github.com/yourusername/project1",
        description: "Description of project 1."
    },
    {
        name: "Project 2",
        link: "https://github.com/yourusername/project2",
        description: "Description of project 2."
    }
];

window.onload = () => {
    const list = document.getElementById("project-list");
    projects.forEach(project => {
        const item = document.createElement("li");
        item.innerHTML = `<strong><a href="${project.link}" target="_blank">${project.name}</a></strong>: ${project.description}`;
        list.appendChild(item);
    });
};
