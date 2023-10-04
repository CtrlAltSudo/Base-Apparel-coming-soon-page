const form = document.querySelector("#email");
const input = document.querySelector("input");

form.addEventListener("input", inputErr);
function inputErr() {
    if(form.value.includes("@") && form.value.includes("")) {
        console.log("it's a valid email address")
        document.getElementById("formErrMsg").style.display = "none"; 
        input.style.backgroundImage = "none"

    } else {
        console.log("it's not valid")
        form.classList.add("formErr")
        document.getElementById("formErrMsg").style.display = "block"; 
        input.style.backgroundImage = "url(images/icon-error.svg)"
        
    }
}
