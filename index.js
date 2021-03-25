var dropdown = document.getElementsByClassName("dashui-side-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("dashui-side-dropdown-active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "flex") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "flex";
  }
  });
  
  console.log('did something')
}