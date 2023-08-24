const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const contentDisplay = document.getElementById('contentDisplay');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const file = fileInput.files[0];
  if (!file) {
    alert('Please select a file.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const arrayBuffer = e.target.result;

    if (file.type === 'application/pdf') {
      handlePdfUpload(arrayBuffer);
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      handleDocxUpload(arrayBuffer);
    } else {
      alert('Invalid file format. Please upload a .docx or .pdf file.');
    }
  };
  reader.readAsArrayBuffer(file);
});

function handlePdfUpload(arrayBuffer) {
  pdfjsLib.getDocument({ data: arrayBuffer }).promise.then((pdf) => {
    let pdfText = '';
    const numPages = pdf.numPages;
    const getPageText = (pageNum) => {
      return pdf.getPage(pageNum).then((page) => {
        return page.getTextContent().then((textContent) => {
          textContent.items.forEach((item) => {
            pdfText += item.str + ' ';
          });
          if (pageNum < numPages) {
            return getPageText(pageNum + 1);
          } else {
            contentDisplay.textContent = pdfText;
          }
        });
      });
    };
    getPageText(1);
  });
}


function handleDocxUpload(arrayBuffer) {
  mammoth.extractRawText({ arrayBuffer: arrayBuffer })
    .then((result) => {
      const content = result.value;
      contentDisplay.textContent = content;
    })
    .catch((error) => {
      console.error('Error extracting content:', error);
    });
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


// Add event listeners to the dropdowns
bgColorSelect.addEventListener('change', changeBackgroundColor);
fontColorSelect.addEventListener('change', changeFontColor);

// Get the textarea element
// const contentDisplay = document.getElementById('contentDisplay');

// Get the slider element
const fontSizeSlider = document.getElementById('fontSizeSlider');

// Add an event listener to the slider
fontSizeSlider.addEventListener('input', function () {
  // Get the selected font size from the slider value
  const fontSize = fontSizeSlider.value + 'px';
  
  // Update the font size of the textarea
  contentDisplay.style.fontSize = fontSize;
});

// Function to handle file upload and display content















