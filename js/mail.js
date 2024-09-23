var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    alert("hello");
    e.preventDefault()
    var email = document.getElementById("email").ariaValueMax;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "Ayesha",
        Password : "ecjexxsgloyfvgap",
        To : 'bennyabhishikth333@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
})