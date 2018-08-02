let timer;
let el = new Map();

function start() { //点击“开始闪”按钮，不断随机取三个方块改变为随机的颜色
    if (timer) clearInterval(timer); //防止出现多个定时器
    timer = setInterval(function() {
        resetColor();
        while (3 !== el.size) { //重复的键的值会覆盖之前的值，循环至出现三个不同的键值对
            el.set(rnd(0, 8), `rgb(${rnd(0, 255)},${rnd(0, 255)},${rnd(0, 255)})`);
        }
        el.forEach((value, key) => document.getElementsByClassName("block")[key]
            .style.backgroundColor = value);
        el.clear();
    }, 1000);
}

function stop() { //点击“结束闪”按钮，清除定时器，恢复初始状态
    if (timer) clearInterval(timer);
    resetColor();
}

function rnd(min, max) { //生成min <= x <= max的随机数（注意是包含max的）
    return min + Math.floor(Math.random() * (max - min + 1));
}

function resetColor() { //所有方块恢复初始颜色
    Array.from(document.getElementsByClassName("block"))
        .forEach(i => i.style.backgroundColor = "rgb(255, 166, 0)");
}