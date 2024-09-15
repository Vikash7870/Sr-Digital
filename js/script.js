$(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 60) {
      $(".main-nav").addClass("sticky");
    } else {
      $(".main-nav").removeClass("sticky");
    }
  });
  $("#goTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });
  $(window)
    .scroll(function () {
      if ($(this).scrollTop() > 300) {
        $("#goTop").addClass("active");
      } else {
        $("#goTop").removeClass("active");
        return false;
      }
    })
    .scroll();
});

// For countDown
// this function used to creat th countUp  animation for business websites
// use the three parameters to customize it
// call it for every element
// note that may be small diffrance in the count 100 be 99 so chack it
function numCounter(tagId, maxCount, speed) {
  var initialNumber = 0;
  function counter() {
    document.getElementById(tagId).innerHTML = initialNumber;
    ++initialNumber;
  }
  var counterDelay = setInterval(counter, speed);
  function totalTime() {
    clearInterval(counterDelay);
  }
  var totalPeriod = speed * maxCount;
  setTimeout(totalTime, totalPeriod);
}

numCounter("Projects", 44, 100);
numCounter("Clients", 12, 400);
numCounter("Partners", 436, 10);

// ****************************************************************************************
// Testmonial
$(".testi_person_img_icon ul li img").bind("click", function () {
  let i = $(".testi_person_img_icon ul li img").index(this) + 1;
  $(".left_text_testi_contetn div").css("display", "none");
  $(`.left_text_testi_contetn div:nth-child(${i})`).css("display", "block");

  $(".testi_person_img_icon ul li").removeClass("active_user");
  $(this).parent().addClass("active_user");

  $(".img_peroson_fullsize img").attr("src", $(this).attr("src"));
});

// ****************************************************************************************
// Latest News
function showText(toggleText) {
  toggleText.classList.toggle("active");
}

// ****************************************************************************************
