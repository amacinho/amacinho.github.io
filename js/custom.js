document.addEventListener("DOMContentLoaded", function() {
  const clickableProjects = document.querySelectorAll(".project-link");

  clickableProjects.forEach(project => {
    project.addEventListener("click", function() {
      //window.location.href = this.dataset.href;
	  window.open(this.dataset.href, '_blank');
    });
  });
  
   let linksInsideDiv = document.querySelectorAll('.project-link a');
  
  linksInsideDiv.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
});

