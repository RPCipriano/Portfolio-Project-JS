const messageTimeOfDay = ['NOW!', 'TOMMOROW!', 'ONE DAY!', 'YESTERDAY!', 'IN THE FUTURE', ]; // Array with elements to input in part of the Messsage refered to Time of the Day
const messageAction = ['LET IT GO!', 'CATCH THE MOMENT!','ENJOY!', 'LET GO DECIDE!', 'UPS!' ];  // Array with elements to input in part od the Message refered to Action
const messageAdvice = ['IT\' BETTER!', 'TRUST ME!', 'LIFE IS GOOD!', 'GO AFTER IT!' ]; // Array with elements to input in part of the Message refered to Advice
const messageArr = []; // array to store the parts value and later randomise each part. Just to get more chances!

const randomiseParts = () => {
    const part1 = messageTimeOfDay[Math.floor(Math.random()*(messageTimeOfDay.length-1))];
    const part2 = messageAction[Math.floor(Math.random()*(messageAction.length-1))];
    const part3 = messageAdvice[Math.floor(Math.random()*(messageAdvice.length-1))];
    return `Your random message NOW is: ${part1} ${part2} ${part3}`;
};

console.log(randomiseParts());
