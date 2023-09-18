function imagebounce() {

    const div = document.getElementById('meaningful-mahi');
    const images = document.querySelectorAll('.meaningful-mahi-image');
    const numImages = images.length;
    const maxVelocity = 1; // Adjust this value to control the base speed of floating
    const floatingArea = 50; // Adjust this value to control the floating area size
    const mouseVelocityFactor = 0.1; // Adjust this value to control the effect of mouse speed on image speed
    let imageData = [];
    let isAnimating = false;
    let prevMouseX;
    let prevMouseY;
    let mouseVelocityX = 0;
    let mouseVelocityY = 0;

    div.addEventListener('mouseenter', () => {
        //div.style.fontFamily = 'Arial, sans-serif';
        div.style.backgroundColor = '#4BC1B1';

        imageData = [];
        images.forEach(image => {
            image.style.display = 'block';
            const position = setPositionRandomly(image);
            const velocity = Math.random() * maxVelocity + 0.1; // Vary the velocity between 0.1 and maxVelocity
            const angle = Math.random() * 2 * Math.PI; // Random initial angle
            imageData.push({ element: image, position, velocity, angle });
        });

        // Start animating only if not already animating
        if (!isAnimating) {
            isAnimating = true;
            requestAnimationFrame(updateImagesPositions);
        }
    });

    div.addEventListener('mouseleave', () => {
        div.style.fontFamily = 'inherit';
        div.style.backgroundColor = 'black';

        images.forEach(image => {
            image.style.display = 'none';
        });

        // Reset the animation state and mouse velocity when leaving the div
        isAnimating = false;
        mouseVelocityX = 0;
        mouseVelocityY = 0;
    });

    function setPositionRandomly(element) {
        const rect = div.getBoundingClientRect();
        const maxX = rect.width - element.width;
        const maxY = rect.height - element.height;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;

        return { x: randomX, y: randomY };
    }

    function updateImagesPositions() {
        imageData.forEach(data => {
            const { element, position, velocity, angle } = data;

            // Calculate the new position based on angle and velocity, adjusted by mouse velocity
            const newX = position.x + Math.cos(angle) * velocity * (1 + mouseVelocityX * mouseVelocityFactor);
            const newY = position.y + Math.sin(angle) * velocity * (1 + mouseVelocityY * mouseVelocityFactor);

            const rect = div.getBoundingClientRect();
            const maxX = rect.width - element.width;
            const maxY = rect.height - element.height;

            // Keep the images within the bounds of the div while allowing them to move freely
            if (newX < 0 || newX > maxX) {
                data.angle = Math.PI - data.angle; // Reflect the angle when hitting the boundary
            }
            if (newY < 0 || newY > maxY) {
                data.angle = -data.angle; // Reflect the angle when hitting the boundary
            }

            position.x = Math.max(0, Math.min(newX, maxX));
            position.y = Math.max(0, Math.min(newY, maxY));

            element.style.left = `${position.x}px`;
            element.style.top = `${position.y}px`;
        });

        // Continue animating if isAnimating flag is true
        if (isAnimating) {
            requestAnimationFrame(updateImagesPositions);
        }
    }

    // Track mouse movement to calculate mouse velocity
    div.addEventListener('mousemove', event => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        if (prevMouseX !== undefined && prevMouseY !== undefined) {
            mouseVelocityX = mouseX - prevMouseX;
            mouseVelocityY = mouseY - prevMouseY;
        }

        prevMouseX = mouseX;
        prevMouseY = mouseY;
    });

}

export default imagebounce;