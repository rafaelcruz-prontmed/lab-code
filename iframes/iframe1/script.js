console.log("script iframe 1");

window.onmessage = function (event) {
  if (event.data.type == "action1") {
    const message = document.getElementById("message");
    message.innerText = event.data.value;
  }
};

const inputMessage = document.getElementById("input-message");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
  console.log("inputMessage.value", inputMessage.value);
  window.top.postMessage(
    {
      type: "action2",
      value: inputMessage.value,
    },
    "*"
  );
});

// console.log("document.referrer", document.referrer);
if (parent.window === window) {
  console.log("1 - Não sou um iframe!");
} else {
  console.log("1 - Sou um iframe!");
}
