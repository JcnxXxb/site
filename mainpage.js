// JavaScript Document
var arr = document.getElementById("members").getElementsByTagName("tr");
for(var h=0;h<arr.length;h++){
	var i = arr[h];
	var j = i.children[1];
	if(j.tagName === "TD"){
		var yearin = j.innerHTML.substr(0,4);
		var classname = j.innerHTML.substr(4);
		var date = new Date(Date.now());
		var nowyear = date.getFullYear();
		if(date.getMonth>=9) nowyear++;
		switch(parseInt(nowyear)-parseInt(yearin)){
			case 0:
				yearin = "六年级";
				break;
			case 1:
				yearin = "七年级";
				break;
			case 2:
				yearin = "八年级";
				break;
		}
		j.innerHTML = yearin + classname;
	}
}
