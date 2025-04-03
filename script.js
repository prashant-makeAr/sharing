const shareBtn = document.querySelector('#shareBtn')


shareBtn.addEventListener('click', async () => {
    try {
        const imageUrl = "./img.jpg";
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], "shared-image.jpg", { type: blob.type });

        const data = {
            title: "Amazing Image!",
            text: "Hey! Check out this cool image I found. What do you think? 😍",
            files: [file]
        };

        if (navigator.canShare && navigator.canShare(data)) {
            await navigator.share(data);
        } else {
            alert("Sharing not supported on this device.");
        }
    } catch (error) {
        console.error("Error sharing:", error);
    }
})