const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += html;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  //console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  } else {
    window.alert("Lütfen forumu doldurunuz!");
  }
});
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
const filterTodos = (searchValues) => {
  //console.log(searchValues);
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(searchValues))
    .forEach((todo) => todo.classList.add("filtered"));
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchValues))
    .forEach((todo) => todo.classList.remove("filtered"));
};
search.addEventListener("keyup", () => {
  const searchValues = search.value.trim().toLowerCase();

  filterTodos(searchValues);
});
