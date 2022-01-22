// This content script is injected to the webpage for listening button click events


var pause_play = document.getElementsByClassName('ytp-play-button ytp-button')[0]
var progress_bar = document.getElementsByClassName('ytp-progress-bar')[0]


pause_play.addEventListener('click',() => {
    var videoElements = document.querySelectorAll('video')[0];
    chrome.runtime.sendMessage({event:"syncVideo",data:[videoElements.currentTime,videoElements.paused]})
})

progress_bar.addEventListener('click',() => {
    var videoElements = document.querySelectorAll('video')[0];
    chrome.runtime.sendMessage({event:"syncVideo",data:[videoElements.currentTime,videoElements.paused]})
})
