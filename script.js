document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("mobile").value;

let message =
`Hello Anning Designer,

My Name: ${name}

Email: ${email}

Mobile: ${mobile}

I would like to know more about your Graphic Design and UI/UX Design Services.`;

let whatsappUrl =
`https://wa.me/918320453064?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl,"_blank");

});
