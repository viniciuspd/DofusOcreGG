let stageOnOff = 1;
let zoneOnOff = 0;
let flagOpenner = 0;
var etapa;
var list = document.querySelectorAll('.area-right-principal > div');
var RemoveDisplay;
var RemoveOpacity;
var TM;
var TMC = 0;
var TMR;
var TA = 0;
var TAC = 0;
var TAR;
var TB = 0;
var TBC = 0;
var TBR;
var NP = 0;
var RemoveSelect = 1;
var resetON = 0;
RemoveDisplay = document.querySelector('.main-right1');
RemoveOpacity = document.querySelector('.main-right1');
function openFlag() {
    if(flagOpenner == 0){
    document.querySelector('.nav-flag').style.display = "flex";
    document.querySelector('.arrow').style.transform ='rotate(0deg)';
    setTimeout(()=>{
        document.querySelector('.nav-flag').style.opacity = 1;
    },100);

    flagOpenner = 1;
    } else {

    document.querySelector('.arrow').style.transform ='rotate(90deg)';
    document.querySelector('.nav-flag').style.opacity = 0;
    setTimeout(()=>{
        document.querySelector('.nav-flag').style.display = "none";
    },300)
    flagOpenner = 0;
    }
}

function stageSelect(){
    document.querySelector('.stage').classList.add('selector');
    document.querySelector('.zone').classList.remove('selector');
    stageOnOff = 1;
    zoneOnOff = 0;
}
function zoneSelect(){
    document.querySelector('.stage').classList.remove('selector');
    document.querySelector('.zone').classList.add('selector');
    zoneOnOff = 1;
    stageOnOff = 0;
}




