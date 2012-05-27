var testScript = function() {
	/* WRITE CUSTOM SCRIPT HERE */
}

console.log('Loading a web page');
var page = new WebPage();
var url = "http://www.phantomjs.org/";
page.open(url, function (status) {
	//Page is loaded!
	console.log("CALLING TEST SCRIPT...!");
	testScript();
	console.log("TEST SCRIPT COMPLETED");
	phantom.exit();
});
