
function cargadetalle(id){
    $("#popup").html(
        "<div class='pop popupfondo' >"+
        "<div class='pop popupcentro'>"+
        "<button onclick='cerrar();' class='pop cerrar btn btn-danger'>X</button></div></div>"
    );
    $.post("/getbyid", {id}, function(htmlexterno){
        $(".popupcentro").append(htmlexterno);
    });
}

function cerrar(){
    $(".pop").remove();
}

$(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
        $(".pop").remove();
    }
});