function setClipboard(text) {
    var type = "text/plain";
    var blob = new Blob([text], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        function () {
        /* success */
          console.log("Successfully Added");
        },
        function () {
        /* failure */
          console.log("Error during Copy");
        }
    );
};

document.addEventListener("keypress", (e) => {
  event.preventDefault()
  event.stopPropagation();
  if (e.code === "KeyA") {
    setClipboard(document.querySelector("div.react-app-node").outerHTML);
  };
});
