function addUser(request: any, response: any) {
    response.send("Добавление пользователя...")
}

function getUsers(request: any, response: any){
    response.send("Список пользователей...")
}

export { addUser , getUsers }