import clienteAxios from "../config/axios"

/***** SIGNIN *****/
export const signin = user =>{
    return clienteAxios.post('/user/signin', user)
    .then(response =>{
        if(response.status !== 201){
            throw Error("Error de credenciales")
        } else{
           return response.data
        }
    })
}
