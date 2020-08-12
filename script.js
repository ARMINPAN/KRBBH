
function closeSidebar(){
    var sidebar = document.getElementsByClassName("sidebar")[0]
    sidebar.style.width = "0"
}
var hey = document.getElementsByClassName("sidebarItem")
function tafirihii(){
for (let i = 0 ; i < hey.length ; i++){
    if(screen.width <= 400){
        hey[i].addEventListener('click',function(event){
            console.log("cli")
            closeSidebar()
        })
    }
}
}

function openSidebar(){
    var sidebar = document.getElementsByClassName("sidebar")[0]
    sidebar.style.width = "50px"
    
    var jabesiah = document.getElementsByClassName("txt-rotate")[0]
    jabesiah.style.left = "90px"
    tafirihii()

}
