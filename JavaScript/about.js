// AFRICA LADIES FASHION - ABOUT PAGE FEATURES

document.addEventListener("DOMContentLoaded", function () {

    // FAQ ACCORDION

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains("active");

            // Close all FAQ items
            document.querySelectorAll(".faq-item").forEach(function (item) {

                item.classList.remove("active");

                const button = item.querySelector(".faq-question");
                button.setAttribute("aria-expanded", "false");

                const icon = item.querySelector(".faq-icon");
                icon.textContent = "+";

            });

            // Open the selected FAQ item
            if (!isOpen) {

                faqItem.classList.add("active");

                question.setAttribute("aria-expanded", "true");

                faqItem.querySelector(".faq-icon").textContent = "−";

            }

        });

    });

    // SCROLL-TRIGGERED ANIMATIONS

    const sections = document.querySelectorAll("main section");

    sections.forEach(function (section) {
        section.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });

    } else {

        sections.forEach(function (section) {
            section.classList.add("visible");
        });

    }
    // DYNAMIC BACK TO TOP BUTTON

    const backToTop = document.createElement("button");

    backToTop.textContent = "Back to Top ↑";

    backToTop.id = "back-to-top";

    backToTop.setAttribute("aria-label", "Return to the top of the page");

    document.body.appendChild(backToTop);

    // Show button when visitor scrolls down

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    // Return to the top when clicked

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
});

