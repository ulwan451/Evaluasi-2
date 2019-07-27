var capitalize = function (string) {
    if (arguments.length === 1) {
        return string.toUpperCase();
    } else {
        return arguments.map(function (el) { return el.toUpperCase(); });
    }
}

document.write(capitalize('string'))