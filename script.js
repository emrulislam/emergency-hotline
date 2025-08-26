// heart Icons

const heartCounter = document.getElementById("heart-counter");
const heartButtons = document.getElementsByClassName("heart-button");

for (const heartBtn of heartButtons) {
  heartBtn.addEventListener("click", function () {
    let count = Number(heartCounter.innerText);
    count++;
    heartCounter.innerText = count;
  });
}

//  Call Buttons

const callButtons = document.getElementsByClassName("call-button");
const coinCounter = document.getElementById("coin-counter");
const singleCallBalance = 20;
const historyContainer = document.getElementById("history-container")
const clearButton = document.getElementById("clear-button")

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

    const historyItems = document.createElement("div")
    historyItems.classList.add("bg-[#FAFAFA]","p-2", "rounded-lg", "flex", "justify-between", "items-center","my-4")
    historyItems.innerHTML=
    `
    <div>
              <h1 class="text-black font-bold text-xl">${serviceName}</h1>
              <p class="text-gray-400 text-xl">${serviceNumber}</p>
            </div>
            <div>
              <p class="text-[#111111] text-xl">${new Date().toLocaleTimeString('en-US', { hour12: true })}</p>
            </div>

    `
    historyContainer.appendChild(historyItems)

    clearButton.addEventListener("click",function(e){
        historyContainer.innerHTML=""
    })
  });
}

// Copy Button
// Challenges Part (10 Marks)//
// On clicking the Copy button, show an alert and increase the copy count (3 Marks)
// Hotline number will be copied on click so it can be pasted anywhere (4 Marks)
// id
// copy-counter-button
// class names
//  copy-button

