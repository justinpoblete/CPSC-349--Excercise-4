jQuery(document).ready(function($) {
  function ReplaceSelectWithButtons(selectField) {
    // get the basics
    var selectValue = selectField.val();
    var selectId = selectField.attr('id')

    // get all options and create buttons
    $(selectField).find('option').each(function() {
      if ($(this).val()) {
        var btn = $('<div data-value="' + $(this).val() + '" data-target="' + selectId  + '" class="selectbtn">' + $(this).text() + '</div>');
        if ($(this).val() == selectValue) {
          btn.addClass('selected');
        }
        btn.insertBefore(selectField);
      }
    });
    // hide the select field
    selectField.hide();

    // map click event to buttons
    $(document).on('click', '.selectbtn', function() {
      var target = $(this).data('target');
      $('.selectbtn[data-target="' + target + '"]').removeClass('selected');
      $(this).addClass('selected');

      // deselect everything, select the selected :)
      var selectorAll = '#' + target + ' option';
      $(selectorAll).removeAttr('selected');
      var selectorSingle = '#' + target + ' option[value="' + $(this).data('value') + '"]';
      $(selectorSingle).attr('selected', 'selected');
      $(selectorSingle).change();
    });
  }

  // change selects
  ReplaceSelectWithButtons($('#choose'));
});

//slidedown forms
$(function() {
  $('.jqueryOptions').hide();

  $('#choose').change(function () {
    $('.jqueryOptions').slideUp();
    $('.jqueryOptions').removeClass('current-opt');
    $("." + $(this).val()).slideDown();
    $("." + $(this).val()).addClass('current-opt');
  });
});
