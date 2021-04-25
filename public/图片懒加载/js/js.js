function  getReplyCount(){
    var host=window.location.protocol+"//"+window.location.host;
    var url=host+"/getNotifyCount";
    var loginParams=window.location.search.substring(1);
    var followParams="";
    var finalUrl=getFinalUrl(url,loginParams,followParams);
    $.ajax({
        type: "get",
        url: finalUrl,
        success : function (str) {
            var data = strToJson(str);
            if(data.errcode== 0){
                if(data.hasNotify){
                    if(getParamByUrl("webver")!="false"){
                        $(".tidings-layer").css("display","none");
                    }
                    else{
                        $(".tidings-layer").css("display","block");
                    }
                    if(data.notifyCount == 0){
                        $(".tidings-con").text("");
                        $(".tidings-red").css("display","none");
                    }else{
                        $(".tidings-con").text(data.notifyCount+"条消息");
                        $(".tidings-red").css("display","block");
                    }
                }else{
                    $(".tidings-layer").css("display","none");
                }
            }
        }
    });
}