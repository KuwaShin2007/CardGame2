let cardsme = [];//自分の手札
for(i = 0; i < 3; i++){
    cardsme[i] = Math.floor(Math.random()*100);
}

let cardsyou = [];//相手の手札
for(i = 0; i < 3; i++){
    cardsyou[i] = Math.floor(Math.random()*100);
}

let vs = 0;//自分の出すカード

let win = 0;//勝ちの数
let lose = 0;//負けの数
let draw = 0;//引き分けの数

for(i = 0; i < 3; i++){//数字の描画
    let id = String(i + 1);
    document.getElementById(id).innerHTML = cardsme[i];
}

//処理
function process(num) {
    vs = cardsme[num];
    if(vs < cardsyou[num]){//勝負して負けた場合
        lose = lose + 1;
        document.getElementById("Lose").innerHTML = "敗北数：" + lose;
    }
    else if(vs > cardsyou[num]){//勝負して勝った場合
        win = win + 1;
        document.getElementById("Win").innerHTML = "勝利数：" + win;
    }
    else{//勝負して引き分けだった場合
        draw = draw + 1;
        document.getElementById("Draw").innerHTML = "引き分けの数：" + draw;
    }
    document.getElementById(num + 4).innerHTML = cardsyou[num];
    const element = document.getElementById(num + 1);
    element.remove();
}