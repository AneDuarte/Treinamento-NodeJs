const app = require('./app');

const porta = 3000;

app.listen(porta, () => {
    console.log(`❤| o servidor está [ON] na porta: ${porta}`);
});
