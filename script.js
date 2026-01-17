// Select all certificate images
const certImages = document.querySelectorAll(".certificate-card img");

// When clicked, show fullscreen image
certImages.forEach(img => {
  img.addEventListener("click", () => {
    // Create a fullscreen overlay
    const fullscreen = document.createElement("div");
    fullscreen.style.position = "fixed";
    fullscreen.style.top = 0;
    fullscreen.style.left = 0;
    fullscreen.style.width = "100vw";
    fullscreen.style.height = "100vh";
    fullscreen.style.background = "rgba(0,0,0,0.9)";
    fullscreen.style.display = "flex";
    fullscreen.style.justifyContent = "center";
    fullscreen.style.alignItems = "center";
    fullscreen.style.cursor = "zoom-out";
    fullscreen.style.zIndex = 9999;

    // Create a fullscreen image
    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    fullImg.style.maxWidth = "90%";
    fullImg.style.maxHeight = "90%";
    fullImg.style.borderRadius = "10px";
    fullImg.style.boxShadow = "0 0 30px rgba(0,255,245,0.6)";

    fullscreen.appendChild(fullImg);
    document.body.appendChild(fullscreen);

    // Click anywhere to close fullscreen
    fullscreen.addEventListener("click", () => {
      document.body.removeChild(fullscreen);
    });
  });
});
