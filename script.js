let msec = 0;
let secs = 0;
let mins = 0;
let hr = 0;

let timer = false;//it means at this time timer is stop , they are not running

function start(){
    timer = true;//it means at this point of time timer get starts 
    myFun();
}
function stop(){
    timer = false;
    myFun();
}
function reset(){
    location.reload();//this method reload our page again
}

function myFun(){
    if(timer==true){
        msec++;
        if(msec==100){
            secs++;
            msec=0;
        }
        if(secs==60){
            mins++;
            secs=0;
        }
        if(mins==60){
            hr++;
            mins=0;
        }

        let getSec=secs;
        let getMin=mins;
        let getHr=hr;
        if(secs<10){
            getSec="0"+secs;
        }
        if(mins<10){
            getMin="0"+mins;
        }
        if(hr<10){
            getHr="0"+hr;
        }

        setTimeout(myFun,10);

        document.getElementById("milli").innerHTML=msec;
        document.getElementById("sec").innerHTML=getSec;
        document.getElementById("min").innerHTML=getMin;
        document.getElementById("hr").innerHTML=getHr;
    }
}