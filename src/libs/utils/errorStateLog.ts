const errorStateLog = (fieldErrors: any, errorState: any) => {
    // console.log(fieldErrors)
    for (let fieldError in fieldErrors) {
        // console.log(fieldError)
        if (fieldError == 'authorize'){
            errorState[fieldError].errorFlag = 'form-error-checkbox'
        } else {
            errorState[fieldError].errorFlag = 'form-error-field'
        }
        errorState[fieldError].errorMessages = fieldErrors[fieldError]
    }
    // console.log(errorState)
    return errorState
}

export default errorStateLog