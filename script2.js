var Mcstm = {};
Mcstm.a016 = ""; // waktu
Mcstm.a017 = ""; // Kode

Mcstm.a001 = (a) => {
	return document.getElementById(a);
}

Mcstm.a005 = (a) => {
	const b = Mcstm.a001(a[0]).lastElementChild.innerHTML;
	const c = document.querySelectorAll('#'+a[0]+' .w3-btn');
	let g = "";
	if (c.length > 0) {
		for (let i = 0; i<c.length; i++) {
			let d = c[i].innerText;
			let e = c[i].outerHTML;
			let f = e.replace(/"/g, '\"');
			i < 1 ? g = b.replace(f, d) : g = g.replace(f, d);
		}
	Mcstm.a063().setContent(g);
	} else { Mcstm.a063().setContent(b)}
	Mcstm.a001("ar030").setAttribute("onclick", "Mcstm.fu002(['update','"+a[0]+"',''])");
	w3.show("#ar006"); w3.show("#ar030"); w3.hide("#ar029");
}

Mcstm.a002 = () => {
	Mcstm.a016 = Mcstm.a003()[0]+"-"+Mcstm.a003()[1]+"-"+Mcstm.a003()[2]+" "+Mcstm.a003()[3]+":"+Mcstm.a003()[4]+":"+Mcstm.a003()[5];
}

Mcstm.a004 = (a) => { //kode catatan selanjutnya
	let b = [a.slice(0, 7), a.slice(7, 11), a.slice(11, 13), a.slice(13, 17)];
	if (Mcstm.a003()[0] == b[1] && Mcstm.a003()[1] == b[2]) {
		var c = b[0]+b[1]+b[2]+(parseInt(b[3])+1);
	} else if (Mcstm.a003()[0] == b[1]) {
		var c = b[0]+b[1]+(Mcstm.a003()[1]<10? '0':'')+Mcstm.a003()[1]+"0";
	} else {
		var c = b[0]+(Mcstm.a003()[0]<10? '0':'')+Mcstm.a003()[0]+Mcstm.a003()[1]+0;
	}
	return c;
}

Mcstm.a003 = (a) => { //waktu //tahun, bulan, tanggal, jam, menit, detik
	const arrBulan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	if (a == null) {
		var b = new Date();
	} else {
		var b = new Date (a);
	}
	const c = b.getFullYear();
	const d = (arrBulan[b.getMonth()]<10? '0':'')+arrBulan[b.getMonth()];
	const e = (b.getDate()<10? '0':'')+b.getDate();
	const f = (b.getHours()<10? '0':'')+b.getHours();
	const g = (b.getMinutes()<10? '0':'')+b.getMinutes();
	const h = (b.getSeconds()<10? '0':'')+b.getSeconds();
	return [c, d, e, f, g, h];
}

Mcstm.a062 = function (a) { //data untuk input
   var va014 = Mcstm.a063().getContent(),
    va015a = va014.replace(/&nbsp;/g, ' '),
	va015b = va015a.replace(/'/g, "\\'"),
	va015 = va015b.replace(/&/g, '%26');
	
	if (a == "tulis") { return datanya = { 'status': 'safe', 'value' : [Mcstm.a017, Mcstm.a016, va015] }; }
	else { return datanya = { 'status': 'safe', 'value' : [a, va015] }; }
}

Mcstm.a063 = () => { return new nicEditors.findEditor("ar007"); }

Mcstm.a053 = (a, b, c, d, e) => { //new element
	//a=id, b=tanggal, c=area1, d=area2, e=isi.
	const elm1 = Mcstm.fu005("section", a, "onmouseover", "fu016('"+b+"','"+c+a+"','"+d+a+"')", "seksion w3-padding-16 w3-margin-top w3-row w3-border-bottom w3-border-teal", "", "");
	const elm2 = Mcstm.fu005("div", "", "", "", "w3-pale-green sticky", "", "");
	const elm3 = Mcstm.fu005("span", "", "onclick", "w3.toggleShow('#"+d+a+"');w3.toggleShow('#"+c+a+"');fu016('"+b+"','"+c+a+"','"+d+a+"');", "w3-button w3-col s10 l4 m6", "", "");
	const elm4 = Mcstm.fu005("div", c+a, "", "", "", "", "");
	const elm5 = Mcstm.fu005("div", d+a, "", ";", "", "", "display:none;");
	const elm6 = Mcstm.fu005("span", "", "onclick", "w3.toggleClass('#"+a+" .s6','w3-hide-small')", "w3-button w3-col s2 w3-hide-large w3-hide-medium", "X", "");
	const elm7 = Mcstm.fu005("span", "", "onclick", "Mcstm.a005(['"+a+"'])", "w3-col s6 m1 w3-button w3-hide-small", "Edit", "min-width:80px");
	const elm8 = Mcstm.fu005("span", "", "onclick", "Mcstm.fu002(['hapus', '"+a+"', ''])", "w3-col s6 m1 w3-button w3-hide-small w3-hover-red", "Hapus", "min-width:80px");
	const elm9 = Mcstm.fu005("div", "", "", "", "w3-padding-16 w3-col s12", fu003(e), "");

	elm3.appendChild(elm4); elm3.appendChild(elm5); 
	elm2.appendChild(elm3); elm2.appendChild(elm6);
	elm2.appendChild(elm7); elm2.appendChild(elm8); 
	elm1.appendChild(elm2); elm1.appendChild(elm9);

	return elm1;
}	

Mcstm.fu001 = (a,b,c) => { //ajax ke server 
//a=url, b=data yang direquest
var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
	    	Mcstm.fu004(c, JSON.parse(this.responseText));
		}
	}  
	xhttp.open("POST", a, true);
	xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhttp.send(b);
}

