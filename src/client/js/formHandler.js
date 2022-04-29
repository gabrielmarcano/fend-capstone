function handleSubmit(event) {
    event.preventDefault()

    // get the url that was put into the form field
    let formInput = document.getElementById('name').value

    // If the input is empty, throw error
    if (!formInput) throw Error('The form should not be empty')
    
    // Check for valid URL
    if (!Client.checkUrlInput(formInput)) {
        alert('Introduce a valid URL. The URL should contain HTTP or HTTPS')
        throw Error('The introduced URL is not valid. The URL must contain HTTP or HTTPS')
    }

    console.log("Form Submitted with a valid URL")

    fetch('http://localhost:8081/request')
    .then(res => res.json())
    .then(res => {
        fetch(res.url+`&url=${formInput}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
            document.getElementById('model').innerHTML = `Model: ${res.model}`
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
            document.getElementById('score').innerHTML = `Score Tag: ${res.score_tag}`
        })
    })
}

export { handleSubmit }
