$(document).ready(function(){
    //Ejemplo 1 - Esconder - mostrar.
    $("#ej1").click(function(){
      $("#p-ej1").toggle();
    });
    //Ejemplo 2 - Efecto fade in - out.
    $("#ej2").click(function(){
        $("#p-ej2").fadeToggle("slow");
      });
      //Ejemplo 3 - Efecto slide in - out.
    $("#ej3").click(function(){
        $("#p-ej3").slideToggle("slow");
      });
      //Ejemplo 4 - Animaciones.
    $("#ej4").click(function(){
            var div = $("#p-ej4");  
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '3em'}, "slow");
          });
      //Ejemplo 5 - Animaciones encadenadas.
    $("#ej5").click(function(){
      $("#p-ej5").css("color", "red").slideUp(2000).slideDown(2000);
    });
    //Ejemplo 6 - Animar bolas.
    $(function(){
      function animarBola() {
        $("#bola").animate({left: '+=50'}, "slow")
                  .animate({top: '+=50'}, "slow")
                  .animate({left: '-=50'}, "slow")
                  .animate({top: '-=50'}, "slow");   
      }
      setInterval(animarBola, 2400);
    });
     
  });