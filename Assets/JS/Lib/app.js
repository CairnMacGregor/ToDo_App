 //Check off specific ToDo's by clicking
$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

// Delete ToDo's by clicking "X"
$("ul").on( "click", "span", function(event){
    $(this).parent().fadeOut(150, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Create a new ToDo

$("input[type='text']").keypress(function(event){
   
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class ='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

//Hide and Reveal New TODO input

$("span.add").click(function(){
    $("input[type='text'").fadeToggle(250)
});