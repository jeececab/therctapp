
export const clearAppContainer = () => {
  $('.app-container').empty();
};

export const modal = () => {
  $('body').addClass('overflowless');

  $('.modal-container').click(e => {
    if(e.target.className.includes('modal-container')) {
      $('.modal-container').remove();
      $('body').removeClass('overflowless');
    };
  });

  $('.modal__close-btn').click(() => {
    $('.modal-container').remove();
    $('body').removeClass('overflowless');
  });

  if ($(`.modal-container`).length) {
    $(document).keyup(e => {
      if (e.keyCode === 27) {
        $('.modal-container').remove();
        $('body').removeClass('overflowless');
      };
    });
  };
};