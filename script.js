document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;

let message =
`✨ Welcome to Anning Designer

Hello ${name},

Thank you for contacting us.

How can we help you today?

Our Services:

🎨 Graphic Design
📱 Mobile App UI Design
💻 Website UI Design
🚀 Social Media Design
🖌 Logo Design
📑 Business Profile Design
🎯 Branding & Marketing Creatives

Please let us know which service you are interested in, and our team will assist you further.`;

let whatsappUrl =
`https://wa.me/918320453064?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl,"_blank");

});
function toggleMenu(){
document.getElementById("mobileMenu").classList.toggle("show-menu");
}

