// Ini adalah select di navbar
function togglePackages() {
    let packagesSelect = document.getElementById("packagesSelect");

    // Toggle visibility
    if (packagesSelect.style.display === "none" || packagesSelect.style.display === "") {
        packagesSelect.style.display = "block";
    } else {
        packagesSelect.style.display = "none";
    }
}

// banner slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imglist = document.getElementsByClassName("img-slideshow");
    if (n > imglist.length) { slideIndex = 1}
    else if (n < 1) { slideIndex = imglist.length} ;
    for (i = 0; i < imglist.length; i++) {
        imglist[i].style.display = "none";
    }
    imglist[slideIndex - 1].style.display = "block";
}

setInterval(function() {
    plusDivs(1);  
  }, 2000);  

// form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah submit default

        let isValid = true;

        // Validasi Name
        const nameInput = document.getElementById("name");
        const nameError = nameInput.parentElement.nextElementSibling;
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        // Validasi Email
        const emailInput = document.getElementById("email");
        const emailError = emailInput.parentElement.nextElementSibling;
        if (emailInput.value.trim() === "") {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Validasi Destination
        const destinationInput = document.getElementById("destination");
        const destinationError = destinationInput.parentElement.nextElementSibling;
        if (destinationInput.value === "") {
            destinationError.style.display = "block";
            isValid = false;
        } else {
            destinationError.style.display = "none";
        }

        // Jika Semua Valid, Bisa Submit (Contoh Alert Saja)
        if (isValid) {
            alert("Booking successful!");
            form.reset();
        }
    });
});

