document.querySelector('.menu-abrir').onclick=function(){
    document.documentElement.classList.add('menu-ativo');
}

document.querySelector('.menu-fechar').onclick=function(){
    document.documentElement.classList.remove("menu-ativo");
}

document.querySelector(".nossa-historia").onclick=function(){
    document.documentElement.classList.remove("menu-ativo");
}

document.documentElement.onclick=function(){
    if(event.target == document.documentElement){
        document.documentElement.classList.remove("menu-ativo");
    }
}