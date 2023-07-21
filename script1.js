const leftInput = document.getElementById("leftInput");
const rightInput = document.getElementById("rightInput");
const lowerInput = document.getElementById("lowerInput");

leftInput.addEventListener("click", function () {
  if (leftInput.value !== "") {
    rightInput.value = leftInput.value;
    leftInput.value = "";
  }
});

lowerInput.addEventListener("blur", function () {
  if (lowerInput.value !== "") {
    lowerInput.placeholder = lowerInput.value;
    lowerInput.value = "";
  }
});
