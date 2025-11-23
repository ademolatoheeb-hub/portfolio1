// MENU TOGGLE
const menutoggle = document.getElementById('menu-toggle');
const navlinks = document.querySelector('.nav-link');

menutoggle.addEventListener('click', ()=>{
    navlink.ClassList.toggle('active');
});

// FORM VALIDATION
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message){
        alert('Please fill in all fields.');
        return;
    }

    alert('Thank you, $(name)! Your message has been sent.');
    form.requestFullscreen();
}
);