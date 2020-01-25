

import greeter from './Greeter.js';
import "./main.css";

document.querySelector("#root").appendChild(greeter.Greeter());
greeter.requestImg()
	.then((data) => {
		document.querySelector("#root").appendChild(data);
	})
	.catch((err) => {
		console.error(err);
		document.querySelector("#root").appendChild(err);
	});
