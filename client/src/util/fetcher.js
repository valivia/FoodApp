export const fetcher = url => fetch(url, { credentials: "include" }).then(async (r) => {
    const json = await r.json()
    if (r.ok) return json
    throw new Error(json.message)
})