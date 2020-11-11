/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// Your code here

stuff = ["Mark", "Ruffalo", "Boss", 12]

//This works, the test is just ignorant
function createEmployeeRecordMyWay(array) {
    const [firstName, familyName, title, payPerHour] = array
    employeeRecord = {}
    employeeRecord.firstName = firstName
    employeeRecord.familyName = familyName
    employeeRecord.title = title
    employeeRecord.payPerHour = payPerHour
    employeeRecord.timeInEvents = []
    employeeRecord.timeOutEvents = []
    return employeeRecord
}

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

let mark = createEmployeeRecord(stuff);
let mark2 = createEmployeeRecordMyWay(stuff);


function createEmployeeRecords(arrays) {
    return arrays.map((e) => createEmployeeRecord(e))
}

function createTimeInEvent(date) {
    let parsedDate = date.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(parsedDate[1]),
        date: parsedDate[0]
    })

    return this
}

function createTimeOutEvent(date) {
    let parsedDate = date.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(parsedDate[1]),
        date: parsedDate[0]
    })

    return this
}

function hoursWorkedOnDate(date) {
    let inDate = this.timeInEvents.find(e => e.date === date)
    let outDate = this.timeOutEvents.find(e => e.date === date)
    
    let hoursWorked = outDate.hour - inDate.hour

    return hoursWorked / 100
}

function wagesEarnedOnDate(date) {
    let payOwed = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return payOwed
}

function allWagesFor() {
    let eligibleDates = this.timeInEvents.map((e) => e.date);

    let payable = eligibleDates.reduce((memo, d) => {
        return memo + wagesEarnedOnDate.call(this, d)
    }, 0)

    return payable
};

function findEmployeeByFirstName(array, firstName) {
    let foundEmployee = array.find(e => e.firstName === firstName)
    return foundEmployee ? foundEmployee : undefined
}

function calculatePayroll(array) {
    let allPay = array.map(function(e){
        // console.log(allWagesFor(e))
        return allWagesFor.call(e)
    })
        console.log(allPay)
    
    let companyWidePayOwed = allPay.reduce((accumlator, pay) => {
        // console.log(accumlator, pay)
         return accumlator + pay;
    }, 0)
         
    return companyWidePayOwed
}