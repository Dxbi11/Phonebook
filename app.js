
function agregar() {

    const nombre = document.getElementById('nombre').value.trim();
    const numero = document.getElementById('numero').value.trim();

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact';

    if (nombre != "" || numero!="" ) {
      
        contactDiv.innerHTML = `<h4 class="title is-4">Nombre:</h4> ${nombre} <h4 class="title is-4">Numero:</h4> ${numero}`;


        document.getElementById('contactList').appendChild(contactDiv);
      }





    document.getElementById('nombre').value = '';
    document.getElementById('numero').value = '';
}
