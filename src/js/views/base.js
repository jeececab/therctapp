
export const clearAppContainer = () => {
  $('.app-container').empty();
};

export const modal = () => {
  $('body').addClass('overflowless');

  $('.modal-container').click(e => {
    if(e.target.className === 'modal-container') {
      $('.modal-container').remove();
      $('body').removeClass('overflowless');
    };
  });

  $('.modal__close-btn').click(e => {
    $('.modal-container').remove();
    $('body').removeClass('overflowless');
  });
};