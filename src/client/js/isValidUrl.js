function isValidUrl(input) {

    var urlPattern = /^(https?:\/\/)/;

    return urlPattern.test(input);

}

export { isValidUrl }