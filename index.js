/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrayOfEmployeeArrays) {
    return arrayOfEmployeeArrays.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(timeString) {
    let [date, hour] = timeString.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date,
    })

    return this
}

function createTimeOutEvent(timeString) {
    let [date, hour] = timeString.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date,
    })

    return this
}

function hoursWorkedOnDate(dateString) {
    let timeInObj = this.timeInEvents.find(e => e.date == dateFromString(dateString));
    let timeOutObj = this.timeOutEvents.find(e => e.date == dateFromString(dateString));
    
    if (timeInObj && timeOutObj) {
        return (timeOutObj.hour - timeInObj.hour)/100
    } else {
        return "Employee did not work that day"
    }
}

function wagesEarnedOnDate(dateString) {
    return hoursWorkedOnDate.call(this, dateString)*this.payPerHour
}

function dateFromString(dateString) {
    return dateString.slice(0,10)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => (employee.firstName == firstName))
}

function calculatePayroll(srcArray) {
    return srcArray.reduce((accumulator, currentValue) => (accumulator + allWagesFor.call(currentValue)), 0)
}