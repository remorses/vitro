import { Box, Select } from '@chakra-ui/core'
import React, {
    createContext,
    HTMLAttributes,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import path from 'path'
import ReactDOM from 'react-dom'

export type ClickToSourceState = {
    provider: GitProvider
}

export type GitProvider = '' | 'vscode' | 'github' | 'gitlab'

const ClickToSourceContext = createContext<ClickToSourceState>({ provider: '' })

// export function ClickToSourceProvider({ children = null }) {
//     const [state, setState] = useState<ClickToSourceState>({ provider: '' })
//     const [elem] = useState(() => document.createElement('div'))

//     useEffect(() => {
//         document.body.appendChild(elem)
//     }, [])

//     const selectElement = useMemo(
//         () => (
//             <Box p='10' position='fixed' top='0' right='0'>
//                 <Select
//                     onChange={(e) => {
//                         const value = e.target.value as any
//                         setState((state) => ({ ...state, provider: value }))
//                     }}
//                     fontWeight={500}
//                     value={state.provider}
//                     opacity={0.8}
//                     w='auto'
//                 >
//                     <option value='' children='click to source disabled' />
//                     <option
//                         value='vscode'
//                         children='click to source on Vscode'
//                     />
//                 </Select>
//             </Box>
//         ),
//         [setState, state],
//     )

//     return (
//         <ClickToSourceProviderStateless
//             value={state}

//             onChange={(x) => setState(x)}
//         >
//             {elem && ReactDOM.createPortal(selectElement, elem)}
//             {children}
//         </ClickToSourceProviderStateless>
//     )
// }

export interface LinksConfig {
    github?: { url: string; branch: string; path: string }
    gitlab?: { url: string; branch: string; path: string }
}

export function ClickToSourceProviderStateless({
    value = { provider: '' },
    onChange,
    linksConfig = {},
    root,
    className = '',
    children = null,
    ...rest
}: HTMLAttributes<HTMLDivElement> & {
    value: ClickToSourceState
    linksConfig: LinksConfig
    root: string
    onChange: (x: ClickToSourceState) => any
}) {
    // const [state, setState] = useState<ClickToSourceState>(value)
    const enabled = Boolean(value.provider)
    const ref = useRef()
    const disable = useCallback(
        function () {
            onChange({ ...value, provider: '' })
        },
        [onChange],
    )
    const onClickToSource = useCallback(
        function onClickToSource(e) {
            // e.preventDefault()
            e.stopPropagation()
            disable()
            const target = e.currentTarget
            const filePath = target.getAttribute('data-vitro-filename')
            // TODO filename is a path realtive to the root of the repository, this path can be used on vscode or on github using different path.join
            const lineNumber = target.getAttribute('data-vitro-line')
            if (!filePath) {
                console.warn(
                    `no filename found among ${[target.attributes]
                        .map((x) => `${x.name}='${x.value}'`)
                        .join(', ')}`,
                )
                return
            }
            if (!lineNumber) {
                console.warn(
                    `no line number found for ${target} among ${target.attributes}`,
                )
                return
            }
            openInNewTab(
                getGitCodeLink({
                    provider: value.provider,
                    filePath,
                    lineNumber,
                    linksConfig,
                    root, // TODO get relative url?
                }),
            )
        },
        [value.provider],
    )
    useEffect(() => {
        const rootElem: Document = ref.current
        if (!rootElem) {
            console.error(new Error(`no root ref`))
        }
        if (enabled) {
            const elements = Array.from(
                rootElem.querySelectorAll(
                    '.click-to-source-enabled *[data-vitro-filename]',
                ),
            )

            elements.forEach((elem) => {
                elem.addEventListener('click', onClickToSource)
            })
        } else {
            const elements = Array.from(
                rootElem.querySelectorAll('*[data-vitro-filename]'),
            )
            elements.forEach((elem) => {
                elem.removeEventListener('click', onClickToSource)
            })
        }
    }, [enabled])
    const enabledClassName = enabled ? 'click-to-source-enabled' : ''
    return (
        <ClickToSourceContext.Provider value={value}>
            <div
                className={
                    className
                        ? `${className} ${enabledClassName}`
                        : enabledClassName
                }
                ref={ref}
                {...rest}
            >
                {children}
            </div>
        </ClickToSourceContext.Provider>
    )
}

export function getGitCodeLink({
    provider,
    filePath,
    root,
    lineNumber = 0,
    linksConfig,
}: {
    provider: GitProvider
    filePath: string
    root: string
    lineNumber?: number
    linksConfig: LinksConfig
}): string {
    if (provider == 'vscode') {
        return `vscode://file${filePath}:${lineNumber}`
    } else if (provider === 'github') {
        if (!linksConfig.github) {
            return ''
        }
        const relativePath = path.relative(root, filePath)
        const { url: gitUrl, branch, path: inPath } = linksConfig.github
        let url = `${gitUrl}/blob/${branch}/${path.join(
            inPath || '',
            relativePath || '',
        )}`
        if (lineNumber) {
            url += `#L${lineNumber}`
        }
        return url
    } else if (provider === 'gitlab') {
        if (!linksConfig.gitlab) {
            return ''
        }
        const relativePath = path.relative(root, filePath)
        const { url: gitUrl, branch, path: inPath } = linksConfig.gitlab
        // https://gitlab.com/kmoshonskiy/moon/-/blob/master/.gitlab-ci.yml#L7
        let url = `${gitUrl}/-/blob/${branch}/${path.join(
            inPath || '',
            relativePath || '',
        )}`
        if (lineNumber) {
            url += `#L${lineNumber}`
        }
        return url
    }
    throw new Error(`Unknown click to source provider ${provider}`)
}

function openInNewTab(href) {
    console.info(`Opening ${href}`)
    const aElem = document.createElement('a')
    Object.assign(aElem, {
        target: '_blank',
        href,
    }).click()
    // TODO remove a from DOM
}
