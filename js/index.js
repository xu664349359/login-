/*
 * 考虑一下状态？
 * 	1、Email输入框获取焦点、输入时候	input
 * 	2、密码框获取焦点、输入时候		password
 * 	3、密码错误时	error
 * 	4、密码正确时	ok
 * 	5、密码在可见于不可见两种状态之间切换
 */
let boy = document.querySelector('.boy ');
let boyMian = document.querySelector('.boy-main');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let eyeball = document.querySelectorAll('.eyes .eyeball');
let login = document.querySelector('.submit');
let pwChange = document.querySelector('#pwChange');
let initDeg = -125;
let faceDeg = 58;
//改变面部表情
function changeFace(){
	var degNum = initDeg + (email.value.length * -10);
	var faceNum = faceDeg + email.value.length;
	if(degNum < -245){
		degNum = -245;
	}
	eyeball[0].style.transform = 'rotate('+degNum+'deg)';
	eyeball[1].style.transform = 'rotate('+degNum+'deg)';
	if(faceNum > 80){
		faceNum = 80;
	}
	boyMian.style.marginLeft = faceNum + 'px';
}
//输入框获取焦点
email.onfocus = function(){
	boy.className = 'boy input';
	changeFace();
}
//输入框失去焦点
email.onblur = function(){
	boy.className = 'boy';
	boyMian.style.marginLeft = '69px';
}
//输入框输入时
email.oninput = function(){
	changeFace();
}
//密码框获取焦点
password.onfocus = function(){
	boyMian.style.marginLeft = '69px';
	boy.className = 'boy password';
}
//密码框失去焦点
password.onblur = function(){
	boyMian.style.marginLeft = '69px';
	boy.className = 'boy';
}

//登陆
login.onclick = function(){
	if(password.value == 'xulongqiang'){
		boy.className = 'boy ok';
	}else{
		boy.className = 'boy error';
	}
	
}
//密码是否可见
pwChange.onclick = function(){
	if(this.className == 'look'){
		this.className = 'lock';
		password.type = 'password';
		boy.className = 'boy password';
	}else{
		this.className = 'look';
		password.type = 'text';
		boy.className = 'boy';
	}
}
