var today = new Date();
var weekIndex = 1;
const bphListEl = document.getElementById("bphList");
const bphTextEl = document.getElementById("bphText");

let speciesList = ["Black Vulture", "Turkey Vulture","Osprey","Bald Eagle",
"Northern Harrier","Sharp-shinned Hawk","Cooper's Hawk",
"American Goshawk","Red-shouldered Hawk","Broad-winged Hawk",
"Red-tailed Hawk","Rough-legged Hawk","Golden Eagle",
"American Kestrel","Merlin","Peregrine Falcon", "TOTAL"];

let weekList = ["9/1", "9/8", "9/15", "9/22", "10/1", "10/8", "10/15",
"10/22", "11/1", "11/8", "11/15", "11/22"];


let birdsPerHourData = [
	[0, 0.4, 0.1, 0.5, 0.04, 1.4, 0.3, 0, 0.01, 1.8, 0.6, 0.01, 0, 0.2, 0.05, 0.04, 5.68]
	[0, 0.4, 0.2, 0.4, 0.2, 4.1, 0.3, 0, 0, 32, 1, 0.03, 0, 1.2, 0.1, 0.1, 39.96],
	[0, 2.2, 0.2, 0.4, 0.2, 7, 0.5, 0, 1.2, 22, 0.6, 0.01, 0, 1.8, 0.1, 0.1, 35.88],
	[0, 13, 0.1, 0.4, 0.4, 8, 0.3, 0, 0.1, 17, 1, 0.01, 0, 1.3, 0.1, 0.1, 41.74],
	[0, 19, 0.05, 0.1, 0.2, 2.4, 0.2, 0.01, 0.1, 0.5, 1, 0.00, 0, 0.3, 0.04, 0.1, 23.71],
	[0, 32, 0.05, 0.1, 0.2, 5, 0.3, 0.01, 0.2, 0.1, 2, 0.01, 0.01, 0.6, 0.05, 0.1, 41.32],
	[0, 52, 0.02, 0.3, 0.3, 6, 0.4, 0.05, 1.1, 0.01, 4, 0.03, 0.09, 0.3, 0.08, 0.1, 65.23],
	[0, 18, 0, 0.2, 0.2, 2, 0.2, 0.05, 1.1, 0.01, 9, 0.03, 0.11, 0.06, 0.03, 0.1, 30.78],
	[0.01, 1.9, 0, 0.04, 0.1, 0.3, 0.07, 0.01, 0.5, 0.01, 4, 0.04, 0.06, 0, 0.04, 0.02, 7.53],
	[0, 0.6, 0, 0.1, 0.05, 0.2, 0.1, 0.02, 0.2, 0.01, 4, 0.08, 0.06, 0, 0.04, 0.01, 5.69],
	[0, 0.01, 0, 0.04, 0.05, 0.04, 0.04, 0, 0.2, 0, 2, 0.08, 0.02, 0, 0.03, 0.02, 2.41],
	[0, 0, 0, 0.01, 0.01, 0.04, 0.04, 0.01, 0.05, 0.01, 0.46, 0.01, 0, 0, 0.01, 0.01, 0.70]
];


// Check if month is September
if ( today.getMonth == 8){
	if (today.getDate() < 8){
		weekIndex = 0;
	} else if (today.getDate() < 15){
		weekIndex = 1;
	} else if (today.getDate() < 21){
		weekIndex =2;
	} else {
		weekIndex = 3;
	}
// Check if month is October
} else if (today.getMonth() == 9){
	if (today.getDate() < 8){
		weekIndex = 4;
	} else if (today.getDate() < 15){
		weekIndex = 5;
	} else if (today.getDate() < 21){
		weekIndex = 6;
	} else {
		weekIndex = 7;
	}
// Check if month is November
} else if (today.getMonth() == 10){
	if (today.getDate() < 8){
		weekIndex = 8;
	} else if (today.getDate() < 15){
		weekIndex = 9;
	} else if (today.getDate() < 21){
		weekIndex = 10;
	}
	else {
		weekIndex = 11;
	}
}


if(weekIndex == 500){
	// Out of hawk watching season
	bphTextEl.innerHTML = "During the hawk watching season, this section will be updated to show the week's average number of birds per hour by species."
	bphListEl.innerHTML = "";
} else {
	// In hawk watching season, update week's birds per hour
	bphTextEl.innerHTML = "Based on HMANA's Hawk Count data, here are the average number of each species you might see per hour this week:";
	bphListEl.innerHTML = "";
	data = [];
	for(i = 0; i < birdsPerHourData[weekIndex].length; i++){
		curBird = {'species':speciesList[i], 'bph':birdsPerHourData[weekIndex][i]};
		if(birdsPerHourData[weekIndex][i] != 0){
			data.push(curBird);
		}

	}

	data.sort(function(first, second) {return second.bph - first.bph;});

	for(i = 0; i < data.length; i++){
		console.log(data[i].species + " " + data[i].bph);
		var liEl = document.createElement("li");
		liEl.innerHTML = data[i].species + ": " + data[i].bph + " birds/hr";
		bphListEl.appendChild(liEl);

	}

}