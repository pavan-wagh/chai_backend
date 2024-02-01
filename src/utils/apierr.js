class apierr extends Error {
    constructor(
        statusCode,
        message= "somthing went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode =statusCode
        this.data = null
        this.message=message
        this.success = false;
        this.errors=errors
    }

}


export {apierrs}




// It looks like you've defined a class named apierr that extends the built-in Error class in JavaScript. 
// This class is designed to represent API-related errors and includes properties such as statusCode, message, errors, stack, data, and success.