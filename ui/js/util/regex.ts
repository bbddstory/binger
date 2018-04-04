interface regexInterface {
    [key: string]: RegExp
}

export const regex: regexInterface = {
    engTitle: /^[a-zA-Z0-9,.:\'\-\s]+$/,
    origTitle: /^[^`~!@#$%^&*()_=+\[\]\{\}\\|;"<>/?]+$/,
    year: /^[0-9]{4}$/,
    runtime: /^[1-9]{1}h[\s]{1}[0-9]{1,2}min$/,
    director: /^[a-zA-Z\s,\']+$/,
    poster: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
    plot: /^[a-zA-Z0-9,."'()!\\-\s]+$/,
    imdb_id: /^[t]{2}[0-9]{7}$/,
    rating: /^[0-9]{1}.[0-9]{1}$/
}