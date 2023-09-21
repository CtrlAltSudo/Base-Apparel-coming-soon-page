const form = document.querySelector("#email");

form.addEventListener("input", inputErr);

function inputErr() {
    if(form.value.includes("@") && form.value.includes("")) {
        console.log("it's a valid email address")
    } else {
        console.log("it's not valid")
        form.classList.add("formErr")
    }
}
