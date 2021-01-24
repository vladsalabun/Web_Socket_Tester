import Echo from "../vendor/laravel-echo.js"
/**
 *
 */
function connectToWebSocket() {

    if (typeof io !== 'undefined') {

        webSocket = new Echo({
            broadcaster: 'socket.io',
            host: host + ':' + port,
        });
        
        
        console.log(webSocket);
        log('Hello world!', 'success');
        
    } else {

        log(
            `socket.io not exists!`, 
            'danger'
        );
        
    }
    
    listenChannel();
}

$('body').on('click', '#connect', function() {
    $('#log-table').empty();

    disconnectFromWebSocket();

    setConfigs();

    log(
        `Connect to: ` + host + ':' + port + ` | Channel: ` + channel + `, event: ` + event, 
        'white'
    );

    connectToWebSocket();
    return false;
});


function listenChannel() {

    console.log(webSocket, channel, event);

    webSocket.channel(channel).listen(event, (message) => {
        console.log('message', message);        
        log(
            JSON.stringify(message), 
            'white'
        );
    });

    
   /*
    Echo.leaveChannel(channel);
   
    Echo.connect('connect', (message) => {
        console.log('listen to newMessage', message);
    });
*/


}

$('body').on('click', '#disconnect', function() {

    setConfigs();

    log(
        `Disconnect from: ` + host + ':' + port + ` | Channel: ` + channel + `, event: ` + event, 
        'white'
    );

    disconnectFromWebSocket();
    return false;
});

/**
 *
 */
function disconnectFromWebSocket() {

    if(jQuery.isEmptyObject(webSocket)) {
    
    } else {
        webSocket.leave(channel);
    }
    
}

function setConfigs() {
    host = $('#host').val();
    port = $('#port').val();
    channel = $('#channel').val();
    event = $('#event').val();
}