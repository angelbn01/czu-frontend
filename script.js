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



// nextSlide.addEventListener("click", (e) => console.log("I was clicked"));

function moveChapter(amount){
    titles[chapter].style.display = "none";
    chapter += amount;
    if (chapter < 0){
        chapter = 0;
    } else if (chapter == chapterLenghts[chapter]){
        chapter = chapterLenghts[chapter] - 1;
    }
    titles[chapter].querySelector(".position").innerHTML = slides[chapter] + 1;
    titles[chapter].style.display = "inline";
    presentation.style.translate = "-" + slides[chapter] + "00vw -" + chapter + "00vh";
}


function moveSlide(amount) {
    slides[chapter] += amount;
    if (slides[chapter] < 0){
        slides[chapter] = 0;
    } else if (slides[chapter] == chapterLenghts[chapter]){
        slides[chapter] = chapterLenghts[chapter] - 1;
    }
    moveChapter(0); //WE ARE NOT MOVING THE CHAPTER, ONLY PROPAGATING THE CHANGES TO THE VIEWPORT
}


nextSlide.addEventListener("click", (e) => {
    moveSlide(1);
});

previousSlide.addEventListener("click", (e) => moveSlide(-1));

restart.addEventListener("click", (e) => {
    moveSlide(- slides[chapter]);
    moveChapter(- chapter);
})

nextChapter.addEventListener("click", (e) => {
    moveChapter(1);
});

previousChapter.addEventListener("click", (e) => moveChapter(-1));




titles[chapter].style.display = "inline";