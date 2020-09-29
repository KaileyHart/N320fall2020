/////////////A build-in for all the elements (go from nothing on the screen, to everything visible)////////
TweenMax.from(".wrapper", { duration: 10, alpha: 0 });

////////// A mouse over / highlight for each of the gallery elements below///////////

function hoverEffect(event) {
  console.log("hovered");

  TweenMax.to(event.target, {
    duration: 0.2,
    transform: "scale(1.1)",
  });
}

function hoverOffEffect(event) {
  console.log("hoveredOff");

  TweenMax.to(event.target, {
    duration: 0.2,
    duration: 0.2,
    transform: "scale(1)",
  });
}

//Block One
document.getElementById("block").addEventListener("mouseover", hoverEffect);
document.getElementById("block").addEventListener("mouseout", hoverOffEffect);

//Block Two
document.getElementById("blockTwo").addEventListener("mouseover", hoverEffect);
document
  .getElementById("blockTwo")
  .addEventListener("mouseout", hoverOffEffect);

//Block Three
document
  .getElementById("blockThree")
  .addEventListener("mouseover", hoverEffect);
document
  .getElementById("blockThree")
  .addEventListener("mouseout", hoverOffEffect);

//Block Four
document.getElementById("blockFour").addEventListener("mouseover", hoverEffect);
document
  .getElementById("blockFour")
  .addEventListener("mouseout", hoverOffEffect);

//Block Five
document.getElementById("blockFive").addEventListener("mouseover", hoverEffect);
document
  .getElementById("blockFive")
  .addEventListener("mouseout", hoverOffEffect);

//Block Six
document.getElementById("blockSix").addEventListener("mouseover", hoverEffect);
document
  .getElementById("blockSix")
  .addEventListener("mouseout", hoverOffEffect);

/////////// A exit animation for when one gallery element is clicked////////////

function clickEffect(event) {
  console.log("clicked");
  TweenMax.to(event.target, {
    duration: 0.2,
    alpha: 0,
  });
}

//Block One
document.getElementById("block").addEventListener("click", clickEffect);
//Block Two
document.getElementById("blockTwo").addEventListener("click", clickEffect);
//Block Three
document.getElementById("blockThree").addEventListener("click", clickEffect);
//Block Four
document.getElementById("blockFour").addEventListener("click", clickEffect);
//Block Five
document.getElementById("blockFive").addEventListener("click", clickEffect);
//Block Six
document.getElementById("blockSix").addEventListener("click", clickEffect);
