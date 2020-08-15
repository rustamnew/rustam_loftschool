/* 1 задача. ОК

const string = "Привет! Как дела?";

function getVowels(stringToFilter) {
    extractedVowels = "";
    for (let i = 0; i < stringToFilter.length; i++) {
        let currentLetter = stringToFilter[i];

        if(currentLetter == 'и' || currentLetter == 'е' || currentLetter == 'а') {
            extractedVowels += currentLetter; 
        }
    }

    return extractedVowels;
}

console.log(getVowels(string));

*/



/* 2 задача ОК
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

var getWorthyWorkers = (workersArray) => {
    var WorthyWorkers = [];

    workersArray.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            WorthyWorkers.push(currentWorker.name)
        }
    });

    return WorthyWorkers;
}

console.log(getWorthyWorkers(workers));
*/


/* 3 задача ОК
const path = "/users/download/index.html"

var isHtml = (string) => {
    pathEnd = string.length - 5;
    if (string.slice(pathEnd) == '.html') {
        return true
    } else {
        return false
    }
}

console.log(isHtml(path))
*/


    


      