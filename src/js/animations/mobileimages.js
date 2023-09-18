
function mobileimages() {


  // Define image paths for the first slideshow
  const imagePaths1 = [
    "project images/ReWired/06.jpg",
    "project images/ReWired/03.jpg",
    "project images/ReWired/02.jpg",
  ];

  // Define image paths for the second slideshow
  const imagePaths2 = [
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "https://via.placeholder.com/300x200?text=Image+6"
  ];

  // Slideshow 1 logic
  const slideshow1 = document.querySelector("#rewired-mobile");
  let currentImageIndex1 = 0;

  function updateSlideshow1() {
    slideshow1.innerHTML = "";

    const img = document.createElement("img");
    img.src = imagePaths1[currentImageIndex1];
    img.id = "mobile-img";
    slideshow1.appendChild(img);

    currentImageIndex1 = (currentImageIndex1 + 1) % imagePaths1.length;
  }

  setInterval(updateSlideshow1, 600);
  updateSlideshow1();


  // Slideshow 2 logic
  const slideshow2 = document.querySelector("#aucklandpride-mobile");
  let currentImageIndex2 = 0;

  function updateSlideshow2() {
    slideshow2.innerHTML = "";

    const img = document.createElement("img");
    img.src = imagePaths2[currentImageIndex2];
    img.id = "mobile-img";
    slideshow2.appendChild(img);

    currentImageIndex2 = (currentImageIndex2 + 1) % imagePaths2.length;
  }

  setInterval(updateSlideshow2, 600);
  updateSlideshow2();



}

export default mobileimages;