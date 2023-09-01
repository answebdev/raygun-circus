// Back-to-top-button
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// Footer Year
let = currentYear = new Date().getFullYear();
let yearSpan = document.querySelectorAll('.year');
yearSpan.forEach((yearText) => {
  yearText.innerHTML = currentYear;
});

/* ====== IMAGE GALLERY FOR SOLG FLIERS PAGE ===== */
/* Source: https://bootsnipp.com/snippets/P2gor */
let modalId = $('#image-gallery');

$(document).ready(function () {
  loadGallery(true, 'a.thumbnail');

  //This function disables buttons when needed
  function disableButtons(counter_max, counter_current) {
    $('#show-previous-image, #show-next-image').show();
    if (counter_max === counter_current) {
      $('#show-next-image').hide();
    } else if (counter_current === 1) {
      $('#show-previous-image').hide();
    }
  }

  /**
   *
   * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
   * @param setClickAttr  Sets the attribute for the click handler.
   */

  function loadGallery(setIDs, setClickAttr) {
    let current_image,
      selector,
      counter = 0;

    $('#show-next-image, #show-previous-image').click(function () {
      if ($(this).attr('id') === 'show-previous-image') {
        current_image--;
      } else {
        current_image++;
      }

      selector = $('[data-image-id="' + current_image + '"]');
      updateGallery(selector);
    });

    function updateGallery(selector) {
      let $sel = selector;
      current_image = $sel.data('image-id');
      $('#image-gallery-title').text($sel.data('title'));
      $('#image-gallery-image').attr('src', $sel.data('image'));
      disableButtons(counter, $sel.data('image-id'));
    }

    if (setIDs == true) {
      $('[data-image-id]').each(function () {
        counter++;
        $(this).attr('data-image-id', counter);
      });
    }
    $(setClickAttr).on('click', function () {
      updateGallery($(this));
    });
  }
});

// build key actions
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      if (
        (modalId.data('bs.modal') || {})._isShown &&
        $('#show-previous-image').is(':visible')
      ) {
        $('#show-previous-image').click();
      }
      break;

    case 39: // right
      if (
        (modalId.data('bs.modal') || {})._isShown &&
        $('#show-next-image').is(':visible')
      ) {
        $('#show-next-image').click();
      }
      break;

    default:
      return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});

// Modal for Terminal Fiction book on Bio page
// $(window).ready(function () {
//   setTimeout(function () {
//     $('#modal-subscribe').modal('show');
//   }, 3000);
// });

// Book Preview Page logic
// Turn.js
$(window).ready(function () {
  $('#book').turn({
    display: 'double',
    acceleration: true,
    gradients: !$.isTouch,
    // elevation: 50,
    when: {
      turned: function (e, page) { },
    },
  });
});

// Turn.js
$(window).bind('keydown', function (e) {
  if (e.keyCode == 37) $('#book').turn('previous');
  else if (e.keyCode == 39) $('#book').turn('next');
});

// Modal for book preview mode instructions
$(window).ready(function () {
  setTimeout(function () {
    $('#modal-subscribe').modal('show');
  }, 1000);
});

// Bootstrap carousel with arrow keys on keyboard
$(document).bind('keyup', function (e) {
  if (e.which == 39) {
    $('.carousel').carousel('next');
  } else if (e.which == 37) {
    $('.carousel').carousel('prev');
  }
});
