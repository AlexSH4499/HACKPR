 createSelector()
{
	//var csv = document.getElementById("CSV");
	var myDiv = document.getElementById("optionSelector");
	
	//Array of options to be added
	//var array = createArray(csv);//we need to populate the array with table data
	var array = ['T-Bone steak', 'Ground beef','Sausage', 'Frying Chicken'];
	//Create selector
	var selectList = document.createElement("select");
	selectList.id = "mySelect";
	myDiv.appendChild(selectList);

	//Create and append the options
	for(var i = 0; i < array.length;i++)
	{
		var option = document.createElement("option");
		option.value = array[i]; 
		option.text = array[i];
		selectList.appendChild(option);
	}

/*	window.onload = function() {
		  document.body.appendChild(sel);
};
*/
}

$(createArray(csv)
{
	var array= $.csv.toArrays(csv);
	return array;
});