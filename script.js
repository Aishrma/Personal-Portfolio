// JavaScript for the typing animation on the home page.

var typed = new Typed(".text", {
  strings: ["Student.", "Frontend Developer.", "Learning Enthusiast."],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});

// JavaScript for the Contact Form Validation.

const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const mobile_no = document.getElementById("phone");
const subject = document.getElementById("subject");
const msg = document.getElementById("message");

function sendEmail() {
  const bodyMeassage = `Name  ${name.value}<br> Email: ${email.value}<br> Contact No. : ${mobile_no.value}<br> Message: ${msg.value}`;

  Email.send({
    SecureToken: "fb018a1d-7927-45b5-8b07-0be8badb4efb",
    // Host: "smtp.elasticemail.com",
    // Username: "useforwork1122@gmail.com",
    // Password: "5BED4CC0BF06790876D3FFF468AF64BEB3E6",
    To: "useforwork1122@gmail.com",
    From: "useforwork1122@gmail.com",
    Subject: subject.value,
    Body: bodyMeassage,
  }).then((message) => {
    if (message === "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message has been sent successfully.",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value === "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value !== "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errotTextEmail = document.querySelector(".err-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errotTextEmail.innerText = "Please enter a valid email address";
    } else {
      errotTextEmail.innerText = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !name.classList.contains("error") &&
    !email.classList.contains("error") &&
    !mobile_no.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !msg.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
