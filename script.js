const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-bar li a");

window.addEventListener("scroll", navColorChange);

function navColorChange(){
    let scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        if(scrollPosition >=section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight){
            navLinks.forEach(link =>{
                link.classList.remove("active");

                if(link.getAttribute("href") === "#" + section.id){
                    link.classList.add("active");
                }
            });
        }
    });
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxFW4zEPyZ9uaWT0xE5-u7vTyygc4oRKV8OLSiNt7tkXq0LRzGYs-PZ6ItlToHxXp4J8g/exec';
const form = document.forms['submitToGoogleSheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
        msg.innerHTML = "Message sent successfully!";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => {
        msg.innerHTML = "Something went wrong!";
    })
})