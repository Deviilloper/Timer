let min = 1;
let sec = 10;
let timerMin = document.getElementById("min");
let timerSec = document.getElementById("sec");
let button = document.getElementById("start");
timerSec.innerText = `${sec}`
timerMin.innerText = `${min}`
button.addEventListener("click",() => {

                            let intervalID = setInterval(() => {
                                if(min != 0 ){
                                    if(sec-1 >= 0){
                                        timerMin.innerText = `${min}`;
                                        timerSec.innerText = `${sec-1}`;
                                        sec = sec -1;
                                    }
                                    else{
                                       sec = 60;
                                       min--;
                                    }
                                }
                                else{
                                    if(sec-1 >= 0){
                                        timerMin.innerText = `${min}`;
                                        timerSec.innerText = `${sec-1}`;
                                        sec = sec -1;
                                    }
                                    else{
                                       clearInterval(intervalID);
                                       document.getElementById("timer").innerHTML = "<h1>Time's Up!</h1>";
                                    }
                                }
                                
                            } , 1000); 

                        })