function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function remBudgCal(credit, debit){
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let monthDays = daysInMonth(month, year);

    let dailyBudg = credit/(monthDays-date);
    return dailyBudg - debit;
}

function correspRemark(bal){
    if(bal < 0){
        var remark = 'You Exceded Your Daily Budget';
        return remark;
    }
    else if(bal = 0){
        var remark = 'You have completely consumed your Daily Budget';
        return remark;
    }
    else{
        var remark = 'You have Rs. ' + bal + ' remaining in your daily budget';
        return remark;
    }
}