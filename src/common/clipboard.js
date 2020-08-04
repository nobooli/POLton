export const copyToClipboard = function(text) {
  const listener = ev => {
    ev.preventDefault();
    ev.clipboardData.setData("text/plain", text);
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}