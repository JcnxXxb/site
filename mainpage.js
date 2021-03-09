// JavaScript Document
var arr = document.getElementById("members").getElementsByTagName("tr");
for(var h=0;h<arr.length;h++){
	var i = arr[h];
	var j = i.children[1];
	if(j.tagName === "TD"){
		var yearin = j.innerHTML.substr(0,4);
		Date date = Date.now;
		var nowyear = date.getFullYear;
		if(date.getMonth<9) nowyear--;
		switch(nowyear-yearin){
			case 0:
				yearin = "六年级";
				break;
			case 1:
				yearin = "七年级";
				break;
			case 2:
				j.innerHTML = "八年级";
				break;
			default:
				j.innerHTML
		}
		console.log(yearin);
	}
}
