let 
birthDateInput = document.getElementById("birth-date");
let 
calculateButton = document.getElementById("sub");
let 
resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", () => {
	let 
    birthDate = new Date(birthDateInput.value);
	let 
    today = new Date();
	let 
    age = calculateAge(birthDate, today);
	let 
    nextBirthday = calculateNextBirthday(birthDate, today);
	resultDiv.innerHTML = `You are ${age} years old. Your next birthday is on ${nextBirthday.toLocaleDateString()}.`;
});

function calculateAge(birthDate, today) {
	let 
    age = today.getFullYear() - birthDate.getFullYear();
	let 
    month = today.getMonth() - birthDate.getMonth();
	if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

function calculateNextBirthday(birthDate, today) {
	let 
    nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
	if (nextBirthday < today) {
		nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
	}
	return nextBirthday;
}

