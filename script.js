const radioButtons = document.getElementsByName("option");
const checkButton = document.getElementById("checkButton");
let selectedColors = [];
let selectedSizes = [];

function isAnyRadioButtonSelected() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return true;
    }
  }
  return false;
}

function onSelectionChange(event) {
  const cardContainer = event.target.closest(".optionsContainer");
  const selectedColor = cardContainer.querySelector(".color").value;
  const selectedSize = cardContainer.querySelector(".size").value;

  // Update the arrays with the new selected color and size
  const cardIndex = cardContainer.dataset.cardIndex;
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
    if (
      selectedValue == 2 && 
      (selectedColors[0] == undefined ||
      selectedColors[1] == undefined ||
      selectedSizes[0] == undefined ||
      selectedSizes[1] == undefined)
    ) {
      alert("select color and size for all pairs");
    } else if (selectedValue == 2) {
      alert(`You have Added ${selectedValue} pair.`);
      console.log(`You have Added two pairs.
        details are -
        first pair - color is ${selectedColors[0]} and size is ${selectedSizes[0]}
        second pair - color is ${selectedColors[1]} and size is ${selectedSizes[1]}`);
    } else {
      alert(`You have Added ${selectedValue} pair.`);
    }
  } else {
    alert("Please Choose Pair");
  }
}

checkButton.addEventListener("click", onButtonClick);
