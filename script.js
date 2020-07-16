var va036 = 0,
	va037 = 80,
	va059 = document.getElementById('ar004');

/*function fu001(va019) { //dipakai angka kata membaca database
	var va020 = va019.split('=');
	va020[0] = parseInt(va020[0]);
	var va054 = 0,
		xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			var responya = JSON.parse(this.responseText),
			ekstraknya = responya.value;
				
			if (va020[1] == '%') { var tampilnya = Mcstm.a059, area = ['ar002', 'ar003']; } //baru
         else { var tampilnya = Mcstm.a061, area = ['arn001', 'arn002']; } //Pencarian

			for (let i = 0; i < ekstraknya.length; i++) {
			
            var va053 = Mcstm.a053 (ekstraknya[i].id, ekstraknya[i].tanggal, area[0], area[1], ekstraknya[i].isi );
            
				if (i == 0 && va020[0] == 0) {
					if (va020[1] == '%') { 	fu002(ekstraknya[i].id); }
					//tampilnya.innerHTML = va053;
					tampilnya.appendChild(va053);
				}
				else { //tampilnya.innerHTML += va053; 
						tampilnya.appendChild(va053);
					 }
				va054 = i;
				fu016(ekstraknya[i].tanggal, area[0] + ekstraknya[i].id, area[1] + ekstraknya[i].id);
			}
			if (va054 == 19) {
				tampilnya.innerHTML += "<div class='w3-center'><button onclick=fu001('" + parseInt(va020[0]+20) + "=" + va020[1] + "');w3.hide(this); class='w3-margin-top w3-mobile w3-wide w3-button w3-white w3-border w3-border-green w3-hover-blue-gray'>Tampilkan lagi.</button></div>"
			} else if (va054 < 19) {
				tampilnya.innerHTML += "<p class='w3-center'>Data sudah ditampilkan semua</p>";
			}
		};
	}
	xhttp.open("POST", "/baca", true);
	xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhttp.send('angka=' + va020[0] + '&kata=' + va020[1]);
}

function fu002(kodenya) { //dipakai kode selanjutnya
		Mcstm.a055 = kodenya;
	   var va003 = kodenya,
		va004 = va003.slice(0, 7),
		va005 = va003.slice(7, 11),
		va006a = va003.slice(11, 13),
		va006c = "00",
		va007 = va003.slice(13, 17),
		va008a = parseInt(va007) + 1,
		va008b = "" + va008a,
		va008c = "000",
		va008 = va008c.substring(0, va008c.length - va008b.length) + va008b,
		va012b = "" + Mcstm.bulan(),
		va012 = va006c.substring(0, va006c.length - va012b.length) + va012b;
	if (va006a == va012) {
		va013 = va004 + va005 + va006a + va008;
	}
	else if (va005 == Mcstm.tahun()) {
		va013 = va004 + va005 + va012 + va008c;
	}
	else {
		va013 = va004 + Mcstm.tahun() + va012 + va008c;
	}
	Mcstm.a017 = va013;
} */

