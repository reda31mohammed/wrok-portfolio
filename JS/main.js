const footerDate = document.getElementById("date");
console.log(footerDate);

const year = new Date().getFullYear();
console.log(year);
footerDate.textContent = year;
