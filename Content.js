function changeSpecificProgressBarToRed() {
  const progressBars = document.querySelectorAll('.ytp-play-progress.ytp-swatch-background-color');

  progressBars.forEach(function(progressBar) {
    progressBar.style.background = '#FF0000'; 
  });
}

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length) {
      changeSpecificProgressBarToRed();
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

changeSpecificProgressBarToRed();
