
// Part 3 Question 3

window.addEventListener("load", function() {
    console.log("Arden");
});

// Part 3 Question 4

document.querySelector("h1").addEventListener("click", function(){
    console.log("hiding h1"); 
    this.style.display = "none";
})

// Part 3 Question 6

document.querySelector("a:nth-of-type(2)").addEventListener("mouseover",function(){
    console.log("adding blue border");
    this.style.border = "20px blue solid";
})

// Part 3 Question 7

document.querySelector(".styled").addEventListener("focus",function(){
    console.log("adding light gray color");
    this.style.backgroundColor = "LightGray";
})

document.querySelector(".styled").addEventListener("blur",function(){
    console.log("changing back to original color");
    this.style.backgroundColor = "Bisque";
})

// Part 3 Question 8

document.querySelector(".styled2").addEventListener("click",function(){
    console.log("styling main backround");
    let parent = document.querySelector("main");
    parent.style.backgroundImage = "url('images/snowy-peak.jpg')";
})

// tried to add data-lightbox attribute to each img? //

window.addEventListener("load", function() {

    let links = document.querySelectorAll(".part a");

    links.forEach(function(link){
        link.setAttribute("data-lightbox", "gallery");
    });

});

