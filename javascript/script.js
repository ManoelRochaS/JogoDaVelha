
/*Declaração de Constantes (Id e Class) - Interface, Button, Box, TitleCurrent, Result, PlayerOne e PlayerTwo*/
const Interface = document.getElementsByClassName("Interface");
const Button = document.getElementsByClassName("button");
const Box = document.getElementsByClassName("Box");
const TitleCurrent = document.getElementById("TitleCurrent");
const Result = document.getElementById("Result");
let PlayerOne = document.getElementById("PlayerOne");
let PlayerTwo = document.getElementById("PlayerTwo");

/*Declaração de Variáveis (Controle, contadores e Vetores) - control, count, vetor e VetorDisplay*/
let control = true;
let count = 0;
let vetor = ['','','','','','','','','']
let vetorDisplay = ['flex', 'none'];

/*Funções Principais - () /Start/, () /Reiniciar/, () /Novo Jogo/ e engine(position)*/
Button[0].addEventListener("click", ()=>{
    if(PlayerOne.value == ''){PlayerOne.value = "Player 1"}
    if(PlayerTwo.value == ''){PlayerTwo.value = "Player 2"}
    toStringTitleCurrent(PlayerOne.value);
    editDisplay(1,0,2);
})

Button[1].addEventListener("click", ()=>{
    reset();
    toStringTitleCurrent(PlayerOne.value);
    editDisplay(1,2,0);
})

Button[2].addEventListener("click", ()=>{
    reset();
    PlayerOne.value = '';
    PlayerTwo.value = '';
    editDisplay(0,2,1);
})

function engine(position){
    if(vetor[position] == ''){
        count++;
        Box[position].innerText = (control) ? "⚔️" : "🛡️";
        vetor[position] = (control) ? 'x' : '0';
        if(isChampion()){
            setTimeout(()=>{
                editDisplay(2,0,1);
                toStringWin((count%2 == 0) ? PlayerTwo.value : PlayerOne.value)
            },500);
            return;
        }
        toStringTitleCurrent((control) ? PlayerTwo.value : PlayerOne.value);
        control = (control) ? false : true;
    }
    else{
        alert("Comando Invalido, Casa Preenchida. Por favor, tente novamente!");
    }
    if(!isChampion() && count==9){
        setTimeout(()=>{
            editDisplay(2,0,1);
            Result.innerText = "Empate!";
        },500)    
    }
}

/*Funções Auxiliares - toStringTitleCurrent(Name), toStringWin(Name), isChampion(), editDisplay(n1,n2,n3) e reset()*/
function toStringTitleCurrent(Name){
    TitleCurrent.innerText = `O Jogador da Vez é ${Name}`;
}

function toStringWin(Name){
    Result.innerText = `O Vencedor é ${Name}, Parabéns!`;
}

function isChampion(){
    if(vetor[0] == vetor[3] && vetor[0]==vetor[6] && vetor[0]!=''){
        return true;
    }
    else if(vetor[1] == vetor[4] && vetor[1]==vetor[7] && vetor[1]!=''){
        return true;
    }
    else if(vetor[2] == vetor[5] && vetor[2]==vetor[8] && vetor[2]!=''){
        return true;
    }
    else if(vetor[0] == vetor[1] && vetor[0]==vetor[2] && vetor[0]!=''){
        return true;
    }
    else if(vetor[3] == vetor[4] && vetor[3]==vetor[5] && vetor[3]!=''){
        return true;
    }
    else if(vetor[6] == vetor[7] && vetor[6]==vetor[8] && vetor[6]!=''){
        return true;
    }
    else if(vetor[0] == vetor[4] && vetor[0]==vetor[8] && vetor[0]!=''){
        return true;
    }
    else if(vetor[2] == vetor[4] && vetor[2]==vetor[6] && vetor[2]!=''){
        return true;
    }
    else{
        return false;
    }
}

function editDisplay(n1,n2,n3){
    Interface[n1].style.display = vetorDisplay[0];
    Interface[n2].style.display = vetorDisplay[1];
    Interface[n3].style.display = vetorDisplay[1];
}

function reset(){
    control = true;
    count = 0;
    for(var i = 0; i < 9; i++){
        vetor[i] = '';
        Box[i].innerText = '';
    }
}
