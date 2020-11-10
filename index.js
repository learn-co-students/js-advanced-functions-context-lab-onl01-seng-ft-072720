/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(emp){
    const employee = {
        firstName: emp[0],
        familyName: emp[1],
        title: emp[2],
        payPerHour: emp[3],
        timeInEvents: [],
        timeOutEvents: []
    }   
    return employee;
}

function createEmployeeRecords(empArr){
    const newArr = empArr.map(e => createEmployeeRecord(e))
    return newArr;

}

function createTimeInEvent(datestamp){
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(datestamp.split(" ")[1],10),
        date: datestamp.split(" ")[0]
    }
    this.timeInEvents.push(timeIn);
    return this;
}

function createTimeOutEvent(datestamp){
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(datestamp.split(" ")[1],10),
        date: datestamp.split(" ")[0]
    }
    this.timeOutEvents.push(timeOut);
    return this;
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(e => e.date === date);
    const timeOut = this.timeOutEvents.find(e => e.date === date);
    const hourIn = timeIn.hour;
    const hourOut = timeOut.hour;
    const hoursWorked = (hourOut - hourIn)/100;
    return hoursWorked;
}

function wagesEarnedOnDate(date){
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(e => e.firstName === firstName)
}

function calculatePayroll(empsArr){
    return empsArr.reduce(function(acc, cur){
        return acc + allWagesFor.call(cur)
    }, 0)
}

