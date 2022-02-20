import {  getAll } from "../API/products";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ResultSearch = {
    async  print(name){
        
        const {data} = await getAll();
        const arrSearch = [];
        data.forEach(async(e)=>{
            if((e.product_name.toLowerCase()).includes(name.toLowerCase())){
                arrSearch.push(e);
            }
        });
        return /* html */`
        ${Header.print()}
        <h1 class="px-5 font-bold text-4xl">DANH SÁCH SẢN PHẨM</h1>
        <div class="grid grid-cols-4">
            ${arrSearch.map((e) => `
                <div class="p-5">
                    <a href="/product/${e.id}">
                        <img src = "${e.image}">
                        <p class="font-bold text-2xl">${e.product_name}</p>
                    </a>
                    <span class="font-bold text-2xl text-orange-800">${e.price} đ</span>
                    <span class="line-through">${e.price - (e.price * e.discount / 100)} đ</span>
                </div>
                
            `).join("")}
            
        </div>
        ${Footer.print()}
        `;
        
    }
};
export default ResultSearch;