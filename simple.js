var toggleButton = document.querySelector("#content > button")
var mainText = document.querySelector("h1#content")
var isToggled = false

toggleButton.addEventListener("click", function(){
    if (isToggled){
        document.querySelector("#content h1").innerHTML = "black";
    } else {
        document.querySelector("#content h1").innerHTML = "orange";
    }
    isToggled = !isToggled
})