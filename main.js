//Input: Array of Integers
//Expected output: Array of Strings

// Words 
var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

//Stores argument in the nums
var nums = process.argv.slice(2);

//Stores final output
var output = [];


//function to get sub output for each element in array
function getSubOutput(num) {
    //Checking for exception case where if input array consist of number less than 0, then code will remove it from array
    if (num < 0) {
        //throws error when negative integer found
        throw new Error("Negative Integer found in the array. Please Try Again");
    }
    else {
        word = ""
        for (let j = 0; j < num.length; j++) {
            word = word + words[num[j]];
        }
        output.push(word)
    }
}

//Handle Exceptions by try catch block
try {
    //checks for length of input array if array is not empty then checks for exceptions
    if (nums.length > 0) {
        //loops through elements of input array
        nums.forEach(num => {
            getSubOutput(num);
        });
        //Prints output in stdout
        // Output variable stores array of strings
        console.log(output);
    } else {
        //if array is empty 
        process.stdout.write("Size of Input is 0");
    }

}
catch (error) {
    process.stdout.write(error.message);
}
