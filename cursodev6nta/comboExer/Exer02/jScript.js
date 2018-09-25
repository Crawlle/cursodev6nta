document.getElementById("triang").onsubmit = function(e) {
    e.preventDefault();

    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;

    document.getElementById("areaTriang").value = (base * altura) / 2;
};

document.getElementById("quad").onsubmit = function(e) {
    e.preventDefault();

    var lado = document.getElementById("lado").value;

    document.getElementById("areaQuad").value = lado * lado;
};

document.getElementById("circ").onsubmit = function(e) {
    e.preventDefault();

    var raio = document.getElementById("raio").value;

    document.getElementById("areaCirc").value = Math.PI * raio * raio;
};

document.getElementById("trap").onsubmit = function(e) {
    e.preventDefault();

    var baseMaior = document.getElementById("baseMaiorTrap").value;
    var baseMenor = document.getElementById("baseMenorTrap").value;
    var altura = document.getElementById("alturaTrap").value;

    document.getElementById("areaTrap").value = ((baseMaior + baseMenor) * altura) / 2;
};

document.getElementById("retang").onsubmit = function(e) {
    e.preventDefault();

    var base = document.getElementById("baseRetang").value;
    var altura = document.getElementById("alturaRetang").value;

    document.getElementById("areaRetang").value = (base * altura) / 2;
};
