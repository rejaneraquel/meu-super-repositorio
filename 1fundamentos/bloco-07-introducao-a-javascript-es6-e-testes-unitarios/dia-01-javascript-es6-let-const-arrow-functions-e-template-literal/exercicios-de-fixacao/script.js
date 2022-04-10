//let
function userInfo() {
    let userEmail = 'maria@email.com';

    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);

}
userInfo();
    //se colocar o console.log fora do escopo da função, não reconhece a variável definida.

//const
function userInfo() {
    const userEmail = 'maria@email.com';

    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);

}
userInfo();
    //se colocar o console.log fora do escopo da função, não reconhece a variável definida.

//var
function userInfo() {
    var userEmail = 'maria@email.com';

    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);

}
userInfo();
    //se colocar o console.log fora do escopo da função, não reconhece a variável definida.

