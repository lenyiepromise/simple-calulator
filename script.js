// Display screen
const display = document.getElementById('display');

// Number buttons
function appendToDisplay(value) {
	display.value += value;
}

// Operation buttons
function backspace() {
	display.value = display.value.slice(0, -1);
}

// Clear button
function clearDisplay() {
	display.value = '';
}

// Equals button
function calculate() {
	try {
		display.value = eval(display.value);
	} catch (error) {
		display.value = 'Error';
	}
}