function fu003(va024) { //dipakai fungsi hhastag
	//*var va024 = document.getElementById('myText01').value,

	if (va024.search('#') >= 0) {
		var panjangnya = va024.length,
			jumlahPagarnya = va024.match(/#/g).length,
			akhir = [],
			posisiAwal = [0],
			posisiAkhir = [0],
			va025 = [],
			tombolnya = [],
			hasilAkhir = "";

		for (let i = 0; i < jumlahPagarnya; i++) {
			if (i == 0) {
				posisiAwal.push(va024.indexOf('#', posisiAwal[i]));
				akhir = [(va024.indexOf(' ', posisiAwal[i + 1]) < 0 ? panjangnya : va024.indexOf(' ', posisiAwal[i + 1]))];
				akhir.push(va024.indexOf('<', posisiAwal[i + 1]) < 0 ? panjangnya : va024.indexOf('<', posisiAwal[i + 1]));
				posisiAkhir.push(Math.min(...akhir) < 0 ? panjangnya : Math.min(...akhir));
				va025.push(va024.slice(posisiAwal[i + 1], posisiAkhir[i + 1]));
				tombolnya.push("<button onclick=Mcstm.fu002(['baca',0,'"+va025[i]+"']);w3.hide('#ar004');w3.show('#ar005'); class='w3-btn w3-border-teal w3-border' >" + va025[i] + "</button>");
				hasilAkhir += va024.substring(0, posisiAwal[i + 1]) + tombolnya[i];
			}
			else {
				posisiAwal.push(va024.indexOf('#', posisiAwal[i] + 1));
				akhir = [(va024.indexOf(' ', posisiAwal[i + 1]) < 0 ? panjangnya : va024.indexOf(' ', posisiAwal[i + 1]))];
				akhir.push(va024.indexOf('<', posisiAwal[i + 1]) < 0 ? panjangnya : va024.indexOf('<', posisiAwal[i + 1]));
				posisiAkhir.push(Math.min(...akhir));
				hasilAkhir += va024.substring(posisiAkhir[i], posisiAwal[i + 1]);
				va025.push(va024.slice(posisiAwal[i + 1], posisiAkhir[i + 1] < 0 ? panjangnya : posisiAkhir[i + 1]));
				tombolnya.push("<button onclick=Mcstm.fu002(['baca',0,'"+va025[i]+"']);w3.hide('#ar004');w3.show('#ar005'); class='w3-btn w3-border-teal w3-border' >" + va025[i] + "</button>");
				hasilAkhir += tombolnya[i];
			}
		}
		posisiAkhir[posisiAkhir.length - 1] < panjangnya ? hasilAkhir += va024.substring(posisiAkhir[posisiAkhir.length - 1], panjangnya) : '';
		// console.log(posisiAwal+" | "+posisiAkhir);//(hasilnya);
		return hasilAkhir;
	}
		return va024;
}
/*function fu004(qer) {
	if (qer.length > 1) {
		fu013('ar028');
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				fu013('ar028');
				fu005(ar005, ar004, ar006);
				document.getElementById("ar005").innerHTML = this.responseText;
			};
		}
		xhttp.open("POST", "fileScripty.php", true);
		xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhttp.send("req001=cari&req002=" + qer);
	}
}
function fu005(va040, va041, va042) {
	va040.style.display = "block";
	va041.style.display = "none";
	va042.style.display = "none";
} 

function fu006() {// dipakai, waktu sekarang untuk diinput kedatabase
	Mcstm.a016 = Mcstm.a002();
} 

function fu007() {
	var va043 = document.getElementById("ar017").value,
		va046 = document.getElementById("ar019").value,
		va047 = document.getElementById("ar020").value,
		va048 = document.getElementById("ar024");
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText == "suksesDaftar") {
				fu003('ar013', 'ar016');
				document.getElementById('ar030').style.visibility = "hidden";
			} else {
				va048.innerHTML = this.responseText;
			}
		};
	}
	xhttp.open("POST", "fileScripty.php", true);
	xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhttp.send("ar017=" + va043 + "&ar019=" + va046 + "&ar020=" + va047);
}
function fu008() { //dipakai insert kedatabase
   var datanya = Mcstm.a062('tulis'),
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText == 'Success') {
				   va060 = document.createElement('section');
					Mcstm.a059.insertBefore(va060, Mcstm.a059.childNodes[0]);
					Mcstm.a059.childNodes[0].innerHTML = Mcstm.a053(datanya.value[0], datanya.value[1], 'ar002', 'ar003', Mcstm.a064() );
				   fu016(datanya.value[1], 'ar002' +datanya.value[0], 'ar003' +datanya.value[0]);
					w3.show('#ar004'); w3.hide('#ar006');
				   Mcstm.a063(); fu002(datanya.value[0]);
			} else { console.log('gagal'); }
		}
	}
	xhttp.open("POST", "/tulis", true);
	xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhttp.send("dikirim=" + JSON.stringify(datanya));
}

function fu009(va019) { //Insert update kedabaase
var	datanya = Mcstm.a062(va019);
         xhttp = new XMLHttpRequest();
	      xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText == 'Success') {
			document.querySelector("#"+va019+" .w3-padding-16").innerHTML = fu003(Mcstm.a064());
            Mcstm.a063(); w3.show('#ar004'); w3.hide('#ar006');
			} else { alert('gagal'); }
		}
	}
	xhttp.open("POST", "/update", true);
	xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhttp.send("dikirim="+ JSON.stringify(datanya));

}
/*function fu010(va021) {
	fu013('ar028');
	va022 = va021.split('=');
	var va023 = "ar012" + va022[1];
	document.getElementById(va023).innerHTML = "Mohon tunggu sebentar...";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			fu013('ar028');
			document.getElementById("ar005").innerHTML += this.responseText;
			document.getElementById(va023).innerHTML = "";
		};
	}
	xhttp.open("POST", "fileScripty.php", true);
	xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhttp.send("req001=cari&req002=" + va022[0] + "&posisi=" + va022[1]);
}
function fu011() {
	var va038 = document.getElementById("ar028");
	document.getElementById("ar000").style.top = "0";
	if (va036 <= 80 && va038.style.display == "block") {
		va036++;
		va038.style.marginLeft = va036 + '%';
		if (va036 >= 80) {
			va037 = 80;
		}
	}

	else if (va036 >= 80 && va038.style.display == "block") {
		va037--;
		va038.style.marginLeft = va037 + '%';
		if (va037 <= 0) {
			va036 = 0;
		}
	}
}
function fu012() {
	var va028 = document.getElementById("ar018").value,
		va029 = document.getElementById("ar020").value,
		va030 = document.getElementById("ar031");
	va044 = document.getElementById("ar021");

	if (va028 == va029) {
		va030.innerHTML = "<b>Password match</b>";
		va044.style.pointerEvents = null;
		va044.style.opacity = null;
	}
	else {
		va030.innerHTML = "<i>Password not match</i>";
		va044.style.pointerEvents = "none";
		va044.style.opacity = "0.4";
	}

}
function fu013(va032) {
	if (va032 == "ar028") {
		var va040 = document.getElementById(va032),
			va051 = document.getElementById("ar000"),
			va052 = document.getElementById("ar001");

		if (va040.style.display == "block") {
			va051.style.pointerEvents = null;
			va051.style.opacity = null;
			va052.style.pointerEvents = null;
			va052.style.opacity = null;
			va040.style.display = "none";
			clearInterval(va039);
		}
		else {
			va040.style.display = "block";
			va051.style.pointerEvents = "none";
			va051.style.opacity = "0.9";
			va052.style.pointerEvents = "none";
			va052.style.opacity = "0.4";
			va039 = setInterval(fu011, 70);

		}
	}

	else {
		if (va032.style.display == "block") {
			va032.style.display = "none";
		}
		else {
			va032.style.display = "block";
		}
	}
} 

function fu015(va033) { //dipakai, untuk menghapus record
	var xhttp = new XMLHttpRequest(),
		va035 = confirm("Apakah anda yakin akan hapus catatan tersebut?");
	if (va035 == true) {
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200 && this.responseText == 'Sucsess') {
				document.getElementById(va033).style.display = "none";
				if (va033 == Mcstm.a055) {
					document.getElementById('ar010').value = va033;
				}
			};
		}
		xhttp.open("POST", "/hapus", true);
		xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhttp.send("req003="+va033);
	}
}

function fu014(va045) { //dipakai, untuk update record
	w3.show('#ar006'); w3.show('#ar030'); w3.hide('#ar029');
	var va014 = new nicEditors.findEditor("ar007"),
		va056 = document.getElementById(va045),
		va057 = va056.lastElementChild.innerHTML,		
		va004 = "";
		va058 = document.querySelectorAll('#'+va045+' .w3-btn');
		if(va058.length >0 ) {
		for (let i = 0; i < va058.length; i++) {
			var va001 = va058[i].innerText,
				 va002 = va058[i].outerHTML,
				 va003 = va002.replace(/"/g, '\"');
				 i < 1? va004 = va057.replace(va003, va001):va004 = va004.replace(va003, va001);
		}
		va014.setContent(va004) 
		} else {	va014.setContent(va057); }
	document.getElementById('ar030').setAttribute('onclick', 'fu009("'+va045+'")');
} */
function fu016(vare001, are0000, are0001) {  //dipakai selisih waktu
	var va02 = new Date(vare001), //new Date(document.getElementById('input').value),
		va03 = (va02.getMinutes() < 10 ? '0' : '') + va02.getMinutes(), //jikak <10 maka dikasi 0 09,
		va04 = (va02.getHours() < 10 ? '0' : '') + va02.getHours(),
		va05 = (va02.getDate() < 10 ? '0' : '') + va02.getDate(),
		va06 = va02.getMonth(),
		va07 = va02.getFullYear(),
		va08 = (va02.getSeconds() < 10 ? '0' : '') + va02.getSeconds(),
		va09 = va02.getDay(),
		va02a = new Date(),
        va03a = va02a.getMinutes(), //jikak <10 maka dikasi 0 09,
		va04a = va02a.getHours(),
		va05a = va02a.getDate(),
		va06a = va02a.getMonth(),
		va07a = va02a.getFullYear(),

		jarak = va02a.getTime() - va02.getTime(),
		menit = Math.floor(jarak / (1000 * 60) % 60),
		jam = Math.floor(jarak / (1000 * 60 * 60) % 24),
		harinya = Math.floor(jarak / (1000 * 60 * 60 * 24)),
		namaHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		namaBulan = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Des'],

		arrBulan0 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		arrBulan1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

		arrHari2 = [];

	if (va07 == va07a) {
		if (va07 % 4 == 0) {
			if (va06 == va06a) { arrHari2 = arrHari2.concat(arrBulan0[va06]); }
			else { arrHari2 = arrHari2.concat(arrBulan0.slice(va06, va06a)); }
		} else {
			if (va06 == va06a) { arrHari2 = arrHari2.concat(arrBulan1[va06]); }
			else { arrHari2 = arrHari2.concat(arrBulan1.slice(va06, va06a)); }
		}
	} else {
		for (i = va07; i <= va07a; i++) {
			if (i == va07) {
				if (i % 4 == 0) {
					arrHari2 = arrHari2.concat(arrBulan0.slice(va06));
				} else {
					arrHari2 = arrHari2.concat(arrBulan1.slice(va06));
				}
			} else if (i == va07a) {
				if (i % 4 == 0) {
					arrHari2 = arrHari2.concat(arrBulan0.slice(0, va06a));
				} else {
					arrHari2 = arrHari2.concat(arrBulan1.slice(0, va06a));
				}
			} else {
				if (i % 4 == 0) {
					arrHari2 = arrHari2.concat(arrBulan0);
				} else {
					arrHari2 = arrHari2.concat(arrBulan1);
				}
			}
		}
	}

	totalHari = 0,
	hasilTahun = "";
	hasilBulan = "";
	hasilHari = "";

	for (var i = 0; i < arrHari2.length; i++) {
		totalHari += Number(arrHari2[i]);
	}
	totalHariBulanSebelum = totalHari - arrHari2[arrHari2.length - 1];

	if (harinya > 0) { hasilHari = harinya + " Day "; }

	if (totalHari > 0 && harinya >= totalHari) {
		hasilBulan = arrHari2.length;
		hasilHari = harinya - totalHari + " Day ";
	} else if (totalHari > 0 && harinya < totalHari) {
		hasilBulan = arrHari2.length - 1;
		hasilHari = harinya - totalHariBulanSebelum + " Day ";
	}
	if (jam == 0) { hasilJam = ""; }
	else { hasilJam = jam + " Hour "; }

	if (menit == 0) { hasilMenit = "A few second"; }
	else { hasilMenit = menit + ' Minute'; }

	if (hasilHari == "0 Day ") { hasilHari = ""; }

	if (hasilBulan < 12) { hasilBulan = hasilBulan + " Month "; }
	else if (hasilBulan >= 12) {
		hasilTahun = Math.floor(hasilBulan / 12) + " Year ";
		hasilBulan = hasilBulan % 12 + " Month ";
	}
	if (hasilBulan == "0 Month ") { hasilBulan = ""; }

	hasilnya = hasilTahun + hasilBulan + hasilHari + hasilJam + hasilMenit;
	hasilnya2 = namaHari[va09] + ", " + va07 + "-" + namaBulan[va06] + "-" + va05 + " " + va04 + ":" + va03 + ":" + va08;
	document.getElementById(are0000).innerHTML = hasilnya;
	document.getElementById(are0001).innerHTML = hasilnya2;
	//document.getElementById(are0000).innerText = hasilnya;
	//document.getElementById(are0001).innerText = hasilnya2;
}
