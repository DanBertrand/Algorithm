class Document {
    constructor(file, countComparison = 0) {
        this.file = file;
        this.countComparison = countComparison;
    };

    stringToArray(string) {
        const array = string.split(' ').map(Number);
        return array
    };

    bubbleSort(string) {
        let swapped = false
        const array = this.stringToArray(string);
        this.countComparison = 0;

        for (let i = 1; i < array.length; i++) {
            swapped = false

            for (let j = 0; j < array.length - i; j++) {
                this.countComparison += 1;
                if (array[j + 1] < array[j]) {;
                    [array[j], array[j + 1]] = [array[j + 1], array[j]]
                    swapped = true
                }
            }
            if (!swapped) {
                return array
            }
        }
        return array
    };

    insertionSort(string) {
        let array = this.stringToArray(string);
        this.countComparison = 0;
        let length = array.length;
        for (let i = 1; i < length; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
                this.countComparison += 1;
            }
            array[j + 1] = key;
        }
        return array;
    };

    selectionSort(string) {
        this.countComparison = 0;
        let array = this.stringToArray(string);
        let len = array.length;
        for (let i = 0; i < len; i++) {
            let min = i;
            for (let j = i + 1; j < len; j++) {
                this.countComparison += 1;
                if (array[min] > array[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = array[i];
                array[i] = array[min];
                array[min] = tmp;
            }
        }
        return array;
    };

    quickSort(array) {
        if (array.length < 2) {
            return array;
        }
        var pivot = array[0];
        var lesserArray = [];
        var greaterArray = [];
        for (var i = 1; i < array.length; i++) {
            this.countComparison += 1;
            if (array[i] > pivot) {
                greaterArray.push(array[i]);
            } else {
                lesserArray.push(array[i]);
            }
        };
        return this.quickSort(lesserArray).concat(pivot, this.quickSort(greaterArray));
    };

};

comapareSorting = (file) => {
    if (file == undefined) { console.log("Please call a valid file after calling index.js") } else {
        const fs = require('fs');
        fs.readFile(file, 'utf8', (error, data) => {
            if (error) {
                console.error(error.message);
                return;
            }
            console.log(data);
            myDocument.bubbleSort(data)
            console.log(`Tri à bulles:           ${myDocument.countComparison} comparisons - [${myDocument.bubbleSort(data)}]`);
            myDocument.insertionSort(data)
            console.log(`Tri par insertion:      ${myDocument.countComparison} comparisons - [${myDocument.insertionSort(data)}]`);
            myDocument.selectionSort(data)
            console.log(`Tri par selection:      ${myDocument.countComparison} comparisons - [${myDocument.selectionSort(data)}]`);
            let array = myDocument.stringToArray(data);
            myDocument.countComparison = 0;
            myDocument.quickSort(array)
            console.log(`Tri rapide (recursion): ${myDocument.countComparison} comparisons - [${myDocument.quickSort(array)}]`);
        });
    }
};

const myDocument = new Document(process.argv[2]);
comapareSorting(myDocument.file);