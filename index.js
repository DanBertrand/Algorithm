const fs = require('fs');



class Document {

	constructor(file, countComparison = 0){
		this.file = file;
		this.countComparison = countComparison;
	}


	stringToArray(string) {
		const array = string.split(' ').map(Number);
		return array
	}

	bubbleSort (string) {
	  let swapped = false
	  const array = this.stringToArray(string);
	  this.countComparison = 0;

	  for (let i = 1; i < array.length - 1; i++) {
	    swapped = false

	    for (let j = 0; j < array.length - i; j++) {
	      if (array[j + 1] < array[j]) {
	        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
	        swapped = true
	        this.countComparison += 1;
	      }
	    }

	    if (!swapped) {
	      return array 
	    }
	  }

	  return array
	}

	insertionSort (string) {
	  let nums = this.stringToArray(string);
	  this.countComparison = 0;
	  for (let i = 1; i < nums.length; i++) {
	    let j = i - 1
	    let tmp = nums[i]
	    while (j >= 0 && nums[j] > tmp) {
	      nums[j + 1] = nums[j]
	      j--
	    }
	    nums[j+1] = tmp
	    this.countComparison += 1;
	  }
	  return nums
	}

};



readFile = (file) => {
	fs.readFile(file, 'utf8', (error, data) => {
	    if (error) {
	        console.error(error.message);
	        return ;
	    }
	    console.log(data);
	    myDocument.bubbleSort(data)
	    console.log(`Tri à bulles: ${myDocument.countComparison} comparisons - [${myDocument.bubbleSort(data)}]`);
	    myDocument.insertionSort(data)
	    console.log(`Tri par insertion: ${myDocument.countComparison} comparisons - [${myDocument.insertionSort(data)}]`);
	});
}




const myDocument = new Document(process.argv[2])
readFile(myDocument.file)








