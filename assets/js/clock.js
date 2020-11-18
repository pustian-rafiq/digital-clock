let hours_id = document.getElementById("hours");
let minutes_id = document.getElementById("minutes");
let seconds_id = document.getElementById("seconds");
let ampm_id = document.getElementById("ampm");
let date_id = document.getElementById("date");


function setClock(){

	//get the current date of my computer
	let currentDate = new Date();

	let currentHours = currentDate.getHours();
	let currentMinutes = currentDate.getMinutes();
	let currentSeconds = currentDate.getSeconds();
	let currentFullDate = currentDate.toLocaleDateString();



	//I change the default format of the method toLocalDateString()
	let mm = currentDate.getMonth() + 1;
	let dd = currentDate.getDate();
	let yy = currentDate.getFullYear();
	var myDateString = mm + '-' + dd + '-' + yy;


	//this method print the date like 11/17/2020 format
    //document.write(d.toLocaleDateString() + "<br>"); // Display a localized date string

    //If the hours is greater than 12 then we set AM to the time format
	if (currentHours > 12) {
		ampm_id= ampm_id.innerText="PM";
	}
	if (currentHours > 12) {
		currentHours = currentHours-12;
	}

	//set the 2 digit fotmat when the digit is 1
	if (currentHours <10) {
		currentHours = "0" + currentHours;
	}

	if (currentMinutes <10) {
		currentMinutes = "0" + currentMinutes;
	}
	if (currentSeconds <10) {
		currentSeconds = "0" + currentSeconds;
	}

	hours_id.innerText = currentHours;
	minutes_id.innerText = currentMinutes;
	seconds_id.innerText = currentSeconds;
	date_id.innerText = myDateString;
}

setInterval(setClock,1000);
setClock()