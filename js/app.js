// variables
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

const btnSend = document.querySelector('#send');
const formSend = document.querySelector('#send-mail');
const form = document.querySelector('#send-mail');
const resetBtn = document.querySelector('#resetBtn');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     


explanation()
// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', startApp);

     // Campos del formulario
     email.addEventListener('blur', validateForm);
     subject.addEventListener('blur', validateForm);
     message.addEventListener('blur', validateForm);

     // Boton de enviar en el submit
     formSend.addEventListener('submit', sendEmail);

     // Boton de reset
     resetBtn.addEventListener('click', resetForm);
}



// funciones
function startApp() {
     // deshabilitar el envio
     btnSend.disabled = true;
     btnSend.classList.add('cursor-not-allowed', 'opacity-50')
}


// Valida que el campo tengo algo escrito

function validateForm(e) {
    
     if(e.target.value.length > 0 ) {
          
          // delete errors 
          const error = document.querySelector('p.error');
          if(error) {
               error.remove();
          }
          

          e.target.classList.remove('border', 'border-red-500');
          e.target.classList.add('border', 'border-green-500');
     } else {
          e.target.classList.remove('border', 'border-green-500');
          e.target.classList.add('border', 'border-red-500');
          showError('All spaces should be full');
     }



     // Validar unicamente el email
     if(e.target.type === 'email') {
         

          if(er.test( e.target.value ) ) {
               const error = document.querySelector('p.error');
               if(error) {
                    error.remove();
               }
               e.target.classList.remove('border', 'border-red-500');
               e.target.classList.add('border', 'border-green-500');

          }else {
               e.target.classList.remove('border', 'border-green-500');
               e.target.classList.add('border', 'border-red-500');
               showError('invalid Email address');
          }
          
     }


     if(email.value !== '' && subject.value !== '' && message.value !== '' ) {
        btnSend.disabled = false;
        btnSend.classList.remove('cursor-not-allowed', 'opacity-50');
        
     }

     sendEmail();
}

function showError (message) {
     const messageError = document.createElement('p');
     messageError.textContent = message;
     messageError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

     const errors = document.querySelectorAll('.error')
     if (errors.length === 0) {
          form.appendChild(messageError);
     }
     

}

// Resetear el formulario 
function resetForm(e) {
     formSend.reset();
     e.preventDefault();
}

// Cuando se envia el correo
function sendEmail(e) {
     e.preventDefault();


     // Spinner al presionar Enviar
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'flex';

     

     // Ocultar Spinner y mostrar gif de enviado
     setTimeout( () => {
          spinner.style.display = 'none';

          // Gif que envia email
          const sended = document.createElement('p');
          sended.textContent = 'Message sent';
          sended.classList.add('text-center', 'my-10', 'p-5', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

          form.insertBefore(sended, spinner);

          setTimeout(() =>  {
               sended.remove();
               form.reset();

               startApp();
          }, 5000);


     }, 3000);


}
function explanation() {
        const explanationUser = window.alert('In this project an example of a form for sending an email will be shown. The propose of this project is to show that i am able to work with css, html and javascript.');
}



