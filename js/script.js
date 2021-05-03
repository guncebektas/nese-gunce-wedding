(function($)
{
  'use strict';
  
  $('.sakura-falling').sakura();
  
  $(document).on('click', function()
  {
    document.getElementById('my_audio').play();
  });
  
  document.getElementById('my_audio').play();
})(jQuery);

