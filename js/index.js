// JavaScript Document
$(function(){
	$(".card").hide();
	$(".comment").hide();
	$(".container").hide();
	
	$(".main").hide();
	
	$(".card a").click(function(){
		music();
		$("audio").eq(index)[0].play();
		setTimeout(function(){
			$("audio").eq(index)[0].play();
			setTimeout(function(){
				$("audio").eq(index)[0].play();
			},3000)
		},3000)
	})
	
	$(".cake").click(function(){
		$(".cake").hide();
		$(".comment").show();
//		$("body").css("background","black");
		danmu();
	})
	
	var index = 0;
	function music(){
		$(".card").eq(index).fadeIn();
	}
	$("audio").each(function(i){
			$(this).on('ended',function(){
				index++;
				console.log(index);
				if(index == 3 ){
					$("#happy")[0].play()
					setTimeout(function(){
						$(".main").hide();
						$(".cake").show();
						const timeline = gsap.timeline({
						  duration: 0.3 });


						timeline.fromTo('.cake-topping', {
						  yPercent: -300,
						  opacity: 0.5 },
						{
						  yPercent: 0,
						  opacity: 1 });


						timeline.to('.candle-container', {
						  opacity: 1 });


						timeline.to('.flame-wrap', {
						  scale: 1,
						  ease: "back.out" });


						timeline.to('.greeting', {
						  scale: 1,
						  ease: "back.out" });


						timeline.to('.star', {
						  opacity: 0.5,
						  stagger: 0.05,
						  onComplete: function () {
							gsap.to('.star', {
							  scale: 0.25,
							  repeat: -1,
							  stagger: 0.1,
							  yoyo: true,
							  yoyoEase: "power1.out" });

						  } });
					},3000)
				}
				music();
			})
		})
	
	var arr = ['生日快乐啊','接下来的生活要开开心心！','有傻瓜今天出生了啊哈哈哈哈哈哈哈哈',"生日快乐，但快乐不止今天！","是某个傻逼的17岁生日"]
	
	function danmu(){
		setInterval(function(){
			let pageWidth = $(window).width();
			let pageHeight = $(window).height();
			var span = $("<span></span>");
			var i = Math.floor(Math.random()*5);
			var txt = arr[i];
			var speed = Math.floor(Math.random()*6+2)
			var seconds = speed+"000"
			span.html(txt)
			$(".comment").append(span);
			console.log(pageHeight,pageWidth)
			span.css({
				top:(Math.random())*pageHeight,
				animation: "dh "+speed+"s linear both",
			})
			setTimeout(function(){
				span.remove();
			},seconds)
		},40)
	}
	
	var seconds = 10;
	function time(){
		//获取当前时间  
        var date = new Date();  
        var date_next = new Date(2022,10,12);
		var temp=(date_next-date)/1000;
//		var day = parseInt(temp/60/60/24);
//		var hours = parseInt(temp/60/60%24);
//		var minutes = parseInt(temp/60%60);
//		var seconds = parseInt(temp%60);
		var day = 0;
		var hours = 0;
		var minutes = 0;
		seconds--
		$(".day").html(day)
		$(".hours").html(hours)
		$(".minutes").html(minutes)
		$(".seconds").html(seconds)
		if(day == 0 && hours == 0 && minutes == 0 & seconds == 0){
			$(".container").fadeIn();
			$(".container span").each(function(i,ele){
				$(".container span").eq(i).addClass("in")
			})
			$(".time").hide();
			setTimeout(function(){
				$(".container").fadeOut();
				$(".main").fadeIn();
				$(".card").eq(0).fadeIn();
			},3000)
		}
	}
	time();
	var timer = setInterval(function(){
		time()
	},1000)
})