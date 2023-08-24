// // Get the background color dropdown element
// const bgColorSelect = document.getElementById('bgColorSelect');

// // Get the font color dropdown element
// const fontColorSelect = document.getElementById('fontColorSelect');

// // Get the font size slider element
// const fontSizeSlider = document.getElementById('fontSizeSlider');

// // Get the content display element
// const contentDisplay = document.getElementById('contentDisplay');

// // Function to handle file upload and display content
// function handleFileUpload(file) {
//   // Use Mammoth.js to read the .docx file
//   mammoth.extractRawText({ arrayBuffer: file })
//     .then(function (result) {
//       // Get the raw text content from the .docx
//       const content = result.value;
//       // Update the content display with the extracted text
//       contentDisplay.innerText = content;
//     })
//     .done();
// }

// // Function to change the background color
// function changeBackgroundColor() {
//   const selectedBgColor = bgColorSelect.value;
//   contentDisplay.style.backgroundColor = selectedBgColor;
// }

// // Function to change the font color
// function changeFontColor() {
//   const selectedFontColor = fontColorSelect.value;
//   contentDisplay.style.color = selectedFontColor;
// }

// // Function to change the font size
// function changeFontSize() {
//   const selectedFontSize = fontSizeSlider.value + 'px';
//   contentDisplay.style.fontSize = selectedFontSize;
// }

// // Add event listener to the file input
// const fileInput = document.getElementById('fileInput');
// fileInput.addEventListener('change', function () {
//   // Get the selected file from the input
//   const file = fileInput.files[0];

//   // Call the function to handle file upload and display content
//   handleFileUpload(file);
// });

// // Add event listeners to the dropdowns and slider
// bgColorSelect.addEventListener('change', changeBackgroundColor);
// fontColorSelect.addEventListener('change', changeFontColor);
// fontSizeSlider.addEventListener('input', changeFontSize);






















// Get the background color dropdown element
const bgColorSelect = document.getElementById('bgColorSelect');

// Get the font color dropdown element
const fontColorSelect = document.getElementById('fontColorSelect');

// Get the font size slider element
const fontSizeSlider = document.getElementById('fontSizeSlider');

// Get the content display element
const contentDisplay = document.getElementById('contentDisplay');

// Function to handle file upload and display content
function handleFileUpload(file) {
  // Use Mammoth.js to read the .docx file and convert to HTML
  mammoth.convertToHtml({ arrayBuffer: file })
    .then(function (result) {
      // Get the HTML content from the .docx conversion
      const content = result.value;
      // Set the HTML content to the content display div
      contentDisplay.innerHTML = content;
    })
    .done();
}

// Function to change the background color
function changeBackgroundColor() {
  const selectedBgColor = bgColorSelect.value;
  contentDisplay.style.backgroundColor = selectedBgColor;
}

// Function to change the font color
function changeFontColor() {
  const selectedFontColor = fontColorSelect.value;
  contentDisplay.style.color = selectedFontColor;
}

// Function to change the font size
function changeFontSize() {
  const selectedFontSize = fontSizeSlider.value + 'px';
  contentDisplay.style.fontSize = selectedFontSize;
}

// Add event listener to the file input
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function () {
  // Get the selected file from the input
  const file = fileInput.files[0];

  // Call the function to handle file upload and display content
  handleFileUpload(file);
});

// Add event listeners to the dropdowns and slider
bgColorSelect.addEventListener('change', changeBackgroundColor);
fontColorSelect.addEventListener('change', changeFontColor);
fontSizeSlider.addEventListener('input', changeFontSize);
