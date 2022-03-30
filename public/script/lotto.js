//1게임 생성

// 클릭할대상
var make1um = document.querySelector("#make_game1")

make1um.addEventListener("click", show1num);

function show1num(){
    var num_one = [];
    for(var i=1; i<46; i++){
        num_one.push(i);
    }
   num_one.sort(function(){
        return Math.random()-0.5
    }); //섞는다 

    console.log(num_one); //확인한다
    // 6개를 추출

    var start =Math.ceil( Math.random()*40);
    var new_num_one = num_one.slice(start, start+6)
    console.log(new_num_one.sort(function(a,b){
        return a-b
    }));
    var bonus_num = new_num_one[new_num_one.length-1]
    console.log("보너스 번호 : "+bonus_num);
}