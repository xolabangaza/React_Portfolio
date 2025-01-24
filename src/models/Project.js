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
  
    getShortDescription() {
      return this.description.length > 100
        ? this.description.substring(0, 97) + "..."
        : this.description;
    }
  
    getTechStack() {
      return this.techStack.join(", ");
    }
  }
  
  export default Project;
  