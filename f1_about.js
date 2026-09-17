document.addEventListener('DOMContentLoaded', () => {
  const seasons = document.querySelectorAll('.season');
  const backBtn = document.getElementById('backBtn');

  seasons.forEach(btn => {
    btn.addEventListener('click', () => {
      seasons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const year = btn.dataset.year;
      // здесь можно подставить переход на страницу сезона, например:
      // window.location.href = `/f1/season/${year}`;
      console.log('Выбран сезон:', year);
    });
  });

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (window.history.length > 1) {
        history.back();
      } else {
        window.location.href = '/';
      }
    });
  }
});