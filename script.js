var project2 = document.getElementById("first-child");
var project1 = document.getElementById("project-1");
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");
var codeQuiz = document.getElementById("code-quiz");
var weatherDash = document.getElementById("weather-dashboard");
var githubProject2 = document.getElementById("github1");
var githubProject1 = document.getElementById("github4");
var githubQuiz = document.getElementById("github2");
var githubWeather = document.getElementById("github3");
var techBlog = document.getElementById("tech-blog");
var githubTech = document.getElementById("github5");

project2.addEventListener("click", function(){
    window.open("https://powerful-lake-31769.herokuapp.com/", "_blank");
});
githubProject2.addEventListener("click", function(event){
    event.stopPropagation();
    window.open("https://github.com/DanCarrillo93/gift-a-cate", "_blank");
});

project1.addEventListener("click", function(){
    window.open("https://irvinek01.github.io/world-of-words/", "_blank");
});
githubProject1.addEventListener("click", function(event){
    event.stopPropagation();
    window.open("https://github.com/irvinek01/project-1-secret-dictionary", "_blank");
});

codeQuiz.addEventListener("click", function(){
    window.open("https://runescape11111.github.io/Code-Quiz/", "_blank");
});
githubQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    window.open("https://github.com/runescape11111/Code-Quiz", "_blank");
});

techBlog.addEventListener("click", function(){
    window.open("https://calm-badlands-67953.herokuapp.com/", "_blank");
});
githubTech.addEventListener("click", function(event){
    event.stopPropagation();
    window.open("https://github.com/runescape11111/Tech-Blog", "_blank");
});

weatherDash.addEventListener("click", function(){
    window.open("https://runescape11111.github.io/Weather-Dashboard/", "_blank");
});
githubWeather.addEventListener("click", function(event){
    event.stopPropagation();
    window.open("https://github.com/runescape11111/Weather-Dashboard", "_blank");
});


github.addEventListener("click", function(){
    window.open("https://github.com/runescape11111", "_blank");
});

linkedin.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/oliver-shih-6742ab79/", "_blank");
});
