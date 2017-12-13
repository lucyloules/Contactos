  $(document).ready(function(){
    // Se copia de materialize el modal,funcion click  y se modifica para nuestro ejercicio
    $('.modal').modal();//se llama y levanta al modal

    $('#agree').click(function() {//evento click en botón "+"
   //creo variables
    var name = $('.name').val(); //guardo el nombre del contacto
    var phone = $('.phone').val(); //guardo el telefono del contaco
    var email = $('.email').val();//guardo el email del contaco
    var contenedor = $('#div-contact'); //div en html donde se guardara todos los contactos

    //limpio los campos del formulario
    $('.name').val('');
    $('.phone').val('');
    $('.mail').val('');

    //Creo el div que contendrá los datos del contacto: name, phone y email
    contenedor.append('<div class="container contactc"><ul class="collection"><li class="collection-item avatar"><h5>' + name +'</h5><p>'+ phone +'</p><h5>' + email +'</h5><a href="#!" class="secondary-content"><i class="material-icons trash">delete_forever</i></a></li></ul></div>');
    /* estructura del div
    <div class="container contact">
      <ul class="collection">
        <li class="collection-item avatar">
          <h5>name</h5>
          <p>phone</p>
          <h5>email</h5>
          <a href="#!" class="secondary-content"><i class="material-icons trash">delete_forever</i></a>
        </li>
      </ul>
      </div> */  
    deleteContact(); //se llama a la funcion borrar

    });

    function deleteContact(){//funcion que borra un contacto

    $('.trash').click(function(){//evento click en botón borrar de un contacto
      $(this).parent().parent().parent().remove();//this apunta al boton eliminar
      // y parent() permite eliminar los contenedores de ese botón
    })
  }
});