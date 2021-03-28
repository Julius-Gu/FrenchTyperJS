var is_light_theme = false;
var is_upper_case = false;

document.documentElement.setAttribute('data-theme', 'dark');

function switch_theme() {
	if(is_light_theme) {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
	is_light_theme = !is_light_theme;
}

// 	copies the value of an html element
function copy(element) {
	var copyText = document.getElementById("csymbol");
	copyText.value = element.value;
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	document.getElementById("info").innerHTML = " "+copyText.value+" copied!";
}

function toggle_case() {
	var bts = document.getElementsByClassName("sym-bt");
	for(i=0;i<bts.length;i++) {
		if(is_upper_case) {
			var txt=bts[i].value.toLowerCase();
		} else {
			var txt=bts[i].value.toUpperCase();
		}
		bts[i].value=txt;
	}
	is_upper_case = !is_upper_case;
}

