// Defines the maximum amount of seconds a cookie will be looked for. This will delay the writing of SourceTrak to the page, increasing the chance of a phone number "Flicker".
var seconds_to_check_for_cookies = 5; // In seconds
// Sets the counters for the async cookie check, and the async writing of ST to the page.
var stWriteAttempts = 0;
// Function to asynchronously check for the existence of cookies.
var checkAsyncCookie = function (cookieName, value_or_id, cookieCheckAttempts) {
	if (cookieCheckAttempts >= seconds_to_check_for_cookies) {
		return; //could also handle this
	} else if (Cookies.get(cookieName)) {
		var retrievedValue = Cookies.get(cookieName);
		console.log('Found cookie:' + cookieName + ' Value: ' + retrievedValue);
		if (value_or_id == 1) {
			_st_custom_value = retrievedValue;
		} else if (value_or_id == 2) {
			_st_custom_id = retrievedValue;
		}
		return;
	} else {
		console.log('Attempt #' + cookieCheckAttempts + ' to find cookie: ' + cookieName + ' - NOT FOUND');
		cookieCheckAttempts++;
		setTimeout(function () {
			checkAsyncCookie(cookieName, value_or_id, cookieCheckAttempts);
		}, 1000)
	}
}
// Function to write SourceTrak to the page after the cookies are done checking.
var writeSTAfterCookieCheck = function () {
	var my_st_custom_id = _st_custom_id;
	var my_st_custom_value = _st_custom_value;
	if ((stWriteAttempts > seconds_to_check_for_cookies + 1) || (my_st_custom_id && my_st_custom_value)) {
		console.log('ST written to page. Captured Cookies:');
		console.log('_st_custom_value: ' + my_st_custom_value);
		console.log('_st_custom_id: ' + my_st_custom_id);
		(function () {
			var a = document,
				b = a.createElement("script");
			b.type = "text/javascript";
			b.async = !0;
			b.src = ('https:' == document.location.protocol ? 'https://' :
				'http://') + 'd31y97ze264gaa.cloudfront.net/assets/st/js/st.js';
			a = a.getElementsByTagName("script")[0];
			a.parentNode.insertBefore(b, a);
		})();
		return;
	} else {
		stWriteAttempts++;
		setTimeout(function () {
			writeSTAfterCookieCheck();
		}, 1000)
	}
};
// Function to check for the existence of the SourceTrak cookie on an initial page visit to determine if this is a new visitor.
var checkIfNewVisitor = function () {
	if (Cookies.get('_st')) {
		console.log('');
		console.log("-- SourceTrak Test Results --");
		console.log("NOTICE: Not a new SourceTrak visitor. A call may not reflect the Custom ID and Custom Value output by this script as this visitor has already been attributed.");
		console.log('');
	} else {
		console.log('');
		console.log("-- SourceTrak Test Results --");
		console.log("Success: New visitor.");
		console.log('');
	}
	return;
}
// Function to create a test cookie between 1-3 seconds after the function is invoked
var createTestCookie = function (testCookieName, delay) {
	var randValue = Math.floor(Math.random() * 10000);
	console.log('Test cookie ' + testCookieName + ' will create in ' + delay + ' second(s) with a value of ' + randValue);
	setTimeout(
		function () {
			Cookies.set(testCookieName, randValue);
		}, delay * 1000);
}