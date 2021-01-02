//funcion para el menu responsivo
$("#menu").click(function(){
  $("#contenedormenu").toggleClass("abrirmenu");
})

    //funcion para slide
$(document).ready(function(){
    var imgItems = $('.slider li').length; // Numero de Slides
    var imgPos = 1;

    // Agregando paginacion --
    for(i = 1; i <= imgItems; i++){
      $('.pagination').append('<li><i class="fa fa-circle"></i></li>');
      } 
      
      //------------------------
    
    $('.slider li').hide(); // Ocultanos todos los slides
    $('.slider li:first').show(); // Mostramos el primer slide
    $('.pagination li:first').css({'color': '#2D3134'}); // Damos estilos al primer item de la paginacion
    
    // Ejecutamos todas las funciones
    $('.pagination li').click(pagination);
    $('.right i').click(nextSlider);
    $('.left i').click(prevSlider);
    
    
    setInterval(function(){
      nextSlider();
    }, 6000);
    
    // FUNCIONES =========================================================
    
    function pagination(){
      var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada
    
      $('.slider li').hide(); // Ocultamos todos los slides
      $('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado
    
      // Dandole estilos a la paginacion seleccionada
      $('.pagination li').css({'color': '#FFFFFF'});
      $(this).css({'color': '#2D3134'});
    
      imgPos = paginationPos;
    
    }
    
    function nextSlider(){
      if( imgPos >= imgItems){imgPos = 1;} 
      else {imgPos++;}
    
      $('.pagination li').css({'color': '#FFFFFF'});
      $('.pagination li:nth-child(' + imgPos +')').css({'color': '#2D3134'});
    
      $('.slider li').hide(); // Ocultamos todos los slides
      $('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
    
    }
    
    function prevSlider(){
      if( imgPos <= 1){imgPos = imgItems;} 
      else {imgPos--;}
    
      $('.pagination li').css({'color': '#FFFFFF'});
      $('.pagination li:nth-child(' + imgPos +')').css({'color': '#2D3134'});
    
      $('.slider li').hide(); // Ocultamos todos los slides
      $('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
      }
  });


  //funcion para fancybox
  $(document).ready(function(){
    $(".fancybox").fancybox({
      openEffect: "none",
      closeEffect: "none",
    });
  });


  // boton subir
$(document).ready(function () {
  $("#subir").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});

//BOTON PARA MODAL
var btn= document.getElementById("Btn");
var promocion=document.getElementById("lapromocion");
var cerrar= document.getElementById("cerrarbtn");

btn.onclick =function(){
  promocion.style.display="block"
};

cerrar.onclick=function(){
  promocion.style.display="none"
};

window.onclick=function(){
  if(event.target==promocion){
  promocion.style.display="none"
}
};