const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido '


    })


    client.on('disconnect', function() {
        console.log('Usuario desconectado');
    })

    // Escuchar cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data)
        client.broadcast.emit('enviarMensaje', data);


        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'todo ok'
        //     });
        // } else {

        //     callback({
        //         resp: 'todo salió mal'
        //     });

        // }



    })

})