var today = new Date();
console.log(today);

let speciesList = [ "Turkey Vulture","Osprey","Bald Eagle",
"Northern Harrier","Sharp-shinned Hawk","Cooper's Hawk",
"Northern Goshawk","Red-shouldered Hawk","Broad-winged Hawk",
"Red-tailed Hawk","Rough-legged Hawk","Golden Eagle",
"American Kestrel","Merlin","Peregrine Falcon"];

let weekList = [];

let birdsPerHourData = [
	[1, 1, 1, 1, 2, 1, 0, 0, 8, 1, 0, 0, 1, 0.5, 0.3],
	[2, 1, 1, 1, 7, 1, 0, 0, 148,1, 0, 0, 3, 0.5, 0.6],
	[3,4,1,1,12,1,0,1,58,1,0,0,5,1,0.4],
	[18,1,1,1,8,1,0.25,1,46,2,0,0,3,1,1],
	[16,1,1,1,5,1,0,1,6,1,0,0,2,1,2],
	[27,1,3,2,5,1,0,1,1,2,0,0,3,1,0.5],
	[68,0,2,1,5,1,0.4,2,0,5,1,0.5,1,1,1],
	[56,0,2,1,3,1,0.2,1,0,9,1,2,1,1,0.5],
	[3,0,1,1,2,1,0.3,1,0,3,1,0.6,0.5,1,0.5],
	[2,0,1,2,1,1,0,1,0,3,1,0.6,0,1,0.5],
	[1,0,1,1,1,1,0,1,0,3,1,1,0,2,0],
	[1,0,0,1,1,1,0,0,0,2,1,0,0,0,0]
];


// Check if month is September
if ( today.getMonth == 8){
	if (today.getDate() < 8){

	} else if (today.getDate() < 15){

	} else if (today.getDate() < 21){

	} 
// Check if month is October
} else if (today.getMonth() == 9){
	if (today.getDate() < 8){

	} else if (today.getDate() < 15){

	} else if (today.getDate() < 21){

	}
// Check if month is November
} else if (today.getMonth() == 10){
	if (today.getDate() < 8){
		console.log("test");
	} else if (today.getDate() < 15){

	} else if (today.getDate() < 21){

	}
}