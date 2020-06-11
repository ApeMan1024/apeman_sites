/*滚动*/
$('.scroll').scroll({
    speed: 80, //数值越大，速度越快
    direction: 'horizantal'
});

/*画板*/
(function (global) {
    const config = {
        el: 'graffiti', //canvasID选择器
        width: 800, //canvas宽
        height: 400, //canvas高
        brushId: 0, //选择笔刷
    };
    const brush = new Brush(config);
    global.clearPaper = function () {
        window.console.log('清空');
        brush.clear();
    }
    //选择笔刷
    const brushNode = document.querySelectorAll('.brush>img'); //两个笔刷图片标签（数组）
    global.selected = function (index) {
        for (let i = 0; i < brushNode.length; i++) {
            if (index === i) {
                brushNode[i].setAttribute('class', 'active');
                //改变选择的笔刷
                brush.img = brushNode[i];
            } else {
                brushNode[i].setAttribute('class', '');
            }
        }
    }
})(window);


document.getElementById("pen2").onclick=function(){
    selected(0)
}
document.getElementById("pen1").onclick=function(){
    selected(1)
}
document.querySelector(".clear").onclick=function(){
    clearPaper()
}

