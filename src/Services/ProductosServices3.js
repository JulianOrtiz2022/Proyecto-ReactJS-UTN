import instance from "../Config/axios"

export function getAllProductos3(){
    return instance.get("sites/MLA/search?q=notebook")
}

export function getByIdProductos3(id){
    
    return instance.get("items/"+id)
}