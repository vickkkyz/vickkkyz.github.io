
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //$('[rel="icon"]').attr('href', "/image/beautify/xinsuixuanzhong.png");
        $('[rel="icon"]').attr('href', "/image/beautify/favicon.ico");
        document.title = '_(:з」∠)_不要走！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/image/beautify/favicon.ico");
        //document.title = '(*/ω＼*)你来啦' + OriginTitle;
        document.title = '(*/ω＼*)你来啦~~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});