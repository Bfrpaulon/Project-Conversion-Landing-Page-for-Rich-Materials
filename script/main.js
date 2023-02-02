 // Enable button 

 const form = document.querySelector("#form-body");
 const nameInput = document.querySelector("#name");
 const emailInput = document.querySelector("#email");
 const downloadButton = document.querySelector("#download-button");

 form.addEventListener("submit", (event) => {
   event.preventDefault();

   if (nameInput.value === "" || emailInput.value === "") {
     alert("Please fill in both name and email fields");
     return;
   }

   // Trigger the actual download of the ebook
   const ebookURL = "/ebook.pdf";
   const ebookName = "ebook.pdf";
   const a = document.createElement("a");
   a.style.display = "none";
   a.href = ebookURL;
   a.download = ebookName;
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
 });

 nameInput.addEventListener("input", () => {
   if (nameInput.value !== "" && emailInput.value !== "") {
     downloadButton.removeAttribute("disabled");
   } else {
     downloadButton.setAttribute("disabled", true);
   }
 });

 emailInput.addEventListener("input", () => {
   if (nameInput.value !== "" && emailInput.value !== "") {
     downloadButton.removeAttribute("disabled");
   } else {
     downloadButton.setAttribute("disabled", true);
   }
 });