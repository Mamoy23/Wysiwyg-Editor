'use strict';

$(document).ready(function(){
    createToolbar();
    createButtons();
    getSelectedContent();
});

function createToolbar() {
    $('body').prepend('<div id="toolbar">');
    $('body').append('<div id="container">');

}

function createButtons(){
    $('#toolbar').append('<button id="underline">');
    $('#underline').text('U');
    $('#underline').css('text-decoration', 'underline');
}

function getSelectedContent(){
    //let content = $('#textearea').val();
    //$('#textarea').append('p');
    //$('p').val(content);
    //document.designMode = 'on';
    $('#textarea').css('display', 'none');
    $('#container').attr('contenteditable', 'true');
    $('#container').css({'border': '1px solid black', 'width': '500px','height': '500px'});
    $('#container').focus();
    $('#underline').click(function(e){
        //console.log(content);
        e.preventDefault();
        document.execCommand('underline', false, null);
        $('#container').focus();
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