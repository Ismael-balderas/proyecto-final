//scrip.js
document.addEventListener('DOMContentLoaded' , function(){
    //simula retraso de dos segundos para la pantalla de carga 
    setTimeout(function(){
        hiddeSplashScreen();
    }, 2000);
});

function hiddeSplashScreen(){
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.display='none';

    //muestra la pantalla de inicio 
    const homeScreen = document.getElementById('home-Screen');
    homeScreen.classList.remove('hidden');

    //agrga un evento al boton de inicio 
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('Click', function(){
        alert('¡la aplicacion ha comensado!');
    });
}

if('Notification' in window) {
    Notification.requestPermission().then(function(permission){
        if(permission === 'granted'){
            new Notification('¡Bienvenido!',{
                body: 'Gracias por visitar nuestro sitio web.'
            });
        }
    });
}