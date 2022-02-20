import { increaseQuantity,decreaseQuantity,removeItemInCart } from "../../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../../utils/reRender";
import Header from "../components/Header";
import Footer from "../components/Footer";
const addCart = {
    async  print(){
        if(localStorage.getItem("cart")){
            const data = JSON.parse(localStorage.getItem("cart"));
            let tong_tien = 0;
            data.forEach((e) => {
                const thanh_tien = e.price*e.quantity;
                tong_tien += thanh_tien;
            });
            return /* html */ `
        ${await Header.print()}
        <div class=" bg-gray-300 w-full">
    <div class="py-12 w-full">
        <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl ">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
                    <div class="md:grid md:grid-cols-2 gap-2 ">
                        <div class="col-span-2 p-5">
                            <h1 class="text-xl font-medium ">Shopping Cart</h1>
                            ${data.map((products)=>/* html */`
                            <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                <div class="flex "> <img src="${products.image}" width="60" class="rounded-full ">
                                    <div class="flex flex-col ml-3 "> <span class="text-md font-medium">${products.product_name}</span> <button  data-id="${products.id}" class="btn btn-remove">Remove</button> </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="pr-8 flex"> <button class="btn btn-decrease" data-id="${products.id}">-</button> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-1 mx-2" value="${products.quantity}"> <button data-id="${products.id}" class="btn btn-increase">+</button> <td>
                                    
                                </td> </div>
                                    <div class="pr-8"> <span class="text-xs font-medium">${products.price*products.quantity}</span> </div>
                                    <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                </div>
                            </div>
                            `).join("")}
                            
                            <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                <div class="flex items-center"> <i class="fa fa-arrow-left text-sm pr-2"></i> <span class="text-md font-medium text-blue-500">Continue Shopping</span> </div>
                                <div class="flex justify-center items-end"> <span class="text-sm font-medium text-gray-400 mr-1">Tổng tiền:</span> <span class="text-lg font-bold text-gray-800 ">${tong_tien}</span> </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
${Footer.print()}
`;
        }
        else{
            return "No item";
        }
    },
    aftersubmit(){
        Header.aftersubmit();
        const btns = document.querySelectorAll(".btn");
   
        btns.forEach((btn) => {
            btn.addEventListener("click",function(){
                const id=btn.dataset.id;
                if(btn.classList.contains("btn-increase")){
                    increaseQuantity(id,()=>{
                        toastr.success("Tăng số lượng thành công");
                        reRender("#app",addCart);
                    });
                }
                else if(btn.classList.contains("btn-decrease")){
                    decreaseQuantity(id, () => {
                        toastr.success("Giảm số lượng thành công");
                        reRender("#app",addCart);
                    });
                }else{
                    removeItemInCart(id,()=>{
                        reRender("#app",addCart);
                    });
                }
            });
        });
        
    }
};
export default addCart;