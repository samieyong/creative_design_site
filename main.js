let rotateBtns = document.querySelectorAll('.rotate-btn');

rotateBtns.forEach((rotateBtn) => {
   rotateBtn.addEventListener('click', () => {
      rotateBtn.parentElement.classList.toggle('change');
   });
});
