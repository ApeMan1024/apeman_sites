let audio=$("<audio></audio>").prop({
    autoplay:"true",
    loop:"true",
    src:"http://antiserver.kuwo.cn/anti.s?rid=MUSIC_13791491&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3"
})
$("body").append(audio)