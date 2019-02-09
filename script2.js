'use strict';

$(document).ready(function(){
    createToolbar();
    createButtons();
    getSelectedContent();
    changeColor();
});

function createToolbar() {
    $('body').prepend('<div id="toolbar">');
    $('body').append('<p id="container">');

}

function createButtons(){
    $('#toolbar').append('<button id="underline">');
    $('#toolbar').append('<button id="bold">');
    $('#toolbar').append('<button id="italic">');
    $('#toolbar').append('<button id="left">');
    $('#toolbar').append('<button id="center">');
    $('#toolbar').append('<button id="right">');
    $('#toolbar').append('<button id="full">');
    $('#toolbar').append('<button id="link">');
    $('#toolbar').append('<button id="unlink">');
    $('#underline').text('U');
    $('#underline').css('text-decoration', 'underline');
    $('#bold').text('B');
    $('#bold').css('font-weight', 'bold');
    $('#italic').text('I');
    $('#italic').css('font-style', 'italic');
    $('#left').text('≔');
    $('#left').attr('title', 'Alignement à Gauche');
    $('#center').text('≐');
    $('#center').attr('title', 'Alignement au Centre');
    $('#right').text('≕');
    $('#right').attr('title', 'Alignement à Droite');
    $('#full').text('≑');
    $('#full').attr('title', 'Alignement Justifié');
    $('#link').text('⚯');
    $('#link').attr('title', 'Lien');
    $('#unlink').text('⊄');
    $('#unlink').attr('title', 'Enlever le lien');


}

function getSelectedContent() {

    $('#textarea').css('display', 'none');
    $('#container').attr('contenteditable', 'true');
    $('#container').css({'border': '1px solid black', 'width': '500px', 'height': '500px'});
    $('#container').focus();
    $('#underline').click(function (e) {
        e.preventDefault();
        document.execCommand('underline', false, null);
        $('#container').focus();

    });
    $('#bold').click(function (e) {
        e.preventDefault();
        document.execCommand('bold', false, null);
        $('#container').focus();
    });
    $('#italic').click(function (e) {
        e.preventDefault();
        document.execCommand('italic', false, null);
    });
    $('#left').click(function (e) {
        e.preventDefault();
        document.execCommand('justifyLeft', false, null);

    });
    $('#center').click(function (e) {
        e.preventDefault();
        document.execCommand('justifyCenter', false, null);

    });
    $('#right').click(function (e) {
        e.preventDefault();
        document.execCommand('justifyRight', false, null);

    });
    $('#full').click(function (e) {
        e.preventDefault();
        document.execCommand('justifyFull', false, null);

    });
    $('#link').click(function (e) {
        e.preventDefault();
        document.execCommand('createLink', false, null);

    });
    $('#unlink').click(function (e) {
        e.preventDefault();
        document.execCommand('unLink', false, null);

    });


    $('#container').keydown(function (e) {
        if (e.keyCode === 13) {
            // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
            document.execCommand('insertHTML', false, '<p> <br>');
            return false;
        }
    });
};

function changeColor(){
    $('#toolbar').append('<button id="color">');
    $('#color').text('Couleurs');
    $('#color').click(function (e) {
        var color = '#b30059';
        e.preventDefault();
        document.execCommand('foreColor', false, color);

    });
}
