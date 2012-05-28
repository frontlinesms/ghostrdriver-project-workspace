var testScript = function(page) {
	/* WRITE CUSTOM SCRIPT HERE */
	var cookieString = page.evaluate(function() {
		return document.cookie;
	});
	console.log("COOKIES: " + cookieString);

	var cookies = [];
	var p = cookieString.split(";");
	for(i=p.length-1;i>=0;--i) {
		var q = p[i].split("=");
		cookies.push({key:q[0], value:q[1]});
	}

	for(i=0;i<cookies.length;++i) {
		var cookie = cookies[i];
		console.log("Cookie: " + cookie.key + "->" + cookie.value);
	}
}

console.log('Loading a web page');
var page = new WebPage();
var url = "http://www.phantomjs.org/";
page.open(url, function (status) {
	//Page is loaded!
	console.log("CALLING TEST SCRIPT...!");
	testScript(page);
	console.log("TEST SCRIPT COMPLETED");
	phantom.exit();
});
