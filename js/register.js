function setClass(obj){
    if(obj.nextAll().length>1){
        obj.nextAll().eq(1).removeClass("active")
        obj.nextAll().eq(1).addClass("error")
        return;
    }
    obj.nextAll().eq(0).removeClass("active")
    obj.nextAll().eq(0).addClass("error")
}
$("form").submit(function (e) { 
    let username=$("#username").val()
    let password=$("#password").val()
    let email=$("#email").val();
    
    let phone=$("#phone").val();
    let re=/^\w{8,16}$/ //密码
    let re1=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ //邮箱
    let re2=/^1(3|4|5|7|8)\d{9}$/ //手机号码


    
    if(username.trim().length<6){
        setClass($("#username"))
    }
    if(!re.test(password)){
        setClass($("#password"))
    }
    if(!re1.test(email)){
        setClass($("#email"))
    }
    if(!re2.test(phone)){
        setClass($("#phone"))
        console.log(re2.test(phone))
    }
});