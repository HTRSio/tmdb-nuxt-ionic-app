export interface PageResults<T> {
    page: number,
    results: T[],
    total_results: number,
    total_pages: number,
}

export interface Movies {
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: object[] | number,
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number
}


export interface Movie {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: object[] | null,
    budget: number,
    genres: Genre[],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: ProductionCompany[],
    production_countries: ProductionCountry[],
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: SpokenLanguage[],
    status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled',
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_integer: number
    videos: VideoResults[],
    images: ImageResults[],
}

export interface TvShows {
    poster_path: string | null,
    popularity: number,
    id: number,
    backdrop_path: string | null,
    vote_average: number,
    overview: string,
    first_air_date: string,
    origin_country: object[] | string,
    genre_ids: object[] | number,
    original_language: string,
    vote_count: number,
    name: string,
    original_name: string,
}

export interface TvShow {
    backdrop_path: string | null,
    created_by: CreatedBy[],
    episode_run_time: object[] | number,
    first_air_date: string,
    genres: Genre[],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: object[] | string,
    last_air_date: string
    last_episode_to_air: LastEpisodeToAir[],
    name: string,
    next_episode_to_air: null,
    networks: Network[],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: object[],
    overview: string,
    popularity: number,
    poster_path: string | null,
    production_companies: ProductionCompany[],
    production_countries: ProductionCountry[],
    seasons: Season[],
    spoken_languages: SpokenLanguage[],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number,

}

export interface Genre {
    id: number,
    name: string
}

export interface ProductionCompany {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string
}

export interface ProductionCountry {
    iso_3166_1: string,
    name: string
}

export interface SpokenLanguage {
    iso_639_1: string,
    name: string
}

export interface VideoResults {
    results: Video[]
}

export interface Video {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
}

export interface ImageResults {
    id: number,
    backdrops: ImageDetails[],
    logos: ImageDetails[],
    posters: ImageDetails[],
}

export interface ImageDetails {
    aspect_ratio: number,
    file_path: string,
    height: number,
    iso_639_1: string | null,
    vote_average: number,
    vote_count: number,
    width: number
}

export interface CreatedBy {
    id: number,
    credit_id: string,
    name: string,
    gender: number,
    profile_path: string | null
}

export interface LastEpisodeToAir {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    overview: string,
    production_code: string,
    season_number: number,
    still_path: string | null,
    vote_average: number,
    vote_count: number,
}

export interface Network {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string
}


export interface Season {
    air_date: string,
    episode_count: number,
    id: number,
    name: number,
    overview: number,
    poster_path: string,
    season_number: string,
}

export interface SpokenLanguage {
    english_name: string,
    iso_639_1: string,
    name: string
}
