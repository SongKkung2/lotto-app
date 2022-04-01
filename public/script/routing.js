
// 차이점              구식         신식
// 문제점! var 는 선언하지 않고도 사용 가능함, 전역/지역 명확하지 않음.


// 대상 id 요소 camelCase class 요소 keba_case
const openBTN = document.querySelector("#openSide")
const closeBTN = document.querySelector("#closeSide")
const sidePan = document.querySelector("#sidePannel")

// 이벤트 등록
openBTN.addEventListener("click", sideOpen);
closeBTN.addEventListener("click", sideClose);

// 함수
function sideOpen(){
    sidePan.classList.remove("d-none");
}
function sideClose(){
    sidePan.classList.add("d-none");
}

const toggleBTN = document.querySelector("#blind")

toggleBTN.addEventListener("click", handleClick)

let btnStatus = "lock"

function handleClick(e){
    if(e.target.className == btnStatus) {
        unlock("해제");                        
    } else {
        lock("잠금");
    }
}

function unlock(){
    toggleBTN.className="unlock"
    toggleBTN.textContent = "해제"
}
function lock(){
    toggleBTN.className="lock"
    toggleBTN.textContent = "잠금"
}