$(document).ready(function(){
    createToolbar();
    createButton();
});

function createToolbar(){
    $('body').prepend('<div>');
    $('div').attr('id', 'toolbar');

}

function createButton() {
    var bold = 0;
    var italic = 0;
    $('#toolbar').append('<button id="bold">');
    $('#bold').append('<strong>B</strong>');
    $('#toolbar').append('<button id="italic">');
    $('#italic').append('<i>I</i>');
    $('#toolbar').append('<button id="test">');
    $('#test').append('Test');

    $('#bold').click(function () {
        bold += 1;

        if (bold % 2 === 1) {
            $('textarea').css("font-weight", "bold");
        }
        if (bold % 2 === 0) {
            $('textarea').css("font-weight", "normal");
        }

    });

    $('#italic').click(function () {
        italic += 1;

        if (italic % 2 === 1) {
            $('textarea').css("font-style", "italic");
        }
        if (italic % 2 === 0) {
            $('textarea').css("font-style", "normal");
        }
    })

}

