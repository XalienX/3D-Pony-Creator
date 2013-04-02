var socket = io.connect('http://test.siper.c9.io'),
    serverStatus = 2; // 0 - Disconnected, 1 - Connected, 2 - Connecting.
    
    
socket.on('connect', function(){
    $('#socketStatus').removeAttr('class').addClass('label label-success').text('Connected');
    serverStatus = 1;
});

socket.on('disconnect',function() {
    $('#socketStatus').removeAttr('class').addClass('label label-important').text('Disconnected');   
    serverStatus = 0;
});

socket.on('connecting', function () {
    $('#socketStatus').removeAttr('class').addClass('label label-warning').text('Connecting');   
    serverStatus = 2;    
})

socket.on('reconnecting', function () {
    $('#socketStatus').removeAttr('class').addClass('label label-warning').text('Reconnecting');   
    serverStatus = 2;       
})