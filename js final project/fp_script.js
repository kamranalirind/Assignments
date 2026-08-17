function upDate(element) {

    console.log("upDate function has been triggered.");

    let previewPic = element;

    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = "";

    imageDiv.style.backgroundImage =
        "url('" + previewPic.src + "')";
}


function undo() {

    console.log("undo function has been triggered.");

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML =
        "Hover over an image below to display here.";

    imageDiv.style.backgroundImage = "url('')";
}


function addTabFocus() {

    console.log("addTabFocus function has been triggered.");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

        console.log("Added tabindex to image " + (i + 1));
    }
}


window.onload = addTabFocus;