const billInp = document.querySelector("#bill");
const tipRadios = document.querySelectorAll("[name='tip']");
const customTipInp = document.querySelector("#custom-tip");
const peopleInp = document.querySelector("#people");
const resetBtn = document.querySelector(".btn");

const tipResultEl = document.querySelector("#tip-result");
const totalResultEl = document.querySelector("#total-result");

console.log(tipRadios);

let tip = null;
let numberOfPeople = null;
let bill = null;

billInp.addEventListener("keyup", function () {
  bill = billInp.value;
});

for (let i = 0; i < tipRadios.length; i++) {
  tipRadios[i].addEventListener("change", event => {
    tip = event.target.value;
    customTipInp.value = null;
    console.log(tip);
  });
}

function uncheckRadios() {
  for (let i = 0; i < tipRadios.length; i++) {
    tipRadios[i].checked = false;
  }
}
customTipInp.addEventListener("keyup", function () {
  tip = customTipInp.value;
  uncheckRadios();
  console.log(tip);
});

peopleInp.addEventListener("keyup", function () {
  if (!peopleInp.value || peopleInp.value < 1) {
    peopleInp.parentElement.classList.add("error");
  } else {
    peopleInp.parentElement.classList.remove("error");
    numberOfPeople = peopleInp.value;

    if (bill && tip) {
      resetBtn.disabled = false;
      calculate(bill, tip, numberOfPeople);
    }
  }
});

function calculate(bill, tip, numberOfPeople) {
  const allTip = (bill * tip) / 100;

  const total = +bill + allTip;
  const totalResult = total / numberOfPeople;
  const tipResult = allTip / numberOfPeople;

  totalResultEl.textContent = "$" + totalResult.toFixed(2);
  tipResultEl.textContent = "$" + tipResult.toFixed(2);
}

resetBtn.addEventListener("click", function () {
  billInp.value = null;
  bill = null;
  uncheckRadios();
  customTipInp.value = null;
  tip = null;
  peopleInp.value = null;
  numberOfPeople = null;
  totalResultEl.textContent = "$0.00";
  tipResultEl.textContent = "$0.00";
  resetBtn.disabled = true;
});
// 30 -- 100
// x - 40
