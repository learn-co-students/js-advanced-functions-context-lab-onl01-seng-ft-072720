/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    return arr.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let timeIn = this.timeInEvents.find(event => {
        return event.date === dateStamp
    })
    let timeOut = this.timeOutEvents.find(event => {
        return event.date === dateStamp
    })
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(dateStamp) {
    let pay = parseInt(this.payPerHour)
    return hoursWorkedOnDate.call(this, dateStamp) * pay
}



function findEmployeeByFirstName(srcArray, firstName) {
    const person = srcArray.find(employee => employee.firstName === firstName)
    return person
}

function calculatePayroll(employeeRecords) {
    const reducer = (acc, current) => acc + allWagesFor.call(current)
    let payroll = employeeRecords.reduce(reducer, 0)
    return payroll
}
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

