let message = document.getElementsByTagName("timing")[0];
message.style.color = "red"; //设置颜色
var starttime = new Date("2020/08/23 00:00:00"); //设置目标日期
function showTime(){
	var stime = new Date();
	var time = stime - starttime;
	if(time > 0){
		var day = Math.floor(time/1000/3600/24); 
		var hour = Math.floor(time%(3600*24*1000)/1000/3600);
		var min = Math.floor(time%(3600*24*1000)/1000%3600/60);
		var sec = Math.floor(time%(3600*24*1000)/1000%3600%60);
		var str ='我们已经相恋了'+day+'天'+hour+'小时'+min+'分钟'+sec+'秒'; //设置字符串
		message.innerHTML = str;
	}
}
setInterval(showTime,1000);


