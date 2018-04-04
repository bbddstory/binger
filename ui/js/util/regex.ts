interface regexInterface {
    [key: string]: RegExp
}

export const regex: regexInterface = {
    engTitle: /^[a-zA-Z0-9,.:\'\-\s]+$/,
    origTitle: /^[^`~!@#$%^&*()_=+\[\]\{\}\\|;"<>/?]+$/,
    year: /^[0-9]{4}$/,
    runtime: /^[]+$/,
    director: /^[]+$/,
    poster: /^[]+$/,
    plot: /^[]+$/,
    imdb_id: /^[]+$/,
    rating: /^[]+$/
}