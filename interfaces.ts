interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return{
        nome: 'Lucas',
        email: 'lucas@email.com',

    }
}

function setUser(usuario: Usuario){
    //..
}