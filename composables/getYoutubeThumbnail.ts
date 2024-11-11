export const getYoutubeThumbnail = (url: string) => {
    const videoId = url.split('v=')[1]
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    return thumbnailUrl
}