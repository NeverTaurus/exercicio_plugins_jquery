$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000',{
        placeholder:'(99) 99999-9999'
    })
    $('#cpf').mask('000.000.000-00',{
        placeholder:'111.222.333-44'
    })
    $('#cep').mask('00000-000',{
        placeholder:'99999-999'
    })


    $('form').validate({
        rules: {
            nome: {required: true, },
            nome2: {required: true, },
            email: {required: true, email: true },
            tel: {required: true},
            cpf: {required: true},
            endereço1: {required: true},
            cep: {required: true}
        },
        messages :{
            nome: 'Campo obrigatorio, Insira seu Nome',
            nome2: 'Campo obrigatorio, Insira seu Sobrenome',
            email: 'Campo obrigatorio, Insira seu e-mail',
            tel: 'Campo obrigatorio, Insira seu Numero de Contato',
            cpf: 'Campo obrigatorio, Insira seu CPF',
            endereço1: 'Campo obrigatorio, Insira seu Edereço completo',
            cep: 'Campo obrigatorio, Insira seu CEP'
        },

    })
})





