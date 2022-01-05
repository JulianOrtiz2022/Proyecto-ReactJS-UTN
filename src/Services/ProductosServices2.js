import instance from "../Config/axios"

export function getAllProductos2(){
    return instance.get("sites/MLA/search?q=byke")
}

export function getByIdProductos2(id){
    
    return instance.get("items/"+id)
}
