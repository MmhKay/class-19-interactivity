$("#gallery-thumb1").click(function() {
    $("#gallery-figure1").removeClass("hidden");
    $("#gallery-figure2").addClass("hidden");
    $("#gallery-figure3").addClass("hidden");
});

$("#gallery-thumb2").click(function() {
    $("#gallery-figure1").addClass("hidden");
    $("#gallery-figure2").removeClass("hidden");
    $("#gallery-figure3").addClass("hidden");
});

$("#gallery-thumb3").click(function() {
    $("#gallery-figure1").addClass("hidden");
    $("#gallery-figure2").addClass("hidden");
    $("#gallery-figure3").removeClass("hidden");
});
