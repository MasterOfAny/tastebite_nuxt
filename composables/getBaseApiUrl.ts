export function getBaseApiUrl() {
    return import.meta.env.API_BASE_URL || 'http://localhost:3000/api'
}