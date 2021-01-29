import { createBrowserHistory } from 'history'
import { useEffect } from 'react'

export const history = createBrowserHistory()

window['VITRO_HISTORY'] = history

export const useRouteChanged = (callback) => {
    useEffect(() => {
        let unlisten = history.listen(() => {
            callback()
        })

        return () => unlisten()
    }, [])
}

export function getFileParam(url) {
    return getParam(url, 'file')
}

export function getParam(url, name) {
    const search = new URL(url, window.location.origin).search
    const params = new URLSearchParams(search)
    const fileParam = params.get(name)
    return fileParam
}

export function changeParam(name, value) {
    const url = new URL(window.location.href)
    url.searchParams.set(name, value)
    history.push(url.toString())
}
