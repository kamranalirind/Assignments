function upDate(element) {

  // Check that the event is triggering
  console.log("Mouse is over an image.");

  // Store the image information
  let previewPic = element;

  // Display the alt text and image source in the console
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  // Get the element with the id "image"
  let imageDiv = document.getElementById("image");

  // Change the text
  imageDiv.innerHTML = previewPic.alt;

  // Change the background image
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

  // Additional debugging information
  console.log("Preview updated.");
}


function undo() {

  // Get the element with the id "image"
  let imageDiv = document.getElementById("image");

  // Reset the background image
  imageDiv.style.backgroundImage = "url('')";

  // Reset the text
  imageDiv.innerHTML = "Hover over an image below to display here.";

  // Confirm that the undo function is working
  console.log("Preview reset.");
}