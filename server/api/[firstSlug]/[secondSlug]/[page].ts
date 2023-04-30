export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const page: number = parseInt(event.context.params.page)
    const firstSlug: string = event.context.params.firstSlug
    const secondSlug: string = event.context.params.secondSlug

    let theFirstSlug: string = ""
    let theSecondSlug: string = ""
    let query: string = ""

    switch (firstSlug) {
        case 'search_movie':
            theFirstSlug = 'search'
            theSecondSlug = 'movie'
            query = decodeURI(secondSlug)
            break
        case 'search_tv':
            theFirstSlug = 'search'
            theSecondSlug = 'tv'
            query = decodeURI(secondSlug)
            break
        case 'tv':
            theFirstSlug = 'tv'
            theSecondSlug = secondSlug
            query = ""
            break
        default:
            theFirstSlug = 'movie'
            theSecondSlug = secondSlug
            query = ""
            break
    }

    return $fetch(
        `${config.public.apiUrl}/${theFirstSlug}/${theSecondSlug}`,
        {
            params: {
                api_key: config.public.apiKey,
                language: config.public.apiLanguage,
                query: query,
                page: page
            },
        }
    )
})
