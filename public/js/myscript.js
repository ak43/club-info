function filterByClubName() {
    let filter = document.querySelector('#txtClubName').value.toUpperCase();
    let table = document.getElementsByClassName('table')[0];
    let tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        // GET cell of the filtering column - club name
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filterByCountry() {
    let filter = document.querySelector('#txtCountry').value.toUpperCase();
    let table = document.getElementsByClassName('table')[0];
    let tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        // GET cell of the filtering column - country
        td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}