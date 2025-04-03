const shareBtn = document.querySelector('#shareBtn')


shareBtn.addEventListener('click', async () => {
    try {
        const imageUrl = "./img.jpg";
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], "shared-image.jpg", { type: blob.type });

        const textMessage = "Hey! Check out this cool image I found. What do you think? 😍";

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({ text: textMessage });
            await navigator.share({ files: [file] });
        } else {
            alert("Sharing is not supported on this device or browser.");
        }
    } catch (error) {
        console.error("Error sharing:", error);
    }

})