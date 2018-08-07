console.log('u a ' + window.location);

const bl=document.querySelector('.imageBlock');
let cash1=parseFloat(prompt('сколько у вас с собой есть денег?'));
let bought_apple=parseInt(prompt('сколько вы купили яблок?'));
let bought_bread=parseInt(prompt('сколько вы купили батонов хлеба?'));
let cash_all_apple=parseFloat(prompt('сколько стоит одно яблоко?')) * bought_apple;
let cash_all_bread=parseFloat(prompt('сколько стоит один батон хлеба?')) * bought_bread;

var func_my= (cash1,bought_apple,bought_bread,cash_all_apple,cash_all_bread)=>{
	let answer=cash1-cash_all_apple-cash_all_bread >0 ? true : false;
	return answer;
}

console.log(func_my(cash1,bought_apple,bought_bread,cash_all_apple,cash_all_bread));