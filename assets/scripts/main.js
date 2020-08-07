let lista_dropdowns = document.querySelectorAll(".dropdown");
let lista_drop_menus = document.querySelectorAll(".drop_menu");
for (let i = 0; i < lista_dropdowns.length; i++) {
  lista_dropdowns[i].addEventListener("click", (e)=>{
    if(lista_drop_menus[i].classList.contains("d-none")){
      lista_drop_menus[i].classList.remove("d-none")
    }else{
      lista_drop_menus[i].classList.add("d-none")
    }
  })  
}
