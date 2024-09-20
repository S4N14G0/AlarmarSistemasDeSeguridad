<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $mensaje = $_POST['mensaje'];

    // Número de teléfono de WhatsApp
    $telefono = '54903513067000'; // Reemplaza 'tu_numero_telefono' con tu número de teléfono de WhatsApp (incluye el código de país sin el símbolo '+')

    // Construir el enlace de WhatsApp
    $whatsapp_link = "https://wa.me/$telefono/?text=Hola,%20$nombre.%20$mensaje";

    // Redirigir al usuario a WhatsApp
    header("Location: $whatsapp_link");
}
?>
