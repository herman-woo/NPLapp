function checkForURL(inputText) {
    if (inputText === 'OK'){
        console.log(inputText)
        return true
    }
    else{
        alert(inputText)
        return false
    }
}

export { checkForURL }
