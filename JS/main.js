$(document).ready(function(){
    var i=0;
    $(".cuadro").click(cambiar);
    function cambiar()
    {
        if(i==0){
            $(this).html("O");
            i=1;
        }
        else{
            $(this).html("X");
            i--;
        }
    }
})
