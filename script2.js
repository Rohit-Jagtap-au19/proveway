const radioButtons = document.getElementsByName("option");
const checkButton = document.getElementById("checkButton");

const amount = document.querySelectorAll(".amount");
const total = document.getElementById("total");

const amountArray = [...amount]




function logSelectedRadioButtonValue() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {

        amountArray.forEach((element) => {
            console.log(element.textContent);
          });
          
      const optionsContainer = radioButtons[i]
        .closest(".mainCard")
        .querySelector(".optionsContainer");
      optionsContainer.style.display = "flex";
      break;
    } else if (!radioButtons[i].checked) {
      const optionsContainer = radioButtons[i]
        .closest(".mainCard")
        .querySelector(".optionsContainer");
      optionsContainer.style.display = "none";
    }
  }
}

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", logSelectedRadioButtonValue);
});
