function login(element) {
    if(element.innerText=="Login") {
        element.innerText=
        "Logout";
    } else {
        element.innerText="Login"
    }
}

function hide(element) {
    element.remove();
}

function message(element) {
    alert("ninja was liked");
}