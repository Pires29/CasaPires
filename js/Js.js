window.onscroll = function () {

    if (scrollY == 0){
        document.getElementById("background-scroll").classList.remove("fundo-nav");
    }
    else{
        document.getElementById("background-scroll").classList.add("fundo-nav");

    }
}

document.getElementById("hamburguer").onclick = function () {
    document.getElementById("background-scroll").classList.add("fundo-nav");
}

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById("navbarNav")
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

window.onload = function () {
    document.getElementById("contentor-todos").style.display = "grid"
    document.getElementById("todos").classList.add("list-element-active")

    document.getElementById("todos").onclick = function () {
        if (document.getElementById("contentor-todos").style.display == "grid"){
            document.getElementById("contentor-todos").style.display = "grid"
        }

        if (document.getElementById("contentor-ceramicas").style.display == "grid"){
            document.getElementById("contentor-ceramicas").style.display = "none"
            document.getElementById("contentor-todos").style.display = "grid"
            document.getElementById("cerâmicas").classList.remove("list-element-active")
            document.getElementById("todos").classList.add("list-element-active")

        }

        if (document.getElementById("contentor-revestimentos").style.display == "grid"){
            document.getElementById("contentor-revestimentos").style.display = "none"
            document.getElementById("contentor-todos").style.display = "grid"
            document.getElementById("revestimentos").classList.remove("list-element-active")
            document.getElementById("todos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-sanitarios").style.display == "grid"){
            document.getElementById("contentor-sanitarios").style.display = "none"
            document.getElementById("contentor-todos").style.display = "grid"
            document.getElementById("todos").classList.add("list-element-active")
            document.getElementById("sanitarios").classList.remove("list-element-active")
            document.getElementById("todos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-azulejos").style.display == "grid"){
            document.getElementById("contentor-azulejos").style.display = "none"
            document.getElementById("contentor-todos").style.display = "grid"
            document.getElementById("azulejos").classList.remove("list-element-active")
            document.getElementById("todos").classList.add("list-element-active")
        }


        if (document.getElementById("contentor-acessorios").style.display == "grid"){
            document.getElementById("contentor-acessorios").style.display = "none"
            document.getElementById("contentor-todos").style.display = "grid"
            document.getElementById("acessorios").classList.remove("list-element-active")
            document.getElementById("todos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-misturadoras").style.display == "grid"){
            document.getElementById("contentor-misturadoras").style.display = "none"
            document.getElementById("contentor-todos").style.display = "grid"
            document.getElementById("misturadoras").classList.remove("list-element-active")
            document.getElementById("todos").classList.add("list-element-active")
        }



        event.preventDefault()
    }

    document.getElementById("cerâmicas").onclick = function () {

        if (document.getElementById("contentor-ceramicas").style.display == "grid"){
            document.getElementById("contentor-ceramicas").style.display = "grid"
        }

        if (document.getElementById("contentor-todos").style.display == "grid"){
            document.getElementById("contentor-todos").style.display = "none"
            document.getElementById("contentor-ceramicas").style.display = "grid"
            document.getElementById("todos").classList.remove("list-element-active")
            document.getElementById("cerâmicas").classList.add("list-element-active")

        }

        if (document.getElementById("contentor-revestimentos").style.display == "grid"){
            document.getElementById("contentor-revestimentos").style.display = "none"
            document.getElementById("contentor-ceramicas").style.display = "grid"
            document.getElementById("revestimentos").classList.remove("list-element-active")
            document.getElementById("cerâmicas").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-sanitarios").style.display == "grid"){
        document.getElementById("contentor-sanitarios").style.display = "none"
        document.getElementById("contentor-ceramicas").style.display = "grid"
            document.getElementById("sanitarios").classList.remove("list-element-active")
            document.getElementById("cerâmicas").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-azulejos").style.display == "grid"){
        document.getElementById("contentor-azulejos").style.display = "none"
        document.getElementById("contentor-ceramicas").style.display = "grid"
            document.getElementById("azulejos").classList.remove("list-element-active")
            document.getElementById("cerâmicas").classList.add("list-element-active")
        }


        if (document.getElementById("contentor-acessorios").style.display == "grid"){
        document.getElementById("contentor-acessorios").style.display = "none"
        document.getElementById("contentor-ceramicas").style.display = "grid"
            document.getElementById("acessorios").classList.remove("list-element-active")
            document.getElementById("cerâmicas").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-misturadoras").style.display == "grid"){
            document.getElementById("contentor-misturadoras").style.display = "none"
            document.getElementById("contentor-ceramicas").style.display = "grid"
            document.getElementById("misturadoras").classList.remove("list-element-active")
            document.getElementById("cerâmicas").classList.add("list-element-active")
        }



        event.preventDefault()
    }

    document.getElementById("revestimentos").onclick = function () {

        if (document.getElementById("contentor-revestimentos").style.display == "grid"){
            document.getElementById("contentor-revestimentos").style.display = "grid"
        }

        if (document.getElementById("contentor-todos").style.display == "grid"){
            document.getElementById("contentor-todos").style.display = "none"
            document.getElementById("contentor-revestimentos").style.display = "grid"
            document.getElementById("todos").classList.remove("list-element-active")
            document.getElementById("revestimentos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-ceramicas").style.display == "grid"){
            document.getElementById("contentor-ceramicas").style.display = "none"
            document.getElementById("contentor-revestimentos").style.display = "grid"
            document.getElementById("cerâmicas").classList.remove("list-element-active")
            document.getElementById("revestimentos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-sanitarios").style.display == "grid"){
            document.getElementById("contentor-sanitarios").style.display = "none"
            document.getElementById("contentor-revestimentos").style.display = "grid"
            document.getElementById("sanitarios").classList.remove("list-element-active")
            document.getElementById("revestimentos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-azulejos").style.display == "grid"){
            document.getElementById("contentor-azulejos").style.display = "none"
            document.getElementById("contentor-revestimentos").style.display = "grid"
            document.getElementById("azulejos").classList.remove("list-element-active")
            document.getElementById("revestimentos").classList.add("list-element-active")
        }


        if (document.getElementById("contentor-acessorios").style.display == "grid"){
            document.getElementById("contentor-acessorios").style.display = "none"
            document.getElementById("contentor-revestimentos").style.display = "grid"
            document.getElementById("acessorios").classList.remove("list-element-active")
            document.getElementById("revestimentos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-misturadoras").style.display == "grid"){
            document.getElementById("contentor-misturadoras").style.display = "none"
            document.getElementById("contentor-sanitarios").style.display = "grid"
            document.getElementById("misturadoras").classList.remove("list-element-active")
            document.getElementById("sanitarios").classList.add("list-element-active")
        }



        event.preventDefault()
    }

    document.getElementById("sanitarios").onclick = function () {

        if (document.getElementById("contentor-sanitarios").style.display == "grid"){
            document.getElementById("contentor-sanitarios").style.display = "grid"
        }

        if (document.getElementById("contentor-todos").style.display == "grid"){
            document.getElementById("contentor-todos").style.display = "none"
            document.getElementById("contentor-sanitarios").style.display = "grid"
            document.getElementById("todos").classList.remove("list-element-active")
            document.getElementById("sanitarios").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-revestimentos").style.display == "grid"){
            document.getElementById("contentor-revestimentos").style.display = "none"
            document.getElementById("contentor-sanitarios").style.display = "grid"
            document.getElementById("revestimentos").classList.remove("list-element-active")
            document.getElementById("sanitarios").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-ceramicas").style.display == "grid"){
            document.getElementById("contentor-ceramicas").style.display = "none"
            document.getElementById("contentor-sanitarios").style.display = "grid"
            document.getElementById("cerâmicas").classList.remove("list-element-active")
            document.getElementById("sanitarios").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-azulejos").style.display == "grid"){
            document.getElementById("contentor-azulejos").style.display = "none"
            document.getElementById("contentor-sanitarios").style.display = "grid"
            document.getElementById("azulejos").classList.remove("list-element-active")
            document.getElementById("sanitarios").classList.add("list-element-active")
        }


        if (document.getElementById("contentor-acessorios").style.display == "grid"){
            document.getElementById("contentor-acessorios").style.display = "none"
            document.getElementById("contentor-sanitarios").style.display = "grid"
            document.getElementById("acessorios").classList.remove("list-element-active")
            document.getElementById("sanitarios").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-misturadoras").style.display == "grid"){
            document.getElementById("contentor-misturadoras").style.display = "none"
            document.getElementById("contentor-sanitarios").style.display = "grid"
            document.getElementById("misturadoras").classList.remove("list-element-active")
            document.getElementById("sanitarios").classList.add("list-element-active")
        }



        event.preventDefault()
    }

    document.getElementById("azulejos").onclick = function () {

        if (document.getElementById("contentor-azulejos").style.display == "grid"){
            document.getElementById("contentor-azulejos").style.display = "grid"
        }

        if (document.getElementById("contentor-todos").style.display == "grid"){
            document.getElementById("contentor-todos").style.display = "none"
            document.getElementById("contentor-azulejos").style.display = "grid"
            document.getElementById("todos").classList.remove("list-element-active")
            document.getElementById("azulejos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-revestimentos").style.display == "grid"){
            document.getElementById("contentor-revestimentos").style.display = "none"
            document.getElementById("contentor-azulejos").style.display = "grid"
            document.getElementById("revestimentos").classList.remove("list-element-active")
            document.getElementById("azulejos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-ceramicas").style.display == "grid"){
            document.getElementById("contentor-ceramicas").style.display = "none"
            document.getElementById("contentor-azulejos").style.display = "grid"
            document.getElementById("cerâmicas").classList.remove("list-element-active")
            document.getElementById("azulejos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-sanitarios").style.display == "grid"){
            document.getElementById("contentor-sanitarios").style.display = "none"
            document.getElementById("contentor-azulejos").style.display = "grid"
            document.getElementById("sanitarios").classList.remove("list-element-active")
            document.getElementById("azulejos").classList.add("list-element-active")
        }


        if (document.getElementById("contentor-acessorios").style.display == "grid"){
            document.getElementById("contentor-acessorios").style.display = "none"
            document.getElementById("contentor-azulejos").style.display = "grid"
            document.getElementById("acessorios").classList.remove("list-element-active")
            document.getElementById("azulejos").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-misturadoras").style.display == "grid"){
            document.getElementById("contentor-misturadoras").style.display = "none"
            document.getElementById("contentor-azulejos").style.display = "grid"
            document.getElementById("misturadoras").classList.remove("list-element-active")
            document.getElementById("azulejos").classList.add("list-element-active")
        }



        event.preventDefault()
    }


    document.getElementById("acessorios").onclick = function () {

        if (document.getElementById("contentor-acessorios").style.display == "grid"){
            document.getElementById("contentor-acessorios").style.display = "grid"
        }

        if (document.getElementById("contentor-todos").style.display == "grid"){
            document.getElementById("contentor-todos").style.display = "none"
            document.getElementById("contentor-acessorios").style.display = "grid"
            document.getElementById("todos").classList.remove("list-element-active")
            document.getElementById("acessorios").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-revestimentos").style.display == "grid"){
            document.getElementById("contentor-revestimentos").style.display = "none"
            document.getElementById("contentor-acessorios").style.display = "grid"
            document.getElementById("revestimentos").classList.remove("list-element-active")
            document.getElementById("acessorios").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-ceramicas").style.display == "grid"){
            document.getElementById("contentor-ceramicas").style.display = "none"
            document.getElementById("contentor-acessorios").style.display = "grid"
            document.getElementById("cerâmicas").classList.remove("list-element-active")
            document.getElementById("acessorios").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-azulejos").style.display == "grid"){
            document.getElementById("contentor-azulejos").style.display = "none"
            document.getElementById("contentor-acessorios").style.display = "grid"
            document.getElementById("azulejos").classList.remove("list-element-active")
            document.getElementById("acessorios").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-sanitarios").style.display == "grid"){
            document.getElementById("contentor-sanitarios").style.display = "none"
            document.getElementById("contentor-acessorios").style.display = "grid"
            document.getElementById("sanitarios").classList.remove("list-element-active")
            document.getElementById("acessorios").classList.add("list-element-active")
        }


        if (document.getElementById("contentor-misturadoras").style.display == "grid"){
            document.getElementById("contentor-misturadoras").style.display = "none"
            document.getElementById("contentor-acessorios").style.display = "grid"
            document.getElementById("misturadoras").classList.remove("list-element-active")
            document.getElementById("acessorios").classList.add("list-element-active")
        }


        event.preventDefault()
    }

    document.getElementById("misturadoras").onclick = function () {

        if (document.getElementById("contentor-misturadoras").style.display == "grid"){
            document.getElementById("contentor-misturadoras").style.display = "grid"
        }

        if (document.getElementById("contentor-todos").style.display == "grid"){
            document.getElementById("contentor-todos").style.display = "none"
            document.getElementById("contentor-misturadoras").style.display = "grid"
            document.getElementById("todos").classList.remove("list-element-active")
            document.getElementById("misturadoras").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-revestimentos").style.display == "grid"){
            document.getElementById("contentor-revestimentos").style.display = "none"
            document.getElementById("contentor-misturadoras").style.display = "grid"
            document.getElementById("revestimentos").classList.remove("list-element-active")
            document.getElementById("misturadoras").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-ceramicas").style.display == "grid"){
            document.getElementById("contentor-ceramicas").style.display = "none"
            document.getElementById("contentor-misturadoras").style.display = "grid"
            document.getElementById("cerâmicas").classList.remove("list-element-active")
            document.getElementById("misturadoras").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-azulejos").style.display == "grid"){
            document.getElementById("contentor-azulejos").style.display = "none"
            document.getElementById("contentor-misturadoras").style.display = "grid"
            document.getElementById("azulejos").classList.remove("list-element-active")
            document.getElementById("misturadoras").classList.add("list-element-active")
        }

        if (document.getElementById("contentor-sanitarios").style.display == "grid"){
            document.getElementById("contentor-sanitarios").style.display = "none"
            document.getElementById("contentor-misturadoras").style.display = "grid"
            document.getElementById("sanitarios").classList.remove("list-element-active")
            document.getElementById("misturadoras").classList.add("list-element-active")
        }


        if (document.getElementById("contentor-acessorios").style.display == "grid"){
            document.getElementById("contentor-acessorios").style.display = "none"
            document.getElementById("contentor-misturadoras").style.display = "grid"
            document.getElementById("acessorios").classList.remove("list-element-active")
            document.getElementById("misturadoras").classList.add("list-element-active")
        }



        event.preventDefault()
    }
}








