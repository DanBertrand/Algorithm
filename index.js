const fs = require('fs');



class Document {

	constructor(file, countComparison = 0){
		this.file = file;
		this.countComparison = countComparison;
	}

	bubbleSort (string) {
	  let swapped = false
	  const array = string.split(' ').map(Number);
	  let count = 0;

	  for (let i = 1; i < array.length - 1; i++) {
	    swapped = false

	    for (let j = 0; j < array.length - i; j++) {
	      if (array[j + 1] < array[j]) {
	        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
	        swapped = true
	        count += 1;
	      }
	    }

	    if (!swapped) {
	      return array 
	    }
	  }

	  return [array,  count]
	}



};



readFile = (file) => {
	fs.readFile(file, 'utf8', (error, data) => {
	    if (error) {
	        console.error(error.message);
	        return ;
	    }
	    console.log(data);
	    console.log(`Tri à bulles: ${myDocument.bubbleSort(data)[1]} comparisons - [${myDocument.bubbleSort(data)[0]}]`);
	});
}




const myDocument = new Document(process.argv[2])
readFile(myDocument.file)








