let chapter = 0;
const nextSlide = document.getElementById("nextSlide");
const nextChapter = document.getElementById("nextChapter");
const previousChapter = document.getElementById("previousChapter");
const previousSlide = document.getElementById("previousSlide");
const presentation = document.getElementById("presentation");
const restart = document.getElementById("restart");
const chapters = document.getElementsByClassName("chapter");
const chaptersArr = Array.from(chapters);
const chapterLenghts = chaptersArr.map((chapter) => parseInt(chapter.style.width.slice(0, -4)));
const slides = chaptersArr.map((chapter) => 0);
const titles = document.querySelectorAll("#titles > span");


document.onkeydown = keyTreatment;

function keyTreatment(event){
    if(event.keyCode == "39"){ //RIGHT KEY
        moveSlide(1);
    }
    else if(event.keyCode == "37"){ //LEFT KEY
        moveSlide(-1);
    }
    else if(event.keyCode == "38"){
        moveChapter(-1);
    }
    else if(event.keyCode == "40"){
        moveChapter(1);
    }
}


// nextSlide.addEventListener("click", (e) => console.log("I was clicked"));

previousSlide.style.color = "gray";
previousChapter.style.color = "gray";
function moveChapter(amount){
    titles[chapter].style.display = "none";
    chapter += amount;

    if (chapter <= 0){
        chapter = 0;
        previousChapter.style.color = "gray"; 
        nextChapter.style.color = "black";
    } else if (chapter == chapterLenghts.length){
        chapter = chapterLenghts.length - 1;
        nextChapter.style.color = "gray";
    } else if(chapter == chapterLenghts.length - 1){
        nextChapter.style.color = "gray";
    }
    else{
        nextChapter.style.color = "black";
        previousChapter.style.color = "black";
    }
    if(slides[chapter] == 0){
        previousSlide.style.color = "gray";
        nextSlide.style.color = "black";
    }
    titles[chapter].querySelector(".position").innerHTML = slides[chapter] + 1;
    titles[chapter].style.display = "inline";
    presentation.style.translate = "-" + slides[chapter] + "00vw -" + chapter + "00vh";
    if(amount != 0){
        slides[chapter - amount] = 0;
    }
}


function moveSlide(amount) {
    slides[chapter] += amount;
    if (slides[chapter] <= 0){
        slides[chapter] = 0;
        previousSlide.style.color = "gray";
    } else if (slides[chapter] == chapterLenghts[chapter]){
        slides[chapter] = chapterLenghts[chapter] - 1;
        nextSlide.style.color = "gray";
    }
    else if (slides[chapter] == chapterLenghts[chapter] - 1){
        nextSlide.style.color = "gray";
    }
    else{
        nextSlide.style.color = "black";
        previousSlide.style.color = "black";
    }
    
    moveChapter(0); //WE ARE NOT MOVING THE CHAPTER, ONLY PROPAGATING THE CHANGES TO THE VIEWPORT
}


nextSlide.addEventListener("click", (e) => {
    moveSlide(1);
});

previousSlide.addEventListener("click", (e) => moveSlide(-1));

restart.addEventListener("click", (e) => {
    moveChapter(- chapter);
    moveSlide(- slides[chapter]);
})

nextChapter.addEventListener("click", (e) => {
    moveChapter(1);
});

previousChapter.addEventListener("click", (e) => moveChapter(-1));




titles[chapter].style.display = "inline";