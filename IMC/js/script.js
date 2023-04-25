import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber, IMC } from './utils.js'

//variables - variaveis
const form = document.querySelector('form') // criando uma varivel constante para o form
const  inputWeight = document.querySelector('#weight') // atribuindo a variavel [peso], vai segurar o input 
const inputHeight = document.querySelector('#height') // atribuindo a variavel [altura], vai segurar o input 

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function(event){ 
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError){
        AlertError.open()
        return;
    }

    AlertError.close()
    

    const result = IMC(weight, height)
    const message = `Seu IMC é ${result}`

    Modal.message.innerText = message
    Modal.open()
}



