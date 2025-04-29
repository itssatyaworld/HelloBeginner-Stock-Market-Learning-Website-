// learn.js

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.chapter-check');  // Updated class name
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          checkbox.parentElement.style.textDecoration = "line-through";
          checkbox.parentElement.style.color = "#00ff99";
        } else {
          checkbox.parentElement.style.textDecoration = "none";
          checkbox.parentElement.style.color = "#ffffff";
        }
      });
    });
});
