class ApiResponse {
    constructor(statusCode,data,message="succes"){
        this.statusCode=statusCode
        this.data =data
        this.message=message
        this.success=statusCode < 400
    }
}





//1. The ApiResponse class is meant to represent the response format for API responses.
//2. The constructor method takes parameters to initialize the properties of the response instance.
//3. The statusCode property represents the HTTP status code of the response.
//4.The data property is used to store the actual data of the response.
//5. The message property is a default success message, but it can be customized if needed.
//6. The success property is determined based on whether the statusCode is less than 400. If the status code is less than 400, it's considered a success.