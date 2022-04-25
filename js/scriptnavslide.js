let nav2 = document.getElementById('nav2');


let btn = document.getElementById('btn');

btn.addEventListener('click', affichageNav);

let links = document.querySelectorAll('.link')

links.forEach(link => {
    console.log(link)
    link.addEventListener('click', affichageNav);

})


function affichageNav() {
    console.log(nav2)

    if (nav2.style.visibility == "hidden") {

        nav2.style.visibility = "visible"
        nav2.style.opacity = "1"
        nav2.style.zIndex = "9998"
        nav2.style.right = "0"
    } else {

        nav2.style.visibility = "hidden"
        nav2.style.zIndex = "-9998"
        nav2.style.opacity = "0"
        nav2.style.right = "-500px"

    }

}

affichageNav()
