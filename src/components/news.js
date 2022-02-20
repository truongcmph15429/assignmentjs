import {getAll} from "../API/posts";
import Footer from "./Footer";
import Header from "./Header";
const News = {
    async  print(){
        const {data}= await getAll();
        return /* html */`
        ${await Header.print()}
        <h1 class="px-5 font-bold text-2xl text-center my-10">Tin tức</h1>
            <div class="grid grid-cols-4 gap-10 w-10/12 m-auto mb-20">
                ${data.map((e) => `
                    <div class="p-5 border-2 border-solid">
                        <a>
                            <img class="w-full" src = "${e.image}">
                            <p class="font-bold text-1xl py-1">${e.title.slice(0,70)}...</p>
                        </a>
                        <span class="">${e.discription.slice(0,80)}...  </span>
                    </div>
                `).join("")}
            </div>
            ${Footer.print()}
        `;
    },
    aftersubmit(){
        Header.aftersubmit();
    }
};
export default News;