Mcstm.fu002 = (a) => { //membuat request
	//a[0]=fungsi a[1]=angka a[2]=kata
	if(a[0] == "baca") {
		let d = "angka="+a[1]+"&kata="+a[2];
		Mcstm.fu001("/"+a[0], d, a);
	} else if (a[0] == "tulis") {
		Mcstm.fu001("/"+a[0], "dikirim="+JSON.stringify(Mcstm.a062("tulis")), a)
	} else if (a[0] == "hapus") {
		let b = confirm("Are you sure to delete that note?");
		if (b) { Mcstm.fu001("/"+a[0], "req003="+a[1], a) }
	} else if (a[0] == "update") {
		Mcstm.fu001("/"+a[0], "dikirim="+JSON.stringify(Mcstm.a062(a[1])), a);
	}
}

Mcstm.fu004 = (a,b) => { //memproses respone server
	//a[0]=fungsi a[1]=angka a[2]=kata, b=data
	if (a[0] == "baca" && b.status == 200 && a[2] == "%") {
		Mcstm.fu006(b.value, "ar002", "ar003", a); w3.show("#ar004");w3.hide("#ar005");
	} else if (a[0] == "baca" && b.status == 200 && a[2] !== "") {
		Mcstm.fu006(b.value, "arn002", "arn003", a); w3.show("#ar005");w3.hide("#ar004");
	} else if(a[0] == "tulis" && b.status == 200){
		Mcstm.fu003(b);
	} else if (a[0] == "hapus" && b.status == 200) {
		var c = Mcstm.a001(a[1]);
		c.setAttribute("onmouseover", "");
		c.innerHTML = "<p class='w3-center'>Note deleted!</p>"
		setTimeout( function () {Mcstm.a001("ar004").removeChild(c)}, 5000)
	} else if (a[0] == "update") {
		document.querySelector("#"+a[1]+" .w3-padding-16").innerHTML = fu003(Mcstm.a063().getContent());
		Mcstm.a063().setContent(''); w3.hide("#ar006");
	}
}

Mcstm.fu006 = (a,b,c,d) => { // menampilkannya
	//a=data, b=area1, c=area2, d[0]=fungsi d[1]=angka d[2]=kata
	if (d[1] == 0 && d[2] == "%") {
		Mcstm.a017 = Mcstm.a004(a[0].id);
	}
	if (d[2] == "%") {
		var tampilnya = Mcstm.a001("ar004");
	} else if (d[0] !== "") {
		var tampilnya = Mcstm.a001("ar005");
	} if(d[1] == 0) { tampilnya.innerHTML = "";}
	if (tampilnya) {
		for (let i = 0; i < a.length; i++) {
			let hasilnya = Mcstm.a053(a[i].id, a[i].tanggal, b, c, a[i].isi);
			tampilnya.appendChild(hasilnya);
			fu016(a[i].tanggal, b+a[i].id, c+a[i].id);
		}
		if(a.length == 20) {
			const elm1 = Mcstm.fu005("div", "", "", "", "w3-center", "", "");
			const elm2 = Mcstm.fu005("button", "", "onclick", "Mcstm.fu002(['"+d[0]+"',"+parseInt(d[1]+20)+",'"+d[2]+"']);w3.hide(this)", "w3-margin-top w3-mobile w3-button w3-white w3-border w3-border-green w3-hover-blue-gray", "Tampilkan lagi.", "");
			elm1.appendChild(elm2);
			tampilnya.appendChild(elm1);
		} else if(a.length < 20) {
			tampilnya.appendChild(Mcstm.fu005("p", "", "", "", "w3-center", "Data sudah ditampilkan semua", ""));
		}
	}
}

Mcstm.fu005 = (a,b,c,d,e,f,g) => { //membuat element
	// a=element, b=id, c=event, d=function, e=class, f=isi, g=style
	const elmnt = document.createElement(a);
		if (b) { elmnt.setAttribute('id', b); }
		if (c && d) {  elmnt.setAttribute(c, d); }
		if (e) { elmnt.setAttribute('class', e); }
		if (f) { elmnt.innerHTML = f; }
		if (g) { elmnt.setAttribute('style', g) }
		return elmnt;
}

Mcstm.fu003 = (a) => {
	if (a.value[0] == "tulis") {
		w3.hide("#ar006"); //sembunyikan modal
		let hasilnya = Mcstm.a053(Mcstm.a017, Mcstm.a016, "ar002", "ar003", Mcstm.a063().getContent()); //buat element untuk ditampilkan
		Mcstm.a001("ar004").insertBefore(hasilnya, Mcstm.a001("ar004").childNodes[0]); //tampilkan element diatas sendiri(terbaru)
		fu016(Mcstm.a016, "ar002"+Mcstm.a017, "ar003"+Mcstm.a017);
		Mcstm.a017 = Mcstm.a004(Mcstm.a017); //buat kode catatan selanjutnya baru
		Mcstm.a063().setContent(''); //hapus isi text area
	}
}