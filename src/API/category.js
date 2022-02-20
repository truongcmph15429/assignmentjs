import instance from "./config";

export const getAll =() => {
    const url = "/category";
    return instance.get(url);
};
export const remove =(id)=>{
    const url = `/category/${id}`;
    return instance.delete(url);
};
export const add = (data)=>{
    const url = "/category";
    return instance.post(url,data);
};
export const get = (id)=>{
    const url = `/category/${id}`;
    return instance.get(url);
};
export const update = (data)=>{
    const url = `/category/${data.id}`;
    return instance.put(url,data);
};