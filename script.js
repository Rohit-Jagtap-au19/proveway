const radioButtons = document.getElementsByName("option");
const checkButton = document.getElementById("checkButton");
const optionsContainer = document.querySelectorAll("optionsContainer");


let selectedColors = [];
let selectedSizes = [];

function isAnyRadioButtonSelected() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      console.log(radioButtons[i].value+'hello')
      return true;
    }
  }
  return false;
}
function onSelectionChange(event) {
  const selectedColor = cardContainer.querySelector(".color").value;
  const selectedSize = cardContainer.querySelector(".size").value;

  // Update the arrays with the new selected color and size
  selectedColors[cardIndex] = selectedColor;
  selectedSizes[cardIndex] = selectedSize;
}

const colorSelects = document.querySelectorAll(".color");
const sizeSelects = document.querySelectorAll(".size");

colorSelects.forEach((select, index) => {
  select.addEventListener("change", onSelectionChange);
  select.closest(".optionsContainer").setAttribute("data-card-index", index);
});

sizeSelects.forEach((select, index) => {
  select.addEventListener("change", onSelectionChange);
  select.closest(".optionsContainer").setAttribute("data-card-index", index);
});

function getSelectedRadioButton() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return radioButtons[i].value;
    }
  }
  return null;
}

function onButtonClick() {
  if (isAnyRadioButtonSelected()) {
    const selectedValue = getSelectedRadioButton();
    console.log('hithere')
    alert(`${selectedValue} pair added to card`);
  } else {
    alert("Please Choose Pair");
  }
}
checkButton.addEventListener("click", onButtonClick);
