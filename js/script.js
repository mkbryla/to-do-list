var list = $("ul");
$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

$("#btnAdd").click(function() {
    addNewTodo();
});

$("#btnDeleteAll").click(function() {
    $("li").remove().fadeOut();
});


$("ul").on("click", ".delete", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
});

$("#todo").keypress(function(e) {
    if (e.which === 13)
        addNewTodo();
});

var addNewTodo = function() {
    var text = $("#todo").val();
    var info = $("#info");
    if (text !== "") {
        if (text.length <= 20) {
            var newLi = $("<li><i class='fa fa-trash delete' aria-hidden='true'></i>" + text + "</li>").hide().fadeIn();
            list.append(newLi);
            $("#todo").val("");
        } else {
            info.text("Maximum 20 characters").hide().fadeIn().delay(2000).fadeOut();
        }
    } else {
        info.text("Type some text").hide().fadeIn().delay(2000).fadeOut();
    }
};
