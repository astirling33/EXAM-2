
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

// adds lightbox to exam2.js //

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
