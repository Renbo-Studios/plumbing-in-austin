emailjs.init("2DbkxdRi6JNuD4Igr");

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const formId = this.id;
            const messageContainer = this.querySelector('.form-message');

            if (!messageContainer) {
                console.error('Message container not found for form:', formId);
                return;
            }

            messageContainer.innerHTML = '<p class="text-info">Sending message...</p>';

            let templateParams = {};
            let serviceId = 'service_j9n7nhf'; // Default service ID
            let templateId = 'template_6j9znds'; // Default template ID

            if (formId === 'quote-form') {
                templateParams = {
                    business_name: "RoofingInParis",
                    name: this.querySelector('input[name="name"]').value,
                    email: this.querySelector('input[name="email"]').value,
                    phone: this.querySelector('input[name="phone"]').value,
                    service: this.querySelector('select[name="service"]').value,
                    message: this.querySelector('textarea[name="message"]').value,
                    business_initials: "RIP",
                    random_reference_number: Math.random().toString(36).substring(2, 12).toUpperCase(),
                    business_domain: "roofinginparis.renbostudios.com"
                };
            } else if (formId === 'contact-page-form') {
                templateParams = {
                    business_name: "RoofingInParis",
                    name: this.querySelector('input[name="name"]').value,
                    email: this.querySelector('input[name="email"]').value,
                    phone_number: this.querySelector('input[name="phone"]').value,
                    message: this.querySelector('textarea[name="comment"]').value,
                    business_initials: "RIP",
                    random_reference_number: Math.random().toString(36).substring(2, 12).toUpperCase(),
                    business_domain: "roofinginparis.renbostudios.com",
                    service: "" // Passing empty string for service
                };
            } else {
                messageContainer.innerHTML = '<p class="text-danger">Unknown form. Cannot send message.</p>';
                return;
            }

            emailjs.send(serviceId, templateId, templateParams)
                .then(function(response) {
                   console.log('SUCCESS!', response.status, response.text);
                   messageContainer.innerHTML = '<p class="text-success">Message sent successfully! We will get back to you shortly.</p>';
                   form.reset(); // Clear form fields
                   setTimeout(() => {
                       messageContainer.innerHTML = '';
                   }, 5000);
                }, function(error) {
                   console.log('FAILED...', error);
                   messageContainer.innerHTML = '<p class="text-danger">Failed to send message. Please try again later.</p>';
                   setTimeout(() => {
                       messageContainer.innerHTML = '';
                   }, 5000);
                });
        });
    });
});