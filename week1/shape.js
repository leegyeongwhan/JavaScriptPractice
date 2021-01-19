const ShapeArray = [];

function getArea(shape, arg1, arg2, arg3) {
	ShapeArray.push(shape);
	if (shape == 'circle') {
		if (arguments.length == 2) {  //인자2개일떄
			return getCircle(shape, arg1);
		} else if (arguments.length == 3) {  //인자 3개일때
			return getCircleSum(shape, arg1, arg2);
		}
	} else if (shape == 'rect') {
		return getRect(shape, arg1, arg2);
	} else if (shape == 'trapezoid') {
		return getTrapezoid(shape, arg1, arg2, arg3);
	}
}

function getCircle(shape, radius) {
	return Math.pow(radius, 2) * 3.14;
};
function getRect(shape, width, length) {
	return width * length;
};
function getTrapezoid(shape, width, length, hight) {
	return ((width + length) * hight) / 2;
}
function getCircleSum(shape, radius, n) {
	let sum = 0;
	for (let i = radius; i <= n; i++) {
		sum += Math.pow(i, 2) * 3.14;
	}
	return sum;
}
function printExecutionSequence() {
	let printResult = '';
	for (let i = 0; i < ShapeArray.length; i++) {
		printResult += ShapeArray[i] + ', ';
	}
	console.log(printResult);

//	console.log(ShapeArray.join(', '));
}

console.log(getArea('circle', 10));
console.log(getArea('rect', 10, 5));
console.log(getArea('trapezoid', 10, 15, 12));
console.log(getArea('circle', 1, 10));
printExecutionSequence();