EtapaJson.map((item2, index) =>{    
    let EtapaNumber = document.querySelector('.stage-model').cloneNode(true);
    EtapaNumber.setAttribute('data-key',index);
    document.querySelector('.area-stages').append(EtapaNumber);
    EtapaNumber.querySelector('.number-etapa').innerHTML = item2.parte;
    EtapaNumber.querySelector('.etapa-completa').innerHTML = item2.EtapaComplete;
    EtapaNumber.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        var listMonsterh32 = document.querySelectorAll('.area-right-principal .monster h3');
        var listMonster2 = document.querySelectorAll('.area-right-principal .monster');
        var qtList2 = listMonsterh32.length;
        var qtMR2 = list.length;
        var rotate2 = 0;
        var cancel2 = 0;
        while(qtMR2 > rotate2){
        list[rotate2].style.display = 'none';
        list[rotate2].style.opacity = 0;
        rotate2++;
        }
        while(qtList2 > cancel2){
            listMonster2[cancel2].style.display = 'flex';
            cancel2++;
        }

        let key = e.target.closest('.stage-model').getAttribute('data-key');
        var StageSelect = document.querySelectorAll('.area-stages .stage-model');
        console.log('Removido:',RemoveSelect);
        StageSelect[RemoveSelect].style='background-color:#333;';
        StageSelect[key].style='background-color:#005a7d;';
        RemoveSelect = key;       
        if(key == 0){   
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right1').style.display = 'flex';
            setTimeout(()=>{
            document.querySelector('.area-right-principal > .main-right1').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right1');
            RemoveOpacity = document.querySelector('.main-right1');
        }
        if(key == 1){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right2').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right2').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right2');
            RemoveOpacity = document.querySelector('.main-right2');
        }
        if(key == 2){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right3').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right3').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right3');
            RemoveOpacity = document.querySelector('.main-right3');
        }
        if(key == 3){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right4').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right4').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right4');
            RemoveOpacity = document.querySelector('.main-right4');
        }
        if(key == 4){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right5').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right5').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right5');
            RemoveOpacity = document.querySelector('.main-right5');
        }
        if(key == 5){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right6').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right6').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right6');
            RemoveOpacity = document.querySelector('.main-right6');
        }
        if(key == 6){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right7').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right7').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right7');
            RemoveOpacity = document.querySelector('.main-right7');
        }
        if(key == 7){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right8').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right8').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right8');
            RemoveOpacity = document.querySelector('.main-right8');
        }
        if(key == 8){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right9').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right9').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right9');
            RemoveOpacity = document.querySelector('.main-right9');
        }
        if(key == 9){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right10').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right10').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right10');
            RemoveOpacity = document.querySelector('.main-right10');
        }
        if(key == 10){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right11').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right11').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right11');
            RemoveOpacity = document.querySelector('.main-right11');
        }
        if(key == 11){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right12').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right12').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right12');
            RemoveOpacity = document.querySelector('.main-right12');
        }
        if(key == 12){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right13').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right13').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right13');
            RemoveOpacity = document.querySelector('.main-right13');
        }
        if(key == 13){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right14').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right14').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right14');
            RemoveOpacity = document.querySelector('.main-right14');
        }
        if(key == 14){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right15').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right15').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right15');
            RemoveOpacity = document.querySelector('.main-right15');
        }
        if(key == 15){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right16').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right16').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right16');
            RemoveOpacity = document.querySelector('.main-right16');
        }
        if(key == 16){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right17').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right17').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right17');
            RemoveOpacity = document.querySelector('.main-right17');
        }
        if(key == 17){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right18').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right18').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right18');
            RemoveOpacity = document.querySelector('.main-right18');
        }
        if(key == 18){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right19').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right19').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right19');
            RemoveOpacity = document.querySelector('.main-right19');
        }
            if(key == 19){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right20').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right20').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right20');
            RemoveOpacity = document.querySelector('.main-right20');
        }
        if(key == 20){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right21').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right21').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right21');
            RemoveOpacity = document.querySelector('.main-right21');
        }
        if(key == 21){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right22').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right22').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right22');
            RemoveOpacity = document.querySelector('.main-right22');
        }
        if(key == 22){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right23').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right23').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right23');
            RemoveOpacity = document.querySelector('.main-right23');
        }
        if(key == 23){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right24').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right24').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right24');
            RemoveOpacity = document.querySelector('.main-right24');
        }
        if(key == 24){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right25').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right25').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right25');
            RemoveOpacity = document.querySelector('.main-right25');
        }
        if(key == 25){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right26').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right26').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right26');
            RemoveOpacity = document.querySelector('.main-right26');
        }
        if(key == 26){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right27').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right27').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right27');
            RemoveOpacity = document.querySelector('.main-right27');
        }
        if(key == 27){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right28').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right28').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right28');
            RemoveOpacity = document.querySelector('.main-right28');
        }
        if(key == 28){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right29').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right29').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right29');
            RemoveOpacity = document.querySelector('.main-right29');
        }
        if(key == 29){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right30').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right30').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right30');
            RemoveOpacity = document.querySelector('.main-right30');
        }
        if(key == 30){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right31').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right31').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right31');
            RemoveOpacity = document.querySelector('.main-right31');
        }
        if(key == 31){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right32').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right32').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right32');
            RemoveOpacity = document.querySelector('.main-right32');
        }
        if(key == 32){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right33').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right33').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right33');
            RemoveOpacity = document.querySelector('.main-right33');
        }
        if(key == 33){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right34').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right34').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right34');
            RemoveOpacity = document.querySelector('.main-right34');
        }
        if(key == 34){
            RemoveDisplay.style.display = 'none';
            RemoveOpacity.style.opacity = 0;
            document.querySelector('.area-right-principal > .main-right35').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.area-right-principal > .main-right35').style.opacity = 1;  
            },200);
            RemoveDisplay = document.querySelector('.main-right35');
            RemoveOpacity = document.querySelector('.main-right35');
        }
    });  

});
    nullJson.map((item, index) =>{ //o item seria cada monstro e index seria posição da array
        let nullItem = document.querySelector('.monster').cloneNode(true);
        nullItem.setAttribute('data-key2',index);
        nullItem.querySelector('.img-map').addEventListener('click', (e)=>{
            document.querySelector('.map-on').style.display = 'flex';
            document.querySelector('.shadow').style.display = 'flex';
            setTimeout(()=>{
                document.querySelector('.map-on').style.opacity = 1;
                document.querySelector('.shadow').style.opacity = 1;
            },200);
                document.querySelector('.area-map-text p').innerHTML = item.area;
                document.querySelector('.img-map-content img').src = item.imgMaps;
            console.log('Abrir Mapa ');
        });
        nullItem.querySelector('.qt-mais').addEventListener('click', (e)=>{
            e.preventDefault();
            let key2 = e.target.closest('.monster').getAttribute('data-key2');           
            item.qttotal++;
            console.log(item.qttotal);
            console.log('Chave:', key2);
            let quantidade = document.querySelectorAll('.area-right-principal .qt-space');
                quantidade[key2].innerHTML = item.qttotal; 
            if((item.qttotal > 0) && (item.qttotal < 2)){
                var colorComplete = document.querySelectorAll('.area-right-principal .monster');
                var numberProgress = document.querySelectorAll('.main-left .number-progress-stage');
                NP =  numberProgress[item.stage - 1].textContent;
                var NPN = parseInt(NP);
                console.log(NPN);
                numberProgress[item.stage - 1].innerHTML = `${NPN + 1}`;
                colorComplete[key2].style='background-color:#154232;';
                TMC++;
                TMR = (TMC/TM)*100;
                if(item.arquimonster == true){
                    TAC++;
                    TAR = (TAC/TA)*100;
                    document.querySelector('.arqui-progress .bar-complete span').innerHTML = `${TAR.toFixed(0)}%`;
                }
                if(item.boss == 1){
                    TBC++;
                    TBR = (TBC/TB)*100;
                    document.querySelector('.boss-progress .bar-complete span').innerHTML = `${TBR.toFixed(0)}%`;
                }
                document.querySelector('.total-progress .bar-complete span').innerHTML = `${TMR.toFixed(0)}%`;

            }
            if(TMR > 4){
                document.querySelector('.total-progress .bar-5').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 9){
                document.querySelector('.total-progress .bar-10').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 14){
                document.querySelector('.total-progress .bar-15').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 19){
                document.querySelector('.total-progress .bar-20').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 24){
                document.querySelector('.total-progress .bar-25').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 29){
                document.querySelector('.total-progress .bar-30').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 34){
                document.querySelector('.total-progress .bar-35').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 39){
                document.querySelector('.total-progress .bar-40').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 44){
                document.querySelector('.total-progress .bar-45').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 49){
                document.querySelector('.total-progress .bar-50').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 54){
                document.querySelector('.total-progress .bar-55').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 59){
                document.querySelector('.total-progress .bar-60').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 64){
                document.querySelector('.total-progress .bar-65').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 69){
                document.querySelector('.total-progress .bar-70').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 74){
                document.querySelector('.total-progress .bar-75').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 79){
                document.querySelector('.total-progress .bar-80').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 84){
                document.querySelector('.total-progress .bar-85').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 89){
                document.querySelector('.total-progress .bar-90').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 94){
                document.querySelector('.total-progress .bar-95').style='background-color:rgb(0,173,0);';
            }
            if(TMR > 99){
                document.querySelector('.total-progress .bar-100').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 4){
                document.querySelector('.arqui-progress .bar-5').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 9){
                document.querySelector('.arqui-progress .bar-10').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 14){
                document.querySelector('.arqui-progress .bar-15').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 19){
                document.querySelector('.arqui-progress .bar-20').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 24){
                document.querySelector('.arqui-progress .bar-25').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 29){
                document.querySelector('.arqui-progress .bar-30').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 34){
                document.querySelector('.arqui-progress .bar-35').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 39){
                document.querySelector('.arqui-progress .bar-40').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 44){
                document.querySelector('.arqui-progress .bar-45').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 49){
                document.querySelector('.arqui-progress .bar-50').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 54){
                document.querySelector('.arqui-progress .bar-55').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 59){
                document.querySelector('.arqui-progress .bar-60').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 64){
                document.querySelector('.arqui-progress .bar-65').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 69){
                document.querySelector('.arqui-progress .bar-70').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 74){
                document.querySelector('.arqui-progress .bar-75').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 79){
                document.querySelector('.arqui-progress .bar-80').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 84){
                document.querySelector('.arqui-progress .bar-85').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 89){
                document.querySelector('.arqui-progress .bar-90').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 94){
                document.querySelector('.arqui-progress .bar-95').style='background-color:rgb(0,173,0);';
            }
            if(TAR > 99){
                document.querySelector('.arqui-progress .bar-100').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 4){
                document.querySelector('.boss-progress .bar-5').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 9){
                document.querySelector('.boss-progress .bar-10').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 14){
                document.querySelector('.boss-progress .bar-15').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 19){
                document.querySelector('.boss-progress .bar-20').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 24){
                document.querySelector('.boss-progress .bar-25').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 29){
                document.querySelector('.boss-progress .bar-30').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 34){
                document.querySelector('.boss-progress .bar-35').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 39){
                document.querySelector('.boss-progress .bar-40').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 44){
                document.querySelector('.boss-progress .bar-45').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 49){
                document.querySelector('.boss-progress .bar-50').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 54){
                document.querySelector('.boss-progress .bar-55').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 59){
                document.querySelector('.boss-progress .bar-60').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 64){
                document.querySelector('.boss-progress .bar-65').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 69){
                document.querySelector('.boss-progress .bar-70').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 74){
                document.querySelector('.boss-progress .bar-75').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 79){
                document.querySelector('.boss-progress .bar-80').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 84){
                document.querySelector('.boss-progress .bar-85').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 89){
                document.querySelector('.boss-progress .bar-90').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 94){
                document.querySelector('.boss-progress .bar-95').style='background-color:rgb(0,173,0);';
            }
            if(TBR > 99){
                document.querySelector('.boss-progress .bar-100').style='background-color:rgb(0,173,0);';
            }
            
            
        });
        nullItem.querySelector('.qt-menos').addEventListener('click', (e)=>{
            e.preventDefault();
            let key2 = e.target.closest('.monster').getAttribute('data-key2');  

            console.log(item.qttotal);
            console.log('Chave:', key2);
                var numberLess = document.querySelectorAll('.main-left .number-progress-stage');
                var NPL =  numberLess[item.stage - 1].textContent;
                var NPLN = parseInt(NPL);
                console.log('TESTE',NPLN);
                console.log('Item: ',item.qttotal);                
            if((item.qttotal == 1) && (NPLN > 0)){      
                numberLess[item.stage - 1].innerHTML = `${NPLN - 1}`;
            }
            if((item.qttotal == 1) && (TMC > 0)){

                    var colorComplete = document.querySelectorAll('.area-right-principal .monster');
                    colorComplete[key2].style='background-color:#1a1a1a;';
                    TMC--;
                    TMR = (TMC/TM)*100;
                    if((item.arquimonster == true) && (TAC > 0)){
                        TAC--;
                        TAR = (TAC/TA)*100;
                        document.querySelector('.arqui-progress .bar-complete span').innerHTML = `${TAR.toFixed(0)}%`;
                    }
                    if((item.boss == 1) && (TBC > 0)){
                        TBC--;
                        TBR = (TBC/TB)*100;
                        document.querySelector('.boss-progress .bar-complete span').innerHTML = `${TBR.toFixed(0)}%`;
                    }
                    document.querySelector('.total-progress .bar-complete span').innerHTML = `${TMR.toFixed(0)}%`;
                    if(TMR <= 4){
                        document.querySelector('.total-progress .bar-5').style='background-color:transparent;';
                    }
                    if(TMR <= 9){
                        document.querySelector('.total-progress .bar-10').style='background-color: transparent;';
                    }
                    if(TMR <= 14){
                        document.querySelector('.total-progress .bar-15').style='background-color: transparent;';
                    }
                    if(TMR <= 19){
                        document.querySelector('.total-progress .bar-20').style='background-color: transparent;';
                    }
                    if(TMR <= 24){
                        document.querySelector('.total-progress .bar-25').style='background-color: transparent;';
                    }
                    if(TMR <= 29){
                        document.querySelector('.total-progress .bar-30').style='background-color: transparent;';
                    }
                    if(TMR <= 34){
                        document.querySelector('.total-progress .bar-35').style='background-color: transparent;';
                    }
                    if(TMR <= 39){
                        document.querySelector('.total-progress .bar-40').style='background-color: transparent;';
                    }
                    if(TMR <= 44){
                        document.querySelector('.total-progress .bar-45').style='background-color: transparent;';
                    }
                    if(TMR <= 49){
                        document.querySelector('.total-progress .bar-50').style='background-color: transparent;';
                    }
                    if(TMR <= 54){
                        document.querySelector('.total-progress .bar-55').style='background-color: transparent;';
                    }
                    if(TMR <= 59){
                        document.querySelector('.total-progress .bar-60').style='background-color: transparent;';
                    }
                    if(TMR <= 64){
                        document.querySelector('.total-progress .bar-65').style='background-color: transparent;';
                    }
                    if(TMR <= 69){
                        document.querySelector('.total-progress .bar-70').style='background-color: transparent;';
                    }
                    if(TMR <= 74){
                        document.querySelector('.total-progress .bar-75').style='background-color: transparent;';
                    }
                    if(TMR <= 79){
                        document.querySelector('.total-progress .bar-80').style='background-color: transparent;';
                    }
                    if(TMR <= 84){
                        document.querySelector('.total-progress .bar-85').style='background-color: transparent;';
                    }
                    if(TMR <= 89){
                        document.querySelector('.total-progress .bar-90').style='background-color: transparent;';
                    }
                    if(TMR <= 94){
                        document.querySelector('.total-progress .bar-95').style='background-color: transparent;';
                    }
                    if(TMR <= 99){
                        document.querySelector('.total-progress .bar-100').style='background-color: transparent;';
                    }
                    if(TBR <= 4){
                        document.querySelector('.boss-progress .bar-5').style='background-color:transparent;';
                    }
                    if(TBR <= 9){
                        document.querySelector('.boss-progress .bar-10').style='background-color: transparent;';
                    }
                    if(TBR <= 14){
                        document.querySelector('.boss-progress .bar-15').style='background-color: transparent;';
                    }
                    if(TBR <= 19){
                        document.querySelector('.boss-progress .bar-20').style='background-color: transparent;';
                    }
                    if(TBR <= 24){
                        document.querySelector('.boss-progress .bar-25').style='background-color: transparent;';
                    }
                    if(TBR <= 29){
                        document.querySelector('.boss-progress .bar-30').style='background-color: transparent;';
                    }
                    if(TBR <= 34){
                        document.querySelector('.boss-progress .bar-35').style='background-color: transparent;';
                    }
                    if(TBR <= 39){
                        document.querySelector('.boss-progress .bar-40').style='background-color: transparent;';
                    }
                    if(TBR <= 44){
                        document.querySelector('.boss-progress .bar-45').style='background-color: transparent;';
                    }
                    if(TBR <= 49){
                        document.querySelector('.boss-progress .bar-50').style='background-color: transparent;';
                    }
                    if(TBR <= 54){
                        document.querySelector('.boss-progress .bar-55').style='background-color: transparent;';
                    }
                    if(TBR <= 59){
                        document.querySelector('.boss-progress .bar-60').style='background-color: transparent;';
                    }
                    if(TBR <= 64){
                        document.querySelector('.boss-progress .bar-65').style='background-color: transparent;';
                    }
                    if(TBR <= 69){
                        document.querySelector('.boss-progress .bar-70').style='background-color: transparent;';
                    }
                    if(TBR <= 74){
                        document.querySelector('.boss-progress .bar-75').style='background-color: transparent;';
                    }
                    if(TBR <= 79){
                        document.querySelector('.boss-progress .bar-80').style='background-color: transparent;';
                    }
                    if(TBR <= 84){
                        document.querySelector('.boss-progress .bar-85').style='background-color: transparent;';
                    }
                    if(TBR <= 89){
                        document.querySelector('.boss-progress .bar-90').style='background-color: transparent;';
                    }
                    if(TBR <= 94){
                        document.querySelector('.boss-progress .bar-95').style='background-color: transparent;';
                    }
                    if(TBR <= 99){
                        document.querySelector('.boss-progress .bar-100').style='background-color: transparent;';
                    }
                    if(TAR <= 4){
                        document.querySelector('.arqui-progress .bar-5').style='background-color:transparent;';
                    }
                    if(TAR <= 9){
                        document.querySelector('.arqui-progress .bar-10').style='background-color: transparent;';
                    }
                    if(TAR <= 14){
                        document.querySelector('.arqui-progress .bar-15').style='background-color: transparent;';
                    }
                    if(TAR <= 19){
                        document.querySelector('.arqui-progress .bar-20').style='background-color: transparent;';
                    }
                    if(TAR <= 24){
                        document.querySelector('.arqui-progress .bar-25').style='background-color: transparent;';
                    }
                    if(TAR <= 29){
                        document.querySelector('.arqui-progress .bar-30').style='background-color: transparent;';
                    }
                    if(TAR <= 34){
                        document.querySelector('.arqui-progress .bar-35').style='background-color: transparent;';
                    }
                    if(TAR <= 39){
                        document.querySelector('.arqui-progress .bar-40').style='background-color: transparent;';
                    }
                    if(TAR <= 44){
                        document.querySelector('.arqui-progress .bar-45').style='background-color: transparent;';
                    }
                    if(TAR <= 49){
                        document.querySelector('.arqui-progress .bar-50').style='background-color: transparent;';
                    }
                    if(TAR <= 54){
                        document.querySelector('.arqui-progress .bar-55').style='background-color: transparent;';
                    }
                    if(TAR <= 59){
                        document.querySelector('.arqui-progress .bar-60').style='background-color: transparent;';
                    }
                    if(TAR <= 64){
                        document.querySelector('.arqui-progress .bar-65').style='background-color: transparent;';
                    }
                    if(TAR <= 69){
                        document.querySelector('.arqui-progress .bar-70').style='background-color: transparent;';
                    }
                    if(TAR <= 74){
                        document.querySelector('.arqui-progress .bar-75').style='background-color: transparent;';
                    }
                    if(TAR <= 79){
                        document.querySelector('.arqui-progress .bar-80').style='background-color: transparent;';
                    }
                    if(TAR <= 84){
                        document.querySelector('.arqui-progress .bar-85').style='background-color: transparent;';
                    }
                    if(TAR <= 89){
                        document.querySelector('.arqui-progress .bar-90').style='background-color: transparent;';
                    }
                    if(TAR <= 94){
                        document.querySelector('.arqui-progress .bar-95').style='background-color: transparent;';
                    }
                    if(TAR <= 99){
                        document.querySelector('.arqui-progress .bar-100').style='background-color: transparent;';
                    }


                }
                if(item.qttotal > 0){    
                    item.qttotal--;
                }  
    
                let quantidade = document.querySelectorAll('.area-right-principal .qt-space');
                quantidade[key2].innerHTML = item.qttotal;
        });

    //Informações dos Monstros
    TM = index + 1;
    if(item.arquimonster == true){
        TA++;
    }
    if(item.boss == 1){
        TB++;
    }
  
    if(1 == item.stage){
    document.querySelector('.area-right-principal div.main-right1').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(2 == item.stage){
    document.querySelector('.area-right-principal div.main-right2').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(3 == item.stage){
    document.querySelector('.area-right-principal div.main-right3').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(4 == item.stage){
    document.querySelector('.area-right-principal div.main-right4').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(5 == item.stage){
    document.querySelector('.area-right-principal div.main-right5').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(6 == item.stage){
    document.querySelector('.area-right-principal div.main-right6').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(7 == item.stage){
    document.querySelector('.area-right-principal div.main-right7').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(8 == item.stage){
    document.querySelector('.area-right-principal div.main-right8').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(9 == item.stage){
    document.querySelector('.area-right-principal div.main-right9').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(10 == item.stage){
    document.querySelector('.area-right-principal div.main-right10').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(11 == item.stage){
    document.querySelector('.area-right-principal div.main-right11').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(12 == item.stage){
    document.querySelector('.area-right-principal div.main-right12').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(13 == item.stage){
    document.querySelector('.area-right-principal div.main-right13').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(14 == item.stage){
    document.querySelector('.area-right-principal div.main-right14').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(15 == item.stage){
    document.querySelector('.area-right-principal div.main-right15').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(16 == item.stage){
    document.querySelector('.area-right-principal div.main-right16').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(17 == item.stage){
    document.querySelector('.area-right-principal div.main-right17').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(18 == item.stage){
    document.querySelector('.area-right-principal div.main-right18').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(19 == item.stage){
    document.querySelector('.area-right-principal div.main-right19').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(20 == item.stage){
    document.querySelector('.area-right-principal div.main-right20').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(21 == item.stage){
    document.querySelector('.area-right-principal div.main-right21').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(22 == item.stage){
    document.querySelector('.area-right-principal div.main-right22').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(23 == item.stage){
    document.querySelector('.area-right-principal div.main-right23').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(24 == item.stage){
    document.querySelector('.area-right-principal div.main-right24').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(25 == item.stage){
    document.querySelector('.area-right-principal div.main-right25').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(26 == item.stage){
    document.querySelector('.area-right-principal div.main-right26').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(27 == item.stage){
    document.querySelector('.area-right-principal div.main-right27').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(28 == item.stage){
    document.querySelector('.area-right-principal div.main-right28').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(29 == item.stage){
    document.querySelector('.area-right-principal div.main-right29').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(30 == item.stage){
    document.querySelector('.area-right-principal div.main-right30').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(31 == item.stage){
    document.querySelector('.area-right-principal div.main-right31').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(32 == item.stage){
    document.querySelector('.area-right-principal div.main-right32').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(33 == item.stage){
    document.querySelector('.area-right-principal div.main-right33').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(34 == item.stage){
    document.querySelector('.area-right-principal div.main-right34').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}
else if(35 == item.stage){
    document.querySelector('.area-right-principal div.main-right35').append(nullItem);
    nullItem.querySelector('.title-monster h3').innerHTML = item.name;
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}-`;
    nullItem.querySelector('.lv-max').innerHTML = item.levelMax;
    nullItem.querySelector('.monster-top img.arqui-boss').src = item.imgtype;
    nullItem.querySelector('.img-monster img').src = item.imgMonster;
    if(item.levelMin == item.levelMax){
    nullItem.querySelector('.lv-min').innerHTML = `${item.levelMin}`;
    nullItem.querySelector('.lv-max').innerHTML = ``;        
    }
}



});

TMR = (TMC/TM)*100;
document.querySelector('.total-progress .bar-complete span').innerHTML = `${TMR.toFixed(0)}%`;


function confirmar(){
    let searchON = document.getElementById('contentSearch').value;
    let searchONN = searchON.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
    var listMonsterh3 = document.querySelectorAll('.area-right-principal .monster h3');
    var listMonster = document.querySelectorAll('.area-right-principal .monster');
    var qtList = listMonsterh3.length;
    var qtMR = list.length;
    var cancel = 0;
    var rotate = 0;
    console.log('Valor da Input: ', searchONN);
    while(qtMR > rotate){
        list[rotate].style.display = 'flex';
        list[rotate].style.opacity = 1;
        rotate++;
    }
    while(qtList > cancel){
    var varLMH = listMonsterh3[cancel];
    var varLMHtext = varLMH.textContent;
    var varLMHLtext = varLMHtext.toLowerCase();
    let searchWord = varLMHLtext.normalize("NFD").replace(/[^a-zA-Zs]/g, "").indexOf(searchONN.toLowerCase());
    if (searchWord > -1){
        listMonster[cancel].style.display = 'flex';
    } else{
        listMonster[cancel].style.display = 'none';
    }   
    cancel++;
}
}

function closemap(){
    document.querySelector('.map-on').style.opacity = 0;
    document.querySelector('.shadow').style.opacity = 0;
    setTimeout(()=>{
        document.querySelector('.map-on').style.display = 'none';
        document.querySelector('.shadow').style.display = 'none';
    },200);
}

