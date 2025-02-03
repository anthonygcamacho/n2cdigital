const errorStateReset = (errorState: any) => {
    Object.keys(errorState).forEach(function(key) {
        errorState[key].errorFlag = ''
        errorState[key].errorMessages.length = 0
    });
    return errorState
}

export default errorStateReset
