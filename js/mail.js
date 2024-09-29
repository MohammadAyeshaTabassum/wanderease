document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const travelDestination = document.getElementById('travelDestination').value;
    const travelDate = document.getElementById('travelDate').value;
    const travelCount = document.getElementById('travelCount').value;
    const message = document.getElementById('message').value;

    const data = {
        name,
        email,
        phone,
        travelDestination,
        travelDate,
        travelCount,
        message
    };
    // https://wandereasebackend.onrender.com
    fetch('https://wandereasebackend.onrender.com/api/send-email', {
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

