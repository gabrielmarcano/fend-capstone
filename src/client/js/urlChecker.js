function checkUrlInput(url) {
    // RegEx to check the valid URL
    // const regex = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&amp;=]*)?/
    const validUrl = /^[^http(s)?:\/\/]([\w-]+\.)+[\w-]+(\/[\w- .\/?%&amp;=]*)?/

    if (!validUrl.test(url)) {
        alert('Introduce a valid URL. The URL should not contain HTTP or HTTPS')
        throw Error('The introduced URL is not valid. The URL must not contain HTTP or HTTPS')
    }

    return !!validUrl.test(url)
}

export { checkUrlInput }
