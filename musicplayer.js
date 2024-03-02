

$(window).ready(function () {
    $("#mymusic").musicBox(data);
})
let repeat = 0;
$.fn.musicBox = function (data) {
    var newMusicBox = function (obj) {
        $(obj).attr("style", "position:relative;width:100%;-play:visible;--pause:hidden")
        var viewBox = $('<div style="background-color:#edeaea;width: 100%;height: 80px;display: grid;grid-template-columns: 80px auto;"></div>').appendTo(obj);
        var audioElement = $('<audio controls="controls" id="' + obj.attr("id") + '_music" mindex="1" hidden="hidden"></audio>').appendTo(viewBox);
        audio = audioElement[0];
        var picBOX = $('<div style="position:relative; background-color:gray;height: 100%;width: 80px;"><svg viewBox="0 0 80 80" fill="#fff"><circle cx="23" cy="55" r="6"></circle><path d="m23 55 q10 10 8 -30h20q5 20 -3 28" fill="none" stroke="#fff" stroke-width="4"></path><circle cx="45" cy="50" r="6"></circle></svg></div>').appendTo(viewBox);
        var controlBox = $('<div style="display: grid; grid-template-rows: auto 3px;background-color:gray;width: 100%;height: 100%;">').appendTo(viewBox);
        var controlBtns = $('<div style="background-color: coral; display: grid; grid-template-columns: 35px 35px 35px 35px auto;grid-gap: 3px; align-items: center;text-align: center;padding: 6px;">').appendTo($(controlBox));

        var repeatBtn = $('<div state="pause" style="height:30px;width:30px;position:absolute;bottom:0;right:0;padding:5px;box-sizing:border-box;--list:hidden;--repeat:hidden;--one:visible;--onerepeat:hidden;"><svg viewBox="0 0 16 16" fill="#fff" stroke="#fff"><g style="visibility:var(--repeat,hidden); stroke: none;"><path d="M3.994 2c-1.258.015-2.179-.03-2.931.385a1.88 1.88 0 0 0-.838.998C.06 3.82 0 4.343 0 5v6c0 .658.06 1.179.225 1.617.164.439.461.79.838.998.752.416 1.673.37 2.931.385H12.006c1.258-.015 2.179.03 2.932-.385a1.88 1.88 0 0 0 .838-.998c.164-.438.224-.96.224-1.617V5c0-.658-.06-1.179-.225-1.617a1.88 1.88 0 0 0-.838-.998c-.752-.416-1.673-.37-2.931-.385H11v1h1c1.259.015 2.087.06 2.453.262.184.1.29.212.387.472.097.26.16.674.16 1.266v6c0 .592-.063 1.006-.16 1.266-.098.26-.203.371-.387.472-.366.202-1.194.247-2.453.262H4c-1.259-.015-2.09-.06-2.455-.262-.183-.1-.287-.212-.385-.472C1.063 12.006 1 11.592 1 11V5c0-.592.063-1.006.16-1.266.098-.26.202-.371.385-.472C1.91 3.06 2.74 3.015 4 3h2.5V2H3.998z"></path><path d="M5 0l.001 5c.76-.348 1.535-.737 2.323-1.166A44.09 44.09 0 0 0 9.583 2.5c-.725-.449-1.478-.889-2.26-1.32A43.088 43.088 0 0 0 5 0z"></path></g><g style="visibility: var(--one,hidden);"><path stroke="none" d="M6.117 6.247c.167-.07.34-.147.52-.234.184-.092.363-.19.536-.294a8.2 8.2 0 0 0 .494-.338c.161-.121.306-.248.433-.381H9v6H8V6.348c-.448.347-1.012.566-1.494.762z" style="line-height:1000%;-inkscape-font-specification:Ubuntu;text-align:center" font-weight="700" font-family="Ubuntu" letter-spacing="0" word-spacing="0" text-anchor="middle"></path><rect x="0.5" y="2.5" width="15" height="11" rx="1.6" fill="none"></rect></g><g style="visibility:var(--onerepeat,hidden);stroke: none;"><path d="M3.994 2c-1.258.015-2.179-.03-2.931.385a1.88 1.88 0 0 0-.838.998C.06 3.82 0 4.343 0 5v6c0 .658.06 1.179.225 1.617.164.439.461.79.838.998.752.416 1.673.37 2.931.385H12.006c1.258-.015 2.179.03 2.932-.385a1.88 1.88 0 0 0 .838-.998c.164-.438.224-.96.224-1.617V5c0-.658-.06-1.179-.225-1.617a1.88 1.88 0 0 0-.838-.998c-.752-.416-1.673-.37-2.931-.385H11v1h1c1.259.015 2.087.06 2.453.262.184.1.29.212.387.472.097.26.16.674.16 1.266v6c0 .592-.063 1.006-.16 1.266-.098.26-.203.371-.387.472-.366.202-1.194.247-2.453.262H4c-1.259-.015-2.09-.06-2.455-.262-.183-.1-.287-.212-.385-.472C1.063 12.006 1 11.592 1 11V5c0-.592.063-1.006.16-1.266.098-.26.202-.371.385-.472C1.91 3.06 2.74 3.015 4 3h2.5V2H3.998z"></path><path d="M5 0l.001 5c.76-.348 1.535-.737 2.323-1.166A44.09 44.09 0 0 0 9.583 2.5c-.725-.449-1.478-.889-2.26-1.32A43.088 43.088 0 0 0 5 0z"></path><path d="M6.117 6.247c.167-.07.34-.147.52-.234.184-.092.363-.19.536-.294a8.2 8.2 0 0 0 .494-.338c.161-.121.306-.248.433-.381H9v6H8V6.348c-.448.347-1.012.566-1.494.762z" style="line-height:1000%;-inkscape-font-specification:Ubuntu;text-align:center" font-weight="700" font-family="Ubuntu" letter-spacing="0" word-spacing="0" text-anchor="middle"></path></g><g style="visibility: var(--list,visible);"><rect x="0.5" y="2.5" width="15" height="11" rx="1.6" fill="none"></rect><g transform="translate(2 2)scale(0.5)"><path d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg></div>').appendTo($(picBOX))

        var prevBtn = $('<div style="color:aqua"  stroke="#fff"><svg viewBox="0 0 40 40" stroke="#fff" fill="#fff"><circle cx="20" cy="20" r="15" stroke-width="3" fill="none"></circle><polygon points="10,20 18,10 18,20 26,10 26,30 18,20 18,30"></polygon></svg></div>').appendTo($(controlBtns)).on("click", function () {
            if (parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) > 1) {

                $("#" + obj.attr("id") + "_music").attr("mindex", parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) - 1)
                var mindex = parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) - 1
                audio.src = data.music[mindex].audio;
                $("#" + obj.attr("id") + "_music_name").html(data.music[mindex].name);
                $(obj).get(0).style.setProperty("--play", "hidden")
                $(obj).get(0).style.setProperty("--pause", "visible")
                clearTimeout(t);
                f(obj);
                audio.play();
            } else {
                alert("没有上一首啦")
            }
        });
        var playBtn = $('<div state="pause"><svg viewBox="0 0 40 40" stroke="#fff" fill="#fff"><circle cx="20" cy="20" r="15" stroke-width="3" fill="none"></circle><g id="' + obj.attr("id") + '_g_play" style="visibility:var(--play)"><polygon points="15,12 15,28 28,20"></polygon></g><g id="' + obj.attr("id") + '_g_pause" style="visibility:var(--pause)"><rect width="6" height="18" x="12" y="11"></rect><rect width="6" height="18" x="22" y="11"></rect></g></svg></div>').appendTo($(controlBtns)).on("click", function () {
            var mindex = parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) - 1
            if (isNaN(audio.duration)) {
                audio.src = data.music[mindex].audio;
            }
            $("#" + obj.attr("id") + "_music_name").html(data.music[mindex].name);
            if ($(obj).get(0).style.getPropertyValue("--play") == "hidden") {
                $(obj).get(0).style.setProperty("--play", "visible")
                $(obj).get(0).style.setProperty("--pause", "hidden")
                clearTimeout(t);
                audio.pause();
            } else {
                $(obj).get(0).style.setProperty("--play", "hidden")
                $(obj).get(0).style.setProperty("--pause", "visible")

                //clearTimeout(t);
                f(obj);
                audio.play();
            }
        });
        var replayBtn = $('<div><svg viewBox="0 0 40 40" stroke="#fff" fill="#fff"><circle cx="20" cy="20" r="15" stroke-width="3" fill="none"></circle><path d="m14 15 a8 8 0 1 1 0 10" stroke-width="4" fill="none" stroke-linecap="round" /></svg></div>').appendTo($(controlBtns)).on("click", function () {
            if (isNaN(audio.duration)) {
                audio.src = data.music[mindex].audio;
            } else {
                if ($(obj).get(0).style.getPropertyValue("--play") == "hidden") {
                    $(obj).get(0).style.setProperty("--play", "hidden")
                    $(obj).get(0).style.setProperty("--pause", "visible")
                    clearTimeout(t);
                    f(obj);
                    audio.currentTime = 0;
                    audio.play();
                } else {
                    f(obj);
                    audio.currentTime = 0;
                    audio.pause();
                }
            }
        });
        var nextBtn = $('<div><svg viewBox="0 0 40 40" stroke="#fff" fill="#fff"><circle cx="20" cy="20" r="15" stroke-width="3" fill="none"></circle><polygon points="14,10, 14,30 22,20 22,30 30,20 22,10 22,20"></polygon></svg></div>').appendTo($(controlBtns)).on("click", function () {
            if (parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) < data.music.length) {
                $("#" + obj.attr("id") + "_music").attr("mindex", parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) + 1)
                var mindex = parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) - 1
                audio.src = data.music[mindex].audio;
                $("#" + obj.attr("id") + "_music_name").html(data.music[mindex].name);
                $(obj).get(0).style.setProperty("--play", "hidden")
                $(obj).get(0).style.setProperty("--pause", "visible")
                clearTimeout(t);
                f(obj);
                audio.play();
            } else {
                alert("没有下一首啦")
            }

        })
        $(repeatBtn).on("click", function () {
            if (repeat < 3) {
                repeat++;
                switch (repeat) {
                    case 1:
                        $(repeatBtn).get(0).style.setProperty("--one", "hidden");
                        $(repeatBtn).get(0).style.setProperty("--onerepeat", "visible");
                        $(repeatBtn).get(0).style.setProperty("--repeat", "hidden");
                        $(repeatBtn).get(0).style.setProperty("--list", "hidden");
                        break;
                    case 2:
                        $(repeatBtn).get(0).style.setProperty("--one", "hidden");
                        $(repeatBtn).get(0).style.setProperty("--onerepeat", "hidden");
                        $(repeatBtn).get(0).style.setProperty("--repeat", "visible");
                        $(repeatBtn).get(0).style.setProperty("--list", "hidden");
                        break;
                    case 3:
                        $(repeatBtn).get(0).style.setProperty("--one", "hidden");
                        $(repeatBtn).get(0).style.setProperty("--onerepeat", "hidden");
                        $(repeatBtn).get(0).style.setProperty("--repeat", "hidden");
                        $(repeatBtn).get(0).style.setProperty("--list", "visible");
                        break;
                }
            } else {
                repeat = 0;
                $(repeatBtn).get(0).style.setProperty("--one", "visible");
                $(repeatBtn).get(0).style.setProperty("--onerepeat", "hidden");
                $(repeatBtn).get(0).style.setProperty("--repeat", "hidden");
                $(repeatBtn).get(0).style.setProperty("--list", "hidden");
            }
        })
        var info = $('<div style="color: #fff;"><marquee id="' + obj.attr("id") + '_music_name" style="width:120px;display:inline-block;height:24px;overflow:hidden;">music name</marquee><div id="' + obj.attr("id") + '_time_txt"> 00:00/00:00</div></div>').appendTo($(controlBtns));
        var timeline = $('<div id="' + obj.attr("id") + '_timebox" style="background-color:gray;width:100%;"><div id="' + obj.attr("id") + '_timeline" style="background-color:cornflowerblue;width:0;height: 100%;"></div></div>').appendTo(controlBox).on("click", function () {
            var objLeft = $("#" + obj.attr("id") + "_timebox").offset().left;
            var mouseX = event.clientX + document.body.scrollLeft;
            var objX = mouseX - objLeft;
            audio.currentTime = objX * audio.duration / parseInt($("#" + obj.attr("id") + "_timebox").width());
            $("#" + obj.attr("id") + "_timeline").css("width", (objX / parseInt($("#" + obj.attr("id") + "_timebox").width())) * 100 + "%");
        });


    }

    return $(this).each(function () {
        newMusicBox($(this));
    });
}
let audio;
let t;
var strl = "LOADING"
var strtime = ""
var indexs = 0;
function f(obj) {

    t = setTimeout(function () {
        var curtt = parseInt(audio.currentTime);
        var fullt = parseInt(audio.duration);

        if (curtt === fullt) {

            switch (repeat) {
                case 0://one
                    $(obj).get(0).style.setProperty("--play", "visible")
                    $(obj).get(0).style.setProperty("--pause", "hidden")
                    clearTimeout(t);
                    audio.pause();
                    audio.currentTime = 0;
                    break;
                case 1://onerepeat
                    $(obj).get(0).style.setProperty("--play", "visible")
                    $(obj).get(0).style.setProperty("--pause", "hidden")
                    //clearTimeout(t);
                    audio.currentTime = 0;
                    audio.play();

                    break;
                case 2://repeat
                    if (parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) < data.music.length) {
                        $("#" + obj.attr("id") + "_music").attr("mindex", parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) + 1)
                        var mindex = parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) - 1
                        audio.src = data.music[mindex].audio;
                        $("#" + obj.attr("id") + "_music_name").html(data.music[mindex].name);
                        $(obj).get(0).style.setProperty("--play", "hidden")
                        $(obj).get(0).style.setProperty("--pause", "visible")
                        //clearTimeout(t);
                        console.log("111");
                        f(obj);
                        audio.play();

                    } else {

                        $("#" + obj.attr("id") + "_music").attr("mindex", "1")
                        var mindex = 0
                        audio.src = data.music[mindex].audio;
                        $("#" + obj.attr("id") + "_music_name").html(data.music[mindex].name);
                        $(obj).get(0).style.setProperty("--play", "hidden")
                        $(obj).get(0).style.setProperty("--pause", "visible")
                        //clearTimeout(t);
                        f(obj);
                        audio.play();
                    }
                    break;
                case 3://list
                    if (parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) < data.music.length) {
                        $("#" + obj.attr("id") + "_music").attr("mindex", parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) + 1)
                        var mindex = parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) - 1
                        audio.src = data.music[mindex].audio;
                        $("#" + obj.attr("id") + "_music_name").html(data.music[mindex].name);
                        $(obj).get(0).style.setProperty("--play", "hidden")
                        $(obj).get(0).style.setProperty("--pause", "visible")
                        //clearTimeout(t);
                        console.log("111");
                        f(obj);
                        audio.play();

                    }
                    break;
                default: break;
            }

        }
        $("#" + obj.attr("id") + "_timeline").css("width", (curtt / fullt) * 100 + "%");
        if (isNaN(audio.duration)) {

            if (indexs < strl.length) {
                strtime += strl.charAt(indexs);
                indexs += 1;
                $("#" + obj.attr("id") + "_time_txt").html(strtime);
            } else {
                indexs = 0;
                strtime = "";
                $("#" + obj.attr("id") + "_time_txt").html(strtime);
            }

        } else {
            var t1 = parseInt(curtt / 60) >= 10 ? parseInt(curtt / 60) + ":" + (parseInt(curtt % 60) >= 10 ? parseInt(curtt % 60) : "0" + parseInt(curtt % 60)) : "0" + parseInt(curtt / 60) + ":" + (parseInt(curtt % 60) >= 10 ? parseInt(curtt % 60) : "0" + parseInt(curtt % 60));
            var t2 = parseInt(audio.duration / 60) >= 10 ? parseInt(audio.duration / 60) + ":" + (parseInt(audio.duration % 60) >= 10 ? parseInt(audio.duration % 60) : "0" + parseInt(audio.duration % 60)) : "0" + parseInt(audio.duration / 60) + ":" + (parseInt(audio.duration % 60) >= 10 ? parseInt(audio.duration % 60) : "0" + parseInt(audio.duration % 60))
            //console.log(parseInt(curtt / 60) >= 10 ? parseInt(curtt/ 60) + ":" + (parseInt(curtt % 60) >= 10 ? parseInt(curtt% 60) : "0" + parseInt(curtt% 60)) : "0" + parseInt(curtt / 60) + ":" + (parseInt(curtt% 60) >= 10 ? parseInt(curtt % 60) : "0" + parseInt(curtt % 60)))
            $("#" + obj.attr("id") + "_time_txt").html(t1 + "/" + t2);
        }
        f(obj);
    }, 500)
}
