const asyncHandler = (requestHandler)=>{
    (req,resp,next)=>{
        Promise.resolve(requestHandler(req,resp,next)).catch((err)=>next(err))
    }

}



export { asyncHandler}



// 1.The 'asyncHandler' function takes a 'requestHandler' function as its parameter.
// 2.It returns a new function that takes three parameters: req (request), resp (response), and next (next middleware function).
// 3.Inside the returned function, Promise.resolve is used to handle the asynchronous execution of the requestHandler function.
// 4.If the requestHandler function resolves successfully, the result is passed to the next middleware function.
// 5.If the requestHandler function throws an error, the error is caught, and it's passed to the next middleware function.