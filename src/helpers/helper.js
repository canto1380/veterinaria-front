/* Token autenticacion */
export const isAuthenticated =() =>{
    if(localStorage.getItem('Params=456@6?=ID')){
        const {user} = JSON.parse(localStorage.getItem("Params=456@6?=ID"))
        if(user.admin){
            console.log(user.admin)
            return 0
        } else {
            console.log('false 1')
            return 1
        }
    } else {
        return 2
        // console.log('false 2')
    }
}

export const authenticate =(data, next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('Params=456@6?=ID', JSON.stringify(data))
        next()
    }
}