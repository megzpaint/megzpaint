emailjs.init('-8q__leAhQDAhmG5p');

function sendEmail() {
    // Get values from form fields
    var name = document.getElementById('Text_name').value.trim();
    var email = document.getElementById('Text_email').value.trim();
    var phone = document.getElementById('Text_phone').value.trim();
    var message = document.getElementById('Text_message').value.trim();

    // Validate that all fields are filled
    if (!name || !email || !phone || !message) {
        alert('All fields are required. Please fill out all fields.');
        return; // Stop the function execution if validation fails
    }

    // Validate the email format using a regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return; // Stop the function execution if email format is invalid
    }

    // Check if the user has sent an email today
    var lastSentDate = localStorage.getItem('lastEmailSentDate');
    var currentDate = new Date().toDateString(); // Get the current date in 'YYYY-MM-DD' format

    if (lastSentDate === currentDate) {
        alert('You have already sent an email today. Please try again tomorrow.');
        return; // Stop the function execution if an email has been sent today
    }

    // Proceed with sending the email
    emailjs.send("service_m768v4t", "template_4pz0264", {
        message: message,
        email: email,
        name: name,
        phone: phone,
    })
        .then(response => {
            alert('Email sent successfully');
            // Update localStorage with the current date after successful email sending
            localStorage.setItem('lastEmailSentDate', currentDate);

            // Clear input fields
            document.getElementById('Text_name').value = '';
            document.getElementById('Text_email').value = '';
            document.getElementById('Text_phone').value = '';
            document.getElementById('Text_message').value = '';
        })
        .catch(error => alert('Error sending email'));
}
