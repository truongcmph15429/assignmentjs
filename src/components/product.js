import { getAll } from "../API/products";
const Product = {
    async print(){
        const {data} = await getAll();
        return `     
            <h1 class="px-5 font-bold text-2xl text-center my-10">DANH SÁCH SẢN PHẨM</h1>
            <div class="grid grid-cols-4 gap-10 w-11/12 m-auto ">
                ${data.map((e) => `
                    <div class="p-5 border-2 border-solid">
                        <a href="/product/${e.id}">
                            <img class="w-40 w-auto" src = "${e.image}">
                            <p class="font-bold text-1xl py-1">${e.product_name}</p>
                        </a>
                        <span class="text-center font-bold text-1xl text-orange-800">${e.price} đ</span>
                        <span class="text-center line-through pl-20">${e.price - (e.price * e.discount / 100)} đ</span>
                    </div>
                `).join("")}
            </div>
            `;
    }
};
export default Product;