import instance from "./config";

export const getAll = () =>{
    const url = "/post";
    return instance.get(url);
};
export const get = (id) =>{
    const url = `/post/${id}`;
    return instance.get(url);
};
export const add = (data) =>{
    const url = "/post";
    return instance.post(url,data);
};
export const remove = (id) =>{
    const url = `/post/${id}`;
    return instance.delete(url);
};
export const update = (data) =>{
    const url = `/post/${data.id}`;
    return instance.put(url,data);
};