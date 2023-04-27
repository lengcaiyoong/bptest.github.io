fetch('textdetails.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('file-content').innerText = data;
  });