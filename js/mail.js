document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const travelDate = document.getElementById('travelDate').value;
    const travelCount = document.getElementById('travelCount').value;
    const message = document.getElementById('message').value;

    const data = {
        name,
        email,
        phone,
        travelDate,
        travelCount,
        message
    };

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


document.getElementById('btn1').addEventListener('click', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name1').value;
    const email = document.getElementById('email1').value;
    const phone = document.getElementById('phone1').value;
    const travelDate = document.getElementById('travelDate1').value;
    const travelCount = document.getElementById('travelCount1').value;


    
    const message = document.getElementById('message1').value;

    const data = {
        name,
        email,
        phone,
        travelDate,
        travelCount,
        message
    };

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