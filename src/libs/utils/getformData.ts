const getformData = (target: any) => {
    const formData = new FormData(target);
    // console.log(formData)
    const formDataFinal: any = {};
    for (let field of formData) {
        const [key, value] = field;
        formDataFinal[key] = value;
    }
    return formDataFinal
}

export default getformData