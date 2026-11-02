// AFRICA LADIES FASHION - FORM VALIDATION AND SUBMISSION

document.addEventListener("DOMContentLoaded", function () {

    // Replace this with the real endpoint from the form service.
    const formEndpoint = "https://formsubmit.app/f/4eyve5mzuz";

    const forms = [
        {
            id: "enquiry-form",
            statusId: "enquiry-status"
        },
        {
            id: "contact-form",
            statusId: "contact-status"
        }
    ];

    forms.forEach(function (formDetails) {

        const form = document.getElementById(formDetails.id);
        const status = document.getElementById(formDetails.statusId);

        // Skip forms that are not present on the current page.
        if (!form || !status) {
            return;
        }

        form.addEventListener("submit", async function (event) {

            event.preventDefault();

            status.textContent = "";

            // Check required fields and HTML validation rules.
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const submitButton = form.querySelector(
                'button[type="submit"]'
            );

            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            try {

                const response = await fetch(formEndpoint, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json"
                    },
                    body: new FormData(form)
                });

                const result = await response.json();

                if (!response.ok || result.ok !== true) {
                    throw new Error(
                        result.error || "The form could not be submitted."
                    );
                }

                status.textContent =
                    "Thank you. Your message has been submitted successfully.";

                form.reset();

            } catch (error) {

                status.textContent =
                    "Sorry, your message could not be sent. Please try again later or use the business contact details.";

                console.error("Form submission error:", error);

            } finally {

                submitButton.disabled = false;

                if (formDetails.id === "enquiry-form") {
                    submitButton.textContent = "Submit Enquiry";
                } else {
                    submitButton.textContent = "Send Message";
                }

            }

        });

    });

});