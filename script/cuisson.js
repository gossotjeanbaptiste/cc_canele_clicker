function cuisiner(){
    var nb_cuisson = document.getElementById("valeur");
    var nb_cuisson = parseInt(nb_cuisson.innerHTML);
    var nb_cuisson = nb_cuisson + 1;
    document.getElementById("valeur").innerHTML = nb_cuisson;
    var element = document.getElementById("four");

    if (nb_cuisson >= 25) {
        var attribut = element.removeAttribute("disabled");
    }
    else {
        var attribut = element.setAttribute("disabled", "disabled");
    }

}

function four(){
    var four = 1;

    var nb_four = document.getElementById("valeur");
    var nb_four = parseInt(nb_four.innerHTML);
    var nb_four = nb_four - 25;
    var four = four + 1;

    document.getElementById("valeur").innerHTML = nb_four;
    var element = document.getElementById("four");


    return four;
}

