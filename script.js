// Fetch the contents of the text file
fetch('textdetails2.txt')
  .then(response => response.text())
  .then(data => {
    // Parse the text content into an array
    const dataArray = data.split('\n').map(row => row.split(','));

    // Create a table element
    const table = document.getElementById('my-table');

    // Add rows and cells to the table
    for (let i = 0; i < dataArray.length; i++) {
      const row = table.insertRow();

      // Add a button cell to the first column
      const buttonCell = row.insertCell();
      const copyBtn = document.createElement('button');
      copyBtn.innerText = 'Copy';
      copyBtn.addEventListener('click', () => {
        const rowData = dataArray[i].join('\t');
        navigator.clipboard.writeText(rowData);
        //alert('Row data copied to clipboard!');
      });
        console.log('copied');
      buttonCell.appendChild(copyBtn);

      // Add the remaining data cells to the row
      for (let j = 0; j < 3; j++) {
        const cell = row.insertCell();
        cell.innerText = dataArray[i][j];
      }
    }
  });
