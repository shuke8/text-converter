const textarea = document.querySelector("textarea");
const fileNameInput = document.querySelector(".file-name input");
const selectMenu = document.querySelector(".save-as select");
const saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("click", () => {
  let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
  saveBtn.innerText = `Save as ${selectedOption.split(" ")[0]} File`;
  console.log();
});

saveBtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectMenu.value });
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileNameInput.value;
  link.href = fileUrl;
  link.click();
});
