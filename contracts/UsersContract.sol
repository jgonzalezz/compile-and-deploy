pragma solidity ^0.4.24;


contract UsersContract {

    struct User {
        string name;
        string surName;
    }

    //Clave = address , valor = User
    mapping (address => User) private users;

    //mapa de usuarios registrados
    mapping (address=>bool) joinedUsers;

    //array de tipo adress para ver el total de usuarios registrados
    address[] totalUsers;

    //Funcion para registrar los usuarios
    function join(string name,string surName) public{ 
        require(!userJoined(msg.sender),"Mensaje que arroja la validacion");//require validacion

        //memory  Variable de memoria, no se guarda el cambio
        //storage se guarda el valor dentro del cotrato
        User storage user = users[msg.sender];
        user.name = name;
        user.surName = surName;
        joinedUsers[msg.sender] = true;
        totalUsers.push(msg.sender);
    }

    //solo para recuperar datos view
    function getUser(address addr) public view returns (string ,string){
        require(userJoined(msg.sender),"Mensaje que arroja la validacion");//require validacion
        User memory user = users[addr];
        return (user.name, user.surName);
    }


    function userJoined (address addr)public view returns (bool){
        return joinedUsers[addr];
    }

    //retorna el total de usuarios registrados
    function totalUsersRegistred() public view returns (uint){
        return totalUsers.length;
    }
}