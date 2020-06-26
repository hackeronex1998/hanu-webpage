// Navbar

// javascript toggle version

// var menuBtn = document.querySelector(".my-toggle-btn");
// var menu = document.querySelector(".my-menu");
//
// menuBtn.addEventListener("click", function() {
// 	menu.classList.toggle("active"); // IE9 is not supported
// });

// jquery toggle button version
var menuBtn = $(".my-toggle-btn");
var menu = $(".my-menu");

menuBtn.click(function() {
		menu.toggleClass("active");
});

// Read more function
function readMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("read-more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Xem thêm";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ẩn bớt";
    moreText.style.display = "inline";
  }
}
