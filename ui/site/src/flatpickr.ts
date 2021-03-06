import flatpickr from 'flatpickr';

lichess.load.then(() => {
  $('.flatpickr').each(function (this: HTMLInputElement) {
    const config = this.classList.contains('flatpickr-utc')
      ? {}
      : {
          dateFormat: 'Z',
          altInput: true,
          altFormat: 'Y-m-d h:i K',
        };
    flatpickr(this, {
      minDate: 'today',
      maxDate: new Date(Date.now() + 1000 * 3600 * 24 * 31 * 3),
      monthSelectorType: 'static',
      ...config,
    });
  });
});

export default flatpickr;
