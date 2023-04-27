// Fetch the contents of the text file
fetch('textdetails.txt')
  .then(response => response.text())
  .then(data => {
    // Parse the text content into an array
    const dataArray = data.split(',');

    // Create a table element
    const table = document.getElementById('my-table');

    // Add rows and cells to the table
    for (let i = 0; i < dataArray.length; i++) {
      const row = table.insertRow();
      const cell = row.insertCell();
      cell.innerText = dataArray[i];
    }

    // Add a click event listener to the button
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click', () => {
      const tableData = table.innerText;
      navigator.clipboard.writeText(tableData);
      alert('Table data copied to clipboard!');
    });
  });
