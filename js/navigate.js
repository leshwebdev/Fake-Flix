$('.ui-select').on('change',function(){
    var value = $(this).val();
    if (value != ''){
        location.href = 'index-'+ value +'.html'; //or .php, etc. This will go to a page called en.html
    } else {
        location.href = 'index.html'
    }
    });
