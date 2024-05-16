const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// la methode on prend 2 arguments (listener ,la fonction à exécuter )
eventEmitter.on('tutorial', ()=>{
    console.log('Tutorial events has occured !');
});

// declenche la l'evenement avec la methode emit()   cls: clear the terminal
eventEmitter.emit('tutorial');