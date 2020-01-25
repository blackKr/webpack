

const configJson = require("./config.json");
import styles from './Greeter.css';

function timeOut() {
	return new Promise((resolve,reject) => {
		setTimeout(() =>{
			let greet = document.createElement('div');
			greet.textContent = "请求超时";
			greet.style.color = "#f5f";
			reject(greet);
		},3000);
	});
}

function loadImg() {
	return new Promise((resolve,reject) => {
		setTimeout( () => {
			let greet = document.createElement('div');
			greet.textContent = configJson.greetText;
			resolve(greet);
		},200);
	});
}

function requestImg() {
	return new Promise((resole,reject) => {
		Promise.race([timeOut(),loadImg()])
			.then((data) => {
				resole(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
}

function Greeter() {
	let newDiv = document.createElement('div');
	newDiv.textContent = configJson.addText;
	newDiv.className = styles.root;
	return newDiv;
}

module.exports = {
	requestImg:requestImg
	,Greeter:Greeter
};
