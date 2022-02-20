export const reRender = async (dom,component,id="") =>{
    document.querySelector(dom).innerHTML=await component.print(id);
    if(component.aftersubmit) component.aftersubmit(id);
};