// The goal here is to write a reuseable function that I can call any time to generate a random number 
// using RANDOM.org, I will pass it the highest range of the number and it will make the call and return the result.
// if I call getRndNum and pass it 6, it will be like rolling a D6
// if I call getRndNum and pass it 100, it will be like rolling percentile, and so on


//Below is the url for the Integer Generator, its parameters are:
// num - the number of integers requested
// min - the smallest value allowed for each integer
// max - the largest value allowed for each integer
// col - the # of columns in which the integers will be arranged
// base - the base used to print the numbers, i.e. base 2 is binary, base 10 decimal, etc
// format - the type of document for the response, html comes back as XHTML, plain comes back as plain text
// rnd - the randomization to use to generate the numbers, new is prefered

// "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"


//this is the url for the Quota Checker, which allows you to examine the current RANDOM.org quota at any time.
//The quota system works on the basis of IP addresses. Each IP address has a base quota of 1,000,000 bits. 
//When your client makes a request for random numbers (or strings, etc.), the server deducts the number of
//bits it took to satisfy your request from the quota associated with your client's IP address.

const fetch = require('node-fetch');
const { response } = require('express');

const quotaURL = "https://www.random.org/quota/?format=plaim"


async function getRndNum (maxNum) {

    //let mainParsed = 0;
    const rollURL = "https://www.random.org/integers/?num=1&min=1&max=" + String(maxNum) + "&col=1&base=10&format=plain&rnd=new";

    let response = await fetch(rollURL);
    let data = await response.text();
    let parsedNum = parseInt(data[0]);

    //let quotaResponse = await fetch(quotaURL);        //possible code for gettin back the quota amount
    //console.log(quotaResponse)

    return parsedNum
}

module.exports = {
    getRndNum: getRndNum
  }

//btnRandomRoll.addEventListener('click', clickRollBtn);