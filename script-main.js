var x = document.getElementById("myAudio"); 
function playAudio() {
	if (x.paused) {
		document.getElementById("myButton").src="image/speaker-on.svg"; 
		x.play();
	} else {
		document.getElementById("myButton").src="image/speaker-off.png";
		x.pause();	
	} 
    
} 

var score = 0;

function hint() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><p>Anda hanya diberikan waktu 50 detik untuk menjawab kuis ini.</p></center></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' onclick='quiz1()'>Siap?</button></center>";
}

function quiz1() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/pineapplepen.jpg' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><input type='text' name='name' onchange='answer1()'></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' onclick='quiz2()'>Jawab</button></center>";
	setTimeout(scoring, 1200000);
}

function answer1() {
	var jawab1 = document.getElementById("container").children[4].children[0].children[0].value.toLowerCase();
	if (jawab1 === 'piko taro' || jawab1 === 'pikotaro' || jawab1 === 'piko-taro') {
		score++;
	}
}

function quiz2() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/hayo.png' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Salah!!</h2></center></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' style='width: 212px;' onclick='quiz3()'>Nexxxxxxtttttt</button></center>";

	score++;
}

function quiz3() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/backstage.jpg' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center style='font-style:italic;'>I see trees of green, red roses too, I see them bloom for me and you</center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><input type='text' name='name' onchange='answer3()'></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' onclick='quiz4()'>Jawab</button></center>";
}

function answer3() {
	var jawab3 = document.getElementById("container").children[5].children[0].children[0].value.toLowerCase();
	if (jawab3 === 'louis amstrong') {
		console.log(jawab3);
		score++;
		console.log(score);
	}
}

function quiz4() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/firstlady.jpg' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center style='font-style:italic;'>Sakura di Tengah Prahara</center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><input type='text' name='name' onchange='answer4()'></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' onclick='quiz5()'>Jawab</button></center>";
}

function answer4() {
	var jawab4 = document.getElementById("container").children[5].children[0].children[0].value.toLowerCase();
	if (jawab4 === 'ratna sari dewi') {
		console.log(jawab4);
		score++;
		console.log(score);
	}
}

function quiz5() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/jalansunyi.jpg' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center style='font-style:italic;'>Perdana Menteri Pertama di?</center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><input type='text' name='name' onchange='answer5()'></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' onclick='quiz6()'>Jawab</button></center>";
}

function answer5() {
	var jawab5 = document.getElementById("container").children[5].children[0].children[0].value.toLowerCase();
	if (jawab5 === 'sutan sjahrir' || jawab5 === 'sutan syahrir') {
		console.log(jawab5);
		score++;
		console.log(score);
	}
}

function quiz6() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/fist.jpg' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><input type='text' name='name' onchange='answer6()'></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' onclick='quiz7()'>Jawab</button></center>";
}

function answer6() {
	var jawab6 = document.getElementById("container").children[4].children[0].children[0].value.toLowerCase();
	if (jawab6 === 'muhammad ali') {
		console.log(jawab6);
		score++;
		console.log(score);
	}
}

function quiz7() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/mozilla.jpg' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>"; 
	document.getElementById("container").innerHTML+="<div style='width=400'><center style='font-style:italic;'>Javascript... Javascript...</center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><input type='text' name='name' onchange='answer7()'></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' onclick='quiz8()'>Jawab</button></center>";
	
}

function answer7() {
	var jawab7 = document.getElementById("container").children[5].children[0].children[0].value.toLowerCase();
	if (jawab7 === 'brendan eich') {
		console.log(jawab7);
		score++;
		console.log(score);
	}
}

function quiz8() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/gelar.jpg' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><input type='text' name='name' onchange='answer8()'></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' onclick='quiz9()'>Jawab</button></center>";
}

function answer8() {
	var jawab8 = document.getElementById("container").children[4].children[0].children[0].value.toLowerCase();
	if (jawab8 === 'raisa') {
		console.log(jawab8);
		score++;
		console.log(score);
	}
}

function quiz9() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/highres.jpeg' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center style='font-style:italic;'>Harus Nama Lengkap... Xixixi</center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><input type='text' name='name' onchange='answer9()'></div>";
	document.getElementById("container").innerHTML+="<center><button style='width:212px;' class='mulai' onclick='quiz10()'>Heehehehe</button></center>";
}

function answer9() {
	var jawab9 = document.getElementById("container").children[5].children[0].children[0].value.toLowerCase();
	if (jawab9 === 'adhy wiranata prasetyo') {
		console.log(jawab9);
		score++;
		console.log(score);
	}
}

function quiz10() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	document.getElementById("container").innerHTML+="<div><img src='image/raden.jpg' width='400'></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><h2>Upss!! Siapa Dia?</h2></center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center style='font-style:italic;'>Nama Aseli lho ya?</center></div>";
	document.getElementById("container").innerHTML+="<div style='width=400'><center><input type='text' name='name' onchange='answer10()'></div>";
	document.getElementById("container").innerHTML+="<center><button class='mulai' onclick='scoring()'>Jawab</button></center>";
}

function answer10() {
	var jawab10 = document.getElementById("container").children[5].children[0].children[0].value.toLowerCase();
	if (jawab10 === 'suyadi') {
		console.log(jawab10);
		score++;
		console.log(score);
	}
}
 
function scoring() {
	document.getElementById("container").innerHTML="<div><img id='myButton' src='image/speaker-on.svg' width='20' onclick='playAudio()' style='position: fixed; top: 10px; left: auto; margin-left: 10px;'></div>";
	document.getElementById("container").innerHTML+="<center>";
	if (score <= 7) {
		document.getElementById("container").innerHTML+="<div style='width=400'><center><h1>YOU LOSE!!</h1></center></div>";
		document.getElementById("container").innerHTML+="<div style='width=400'><center style='font-style:italic;'>Aku cubit kamu ya...</center></div>";
		document.getElementById("container").innerHTML+="<div style='width=400'><img src='image/pancake2.jpg' width='400'></div>";
	} else {
		document.getElementById("container").innerHTML+="<div style='width=400'><center><h1>YOU WIN!!</h1></center></div>";
		document.getElementById("container").innerHTML+="<div style='width=400'><center style='font-style:italic;'>Pinter deh kamu...</center></div>";
		document.getElementById("container").innerHTML+="<div style='width=400'><img src='image/isyana.jpg' width='400'></div>";
	}
	document.getElementById("container").innerHTML+="</center>";
}

