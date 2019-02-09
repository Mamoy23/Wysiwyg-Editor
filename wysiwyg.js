'use strict';

$(document).ready(function(){
    createToolbar();
    createButtons();
    getSelectedContent();
});

function createToolbar() {
    $('body').prepend('<div>');
    $('div').attr('id', 'toolbar');

}

function createButtons(){
    $('#toolbar').append('<button id="underline">');
    $('#underline').text('U');
    $('#underline').css('text-decoration', 'underline');
}

function getSelectedContent(){
    document.designMode ='on';
    $('#textarea').focus();
    $('#underline').click(function(e){
        e.preventDefault();
        document.execCommand('underline', false, null);
        $('#textarea').focus();
        return false;
        // let textarea = $("#textarea");
        // let start = textarea[0].selectionStart;
        // console.log(start);
        // let finish = textarea[0].selectionEnd;
        // console.log(finish);
        // let sel = textarea.val();
        // let lol = sel.substring(start, finish);
        // console.log(lol);
        // let underline = $(this).css('text-decoration', 'underline');
        // $(lol).html(underline);
        //document.$(lol).execCommand('underline');
        //$(lol).wrapInner('<span />');
        //$(lol).html('<span style="text-decoration: underline;">')
        //$(lol).addClass('underline');
    }); 
};