//Now we will write the code, by which we can dynamically add the Rows in our Table. 
//So when we click on the Add List Button, a new row will be dynamically generated with a TextBox and a CheckBox Control:
// For this we will write the code on the click event of the Add Button Like this:

function addList(myTable) {

  // Find a <table> element with id="myTable":
  var table = document.getElementById(myTable);

  // Create an empty <tr> element and add it to the 1st position of the table:
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var b = document.getElementById('txt1').value;
  var cell1 = row.insertCell(0);
  var element1 = document.createElement("input");

  //Adding The styling.
  element1.type = "text";
  element1.style.width = "100%";
  element1.name = "txtbox[]";
  element1.value = b;
  cell1.appendChild(element1);
  
// Add some text to the new cells:
//Now we will write the code, by which we can dynamically add the Rows in our Table.
// So when we click on the Add List Button, a new row will be dynamically generated with a TextBox and a CheckBox Control. 
//For this we will write the code on the click event of the Add Button Like this:
  var cell2 = row.insertCell(1);
  var element2 = document.createElement("input");
  element2.type = "checkbox";
  element2.name = "chkbox[]";
  cell2.appendChild(element2);
  document.getElementById('txt1').value = " ";
  document.getElementById('pTotal').innerHTML = rowCount + 1;
}


//Now we will write the code to delete the items in the list, in order to delete the task we will click on the CheckBox, 
//so wCheckBox and then click on the Delete List Button the task will be deleted. 
//For this, we will write the code in the Delete List Button:

function deleteList(myTable) {

  var table = document.getElementById(myTable);
  var rowCount = table.rows.length;

  for (var i = 0; i < rowCount; i++) {
    var row = table.rows[i];
    var chkbox = row.cells[1].childNodes[0];
    if (null != chkbox && true == chkbox.checked) {
      table.deleteRow(i);
      rowCount--;
      i--;

      document.getElementById('pTotal').innerHTML = rowCount;

      //When we click on the Delete Button the output will be:

    }
  }
}


