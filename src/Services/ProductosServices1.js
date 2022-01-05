import instance from "../Config/axios"

export function getAllProductos1(){
    return instance.get("sites/MLA/search?q=tv")
}

export function getByIdProductos1(id){
    
    return instance.get("items/"+id)
}