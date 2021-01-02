<?php
	$destino ="rodrigo.enriquez1296@gmail.com";
	$asunto ="Contacto desde el sitio web";
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$modelo = $_POST["modelo"];
  $servicio = $_POST["servicio"];
  $descripcion = $_POST["descripcion"];
	$contenido = "
	<b>Nombre :</b> " . $nombre . "<br><b>Correo :</b>" . $correo . "<br><b>Modelo :</b> " . $modelo . "<br><b>Servicio : </b> " . $servicio . "<br><b>Descripcion : </b> " . $descripcion;
	
	// PARA QUE RECONOZCA LAS ETIQUETAS HTML

	$encabezados  = "MIME-Version: 1.0" . "\r\n";
	$encabezados .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// FUNCION MAIL Y REDIRECCIONAMIENTO
	mail($destino, $asunto, $contenido, $encabezados);
	header("Location: index.html");
?>