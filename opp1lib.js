// JavaScript source code
function isDateValid(theDate) {
    var ListInp = theDate.split('').join('');
    var collectnr = ListInp[0] + ListInp[1] + ListInp[3] + ListInp[4] + ListInp[6] + ListInp[7] + ListInp[8] + ListInp[9];
    var inputL = ListInp.length;

    var InputLenght = checkInputLenght(inputL, collectnr);
    var dividedTest = checkifdivided(ListInp[2], ListInp[5]);
    var daysGet = ListInp[0] + ListInp[1];
    var mntGet = ListInp[3] + ListInp[4];
    var yearGet = ListInp[6] + ListInp[7] + ListInp[8] + ListInp[9];

    var theDay = parseInt(daysGet);
    var theMnt = parseInt(mntGet);
    var theYear = parseInt(yearGet);

    var daycheck = checkday(theDay, theMnt, theYear);
    var monthCheck = checkmnt(theMnt);
    var yearCheck = checkYear(yearGet);

    return (InputLenght == true && dividedTest == true && daycheck == true && monthCheck == true && yearCheck == true);

}

function checkInputLenght(inputLenght, checkifnumber) {
    return (inputLenght == 10 && isNaN(checkifnumber) == false);
}

function checkifdivided(spot3, spot6) {
    return (spot3 == '.' && spot6 == '.');
}

function checkday(day, month, year) {
    var LeapyearCheck = isLeapYear(year);

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        return (day > 0 && day <= 31);
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        return (day > 0 && day <= 30);
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        return (day > 0 && day <= 30);
    } else if (month == 2) {
        return (day > 0 && day <= 29 && LeapyearCheck == true || day > 0 && day <= 28);
    }
}

function checkYear(year) {
    return (year.length === 4 && year >= '0000' && year <= '9999');
}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function checkmnt(month) {
    return (month > 0 && month <= 12);
}
