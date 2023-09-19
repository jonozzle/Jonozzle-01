
function mobileimages() {


  const slideshowData = [
    {
      slideshowID: "rewired-mobile",
      imagePaths: [
        "project images/ReWired/rewired_06.jpg",
        "project images/ReWired/rewired_03.jpg",
        "project images/ReWired/rewired_02.jpg",
      ]
    },
    {
      slideshowID: "aucklandpride-mobile",
      imagePaths: [
        "project images/ReWired/rewired_06.jpg",
        "project images/ReWired/rewired_03.jpg",
        "project images/ReWired/rewired_02.jpg",
      ]
    },
    {
      slideshowID: "meaningful-mahi-mobile",
      imagePaths: [
        "project images/Meaningful Mahi/MeaningfulMahi_06.jpg",
        "project images/Meaningful Mahi/MeaningfulMahi_07.jpg",
        "project images/Meaningful Mahi/MeaningfulMahi_05B.png",
      ]
    },
    {
      slideshowID: "elevate-mobile",
      imagePaths: [
        "project images/Elevate/Elevate_01.jpg",
        "project images/Elevate/Elevate_05.jpg",
        "project images/Elevate/Elevate_06.jpg",
      ]
    },
    {
      slideshowID: "pyb-mobile",
      imagePaths: [
        "project images/Protect Your Breath/PYB_03B.jpg",
        "project images/Protect Your Breath/PYB_07.png",
        "project images/Protect Your Breath/PYB_09.png",
      ]
    },
    {
      slideshowID: "random-mobile",
      imagePaths: [
        "project images/random/random_03.jpg",
        "project images/random/random_06.jpg",
        "project images/random/random_07.jpg",
      ]
    },
  ];



  function updateSlideshow(slideshowData) {
    slideshowData.forEach(data => {
      const slideshow = document.getElementById(data.slideshowID);
      let currentImageIndex = 0;

      if (slideshow) {
        slideshow.innerHTML = "";

        const img = document.createElement("img");
        img.src = data.imagePaths[currentImageIndex];
        img.id = "mobile-img";
        slideshow.appendChild(img);

        currentImageIndex = (currentImageIndex + 1) % data.imagePaths.length;

        setInterval(() => {
          img.src = data.imagePaths[currentImageIndex];
          currentImageIndex = (currentImageIndex + 1) % data.imagePaths.length;
        }, 600);
      }
    });
  }

  // Initial update
  updateSlideshow(slideshowData);



}

export default mobileimages;