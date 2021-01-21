import Echo from "./vendor/laravel-echo.js"

if (typeof io !== 'undefined') {

    window.Echo = new Echo({
        broadcaster: 'socket.io',
        host: endpoint,
    });
    
    log('Hello world!', 'success');

} else {

    log(
        `socket.io not exists!`, 
        'danger'
    );
    
}