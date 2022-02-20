
import Navigo from "navigo";

import Dashboard from "./page/admin/dashboard";
import productadd from "./page/admin/products/productadd";
import ProductShow from "./page/admin/products/productshow";
import productupdate from "./page/admin/products/productupdate";
import Detail from "./page/Detail";
import TEst from "./page/Detail";
import postAdd from "./page/admin/post/postadd";
import userShow from "./page/admin/users/userShow";
// import Detail from "./page/Detail";

import HomePage from "./page/HomePage";
import signinform from "./page/signin";
import signupform from "./page/signup";
import postShow from "./page/admin/post/postshow";
import postUpdate from "./page/admin/post/postupdate";
import addCart from "./page/addcart";
import useradd from "./page/admin/users/userAdd";
import userUpdate from "./page/admin/users/userUpdate";
import ResultSearch from "./page/ResultSearch";
import News from "./components/news";
import cateshow from "./page/admin/categories/categortShow";
import cateAdd from "./page/admin/categories/cateadd";
import cateUpdate from "./page/admin/categories/cateupdate";
import cate from "./page/cate";

const router = new Navigo("/", { linksSelector: "a",hash: true});
const result = async (content,id="") => {
    document.getElementById("app").innerHTML = await content.print(id);
    if(content.aftersubmit) content.aftersubmit(id);
};
router.on("/admin/*/", () =>{}, {
    before(done,match){
        if(localStorage.getItem("datauser")){
            const {role} =JSON.parse( localStorage.getItem("datauser"));
            if(role==0){
                done();
            }else{
                window.location = "/";
            }
        }else{
            window.location = "/";
        }
    }
    
});
router.on({
    "/": () => result(HomePage),
    "/DETAIL": ()=> result(TEst),
    "/admin": ()=> result(Dashboard),
    "/admin/product": ()=> result(ProductShow),
    "/admin/product/add":()=> result(productadd),
    "admin/product/:id/edit" :({data})=> result(productupdate,data.id),
    "/product/:id":({data})=> result(Detail,data.id),
    "/signup": () => result(signupform),
    "/signin": () => result(signinform),
    "/admin/post/add":()=> result(postAdd),
    "/admin/user/add":()=> result(useradd),
    "/admin/user/:id/edit":({data})=>result(userUpdate,data.id),
    "/admin/post":()=> result(postShow),
    "/admin/user":()=> result(userShow),
    "/addcart":()=> result(addCart),
    "/admin/post/:id/edit" :({data}) => result(postUpdate,data.id),
    "/admin/cateshow" :()=> result(cateshow),
    "/admin/cateshow/add":()=> result(cateAdd),
    "/admin/cateshow/:id/edit":({data})=> result(cateUpdate,data.id),
    "/search/:name" : ({data})=> result(ResultSearch,data.name),
    "/news":()=> result(News),
    "/categories/:id":({data})=> result(cate, data.id)
},
);
router.resolve();