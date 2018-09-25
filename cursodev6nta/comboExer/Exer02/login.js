document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    if (login == 'admin' && password == 'web123') {
        location.href = "pgInicial.html";
    } else {
        alert("Login ou senha incorretos");
    }
};