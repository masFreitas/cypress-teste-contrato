
function getRandomEmail() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

    let email = '';

    for (let i = 0; i < 10; i++) {
        email += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    let domain = '@example.com';

    return email + domain;
}


module.exports = {
    getRandomEmail
};