
/*Basic script for creating the dynamic table*/

function createTable()
{
	var table = document.getElementById("tableID");

	var row  = table.insertRow(0);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	//Add some text to the new cells;
	cell1.innerHTML = "NEW CELL1";
	cell2.innerHTML = "NEW CELL2";
}

$(function deleteRow()
{

	document.getElementById("tableID").deleteRow(this);//originally 0	

});