$(document).ready(function(){
    createToolbar();
})

function createToolbar(){
    $('body').prepend('<div>');
    $('div').attr('id', 'toolbar');
    $('#toolbar').append('<button>');
}