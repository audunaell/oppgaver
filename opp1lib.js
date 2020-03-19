// JavaScript source code
function isDateValid(theDate) {
    var ListInp = theDate.split('').join('');
    var collectnr = ListInp[0] + ListInp[1] + ListInp[3] + ListInp[4] + ListInp[6] + ListInp[7] + ListInp[8] + ListInp[9];
    

    if (ListInp.length == 10 && ListInp[2] == '.' && ListInp[5] == '.' && isNaN(collectnr) == false) {

        var daysGet = ListInp[0] + ListInp[1];
        var mntGet = ListInp[3] + ListInp[4];
        var yearGet = ListInp[6] + ListInp[7] + ListInp[8] + ListInp[9];

        var theDay = parseInt(daysGet);
        var theMnt = parseInt(mntGet);
        var theYear = parseInt(yearGet);

        var yearCheck = isLeapYear(theYear);
        return (theMnt == 2 && theDay == 29 && yearCheck == true || theDay > 0 && theDay < 32 && theMnt == 1 || theDay > 0 && theDay < 29 && theMnt == 2
            || theDay > 0 && theDay < 32 && theMnt == 3 || theDay > 0 && theDay < 31 && theMnt == 4 || theDay > 0 && theDay < 32 && theMnt == 5
            || theDay > 0 && theDay < 31 && theMnt == 6 || theDay > 0 && theDay < 32 && theMnt == 7 || theDay > 0 && theDay < 32 && theMnt == 8
            || theDay > 0 && theDay < 31 && theMnt == 9 || theDay > 0 && theDay < 32 && theMnt == 10
            || theDay > 0 && theDay < 31 && theMnt == 11 || theDay > 0 && theDay < 32 && theMnt == 12);
    } else {
        return false;
    }
}


function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}