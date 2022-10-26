
let interfaceOne = document.getElementById('interfaceOne');
let interfaceTwo = document.getElementById('interfaceTwo');
let interfaceTree = document.getElementById('interfaceTree');

let vector = ['','','','','','','','',''];

let PlayerOne = document.querySelector('#PlayerOne');
let PlayerTwo = document.querySelector('#PlayerTwo');

let control = true;
let count = 0;

function start(){
    interfaceOne.style.display="none";
    interfaceTwo.style.display="flex";
    interfaceTree.style.display="none";
    if(PlayerOne.value==''){
        document.getElementById('TitleCurrent').innerText = "O Jogador da Vez é Player 1";
    }
    else{
        document.getElementById('TitleCurrent').innerText = "O Jogador da Vez é "+ PlayerOne.value;
    }
}

function engine(location){
    if(vector[location-1] == ''){
        count++;
        if(control){
            switch(location){
                case 1:
                    document.getElementById('One').innerText = "⚔️";
                    break;
                case 2:
                    document.getElementById('Two').innerText = "⚔️";
                    break;
                case 3:
                    document.getElementById('Tree').innerText = "⚔️";
                    break;
                case 4:
                    document.getElementById('Four').innerText = "⚔️";
                    break;
                case 5:
                    document.getElementById('Five').innerText = "⚔️";
                    break;
                case 6:
                    document.getElementById('Six').innerText = "⚔️";
                    break;
                case 7:
                    document.getElementById('Seven').innerText = "⚔️";
                    break;
                case 8:
                    document.getElementById('Eight').innerText = "⚔️";
                    break;
                case 9:
                    document.getElementById('Nine').innerText = "⚔️";
                    break;
            }
            vector[location-1] = 'x';
            if(isChampion()){
                setTimeout(()=>{
                    interfaceOne.style.display="none";
                    interfaceTwo.style.display="none";
                    interfaceTree.style.display="flex";
                    if(count%2==0){
                        if(PlayerOne.value==''){
                            document.getElementById('Result').innerText = "O Vencedor é Player 2, Parabéns!";
                        }
                        else{
                            document.getElementById('Result').innerText = "O Vencedor é "+PlayerTwo.value+", Parabéns!";
                        }
                    }
                    else{
                        if(PlayerOne.value==''){
                            document.getElementById('Result').innerText = "O Vencedor é Player 1, Parabéns!";
                        }
                        else{
                            document.getElementById('Result').innerText = "O Vencedor é "+PlayerOne.value+", Parabéns!";
                        }
                    }
                },500)
                return;
            }
            if(PlayerTwo.value==''){
                document.getElementById('TitleCurrent').innerText = "O Jogador da Vez é Player 2";
            }
            else{
                document.getElementById('TitleCurrent').innerText = "O Jogador da Vez é "+ PlayerTwo.value;
            }
            control = false;
        }
        else{
            switch(location){
                case 1:
                    document.getElementById('One').innerText = "🛡️";
                    break;
                case 2:
                    document.getElementById('Two').innerText = "🛡️";
                    break;
                case 3:
                    document.getElementById('Tree').innerText = "🛡️";
                    break;
                case 4:
                    document.getElementById('Four').innerText = "🛡️";
                    break;
                case 5:
                    document.getElementById('Five').innerText = "🛡️";
                    break;
                case 6:
                    document.getElementById('Six').innerText = "🛡️";
                    break;
                case 7:
                    document.getElementById('Seven').innerText = "🛡️";
                    break;
                case 8:
                    document.getElementById('Eight').innerText = "🛡️";
                    break;
                case 9:
                    document.getElementById('Nine').innerText = "🛡️";
                    break;
            }
            vector[location-1] = '0';
            if(isChampion()){
                setTimeout(()=>{
                    interfaceOne.style.display="none";
                    interfaceTwo.style.display="none";
                    interfaceTree.style.display="flex";
                    if(count%2==0){
                        if(PlayerOne.value==''){
                            document.getElementById('Result').innerText = "O Vencedor é Player 2, Parabéns!";
                        }
                        else{
                            document.getElementById('Result').innerText = "O Vencedor é "+PlayerTwo.value+", Parabéns!";
                        }
                    }
                    else{
                        if(PlayerOne.value==''){
                            document.getElementById('Result').innerText = "O Vencedor é Player 1, Parabéns!";
                        }
                        else{
                            document.getElementById('Result').innerText = "O Vencedor é "+PlayerOne.value+", Parabéns!";
                        }
                    }
                },500)
                return;
            }
            if(PlayerOne.value==''){
                document.getElementById('TitleCurrent').innerText = "O Jogador da Vez é Player 1";
            }
            else{
                document.getElementById('TitleCurrent').innerText = "O Jogador da Vez é "+ PlayerOne.value;
            }
            control = true;
        }
    }
    else{
        alert("Comando Invalido, casa Preenchida. Por favor, tente novamente!");
    }

    if(!isChampion() && count==9){
        setTimeout(()=>{
            interfaceOne.style.display="none";
            interfaceTwo.style.display="none";
            interfaceTree.style.display="flex";
            console.log("Empate!");
        },500)    
    }
}

function isChampion(){
    if(vector[0] == vector[3] && vector[0]==vector[6] && vector[0]!=''){
        return true;
    }
    else if(vector[1] == vector[4] && vector[1]==vector[7] && vector[1]!=''){
        return true;
    }
    else if(vector[2] == vector[5] && vector[2]==vector[8] && vector[2]!=''){
        return true;
    }
    else if(vector[0] == vector[1] && vector[0]==vector[2] && vector[0]!=''){
        return true;
    }
    else if(vector[3] == vector[4] && vector[3]==vector[5] && vector[3]!=''){
        return true;
    }
    else if(vector[6] == vector[7] && vector[6]==vector[8] && vector[6]!=''){
        return true;
    }
    else if(vector[0] == vector[4] && vector[0]==vector[8] && vector[0]!=''){
        return true;
    }
    else if(vector[2] == vector[4] && vector[2]==vector[6] && vector[2]!=''){
        return true;
    }
    else{
        return false;
    }
}

function restart(){
    control = true;
    count = 0;
    for(let i = 0; i < 9; i++){
        vector[i] = '';
    }
    document.getElementById('One').innerText = "";
    document.getElementById('Two').innerText = "";
    document.getElementById('Tree').innerText = "";
    document.getElementById('Four').innerText = "";
    document.getElementById('Five').innerText = "";
    document.getElementById('Six').innerText = "";
    document.getElementById('Seven').innerText = "";
    document.getElementById('Eight').innerText = "";
    document.getElementById('Nine').innerText = "";
    interfaceOne.style.display="none";
    interfaceTwo.style.display="flex";
    interfaceTree.style.display="none";
    document.getElementById('TitleCurrent').innerText = "O Jogador da Vez é "+ PlayerOne.value;
}

function reset(){
    control = true;
    count = 0;
    for(let i = 0; i < 9; i++){
        vector[i] = '';
    }
    document.getElementById('One').innerText = "";
    document.getElementById('Two').innerText = "";
    document.getElementById('Tree').innerText = "";
    document.getElementById('Four').innerText = "";
    document.getElementById('Five').innerText = "";
    document.getElementById('Six').innerText = "";
    document.getElementById('Seven').innerText = "";
    document.getElementById('Eight').innerText = "";
    document.getElementById('Nine').innerText = "";
    interfaceOne.style.display="flex";
    interfaceTwo.style.display="none";
    interfaceTree.style.display="none";
    PlayerOne.value = '';
    PlayerTwo.value = '';
}
