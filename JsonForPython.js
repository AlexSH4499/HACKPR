var arr = ["a","b",,,"e"];

/*
console.log(arr);
var str = JSON.stringify(arr);
*/
console.log(str);

$.ajax({
	url: http://localhost/cgi-bin/python.cgi",
	type: "POST",
	data: JSON.stringify(arr),/** Object to be transfered*/
	dataType:"text",
	success: funtion(response){
		console.log("Transmiting Successfully");
		console.log(response);
	},
	error: function(){
		alert("request failed");
	}



})