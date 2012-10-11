//language
var anotherButtonLabel;
if (lang === "japanese-utf8") {
	anotherButtonLabel = "次へ";
} else {
	anotherButtonLabel = "Another";
}

//get save button
var btn = document.getElementById("Button1");
if (!btn) return;

//remove "+" text
var span = btn.getElementsByTagName("span");
if (span && span[0]) span[0].style.display = "none";

//get save mode selector
var select = btn.getElementsByTagName("select");
if (select && select[0]) {
	function selectSaveMode(value) {
		for (var i = 0, max = select[0].options.length; i < max; i ++) {
			if (select[0].options[i].value == value) {
				select[0].selectedIndex = i;
				break;
			}
		}
	}
	
	//hide save mode selector
	select[0].style.position = "absolute";
	select[0].style.top = "-100em";
	
	//set the value of save mode selector "2" (continue editing)
	selectSaveMode(2);
	
	//generate add another button
	var save = document.getElementById("Button1");
	if (save) {
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.setAttribute("href", "javascript:;");
		a.innerHTML = '<img src="' + theme_path + '/images/icons/save.png"> ' + anotherButtonLabel;
		a.onclick = function() {
			selectSaveMode(1);
			documentDirty=false; document.mutate.save.click();saveWait('mutate');
		};
		li.appendChild(a);
		save.parentNode.insertBefore(li, save.nextSibling);
	}
}
