'use strict';

$(document).ready(function(){
    createToolbar();
    createButtons();
    getSelectedContent();
})

function createToolbar(){
    $('body').prepend('<div>');
    $('div').attr('id', 'toolbar');
}

function createButtons(){
    $('#toolbar').append('<button id="underline">');
    $('#underline').text('U');
    $('#underline').css('text-decoration', 'underline');
}

function getSelectedContent(){
    
    $('#underline').click(function(){
        let textarea = $("#textarea");
        let start = textarea[0].selectionStart;
        console.log(start);
        let finish = textarea[0].selectionEnd;
        console.log(finish);
        let sel = textarea.val();
        let lol = sel.substring(start, finish);
        console.log(lol);
        // let underline = $(this).css('text-decoration', 'underline');
        // $(lol).html(underline);
        $(lol).wrap('<span style="text-decoration: underline;">');
        //$(lol).html('<span style="text-decoration: underline;">')
        //$(lol).addClass('underline');
    }); 
}


// let selobj = window.getSelection();
// let seltext = selobj.toString();
// $('#underline').click(function(){
//     alert(selobj);
//     console.log(seltext);
//    $(selobj).css('text-decoration', 'underline');
// })