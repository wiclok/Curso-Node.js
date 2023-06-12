const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total,numeroProductos) =>{
    console.log(`Se realizó un compra por $${total}`);
    console.log(`Numero de productos: ${numeroProductos}`);
});

emisorProductos.emit('compra', 500, 4);

