export const checkVideo = (url) => {
    if (url.includes('youtube')) {
        return true
    } else {
        return false
    }
}
