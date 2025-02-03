import errorStateLog from "./errorStateLog";

const formErrorHandlingFull = (error: any, errorState: any, defaultError: string[]) => {
    // console.log(errorState)
    let errors: any = {};
    if(error?.flatten){
        let fieldErrors = error.flatten().fieldErrors;
        // console.log(fieldErrors)
        // console.log(Object.keys(fieldErrors).length)
        errors['numErrors'] = Object.keys(fieldErrors).length;
        errors['errorState'] = errorStateLog(fieldErrors, errorState);
        // console.log(errorState)

    } else if(error?.serversideValidationErrors){
        errors['errorState'] = errorStateLog(error.serversideValidationErrors, errorState);
        errors['numErrors'] = 1;
    } else if(error?.apiError){
        errors['errorState'] = errorStateLog(error.apiError, errorState);
        errors['numErrors'] = 1;
    } else {
        errors['errorState'] = errorStateLog({
            general: defaultError
        }, errorState);
        errors['numErrors'] = 1;
    }
    return errors
}

export default formErrorHandlingFull
