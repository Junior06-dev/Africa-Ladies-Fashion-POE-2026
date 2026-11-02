// AFRICA LADIES FASHION - GALLERY LIGHTBOX

document.addEventListener("DOMContentLoaded", function () {

    const galleryImages = document.querySelectorAll("main figure img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("lightbox-close");

    // Open the lightbox when an image is clicked
    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt || "Enlarged fashion gallery image";

            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

            closeButton.focus();

        });

    });

    // Close the lightbox
    function closeLightbox() {

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        lightboxImage.src = "";

        document.body.style.overflow = "";

    }

    closeButton.addEventListener("click", closeLightbox);

    // Close when clicking outside the image
    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    // Close when pressing Escape
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }

    });

});

