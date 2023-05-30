var state = 0;
var runpaly = false;

let bgimg = document.getElementById("bgimg");
let rw = document.getElementById("rw");
let lu1 = document.getElementById("lu1");
let lu2 = document.getElementById("lu2");
let tip = document.getElementById("tip").style;
let h = document.getElementById("text-h");
let p1 = document.getElementById("text-p1");
let p2 = document.getElementById("text-p2");
let tipimg = document.getElementById("tip-img");

var AllW = document.getElementById("bgimg").scrollWidth;
var AllH = document.getElementById("bgimg").scrollHeight;


function init(){
    console.log("初始化");


    tip.top = "100%";
    tip.transform = "translate(-50%,0)";

    console.log(AllH,AllW);
    var a = AllH*0.73;
    var b = AllW*0.03;
    console.log(a,b);
    document.getElementById("rw").style.left = b+"px";
    document.getElementById("rw").style.top = a+"px";
    //路人1设置
    a = AllH*0.62;
    b = AllW*0.44;
    lu1.style.left = b+"px";
    lu1.style.top = a+"px";

    //路人2设置
    a = AllH*0.20;
    b = AllW*0.76;
    lu2.style.left = b+"px";
    lu2.style.top = a+"px";
}


function bgf0(){
    tip.top = "100%";
    tip.transform = "translate(-50%,0)";
    tip.transition = "all 1s";
    bgimg.style.filter = "none";
    rw.style.filter = "none";
    lu1.style.filter = "none";
    lu2.style.filter = "none";
}
function bgf1(){
    tip.top = "50%";
    tip.transform = "translate(-50%,-50%)";
    tip.transition = "all 1s";
    bgimg.style.filter = "blur(10px)";
    rw.style.filter = "blur(10px)";
    lu1.style.filter = "blur(10px)";
    lu2.style.filter = "blur(10px)";
}

function cgtext(t){
    if(t==1){
        document.getElementById("shan").play();
        console.log("1");
        tipimg.src = "src/1.png";
        h.innerHTML = "山茱萸";
        p1.innerHTML = "肉质果皮破裂皱缩，不完整或呈扁简状。";
        p2.innerHTML = "补肝肾，涩精气，固虚脱。";
    }
    else if(t==2){
        document.getElementById("tian").play();
        tipimg.src = "src/2.png";
        h.innerHTML = "陈皮";
        p1.innerHTML = "陈皮为橘皮及其载培变种的干燥成熟果皮，苦、辛，性温。";
        p2.innerHTML = "理气健牌，调节胃肠运动，抗溃疡。保肝，利胆。";
    }
    else if(t==3){
        document.getElementById("shu").play();
        tipimg.src = "src/3.png";
        h.innerHTML = "龙葵";
        p1.innerHTML = "卵形或卵状椭圆形叶常无毛；花小且下垂，花冠白色或淡紫色。";
        p2.innerHTML = "活血消钟、解热镇痛、抗菌。";
    }
    else if(t==4){
        document.getElementById("ren").play();
        tipimg.src = "src/4.png";
        h.innerHTML = "五味子";
        p1.innerHTML = "属落叶木质藤本，幼叶下面有柔毛，叶片为膜质。";
        p2.innerHTML = "敛肺，滋肾，生津，收汗，涩精。治肺虚咳喘。";
    }
    else if(t==5){
        document.getElementById("shui").play();
        tipimg.src = "src/5.png";
        h.innerHTML = "车前子";
        p1.innerHTML = "多年生草本,连花茎高达50厘米,具须根。";
        p2.innerHTML = "清热通淋、渗湿止泻、祛痰。";
    }
}


