
function lettershuffle(container) {

    // Define the mapping of characters to image strings
    const characterMap = {

        A: [
            "Letter images/a/A-001.png",
            "Letter images/a/A-002.png",
            "Letter images/a/A-003.png",
            "Letter images/a/A-004.png",
            "Letter images/a/A-005.png",
            "Letter images/a/A-006.png",
            "Letter images/a/A-007.png",
            "Letter images/a/A-008.png",
            "Letter images/a/A-009.png",
            "Letter images/a/A-010.png",
            "Letter images/a/A-011.png",
            "Letter images/a/A-012.png",
            "Letter images/a/A-013.png",
        ],

        C: [
            "Letter images/c/C-001.png",
            "Letter images/c/C-002.png",
            "Letter images/c/C-003.png",
            "Letter images/c/C-004.png",
            "Letter images/c/C-005.png",
            "Letter images/c/C-006.png",
            "Letter images/c/C-007.png",
            "Letter images/c/C-008.png",
            "Letter images/c/C-009.png",
            "Letter images/c/C-010.png",
            "Letter images/c/C-011.png",
            "Letter images/c/C-012.png",
            "Letter images/c/C-013.png",
        ],
        D: [
            "Letter images/d/D-001.png",
            "Letter images/d/D-002.png",
            "Letter images/d/D-003.png",
            "Letter images/d/D-004.png",
            "Letter images/d/D-005.png",
            "Letter images/d/D-006.png",
            "Letter images/d/D-007.png",
            "Letter images/d/D-008.png",
            "Letter images/d/D-009.png",
            "Letter images/d/D-010.png",
            "Letter images/d/D-011.png",
        ],

        E: [
            "Letter images/e/E-001.png",
            "Letter images/e/E-002.png",
            "Letter images/e/E-003.png",
            "Letter images/e/E-004.png",
            "Letter images/e/E-005.png",
        ],
        I: [
            "Letter images/i/I-001.png",
            "Letter images/i/I-002.png",
            "Letter images/i/I-003.png",
            "Letter images/i/I-004.png",
            "Letter images/i/I-005.png",
            "Letter images/i/I-006.png",
            "Letter images/i/I-007.png",
            "Letter images/i/I-008.png",
            "Letter images/i/I-009.png",
            "Letter images/i/I-010.png",
            "Letter images/i/I-011.png",
        ],
        K: [
            "Letter images/k/K-001.png",
            "Letter images/k/K-002.png",
            "Letter images/k/K-003.png",
            "Letter images/k/K-004.png",
            "Letter images/k/K-005.png",
            "Letter images/k/K-006.png",
            "Letter images/k/K-007.png",
            "Letter images/k/K-008.png",
            "Letter images/k/K-009.png",
        ],

        M: [
            "Letter images/m/M-001.png",
            "Letter images/m/M-002.png",
            "Letter images/m/M-003.png",
            "Letter images/m/M-004.png",
            "Letter images/m/M-005.png",
            "Letter images/m/M-006.png",
            "Letter images/m/M-007.png",
            "Letter images/m/M-008.png",
            "Letter images/m/M-009.png",
            "Letter images/m/M-010.png",
            "Letter images/m/M-011.png",
            "Letter images/m/M-012.png",
        ],

        N: [
            "Letter images/n/N-001.png",
            "Letter images/n/N-002.png",
            "Letter images/n/N-003.png",
            "Letter images/n/N-004.png",
            "Letter images/n/N-005.png",
            "Letter images/n/N-006.png",
            "Letter images/n/N-007.png",
            "Letter images/n/N-008.png",
            "Letter images/n/N-009.png",

        ],
        P: [
            "Letter images/p/P-001.png",
            "Letter images/p/P-002.png",
            "Letter images/p/P-003.png",
            "Letter images/p/P-004.png",
            "Letter images/p/P-005.png",
            "Letter images/p/P-006.png",
            "Letter images/p/P-007.png",
            "Letter images/p/P-008.png",
            "Letter images/p/P-009.png",
            "Letter images/p/P-010.png",
            "Letter images/p/P-011.png",
            "Letter images/p/P-012.png",
        ],
        S: [
            "Letter images/s/S-001.png",
            "Letter images/s/S-002.png",
            "Letter images/s/S-003.png",
            "Letter images/s/S-004.png",
            "Letter images/s/S-005.png",
            "Letter images/s/S-006.png",
            "Letter images/s/S-007.png",
            "Letter images/s/S-008.png",
            "Letter images/s/S-009.png",
            "Letter images/s/S-010.png",
        ],
        U: [
            "Letter images/u/U-001.png",
            "Letter images/u/U-002.png",
            "Letter images/u/U-003.png",
            "Letter images/u/U-005.png",
            "Letter images/u/U-006.png",
            "Letter images/u/U-007.png",
        ],
        X: [
            "Letter images/x/X-001.png",
            "Letter images/x/X-002.png",
            "Letter images/x/X-003.png",
            "Letter images/x/X-004.png",
            "Letter images/x/X-005.png",
            "Letter images/x/X-006.png",
            "Letter images/x/X-007.png",
            "Letter images/x/X-008.png",
            "Letter images/x/X-009.png",
            "Letter images/x/X-010.png",
        ],
    };

    // Function to shuffle through the images of all characters for a specific word container
    function shuffleImages(wordContainer) {
        const characterElements = wordContainer.characterElements;

        characterElements.forEach((characterElement) => {
            const { imageIndex } = characterElement;
            if (imageIndex >= 0) {
                const images = characterElement.getElementsByTagName("img");
                const nextIndex = (imageIndex + 1) % images.length;

                images[imageIndex].style.display = "none";
                images[nextIndex].style.display = "inline-block";

                characterElement.imageIndex = nextIndex;
            }
        });
    }

    // Function to stop the shuffle effect for a specific word container
    function stopShuffle(wordContainer) {
        const characterElements = wordContainer.characterElements;

        characterElements.forEach((characterElement) => {
            const images = characterElement.getElementsByTagName("img");
            const { imageIndex } = characterElement;
            if (imageIndex >= 0) {
                images[imageIndex].style.display = "none";
                images[0].style.display = "inline-block";
                characterElement.imageIndex = 0;
            }
        });
    }

    // Function to hide all images for a specific character element
    function hideImages(characterElement) {
        const images = characterElement.getElementsByTagName("img");
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
    }

    // Function to start the animation when hovered
    function startAnimationOnHover(wordContainer) {
        if (!wordContainer.isAnimating && wordContainer.isHovering) {
            wordContainer.isAnimating = true;
            // Show the first image for each character element
            wordContainer.characterElements.forEach((characterElement) => {
                if (characterElement.imageIndex >= 0) {
                    const images = characterElement.getElementsByTagName("img");
                    images[0].style.display = "inline-block";
                }
            });

            requestAnimationFrame(function animate() {
                shuffleImages(wordContainer);
                wordContainer.intervalId = setTimeout(() => {
                    if (wordContainer.isAnimating && wordContainer.isHovering) {
                        animate();
                    }
                }, wordContainer.speed);
            });
        }
    }

    // Function to stop the animation when hover ends
    function stopAnimationOnHoverEnd(wordContainer) {
        if (wordContainer.isAnimating) {
            wordContainer.isAnimating = false;
            clearTimeout(wordContainer.intervalId);
            stopShuffle(wordContainer);

            // Hide all images for each character element
            wordContainer.characterElements.forEach((characterElement) => {
                hideImages(characterElement);
            });
        }
    }

    // Get all word containers with the class "word"
    const wordContainers = document.querySelectorAll("#word");

    // Function to calculate the speed based on the distance from the center of the window
    function getSpeedFromCenter(event) {
        const centerX = window.innerWidth / 2;
        const distanceFromCenter = Math.abs(event.clientX - centerX);
        const maxSpeed = 100; // Maximum animation speed in milliseconds
        const minSpeed = 1000; // Minimum animation speed in milliseconds
        const speedRange = maxSpeed - minSpeed;
        const normalizedDistance = distanceFromCenter / centerX;
        return minSpeed + (1 - normalizedDistance) * speedRange;
    }

    // Function to update the speed continuously based on mouse position
    function updateSpeed(event, wordContainer) {
        wordContainer.speed = getSpeedFromCenter(event);
    }

    // Function to handle mouse enter event
    function handleMouseEnter(event, wordContainer) {
        wordContainer.addEventListener("mousemove", (e) => updateSpeed(e, wordContainer));
        wordContainer.addEventListener("resize", (e) => updateSpeed(e, wordContainer));
        wordContainer.isHovering = true; // Set the hover state to true

        // Start the animation only on hover
        startAnimationOnHover(wordContainer);
    }

    // Function to handle mouse leave event
    function handleMouseLeave(wordContainer) {
        wordContainer.removeEventListener("mousemove", (e) => updateSpeed(e, wordContainer));
        wordContainer.removeEventListener("resize", (e) => updateSpeed(e, wordContainer));
        wordContainer.isHovering = false; // Set the hover state to false

        // Stop the animation on hover end
        stopAnimationOnHoverEnd(wordContainer);
    }

    // Loop through each word container
    wordContainers.forEach((wordContainer) => {
        const originalWord = wordContainer.innerText;
        const characters = originalWord.split("");

        // Create the character elements and assign images to each character
        const characterElements = characters.map((char) => {
            const span = document.createElement("span");
            if (char === " ") {
                span.innerHTML = "&nbsp;"; // Preserve spaces
            } else {
                span.textContent = char; // Add the character as text content
            }

            if (characterMap[char]) {
                const images = characterMap[char];
                images.forEach((imageURL, index) => {
                    const img = new Image();
                    img.src = imageURL;
                    img.style.display = "none"; // Hide images initially
                    span.appendChild(img);
                });
                span.imageIndex = 0; // Initialize the image index
            } else {
                span.imageIndex = -1; // No images available for this character
            }

            // Hide all images initially for each character element
            hideImages(span);

            return span;
        });

        // Set initial speed for each word container
        wordContainer.characterElements = characterElements;
        wordContainer.isAnimating = false;
        wordContainer.isHovering = false; // Add the hover state flag

        // Add event listeners for hover in and hover out on the word container
        wordContainer.addEventListener("mouseenter", (e) => handleMouseEnter(e, wordContainer));
        wordContainer.addEventListener("mouseleave", () => handleMouseLeave(wordContainer));

        // Initialize the animation
        wordContainer.innerHTML = "";
        characterElements.forEach((characterElement) => {
            wordContainer.appendChild(characterElement);
        });
    });

}


export default lettershuffle;
