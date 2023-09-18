function MouseTrail() {


    // Array of image URLs
    const imageUrls = [
        "project images/Protect Your Breath/mousetrail/PYB_mousetrail_01.png",
        "project images/Protect Your Breath/mousetrail/PYB_mousetrail_02.png",
        "project images/Protect Your Breath/mousetrail/PYB_mousetrail_03.png",
        "project images/Protect Your Breath/mousetrail/PYB_mousetrail_04.png",
        "project images/Protect Your Breath/mousetrail/PYB_mousetrail_05.png",
        "project images/Protect Your Breath/mousetrail/PYB_mousetrail_06.png",
        "project images/Protect Your Breath/mousetrail/PYB_mousetrail_07.png",
        "project images/Protect Your Breath/mousetrail/PYB_mousetrail_08.jpg",
        "project images/Protect Your Breath/mousetrail/PYB_mousetrail_09.png",
        // Add more image URLs here
    ];

    // Create and append img elements to the mouse-trail div
    const mouseTrailDiv = document.getElementById("mouse-trail");

    const createImage = (imageUrl, index) => {
        const img = document.createElement("img");
        img.classList.add("mouse-image");
        img.dataset.index = index;
        img.dataset.status = "inactive";
        img.style.pointerEvents = "none"; // Prevent images from interfering with the cursor
        img.src = imageUrl;
        mouseTrailDiv.appendChild(img);
        return img;
    };

    const images = imageUrls.map(createImage);

    let globalIndex = 0;
    let last = {
        x: 0,
        y: 0
    };

    // Offset values for aligning the images with the cursor
    const yOffset = 10; // Adjust this value as needed
    const xOffset = 0; // Adjust this value as needed

    function activate(image, x, y) {
        // Adjust for the scroll position of the page
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        image.style.left = `${x - xOffset + scrollX}px`;
        image.style.top = `${y - yOffset + scrollY}px`;

        image.dataset.status = "active";

        last = { x, y };
    }

    const createImageEveryNpx = 20; // Change this value to your desired spacing

    const distanceFromLast = (x, y) => {
        return Math.hypot(x - last.x, y - last.y);
    }

    // Flag to track if the mouse is inside the div
    let isMouseInside = false;

    // Add mouseenter and mouseleave event listeners to the mouse-trail div
    mouseTrailDiv.addEventListener('mouseenter', () => {
        isMouseInside = true;
    });

    mouseTrailDiv.addEventListener('mouseleave', () => {
        isMouseInside = false;
        // Set all images to inactive when the mouse leaves the div
        images.forEach((image) => {
            image.dataset.status = "inactive";
        });
        globalIndex = 0; // Reset the global index to restart the trail when re-entering the div
    });

    // Add a global mousemove event listener on the document to create the mouse trail effect
    document.addEventListener('mousemove', e => {
        if (isMouseInside) {
            if (distanceFromLast(e.clientX, e.clientY) >= createImageEveryNpx) {
                const lead = images[globalIndex % images.length];
                const tail = images[(globalIndex - 5 + images.length) % images.length];

                activate(lead, e.clientX, e.clientY);

                if (tail) tail.dataset.status = "inactive";

                globalIndex++;

                // Set z-index for the lead image
                lead.style.zIndex = globalIndex;
            }
        }
    });





}
export default MouseTrail;