class CSVWriter {    
    constructor(objectArr, delimiter) {

        // Ensure default values
        if (delimiter === undefined) delimiter = ',';
        this.objectArr = objectArr;
        
        // Validate inputs
        if (objectArr.length <= 0) throw "objectArr is empty.";

        // Build header 
        let firstObj = objectArr[0];
        this.headers = [];
        for (let prop in firstObj) {
            this.headers.push(prop);
        }
        
        // Add quotation marks to header
        this.headers = this.headers.map(function(el) {
            return '"' + el + '"';
        }); 

        // console.log(this.headers);
    }   
    
    write() { 

        let file = '';

        // build header 
        file = this.headers.join(this.delimiter);

        // build content
        for (let i = 0; i < this.objectArr.length; i++) {
            let obj = this.objectArr[i];
            let valueArr = [];
            for (let prop in obj) {
                let value = obj[prop];
                valueArr.push(value);
            }

            // Add quotation marks to value
            valueArr = valueArr.map(function(el) {
                return '"' + el + '"';
            }); 
            
            let line = '\n' + valueArr.join(this.delimiter);
            file += line;
        }

        return file;
    }

}

module.exports = CSVWriter;
