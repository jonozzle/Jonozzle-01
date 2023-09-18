
function landerword() {


    const words = ["stril", "oddle", "nagon", "zzle"]; // Add your words here
    let currentIndex = 0;
    let isAnimating = false;

    const prefixElement = document.getElementById("prefix-lander");
    const suffixElement = document.getElementById("suffix-lander");

    function startAnimation() {
        if (!isAnimating) {
            setTimeout(() => {
                animateText(words[currentIndex]);
            }, 1000); // Adjust the delay duration (in milliseconds) as needed
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function animateText(newSuffix) {
        isAnimating = true;
        const currentSuffix = suffixElement.innerText;

        // Use a fixed time per character
        const timePerCharacter = 35; // Adjust as needed

        // Calculate the typing duration based on the length of the new word
        const typingDuration = newSuffix.length * timePerCharacter;

        // Backspace the existing suffix
        for (let i = currentSuffix.length; i >= 0; i--) {
            suffixElement.innerText = currentSuffix.slice(0, i);
            await sleep(timePerCharacter);
        }

        // Type the new suffix
        for (let i = 0; i < newSuffix.length; i++) {
            suffixElement.innerText += newSuffix[i];
            await sleep(timePerCharacter);
        }

        isAnimating = false;

        // Check if this is the last word
        if (currentIndex === words.length - 1) {
            return; // Stop the animation after the last word
        }

        currentIndex++; // Move to the next word

        // Delay before starting the next animation
        await sleep(400); // Adjust the delay duration (in milliseconds) as needed

        // Start the next animation
        startAnimation();
    }

    // Start the animation
    startAnimation();


}

export default landerword;