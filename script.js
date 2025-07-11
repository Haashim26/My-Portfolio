function toggleMenu() {
  const menu = document.querySelector(".menu-links"); 
  const icon = document.querySelector(".hamburger-icon"); 
  menu.classList.toggle("open");                          
  icon.classList.toggle("open");                          
}

function showProjects(type) {
  const software = document.getElementById("software-projects");
  const hardware = document.getElementById("hardware-projects");

  if (type === 'software') {
    software.style.display = "flex";
    hardware.style.display = "none";
  } else {
    software.style.display = "none";
    hardware.style.display = "flex";
  }
}
