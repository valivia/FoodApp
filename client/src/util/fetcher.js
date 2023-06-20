export const fetcher = async (url) => {
    const r = await fetch(url, { credentials: "include" })
    if (!r) throw new Error('Response is undefined')

    const json = await r.json()
    if (r.ok) return json

    throw new Error(json.message)
}