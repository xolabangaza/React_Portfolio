// src/models/Project.js

class Project {
    constructor(id, image, title, description, techStack, liveLink, repoLink) {
      this.id = id;
      this.image = image;
      this.title = title;
      this.description = description;
      this.techStack = techStack;
      this.liveLink = liveLink;
      this.repoLink = repoLink;
    }
  
    // Method to get a formatted string of project technologies
    getTechStack() {
      return this.techStack.join(", ");
    }
  
    // Method to generate a short description
    getShortDescription() {
      return this.description.length > 100
        ? this.description.substring(0, 100) + "..."
        : this.description;
    }
  }
  
  export default Project;
  