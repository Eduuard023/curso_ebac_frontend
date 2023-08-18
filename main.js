$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault()

        const addTarefa = $('#nome-tarefa').val()
        const novoItem = $('<li></li>')

        $(`<li>${addTarefa}</li>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('li').click(function(){
            $(this).addClass('risco')
        })
        $('#nome-tarefa').val('')   
        
        $('#clear').click(function(){
            $(novoItem).remove()
        })
    }) 
})

