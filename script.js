var project = document.getElementById("first-child");
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");
var codeQuiz = document.getElementById("code-quiz");
var weatherDash = document.getElementById("weather-dashboard");
var githubProject = document.getElementById("github1");
var githubQuiz = document.getElementById("github2");
var githubWeather = document.getElementById("github3");

project.addEventListener("click", function(){
    var tab = window.open("https://irvinek01.github.io/project-1-secret-dictionary/", "_blank");
});
githubProject.addEventListener("click", function(event){
    event.stopPropagation();
    var tab = window.open("https://github.com/irvinek01/project-1-secret-dictionary", "_blank");
});

github.addEventListener("click", function(){
    var tab = window.open("https://github.com/runescape11111", "_blank");
});

linkedin.addEventListener("click", function(){
    var tab = window.open("https://www.linkedin.com/in/oliver-shih-6742ab79/", "_blank");
});

codeQuiz.addEventListener("click", function(){
    var tab = window.open("https://runescape11111.github.io/Code-Quiz/", "_blank");
});
githubQuiz.addEventListener("click", function(){
    event.stopPropagation();
    var tab = window.open("https://github.com/runescape11111/Code-Quiz", "_blank");
});

weatherDash.addEventListener("click", function(){
    var tab = window.open("https://runescape11111.github.io/Weather-Dashboard/", "_blank");
});
githubWeather.addEventListener("click", function(){
    event.stopPropagation();
    var tab = window.open("https://github.com/runescape11111/Weather-Dashboard", "_blank");
});
