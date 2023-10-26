
       
        $(window).ready(function () {
            $("#mymusic").musicBox(data);
        })
        $.fn.musicBox = function (data) {
            var newMusicBox = function (obj) {
                var viewBox = $('<div style="background-color:#edeaea;width: 100%;height: 80px;display: grid;grid-template-columns: 80px auto;"></div>').appendTo(obj);
                var audioElement = $('<audio controls="controls" id="' + obj.attr("id") + '_music" mindex="1" hidden="hidden"></audio>').appendTo(viewBox);
                var audio = audioElement[0];
                var picBOX = $('<div style="background-color:gray;height: 100%;width: 80px;"><svg viewBox="0 0 80 80" fill="#fff"><circle cx="23" cy="55" r="6"></circle><path d="m23 55 q10 10 8 -30h20q5 20 -3 28" fill="none" stroke="#fff" stroke-width="4"></path><circle cx="45" cy="50" r="6"></circle></svg></div>').appendTo(viewBox);
                var controlBox = $('<div style="display: grid; grid-template-rows: auto 3px;background-color:gray;width: 100%;height: 100%;">').appendTo(viewBox);
                var controlBtns = $('<div style="background-color: coral; display: grid; grid-template-columns: 40px 40px 40px 40px auto;grid-gap: 6px 6px; align-items: center;text-align: center;padding: 6px;">').appendTo($(controlBox));
                var prevBtn = $('<div style="color:aqua" stroke="#fff"><svg viewBox="0 0 40 40" stroke="#fff" fill="#fff"><circle cx="20" cy="20" r="15" stroke-width="3" fill="none"></circle><polygon points="10,20 18,10 18,20 26,10 26,30 18,20 18,30"></polygon></svg></div>').appendTo($(controlBtns)).on("click", function () {
                    if (parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) > 1) {

                        $("#" + obj.attr("id") + "_music").attr("mindex", parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) - 1)
                        var mindex = parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) - 1
                        audio.src = data.music[mindex].audio;
                        $("#" + obj.attr("id") + "_music_name").html(data.music[mindex].name);
                        $("#" + obj.attr("id") + "_g_play").css("visibility", "hidden")
                        $("#" + obj.attr("id") + "_g_pause").css("visibility", "visible")
                        clearTimeout(t);
                        f();
                        audio.play();
                    }else{
                        alert("没有上一首啦")
                    }
                });
                var playBtn = $('<div state="pause"><svg viewBox="0 0 40 40" stroke="#fff" fill="#fff"><circle cx="20" cy="20" r="15" stroke-width="3" fill="none"></circle><g id="' + obj.attr("id") + '_g_play"><polygon points="15,12 15,28 28,20"></polygon></g><g id="' + obj.attr("id") + '_g_pause" style="visibility:hidden;"><rect width="6" height="18" x="12" y="11"></rect><rect width="6" height="18" x="22" y="11"></rect></g></svg></div>').appendTo($(controlBtns)).on("click", function () {
                    var mindex = parseInt($("#" + obj.attr("id") + "_music").attr("mindex")) - 1
                    if (isNaN(audio.duration)) {
                        audio.src = data.music[mindex].audio;
                    }
                    $("#" + obj.attr("id") + "_music_name").html(data.music[mindex].name);
                    if ($("#" + obj.attr("id") + "_g_play").css("visibility") === "hidden") {
                        $("#" + obj.attr("id") + "_g_play").css("visibility", "visible")
                        $("#" + obj.attr("id") + "_g_pause").css("visibility", "hidden")
                        clearTimeout(t);
                        audio.pause();
                    } else {
                        $("#" + obj.attr("id") + "_g_play").css("visibility", "hidden")
                        $("#" + obj.attr("id") + "_g_pause").css("visibility", "visible")
                        //clearTimeout(t);
                        f();
                        audio.play();
                    }
                });
                var replayBtn = $('<div><svg viewBox="0 0 40 40" stroke="#fff" fill="#fff"><circle cx="20" cy="20" r="15" stroke-width="3" fill="none"></circle><path d="m14 15 a8 8 0 1 1 0 10" stroke-width="4" fill="none" stroke-linecap="round" /></svg></div>').appendTo($(controlBtns)).on("click", function () {
                    if (isNaN(audio.duration)) {
                        audio.src = data.music[mindex].audio;
                    } else {
                        if ($("#" + obj.attr("id") + "_g_play").css("visibility") === "hidden") {

                            clearTimeout(t);
                            f();
                            audio.currentTime = 0;
                            audio.play();
                        } else {
                            f();
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
                        $("#" + obj.attr("id") + "_g_play").css("visibility", "hidden")
                        $("#" + obj.attr("id") + "_g_pause").css("visibility", "visible")
                        clearTimeout(t);
                        f();
                        audio.play();
                    }else{
                        alert("没有下一首啦")
                    }  
                
                })
                var info = $('<div style="color: #fff;"><div id="' + obj.attr("id") + '_music_name">music name</div><div id="' + obj.attr("id") + '_time_txt"> 00:00/00:00</div></div>').appendTo($(controlBtns));
                var timeline = $('<div id="' + obj.attr("id") + '_timebox" style="background-color:gray;width:100%;"><div id="' + obj.attr("id") + '_timeline" style="background-color:cornflowerblue;width:0;height: 100%;"></div></div>').appendTo(controlBox).on("click", function () {
                    var objLeft = $("#" + obj.attr("id") + "_timebox").offset().left;
                    var mouseX = event.clientX + document.body.scrollLeft;
                    var objX = mouseX - objLeft;
                    audio.currentTime = objX * audio.duration / parseInt($("#" + obj.attr("id") + "_timebox").width());
                    $("#" + obj.attr("id") + "_timeline").css("width", (objX / parseInt($("#" + obj.attr("id") + "_timebox").width())) * 100 + "%");
                });
                var t;
                var strl = "LOADING"
                var strtime = ""
                var indexs = 0;
                function f() {

                    t = setTimeout(function () {
                        var curtt = parseInt(audio.currentTime);
                        var fullt = parseInt(audio.duration);

                        if (curtt === fullt) {
                            $("#" + obj.attr("id") + "_g_play").css("visibility", "visible")
                            $("#" + obj.attr("id") + "_g_pause").css("visibility", "hidden")
                            clearTimeout(t);
                            audio.pause();
                            audio.currentTime = 0;
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
                        f();
                    }, 500)
                }

            }

            return $(this).each(function () {
                newMusicBox($(this));
            });
        }
