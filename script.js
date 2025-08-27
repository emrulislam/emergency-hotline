// heart Icons functionality

const heartCounter = document.getElementById("heart-counter");
const heartButtons = document.getElementsByClassName("heart-button");

for (const heartBtn of heartButtons) {
  heartBtn.addEventListener("click", function () {
    let count = Number(heartCounter.innerText);
    count++;
    heartCounter.innerText = count;
  });
}

//  Call Buttons functionality

const callButtons = document.getElementsByClassName("call-button");
const coinCounter = document.getElementById("coin-counter");
const singleCallBalance = 20;
const historyContainer = document.getElementById("history-container");

for (const callBtn of callButtons) {
  callBtn.addEventListener("click", function (e) {
    const serviceName =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;
    let coinCount = Number(coinCounter.innerText);

    if (coinCount < singleCallBalance) {
      alert("Insufficient coins! Need at least 20 coins to make a call.");
      return;
    }
    alert(`a call to ${serviceName} in ${serviceNumber}`);
    coinCount -= singleCallBalance;
    coinCounter.innerText = coinCount;

    const historyItems = document.createElement("div");
    historyItems.classList.add(
      "bg-[#FAFAFA]",
      "p-2",
      "rounded-lg",
      "flex",
      "justify-between",
      "items-center",
      "my-4"
    );
    historyItems.innerHTML = `
    <div>
              <h1 class="text-black font-bold text-[16px]">${serviceName}</h1>
              <p class="text-gray-400 text-[16px]">${serviceNumber}</p>
            </div>
            <div>
              <p class="text-[#111111] text-[16px]">${new Date().toLocaleTimeString(
                "en-US",
                { hour12: true }
              )}</p>
            </div>

    `;
    historyContainer.appendChild(historyItems);
  });
}

// Clear Button functionality

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function (e) {
  historyContainer.innerHTML = "";
});

// copy button functionality

const copyButtons = document.getElementsByClassName("copy-button");
const copyCounterValue = document.getElementById("copy-counter-value");

for (const copyBtn of copyButtons) {
  copyBtn.addEventListener("click", function (e) {
    const hotLineNumber =
      copyBtn.parentNode.parentNode.children[1].children[2].innerText;
    let copyCount = Number(copyCounterValue.innerText);
    copyCount++;
    alert(`you have copied hotline Number ${hotLineNumber} in clipboard`);
    copyCounterValue.innerText = copyCount;
    navigator.clipboard.writeText(hotLineNumber);
  });
}
