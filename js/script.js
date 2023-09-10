var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?"; 
}
//Bonus step
//var openModal = function () {
  //modal.classList.add("show-modal");
  //button.innerText = "You've got this!!!";
///};

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
});

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal"));
    closeModal();
  }
  //console.log(e.key);
});