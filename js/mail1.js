document.getElementById('btn2').addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const data = {
        name,
        email,
        phone,
        message
    };
    // https://wandereasebackend.onrender.com
    // http://localhost:8081
    fetch('https://wandereasebackend.onrender.com/api/send-email1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Email sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send email.');
    });
});
