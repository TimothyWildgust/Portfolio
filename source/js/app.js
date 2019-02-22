// $(document).ready(function() {

// var el = document.getElementsByClassName("skill_div")[0].getElementsByTagName("div");
// for (i = 0; i <=el.length; i++ -1){
//     el[i].classList.add('dot');
// }


// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//
//     if (scroll <= 500) {
//         $("#appear").addClass("display_none");
//     } else {
//         $("#appear").removeClass("display_none");
//     }
// });

// event scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("appear").style.top = "0";
  } else {
    document.getElementById("appear").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



// };
