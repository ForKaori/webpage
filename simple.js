var toggleButton = document.querySelector("#content > button")
var mainText = document.querySelector("h1#content")
var isToggled = false

toggleButton.addEventListener("click", function(){
    if (isToggled){
        document.querySelector("#content h1").innerHTML = "Stephen Gu";
        this.innerHTML = "Click me!"
    } else {
        document.querySelector("#content h1").innerHTML = "";
        this.innerHTML = "Oops where's my name?"
    }
    isToggled = !isToggled
})