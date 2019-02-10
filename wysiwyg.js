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
    $('#underline').attr('title', 'souligné');

    $('#toolbar').append('<button id="strikethrough">');
    $('#strikethrough').text('S');
    $('#strikethrough').css('text-decoration', 'line-through');
    $('#strikethrough').attr('title', 'Barré');

    $('#toolbar').append('<button id="bold">');
    $('#bold').text('B');
    $('#bold').css('font-weight', 'bold');
    
    $('#toolbar').append('<button id="italic">');
    $('#italic').text('I');
    $('#italic').css('font-style', 'italic');

    $('#toolbar').append('<select id="fontsize">');
    for(let i = 1; i <= 8; i++){
        $('#fontsize').append('<option>');
    };
    $.each($("#fontsize option"), function(i){
        $(this).attr('value', i);
        $(this).text(i);
        if($(this).attr('value') == 0){
            $(this).text('Taille police');
        }
    });
    $('#fontsize').attr('title', 'Taille police');

    $('#toolbar').append('<input id="color">');
    $('#color').attr('type', 'color');
    $('#color').attr('title', 'Modifier la couleur du texte');
    
    $('#toolbar').append('<button id="left">');
    $('#left').text('≔');
    $('#left').attr('title', 'Alignement à Gauche');
    
    $('#toolbar').append('<button id="center">');
    $('#center').text('≐');
    $('#center').attr('title', 'Alignement au Centre');
    
    $('#toolbar').append('<button id="right">');
    $('#right').text('≕');
    $('#right').attr('title', 'Alignement à Droite');
    
    $('#toolbar').append('<button id="full">');
    $('#full').text('≑');
    $('#full').attr('title', 'Alignement Justifié');
    
    $('#toolbar').append('<button id="link">');
    $('#link').text('⚯');
    $('#link').attr('title', 'Lien');
    
    $('#toolbar').append('<button id="unlink">');
    $('#unlink').text('⊄');
    $('#unlink').attr('title', 'Enlever le lien');

    $('#toolbar').append('<button id="html">');
    $('#html').text('</>');
    $('#html').attr('title', 'Switcher vers HTML');
}

function getSelectedContent(){
    document.execCommand('defaultParagraphSeparator', false, 'p');

    $('#textarea').css('display', 'none');
    $('#container').attr('contenteditable', 'true');
    $('#container').css({'border': '1px solid grey', 'width': '500px','height': '500px'});

    $('#underline').click(function(e){
        e.preventDefault();
        document.execCommand('underline', false, null);
    }); 
    $('#strikethrough').click(function(e){
        e.preventDefault();
        document.execCommand('strikeThrough', false, null);
    });
    $('#fontsize').click(function(e){
        e.preventDefault();
        let size = $('#fontsize').val();
        document.execCommand('fontSize', false, size);
    });
    $('#color').click(function(){
        $('#color').change(function(){
            let color = $('#color').val().toString();
            document.execCommand('foreColor', false, color);
        });
    });
    $('#bold').click(function(e){
       e.preventDefault();
        document.execCommand('bold', false, null);
    });
    $('#italic').click(function(e){
        e.preventDefault();
        document.execCommand('italic', false, null);
    });
    $('#left').click(function(e){
        e.preventDefault();
        document.execCommand('justifyLeft', false, null);
    });
    $('#center').click(function(e){
        e.preventDefault();
        document.execCommand('justifyCenter', false, null);
    });
    $('#right').click(function(e){
        e.preventDefault();
        document.execCommand('justifyRight', false, null);
    });
    $('#full').click(function(e){
        e.preventDefault();
        document.execCommand('justifyFull', false, null);
    });
    $('#link').click(function(e){
        e.preventDefault();
        let url = prompt('Indiquez votre URL');
        document.execCommand('createLink', false, url);
    });
    $('#unlink').click(function(e){
        e.preventDefault();
        document.execCommand('unLink', false, null);
    });
    let count = 0;
    $('#html').click(function(e){
        e.preventDefault();
        // let htmlContent = $('#container').html();
        // let textContent = $('#container').text();
        // console.log(htmlContent);
        // console.log(textContent);
        count += 1;
            if(count%2 == 1){
                //$(textContent).hide();
                $('#container').text($('#container').html());
            }
            if(count%2 == 0){
                console.log($('#container').text());
                //let textContent = $('#container').text();
                $('#container').text($('#container').text());
                //$(textContent).show();
            }
    });
};