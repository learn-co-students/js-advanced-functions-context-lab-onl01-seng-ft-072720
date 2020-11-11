/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employees) {
    return {
        firstName: employees[0],
        familyName: employees[1],
        title: employees[2],
        payPerHour: employees[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employee) {
    return employee.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(time) {
    const [date, hour] = time.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        date: date, 
        hour: parseInt(hour, 10)
    })
    return this
}

function createTimeOutEvent(time) {
    let [date, hour] = time.split(" ")
    
        this.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour, 10),
            date: date
        })
        return this
    }

function hoursWorkedOnDate(date) {
    let timeOut = this.timeOutEvents.find(function(e) {
        return e.date === date
    })

    let clockIn = this.timeInEvents.find(function(e) {
        return e.date === date
    })
    return (timeOut.hour - clockIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
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

function calculatePayroll(employees) {
    return employees.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
}

function findEmployeeByFirstName(source, name) {
    return source.find(record => record.firstName === name)
}