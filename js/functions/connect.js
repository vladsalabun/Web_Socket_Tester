$('body').on('click', '#connect', function() {

    endpoint = $('#backend').val() + `:` + $('#port').val();

    log(
        `Trying to connect to: ` + endpoint, 
        'white'
    );

    connectToWebSocket();
    return false;
});

/**
 *
 */
function connectToWebSocket() {




    Echo.channel(channel).listen('.newMessage', (message) => {
        console.log('listen to newMessage', message);
    });
   /*
    Echo.leaveChannel(channel);
   
    Echo.connect('connect', (message) => {
        console.log('listen to newMessage', message);
    });
*/

   
/*
connecting
reconnect
*/



}

$('body').on('click', '#disconnect', function() {

    log(
        `Trying to disconnect from: ` + endpoint, 
        'white'
    );

    disconnectFromWebSocket();
    return false;
});

/**
 *
 */
function disconnectFromWebSocket() {

    Echo.leave(channel);

}


/*
// client-side
io.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

io.on("disconnect", () => {
  console.log(socket.id); // undefined
});*/