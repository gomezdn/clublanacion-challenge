export function sleep(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay))
}

export function formatDistance(distance: number) {
    if (distance > 1000) {
        return `${(distance / 1000).toFixed(1)} km`
    } else if (distance < 1000) {
        return `${distance} m`
    } else {
        return '1 km'
    }
}