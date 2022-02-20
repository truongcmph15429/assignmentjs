import NavAdmin from "../../../components/Navadmin";
import { get, update } from "../../../API/user";


const userUpdate = {

    async print(id){
        const {data} = await get(id);
        return  /* html */`
        <div class="min-h-full">
            ${NavAdmin.print()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                        >
                        Cập nhật
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news" class="sm:ml-3">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Quay lại
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </header>
            <main>
            
            <form class="w-full max-w-4xl m-auto mt-4" method="POST" id="form-update-user">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Username
                </label>
                <input value="${data.username}" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="user_name" type="text" placeholder="Jane">
                </div>
                
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                password
            </label>
            <input value="${data.password}" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="password" type="text" placeholder="Jane">
            </div>
            
        </div>
            <div class=" -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3  my-4">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
            </label>
            <input value="${data.email}" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Doe">
            </div>
                <div class="w-full md:w-1/3  mb-8 py-8 m-4 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Role
                </label>
                <select  id="role" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="0">Nguời dùng</option>
                    <option value="1">Quản trị viên</option>
                    </select>         
                </div>
            </div>
            <div class="flex items-center border-b border-teal-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Bấm thêm mới để thêm mới sản phẩm" readonly aria-label="Full name">
            <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                Cập nhật
            </button>
            <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded">
                Cancel
            </button>
        </div>
            </form>
                
            </main>
        </div>
        `;
    },
    aftersubmit(updateid){
        const updateform = document.querySelector("#form-update-user");
        updateform.addEventListener("submit", async(Element) => {
            Element.preventDefault();
            const updateproduct = {
                username : document.querySelector("#user_name").value,
                password : document.querySelector("#password").value,
                email: document.querySelector("#email").value,
                role :document.querySelector("#role").value,
                id :updateid
            };
            update(updateproduct)
                .then(()=> window.location="/admin/user")
            ;

        });
    }
};


export default userUpdate;