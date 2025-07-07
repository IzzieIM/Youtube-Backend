const asyncHander = (requestHandler) => {
    (req , res , next) => {
        Promise.resolve(requestHandler(req ,res , next)).catch((error) => next(error))

    }

}

export {asyncHander}