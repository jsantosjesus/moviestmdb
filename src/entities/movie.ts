export type IMovieHome = {
    id: string
    img: string
    title: string
    year: string
}

export type IMovie = {
    id: string
    img: string
    overview: string
    title: string
    release: string
    originalLanguage: string
    genres: string[]
    productionCompanies: string[]
    haveVideo: boolean
}
