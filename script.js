const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputbx");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
  let inputbx = document.createElement("p");
  let span = document.createElement("span");
  inputbx.className = "inputbx";
  inputbx.setAttribute("contenteditable", "true");
  span.className = "bi bi-trash";
  notesContainer.appendChild(inputbx).appendChild(span);
});
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelector(".inputbx");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
