var socket = io.connect('http://192.168.43.80:3000', { 'forceNew': true });

socket.on('messages', (data) => {
    console.log(data);
    render(data);
})

function render(data) {
    var html = `<div> 
     <strong>
     ${data.author}
     </strong></br>
     <em>${data.text}</em>
     </div>`;
    document.getElementById('mensajes').innerHTML = html;
}

 function addMessage(e){
     
     socket.emit('newMessage');
     return false;

 }
 function encender(){
     socket.emit('encender');
     return false;

 }

