import { createBrowserHistory } from 'history'
import { useEffect } from 'react'

export const history = createBrowserHistory()

export const useRouteChanged = (callback) => {
    useEffect(() => {
        let unlisten = history.listen(() => {
            callback()
        })

        return () => unlisten()
    }, [])
}

export function getFileParam(url) {
    const search = new URL(url, window.location.origin).search
    const params = new URLSearchParams(search)
    const fileParam = params.get('file')
    return fileParam
}
