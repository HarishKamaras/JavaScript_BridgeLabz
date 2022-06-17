//UC8
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;
let employeeDailyWageMap = new Map();
let employeeDailyHoursMap = new Map();
// function getWorkingHours(employeeCheck){
//     switch (employeeCheck) {
//         case IS_PART_TIME:
//             return PART_TIME_HOURS;
//         case IS_FULL_TIME:
//             return FULL_TIME_HOURS;
//         default:
//             return 0;
//     }
// }
// let totalEmpHrs = 0;
// let totalWorkingDays = 0;
// while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
//     totalWorkingDays++;
//     employeeCheck = Math.floor(Math.random() * 10) % 3;
//     totalEmpHrs += getWorkingHours(employeeCheck);
// }
// let empWage = totalEmpHrs * WAGE_PER_HOUR;
// console.log("Total Days : "+totalWorkingDays+" Total Hours : "+totalEmpHrs+" Total Employee Wage : " + empWage);
let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let employeeDailyWageArray = new Array();
let dayCounter = 0;
function getWorkingHours(employeeCheck){

    switch (employeeCheck) {

        case IS_PART_TIME:
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            return FULL_TIME_HOURS;

        default:
            return 0;
    }
}

function calculateDailyWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR
}

function totalWage(dailyWage){
    totalEmployeeWage += dailyWage;
}

function totalWageUsingReduce(totalWage, dailyWage){
    return totalWage + dailyWage;
}

function mapDayWithDailyWage(dailyWage){
    dayCounter ++;
    return "Day " + dayCounter + " = " + dailyWage;
}

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

while (totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(employeeCheck);
    totalEmployeeHours += empHrs;
    employeeDailyWageArray.push(calculateDailyWage(empHrs));
    employeeDailyHoursMap.set(totalWorkingDays, empHrs);
    employeeDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
}
console.log("employeeWageArray = "+employeeDailyWageArray);
let totalEmployeeWage = calculateDailyWage(totalEmployeeHours);
console.log("\nTotal Working Days = " + totalWorkingDays + "\nTotal Working Hours = " + totalEmployeeHours + "\nTotal Employee Wage = " + totalEmployeeWage);

//UC - 7A
//Calculating Total Employee Wage Using ForEach
employeeDailyWageArray.forEach(totalWage);
console.log("\nTotal Working Days = " + totalWorkingDays + "\nTotal Working Hours = " + totalEmployeeHours + "\nTotal Employee Wage = " + totalEmployeeWage);

//Calculating Total Employee Wage Using Reduce
console.log("Employee Wage With Reduce : " + employeeDailyWageArray.reduce(totalWageUsingReduce, 0));

//UC - 7B
//Print day along with daily wage
let mapDayWithWageArray = employeeDailyWageArray.map(mapDayWithDailyWage);
console.log("Daily Wage Map : "+mapDayWithWageArray);

//UC - 7C
//Show days when full time Wage of 160 is earned
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("Daily Wage Filter When Full Time Wage Earned : ");
console.log(fullDayWageArray);

//UC - 7D
//Find first occurence when full time wage was eared using find function
console.log("First Full Time Wage was Earned on Day : " + mapDayWithWageArray.find(findFullTimeWage));

//UC - 7E
//Check if every element of full time wage is truely holding full time wage
console.log("Check All Element Have Full Time Wage: " + fullDayWageArray.every(isAllFullTimeWage));
//UC - 7F
//Check if ther eis any Part Time Wages
console.log("Check If Any Part Time Wage: " + mapDayWithWageArray.some(isAnyPartTimeWage));

//UC - 7G
//Find Number of days the Employee Worked
function totalDaysWorked(numberOfDays, dailyWage){
    if(dailyWage > 0)
        return numberOfDays + 1;
    return numberOfDays;
}
console.log("Numbe of Days the Employee has Worked = " + employeeDailyWageArray.reduce(totalDaysWorked, 0));
//UC - 8
console.log(employeeDailyWageMap);
console.log("Employee Wage Map : \nTotal Wage : " + Array.from(employeeDailyWageMap.values()).reduce(totalWageUsingReduce, 0));
//USe Case - 9
const findTotal = (totalValue, dailyValue) => {
    return totalValue + dailyValue;
}
let count = 0;
let totalHours = Array.from(employeeDailyHoursMap.values()).reduce(findTotal, 0);
let totalWages = employeeDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Employee Wage Using Arrow Function : \nTotal Hours : " + totalHours + "\nTotal Employee Wage : " + totalWage);

let nonWorkingDays = new Array();
let partTimeWorkingDays = new Array();
let fullTimeWorkingDays = new Array();
employeeDailyHoursMap.forEach((value, key) => {
    if(value == 8)
        fullTimeWorkingDays.push(key);
    else if(value == 4){
        partTimeWorkingDays.push(key);
    }
    else
        nonWorkingDays.push(key);
});

console.log("Full Working Days : " + fullTimeWorkingDays);
console.log("Part Working Days : " + partTimeWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);