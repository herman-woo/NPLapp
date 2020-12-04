//function that is fired when submit button is hit
function handleSubmit(event) {
    event.preventDefault()
    // check what text was in the form field element
    let formURL = document.getElementById('website').value

    //URL constants
    const pathURL = "https://api.meaningcloud.com/sentiment-2.1?key="
    const tagURL = "&of=json&lang=en&url="
    //get API key from node
    fetch('\all')
        .then(res => {
        return res.json()
            })
        .then(function(data) {
            const APIkey = String(data.application_key)
            const linkURL = pathURL+APIkey+tagURL+formURL
            return fetch(linkURL)//get info from API
           })
        .then(res => {
            return res.json()
                })
        .then(function(data){
        const status = data.status.msg;
        const subjectivity = data.subjectivity;
        Client.checkForURL(status)
        if (subjectivity === "undefined"){
            document.getElementById('results').innerHTML =`Invalid URL`
        }
        else{
            document.getElementById('results').innerHTML =`The subjectivity of this webpage(${formURL}) is: ${data.subjectivity}`
        }
    })
}

function testingJestFunction(inputNumber) {
    let output = inputNumber + 5
    return output
}

export { handleSubmit }
export { testingJestFunction }