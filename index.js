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

function createEmployeeRecord(arr) {
    let result = {}

   return Object.assign(result, {firstName: arr[0], familyName: arr[1], title: arr[2], payPerHour: arr[3], timeInEvents: [],timeOutEvents: [] })
}

function createEmployeeRecords(arr) {
    let result = []
    for(const ar of arr) {
        let a = createEmployeeRecord(ar)
        result.push(a)
    }
    return result
}

function createTimeInEvent(date) {
    // console.log("date", date, "date_this", this)
    let timeEv = exDate(date)
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(timeEv[1]), date: timeEv[0]})
    return this
}

function createTimeOutEvent(date) {
    let timeEv = exDate(date)
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(timeEv[1]), date: timeEv[0]})
    return this
}

function exDate(date) {
    let hour = date.split(' ')
    return hour 
}

function hoursWorkedOnDate(date) {
    let result;
    let dayIn = this.timeInEvents.find(key => key.date==date)
    let dayOut= this.timeOutEvents.find(key => key.date==date)
     result = dayOut.hour - dayIn.hour
     return result / 100 
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    let pay = this.payPerHour
 //   console.log("hours: ", hours, "pay: ", pay)
        return hours * pay
}

function findEmployeeByFirstName(srcArray, name) {
    console.log("1st Name = ", name)
    console.log(srcArray)
    console.log(srcArray.find(person => person.firstName === name))
  return srcArray.find(person => person.firstName === name);
}

function calculatePayroll(arr) {
    //console.log(arr)
    let subTotal = [];
    for(let empl of arr) {
        let empPay = allWagesFor.call(empl)
        subTotal.push(empPay)
    }
    //console.log(subTotal)
    return subTotal.reduce((prev, next) => prev + next, 0);
}