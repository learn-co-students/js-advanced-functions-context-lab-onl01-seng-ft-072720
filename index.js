/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(row) {
    return {
    firstName: row[0],
    familyName: row[1],
    title: row[2],
    payPerHour: row[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

function createEmployeeRecords(rowData) {
    return rowData.map(function(row) {
        return createEmployeeRecord(row)
    })

}

function createTimeInEvent(timeStamp) {
    let [date, hour] = timeStamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function createTimeOutEvent(timeStamp) {
    let [date, hour] = timeStamp.split(" ")

        this.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour, 10),
            date: date
        })
        return this
    }

function hoursWorkedOnDate(specificDate) {
    let out = this.timeOutEvents.find(function(e){
        return e.date === specificDate
    })

    let inEvent = this.timeInEvents.find(function(e){
        return e.date === specificDate
    })

    return (out.hour - inEvent.hour) / 100

}

function wagesEarnedOnDate(specificDate) {
    return hoursWorkedOnDate.call(this, specificDate) * this.payPerHour
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

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    },0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function (empRec) {
        return empRec.firstName === firstName
    })
}