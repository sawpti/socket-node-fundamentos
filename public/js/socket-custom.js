var socket = io();
socket.on('connect', function() {

    console.log('Conectado al servidor');
});
// on para escuchar
socket.on('disconnect', function() {
        console.log('El servidor se ha desconectado');
    })
    // emit para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Hugo',
    mensaje: 'Hola, que tal?'
}, function(resp) {
    console.log('Respuesta server', resp);
});

// Eschar mensaje del servidor

socket.on('enviarMensaje', function(mensaje) {
    console.log('Información del servidor', mensaje)
})