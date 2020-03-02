$(document).ready(function() {
    $("#experience").on("click", function() {
        $(".sideExperience").slideDown(600);
    });
    $("#experience").on("dblclick", function() {
        $(".sideExperience").fadeOut(600);
    });

    $("#coursework").on("click", function() {
        $(".sideCoursework").slideDown(600);
    });
    $("#coursework").on("dblclick", function() {
        $(".sideCoursework").fadeOut(600);
    });

    $("#service").on("click", function() {
        $(".sideService").slideDown(600);
    });
    $("#service").on("dblclick", function() {
        $(".sideService").fadeOut(600);
    });

    $("#interests").on("click", function() {
        $(".sideInterests").slideDown(600);
    });
    $("#interests").on("dblclick", function() {
        $(".sideInterests").fadeOut(600);
    });



});