function darkmode(){
    // let elem = document.getElementById("head")
    // elem.innerHTML = "<h1>Welcome</h1>"
    document.body.style.backgroundColor = "Black";
    document.body.style.color = "White";
    let button = document.getElementById("button")
    button.innerHTML = `<i class='bx bxs-sun'></i>`
    button.innerHTML += "Light Mode";
}
//  setTimeout(contManupulate,3000);
function lightmode(){
    document.body.style.backgroundColor = "White";
    document.body.style.color = "Black";
    let button = document.getElementById("button")
    button.innerHTML = `<i class='bx bxs-moon'></i>`
    button.innerHTML += "Dark Mode";
}
function modeChange(){
    let btext = document.getElementById("button").innerText
    if(btext == "Dark Mode"){
        darkmode();
    } else if(btext == "Light Mode"){
        lightmode();
        }
    }