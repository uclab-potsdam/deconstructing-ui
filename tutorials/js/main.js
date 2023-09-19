const nextButton = document.getElementById("next")
const previousButton = document.getElementById("previous")
const chapters = document.getElementsByClassName("chapter")
const chaptersArray = Array.from(chapters)

let currentChapter = 0

// first iteration: set all chapters to invisible aside from chapter 0
chaptersArray.forEach((chapter, c) => {
    if (c !== currentChapter) {
        chapter.classList.add('invisible')
    }
})

// This function is an abstraction of the task we need to perform
// anytime I need to iterate on an array of elements and add or remove classes I can use it.
function changeClasses(listOfItems) {
    listOfItems.forEach((item, i) => {
        const listOfClasses = item.classList
        if (i === currentChapter) {
            listOfClasses.remove('invisible')
            listOfClasses.add('visible')
        } else {
            listOfClasses.remove('visible')
            listOfClasses.add('invisible')
        }
    })
}

// attach to this button an event listener and trigger a function
nextButton.addEventListener("click", function () {

    console.log('you clicked on the next button')

    // we increase our counter, but only up to the max number of chapters available
    if (currentChapter < chapters.length - 1) {
        currentChapter = currentChapter + 1
    } else {
        currentChapter = 0
    }

    changeClasses(chaptersArray)
})

previousButton.addEventListener("click", function () {

    console.log('you clicked on the previous button')

    if (currentChapter > 0) {
        currentChapter = currentChapter - 1
    } else {
        currentChapter = chaptersArray.length - 1
    }

    changeClasses(chaptersArray)
})