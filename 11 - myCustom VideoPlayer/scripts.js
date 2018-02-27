// get all the elements

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const toggle_button = player.querySelector('.player__button');
const skipButtons = player.querySelectorAll('[data-skip]');
const rangesButton = player.querySelectorAll('.player__slider');
const progress_update = player.querySelector('.progress__filled');



//functions for the elements

function togglePlay(){
	const method = video.paused?'play':'pause';
	video[method]();
}

function updateButton(){
	toggle_button.innerHTML = this.paused?'❚ ❚':'►';
}

function skip()
{
	video.currentTime = video.currentTime + parseFloat(this.dataset.skip);
}

function handleSlide()
{
	video[this.name] = this.value;
}


function handleProgress()
{
	const pos = video.currentTime/video.duration *100;
	progress_update.style.flexBasis = `${pos}%`;
}

function scrub(e)
{
	const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

//Event Listeners

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

progress.addEventListener('click',scrub);

toggle_button.addEventListener('click',togglePlay);

skipButtons.forEach( button => {
	button.addEventListener('click',skip)
});

rangesButton.forEach(button => {
	button.addEventListener('change',handleSlide)
});
rangesButton.forEach(button => {
	button.addEventListener('mousemove',handleSlide)
});


