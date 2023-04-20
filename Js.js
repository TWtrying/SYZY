var show = true;
function bgfun(e){
    if(e.offsetX>=0 && e.offsetX<=1380 && e.offsetY>=0 && e.offsetY<=1027)
        document.getElementById("shan").play();
    else if(e.offsetX>=1070 && e.offsetX<=4153 && e.offsetY>=359 && e.offsetY<=1040)
        document.getElementById("shui").play();
    else if(e.offsetX>=4022 && e.offsetX<=5241 && e.offsetY>=0 && e.offsetY<=1040)
        document.getElementById("tian").play();
    else if(e.offsetX>=5934 && e.offsetX<=7836 && e.offsetY>=0 && e.offsetY<=1040)
        document.getElementById("shu").play();

    if(show && e.offsetX>=372 && e.offsetX<=517 && e.offsetY>=671 && e.offsetY<=936){
        show = false;
        document.getElementById("bgimg").className = 'bgimg2';
        document.getElementById("boximg").src = "src/1.png";
        document.getElementById("title").innerText = '龙葵';
        document.getElementById("text").innerText = '龙葵为茄科植物龙葵的全草。夏、秋采收。李时珍说“龙葵,言其性滑如葵也”,龙葵清热解毒,利水消肿。用于感冒发烧,牙痛,慢性支气管炎,痢疾,泌尿系感染,乳腺炎;外用治痈疖疔疮,天疱疮,蛇咬伤。';
        document.getElementById("box").className = 'box2';
        document.getElementById("shan").play();
    }
    else if(show && e.offsetX>=2067 && e.offsetX<=2331 && e.offsetY>=438 && e.offsetY<=654){
        show = false;
        document.getElementById("bgimg").className = 'bgimg2';
        document.getElementById("boximg").src = "src/2.png";
        document.getElementById("title").innerText = '车前子';
        document.getElementById("text").innerText = '车前子为车前科植物车前或平车前的干燥成熟种子,李时珍说车前子“导小肠热,止暑湿痢。车前子具有清热通淋的功效,对于水肿胀满、小便不利、热淋涩痛等病症有一定的调理效果。另外,车前子归肝经,可以补肝明目,改善目赤肿痛、目暗涩痛的症状。';
        document.getElementById("box").className = 'box2';
        document.getElementById("shui").play();
    }
    else if(show && e.offsetX>=4479 && e.offsetX<=4637 && e.offsetY>=589 && e.offsetY<=848){
        show = false;
        document.getElementById("bgimg").className = 'bgimg2';
        document.getElementById("boximg").src = "src/3.png";
        document.getElementById("title").innerText = '山茱萸';
        document.getElementById("text").innerText = '山茱萸属被子植物门双子叶植物纲伞形目山茱萸科,生于海拔400米-1500米,分布于中国山西、陕西、甘肃等省。朝鲜、日本也有分布。其果实称“萸肉”,俗名枣皮,供药用,味酸涩,性微温,为收敛性强壮药,有补肝肾止汗的功效。';
        document.getElementById("box").className = 'box2';
        document.getElementById("tian").play();
    }
    else if(show && e.offsetX>=6380 && e.offsetX<=6571 && e.offsetY>=660 && e.offsetY<=1044){
        show = false;
        document.getElementById("bgimg").className = 'bgimg2';
        document.getElementById("boximg").src = "src/4.png";
        document.getElementById("title").innerText = '五味子';
        document.getElementById("text").innerText = '五味子是木兰科植物五味子或华中五味子的干燥成熟果实。它生于海拔1200~1700米的沟谷、溪旁、山坡。其幼枝红褐色,老枝灰褐色,叶膜质;花梗长5~25毫米,花被片粉白色或粉红色;它产于黑龙江、吉林、辽宁、内蒙古、河北、山西、宁夏、甘肃、山东。';
        document.getElementById("box").className = 'box2';
        document.getElementById("shu").play();
    }
    else if(show && e.offsetX>=10684 && e.offsetX<=11201 && e.offsetY>=304 && e.offsetY<=1016){
        show = false;
        document.getElementById("bgimg").className = 'bgimg2';
        document.getElementById("boximg").src = "src/5.png";
        document.getElementById("title").innerText = '李时珍';
        document.getElementById("text").innerText = '李时珍推崇张元素,重辨病证,立法严谨,用药得当。治疗时,或化裁古方,或自组新方,或用民间单验方,多有良效。李时珍的学术思想和研究方法很有特色,他在新的历史条件下,以自己的实践经验为基础,改善了古代科学方法,积累了科学研究的新经验。';
        document.getElementById("box").className = 'box2';
        document.getElementById("ren").play();
    }
    else{
        show = true;
        document.getElementById("bgimg").className = 'bgimg1';
        document.getElementById("box").className = 'box1';
        document.getElementById("shan").pause();
        document.getElementById("shui").pause();
        document.getElementById("shu").pause();
        document.getElementById("tian").pause();
        document.getElementById("ren").pause();
    }
}