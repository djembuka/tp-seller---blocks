window.addEventListener('load', () => {
  if (document.cookie && document.cookie.indexOf('twpxPopupClosed') >= 0) {
    return;
  }
  if (window.twpxPopup) {
    setTimeout(() => {
      twpxPopup.classList.add('twpx-popup--show');
    }, 1000);

    twpxPopup
      .querySelectorAll(
        '.twpx-popup-close, .twpx-popup-overlay, .twpx-popup-text__btn'
      )
      .forEach((elem) => {
        elem.addEventListener('click', (e) => {
          e.preventDefault();
          twpxPopup.classList.add('twpx-popup--hide');
          twpxPopup.classList.remove('twpx-popup--show');
          setTimeout(() => {
            twpxPopup.classList.remove('twpx-popup--hide');
          }, 500);
          //cookie
          let date = new Date(Date.now() + 7 * 24 * 60 * 60e3);
          date = date.toUTCString();
          document.cookie = `twpxPopupClosed=true; expires=${date}`;
          //button
          let href = elem.getAttribute('href');
          if (href || href === '') {
            window.location.href = href;
          }
        });
      });
  }
});
