const getBMI3 = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point);
const container = document.querySelector("#container ");
const calcEl = document.querySelector("#calc");

const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#kg");
// tag,class,id

const element = document.querySelector(".title");
element.innerText = "BMI CALC";
console.log(heightEl, weightEl);
console.log(element);
console.log(calcEl)


element.innerHTML = "<u>BMI Calculator</u>";
calcEl.innerText = "分析";


// 將按鈕增加事件監聽
calcEl.addEventListener("click", () => {

    let comments = [
        { 'bmi': 18.5, 'color': "blue", 'comment': '體重過輕，請多攝取營養。' },
        { 'bmi': 24, 'color': 'yellow', 'comment': '正常範圍，恭喜你，請繼續保持。' },
        { 'bmi': 35, 'color': 'red' 'comment': '異常範圍，請節食運動!' },
    ];
    //alert("click!");
    bmiEl.style.color = "blue";
    for (let i = 0; i < comments.length; i++) {
        if (bmi >= comments[i].bmi) {
            bmiEl.style.color = comments[i]["color"]
            break
        }
    }
    let bmiEl = document.querySelector("#comment .bmi");
    console.log(bmiEl)
    let height = heightEl.value;
    let weight = weightEl.value;
    let bmi = getBMI3(height, weight);
    if (isNaN(bmi)) {
        alert("請輸入數值!");
        return;
    }

    //alert(`${name} BMI:${bmi}`);
    console.log(bmi);

    bmiEl.innerText = bmi;
    comments.forEach(comment => {
        if (bmi >= comment["bmi"]) {
            bmiEl.style.color = comment["color"];
            return
        }
    })


});



container.style.color = 'red';
