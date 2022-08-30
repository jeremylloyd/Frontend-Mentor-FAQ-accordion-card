li = document.getElementsByTagName("li");

for (i = 0; i < li.length; i++) {
  li[i].addEventListener("click", expand);
}

function expand() {
  expandThis = !this.classList.contains("expanded");
  for (i = 0; i < li.length; i++) {
    li[i].classList.remove("expanded");
  }
  if (expandThis) {
    this.classList.add("expanded");
  }
}
