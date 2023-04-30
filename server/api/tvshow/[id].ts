export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    const id: number = parseInt(event.context.params.id)
    return $fetch(
        `${config.public.apiUrl}/tv/${id}`,
        {
            params: {
                api_key: config.public.apiKey,
                language: config.public.apiLanguage,
                append_to_response: 'videos,images,reviews,credits,similar'
            },
        }
    )
})
