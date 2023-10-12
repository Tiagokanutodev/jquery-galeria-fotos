$(document).ready(function()                //01 ativando (jquery)
{
    $('header button').click(function()      //02 quando eu clicar no botao que esta no HEADER (Nova Imagem +)
    {
        $('form').slideDown();               //03 pegue tudo que esta no <FORM> e expanda para baixo 
    })

    $('#botao-cancelar').click(function()    //04 quando clicar no botao CANCELAR 
    {
        $('form').slideUp();                 //05 recolha tudo que esta no FORM para cima
    })

    $('form').on('submit', function(e)       //06 funçao RELOOAD
    {        
        e.preventDefault();
        const enderecoImagemNova = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);   
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoImagemNova}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); 
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')       
    })
})