$(document).ready(function(){
    $('header button'). click(function(){
        $('form').slideDown();
    })


    $('#botaoCancelar').click(function() {
        $('form').slideUp();
    })


    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $("#NovaTarefa").val();
        const novoItem = $('<li></li>');
        $(`<h2 id="novo">${novaTarefa} </h2>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#NovaTarefa').val('')
})

    





})