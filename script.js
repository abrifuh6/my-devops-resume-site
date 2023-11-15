document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Replace 'your_server_endpoint' with your actual server endpoint
    const endpoint = 'https://example.com/api/contact';

    // Send data to the server using Fetch API
    fetch(endpoint, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Display a success message to the user
            alert("Form submitted successfully!");
            // You can also reset the form if needed
            this.reset();
        } else {
            // Handle server error or other issues
            alert("Form submission failed. Please try again later.");
        }
    })
    .catch(error => {
        // Handle network error
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
    });
});
