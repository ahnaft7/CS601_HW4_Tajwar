function validateForm() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let letters = /^[A-Za-z]+$/;
    const facilitator = ["Laura","Fazil","Harsh"];
    let facilname = document.getElementById("facilitator");
    if (firstName.value.length < 2) {
        alert("First name must contain two (2) or more characters.");
        firstName.focus();
        return false;
    } else if (!firstName.value.match(letters)) {
        alert("First name must contain only letters A-Z or a-z");
        return false;
    } else if (lastName.value.length < 2) {
        alert("Last name must contain two (2) or more characters.");
        lastName.focus();
        return false;
    } else if (!lastName.value.match(letters)) {
        alert("Last name must contain only letters A-Z or a-z");
        return false;
    } else if (!facilitator.includes(facilname.value)) {
        alert("Facilitator must be either Laura, Fazil, or Harsh.")
        return false;
    } else {
        return true;
    }
}