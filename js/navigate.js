$('.ui-select').on('change',function(){
    var value = $(this).val();
    location.href = 'index-'+ value +'.html'; //or .php, etc. This will go to a page called en.html
    });