function cg(){
    if(state==1){
        var a = AllH*0.73;
        var b = AllW*0.09;
        console.log(a,b);
        rw.style.left = b+"px";
        rw.style.top = a+"px";

        cgtext(1);

        //拾取草药动画
        setTimeout(function(){
            rw.src = "src/j1.png";
        },1999);
        setTimeout(function(){
            rw.src = "src/j2.png";
        },2500);

        //弹出草药介绍
        setTimeout(function(){
            tip.display = "flex";
            bgf1();
        },3000);
    }
    else if(state==2){
        rw.src = "src/lsz.png"
        var a = AllH*0.73;
        var b = AllW*0.14;
        console.log(a,b);
        rw.style.left = b+"px";
        rw.style.top = a+"px";
    }
    else if(state==3){

        document.getElementById("shui").play();

        rw.src = "src/c.png"
        var a = AllH*0.40;
        var b = AllW*0.20;
        console.log(a,b);
        rw.style.left = b+"px";
        rw.style.top = a+"px";

        setTimeout(function(){
            var a = AllH*0.40;
            var b = AllW*0.24;
            console.log(a,b);
            rw.style.left = b+"px";
            rw.style.top = a+"px";
        },1999);

        setTimeout(function(){
            var a = AllH*0.73;
            var b = AllW*0.30;
            console.log(a,b);
            rw.style.left = b+"px";
            rw.style.top = a+"px";
        },3999);

        setTimeout(function(){
            var a = AllH*0.73;
            var b = AllW*0.38;
            console.log(a,b);
            rw.style.left = b+"px";
            rw.style.top = a+"px";
        },5999);
    }
    else if(state==4){
        document.getElementById("shui").pause();
        rw.src = "src/lsz.png"
        var a = AllH*0.63;
        var b = AllW*0.41;
        console.log(a,b);
        rw.style.left = b+"px";
        rw.style.top = a+"px";

        //路人1设置
        a = AllH*0.62;
        b = AllW*0.42;
        lu1.style.opacity = 1;
        lu1.style.left = b+"px";
        lu1.style.top = a+"px";

        //拾取草药动画
        setTimeout(function(){
            rw.src = "src/j1.png";
        },2000);
        setTimeout(function(){
            rw.src = "src/j2.png";
        },2500);

        //弹出草药介绍
        cgtext(2);
        setTimeout(function(){
            bgf1();
        },3000);
    }
    else if(state==5){
        rw.src = "src/lsz.png";
        lu1.style.opacity = 0;

        var a = AllH*0.73;
        var b = AllW*0.50;
        console.log(a,b);
        rw.style.left = b+"px";
        rw.style.top = a+"px";

        setTimeout(function(){
            var a = AllH*0.78;
            var b = AllW*0.56;
            console.log(a,b);
            rw.style.left = b+"px";
            rw.style.top = a+"px";
        },1999);

        //拾取草药动画
        setTimeout(function(){
            rw.src = "src/j1.png";
        },4000);
        setTimeout(function(){
            rw.src = "src/j2.png";
        },4500);
        
        cgtext(3);
        //弹出草药介绍
        setTimeout(function(){
            bgf1();
        },5000);
    }
    else if(state==6){
        rw.src = "src/lsz.png";
        var a = AllH*0.73;
        var b = AllW*0.67;
        console.log(a,b);
        rw.style.left = b+"px";
        rw.style.top = a+"px";

        setTimeout(function(){
            var a = AllH*0.20;
            var b = AllW*0.72;
            console.log(a,b);
            rw.style.left = b+"px";
            rw.style.top = a+"px";
        },1999);
    }
    else if(state==7){
        //路人2设置
        var a = AllH*0.23;
        var b = AllW*0.73;
        lu2.style.opacity = 1;
        lu2.style.left = b+"px";
        lu2.style.top = a+"px";
        //拾取草药动画
        setTimeout(function(){
            rw.src = "src/s1.png";
        },2000);
        setTimeout(function(){
            rw.src = "src/s2.png";
        },2500);
        setTimeout(function(){
            rw.src = "src/s1.png";
        },3000);
        setTimeout(function(){
            rw.src = "src/s2.png";
        },3500);
        setTimeout(function(){
            rw.src = "src/s1.png";
        },4000);
        //拾取草药动画
        setTimeout(function(){
            rw.src = "src/j1.png";
        },4500);
        setTimeout(function(){
            rw.src = "src/j2.png";
        },5000);

        cgtext(4);
        //弹出草药介绍
        setTimeout(function(){
            bgf1();
        },5500);
    }
    else if(state==8){
        rw.src = "src/lsz.png";
        //路人2设置
        lu2.style.opacity = 0;

        var a = AllH*0.56;
        var b = AllW*0.80;
        console.log(a,b);
        rw.style.left = b+"px";
        rw.style.top = a+"px";

        setTimeout(function(){
            var a = AllH*0.56;
            var b = AllW*0.84;
            console.log(a,b);
            rw.style.left = b+"px";
            rw.style.top = a+"px";
        },1999);
    }
    else if(state==9){
        rw.src = "src/c.png"
        var a = AllH*0.56;
        var b = AllW*0.87;
        console.log(a,b);
        rw.style.left = b+"px";
        rw.style.top = a+"px";

        cgtext(5);
        //弹出草药介绍
        setTimeout(function(){
            bgf1();
        },2000);
    }
    else if(state==10){
        rw.style.transition = "all 4s";
        var a = AllH*0.56;
        var b = AllW*0.97;
        console.log(a,b);
        rw.style.left = b+"px";
        rw.style.top = a+"px";
        rw.style.opacity = 0;

        setTimeout(function(){
            rw.style.display = "none";
        },1999);
    }
}

function but(e){

    if(runpaly == false){
        runpaly = true;
        document.getElementById("bgmp3").play();
    }

    state++;
    cg();
}
function resizeWH(){
    AllW = document.getElementById("bgimg").scrollWidth;
    AllH = document.getElementById("bgimg").scrollHeight;
    console.log(AllH,AllW);
    cg();
}
window.addEventListener('resize',resizeWH);
