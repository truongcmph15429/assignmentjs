import { reRender } from "../../utils/reRender";
import { getAll } from "../API/category";
import HomePage from "../page/HomePage";


const Header = {
    async  print() {
        const {data} = await getAll();

        let dataCart = JSON.parse(localStorage.getItem("cart"));
        
        return /* html */ `
        <div class="bg-black" id="Heddermain">
        <div class="flex justify-between items-center w-11/12 m-auto">
        <div class="phone flex items-center ">
        <div class="text-amber-400 border-2 border-amber-400 rounded-full p-1 my-3 " id="phone"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg> 
        </div>
        <div>
        <span class="text-amber-300 ml-3 font-bold">0917062606</span>
        </div>
        </div>
        <div class="py-2 px-2 flex" >
            <input id="search" type="text" class="w-96 mx-2 outline-none rounded-lg">
            <button id="btn_search" class="text-xs text-white bg-blue-800 py-1 rounded-lg  px-2 border-white-400 border-2">Tìm kiếm</button>
        </div>      
            
       <div class="text-white pl-3 flex items-center">
       <h1 class="text-white pl-3 mr-10" id="datauser"></h1> 
       <div class="text-white border-2 border-white rounded-full p-1 mr-2 my-3 ml-3"><a href="/addcart">
       <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"  viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg>
</a></div>
<span><a href="/addcart">Giỏ hàng (${dataCart.length})</a></span>
       </div>   
    </div>
       <div>
       <hr>
       <div class="flex bg-black-600 justify-between w-11/12 h-30 ">
        <div class="w-550 ">
      <a href="/">  <img  class="w-full m-auto px-40 p-1  h-21" src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1644858225/assm/logo_yn96nk.png"
            alt="">
        </div> </a>

        <nav class="">
        <ul class="flex  justify-between align-center " >
        <li><a
                class="hover:font-bold  px-5 text-white block py-5 hover:text-black hover:bg-blue-100 transition duration-300 ease-in-out font-sans"
                href="/#/">Trang chủ</a>
            <li>
          ${data.map((e)=>/* html */`
          <li><a class="hover:font-bold  px-7  text-white block py-5 hover:text-black hover:bg-blue-100 transition duration-300 ease-in-out font-sans" href="/categories/${e.id}">${e.cate_name}</a></li>
          `)}
            <li><a
                class="hover:font-bold  px-7 text-white block py-5 hover:text-black hover:bg-blue-100 transition duration-300 ease-in-out font-sans"
                href="/#/news">Tin tức</a>
            <li>
           
           
          </ul>
        </nav> 
        </div>
      </div>
      </div>
        `;
    },
    
    aftersubmit() {
        
        const data = JSON.parse(localStorage.getItem("datauser"));

        const datauser = data == null ? "<a class='flex items-center' href='/signin'><div  class='text-white border-2 border-white rounded-full p-1 my-3 mr-2'><svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'><path fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z' clip-rule='evenodd' /></svg></div> Tài Khoản </a>"
            : "<div class='flex items-center'>Xin chào : <div class='inline text-amber-400 font-bold mr-5 ml-2'> " + data.username + " </div>&ensp; <div class='flex'><svg class='w-8' xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' /></svg> <button id='logout' class='text-white'>Logout</button></div></div>";
        document.querySelector("#datauser").innerHTML =  datauser;
        const btnLogout = document.querySelector("#logout");
        if (btnLogout) {
            btnLogout.addEventListener("click", () => {
                localStorage.removeItem("datauser");
                reRender("#app", HomePage);
            });
        }
        const btnsearch = document.querySelector("#btn_search");
        btnsearch.addEventListener("click",()=>{
            const searchContent = document.querySelector("#search").value;
            window.location = `/search/${searchContent}`;
        });  
    },
};
export default Header;