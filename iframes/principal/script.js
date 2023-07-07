const iframe = document.getElementById("my-iframe");

iframe.onload = function () {
  console.log("Carregou o iframe na página principal!");
};

const inputMessage = document.getElementById("input-message");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
  iframe.contentWindow.postMessage(
    {
      type: "action1",
      value: inputMessage.value,
    },
    "*"
  );
});

windows.addEventListener("message", (event) => {
  if (event.data.type == "action2") {
    const message = document.getElementById("message");
    message.innerText = event.data.value;
  }
});

window.onmessage = function (event) {
  if (event.data.type == "action2") {
    const message = document.getElementById("message");
    message.innerText = event.data.value;
  }
};
