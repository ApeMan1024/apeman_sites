function setTime(num = 0.5) {
    $("#vi")[0].volume = num
    $(".audio_3").css("width", ($("#vi")[0].volume / 1.0) * 100 + "%")
    $(".audio_2").css("left", "-9px")
    $(".audio_2").css("margin-left", ($("#vi")[0].volume / 1.0) * 100 + "%")
}
setTime();

let bool = true;
//控制播放
$(".play_a").click(function () {
    if (bool) {
        $(".kai").css("display", "none")
        $(".ting").css("display", "block")
        $("#vi")[0].play();
        let time2 = $("#vi")[0].duration
        $("#hou").text(toFomcat(time2))
    }
    else {
        $(".kai").css("display", "block")
        $(".ting").css("display", "none")
        $("#vi")[0].pause();
    }
    bool = !bool;
})

$("#vi").on("timeupdate", function () {
    //获取当前播放时间
    let time1 = $(this)[0].currentTime
    
    //获取视频总时间
    let time2 = $(this)[0].duration

    let wid = (time1 / time2) * 100 + "%";

    //设置进度条的变化
    $(".pro_3").css("width", wid);
    $(".pro_2").css("margin-left", wid);
    $("#qian").text(toFomcat(time1))
})

$(".audio").click(function (even) {
    if (even.target !== $(".audio_2")[0]) {

        var x = even.offsetX;
        setTime(x / $(this)[0].offsetWidth)
    }
})

$(".pro").click(function (even) {
    if (even.target !== $(".pro_2")[0]) {

        var x = even.offsetX;
        
        $("#vi")[0].currentTime = $("#vi")[0].duration * (x / $(this)[0].offsetWidth)
        
    }
})

//全屏播放
$(".full_1").click(function () {
    let ele = $("#vi")[0]
    if (ele.requestFullScreen) {
        ele.requestFullScreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.webkitRequestFullScreen) {
        ele.webkitRequestFullScreen();
    }
})

$("#vi").on("pause", function () {
    $(".kai").css("display", "block")
    $(".ting").css("display", "none")
    bool = true;
})

//格式化时间
function toFomcat(time) {
    let min = (Math.floor(time / 60) + "").padStart(2, "0");
    let s = (Math.floor(time % 60) + "").padStart(2, "0");
    return `${min}:${s}`
}