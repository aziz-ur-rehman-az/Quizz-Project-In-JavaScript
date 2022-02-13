var slideIndex = 1;
var totalScore = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Work on quiz
// document.getElementById("nextbtn").addEventListener("onclick", displaynum);

// Pak Capital
function displayPakCapital() {
  var score;
  var pakistanCapital = document.getElementsByName("capital");
  // var capitalOfPakistan = "Islamabad";
  for (i = 0; i < pakistanCapital.length; i++) {
    if (pakistanCapital[i].checked) {
      if (pakistanCapital[i].value === "Islamabad") {
        score = 1;
        totalScore += score;
      } else {
        score = 0;
        totalScore += score;
      }
    }
  }
}

// AllamaIqbal born

function allamaIqbalBorn() {
  var score = 0;
  var pakistanCapital = document.getElementsByName("born");
  // var capitalOfPakistan = "Islamabad";
  for (i = 0; i < pakistanCapital.length; i++) {
    if (pakistanCapital[i].checked) {
      if (pakistanCapital[i].value === "Sialkot") {
        score = 1;
        totalScore += score;
        // alert(totalScore);
      } else {
        score = 0;
        totalScore += score;
        // alert(totalScore);
      }
    }
  }
}

// Surah in Quran

function quranSurah() {
  var score = 0;
  var surahInQuran = document.getElementsByName("quran");
  for (i = 0; i < surahInQuran.length; i++) {
    if (surahInQuran[i].checked) {
      if (surahInQuran[i].value === "Surah Nas") {
        score = 1;
        totalScore += score;
        // alert(totalScore);
      } else {
        score = 0;
        totalScore += score;
        // alert(totalScore);
      }
    }
  }
}

// https

function http() {
  var score = 0;
  var http = document.getElementsByName("http");
  // var capitalOfPakistan = "Islamabad";
  for (i = 0; i < http.length; i++) {
    if (http[i].checked) {
      if (http[i].value === "Hyper Text Transfer Protocol") {
        score = 1;
        totalScore += score;
        // alert(totalScore);
      } else {
        score = 0;
        totalScore += score;
        // alert(totalScore);
      }
    }
  }
}

// Land Of Judges

function landOfJudges() {
  var score = 0;
  var judges = document.getElementsByName("land");
  // var capitalOfPakistan = "Islamabad";
  for (i = 0; i < judges.length; i++) {
    if (judges[i].checked) {
      if (judges[i].value === "Pilo Wens") {
        score = 1;
        totalScore += score;
        // alert(totalScore);
      } else {
        score = 0;
        totalScore += score;
        // alert(totalScore);
      }
    }
  }
}

function displayResult() {
  var result = document.getElementById("result");
  if (totalScore === 5 || totalScore === 4) {
    result.innerHTML = "Congratulation! you got " + totalScore + " / 5 ";
  } else if (totalScore === 3) {
    result.innerHTML =
      "That good! but you need more hard work " + totalScore + " / 5 ";
  } else if (totalScore === 2) {
    result.innerHTML = "Sorry! Next time " + totalScore + " / 5 ";
  } else {
    result.innerHTML =
      "You faild! next time full preparation " + totalScore + " / 5 ";
  }
}
