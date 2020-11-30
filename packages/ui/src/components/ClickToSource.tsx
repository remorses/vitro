
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
import ReactDOM from 'react-dom'

export type ClickToSourceState = {
    provider: '' | 'vscode' // TODO add github provider, passing githubUrl
}

const ClickToSourceContext = createContext<ClickToSourceState>({ provider: '' })

export function ClickToSourceProvider({ children = null }) {
    const [state, setState] = useState<ClickToSourceState>({ provider: '' })
    const [elem] = useState(() => document.createElement('div'))

    useEffect(() => {
        document.body.appendChild(elem)
    }, [])

    const selectElement = useMemo(
        () => (
            <Box p='10' position='fixed' top='0' right='0'>
                <Select
                    onChange={(e) => {
                        const value = e.target.value as any
                        setState((state) => ({ ...state, provider: value }))
                    }}
                    fontWeight={500}
                    value={state.provider}
                    opacity={0.8}
                    w='auto'
                >
                    <option value='' children='click to source disabled' />
                    <option
                        value='vscode'
                        children='click to source on Vscode'
                    />
                </Select>
            </Box>
        ),
        [setState, state],
    )

    return (
        <ClickToSourceProviderStateless
            value={state}
            onChange={(x) => setState(x)}
        >
            {elem && ReactDOM.createPortal(selectElement, elem)}
            {children}
        </ClickToSourceProviderStateless>
    )
}

export function ClickToSourceProviderStateless({
    value = { provider: '' },
    onChange,
    className = '',
    children = null,
    ...rest
}: HTMLAttributes<HTMLDivElement> & {
    value: ClickToSourceState
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
    const onClickToSource = useCallback(function onClickToSource(e) {
        // e.preventDefault()
        e.stopPropagation()
        disable()
        const target = e.currentTarget
        const filename = target.getAttribute('data-vitro-filename')
        // TODO filename is a path realtive to the root of the repository, this path can be used on vscode or on github using different path.join
        const lineNumber = target.getAttribute('data-vitro-line')
        if (!filename) {
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
        window.location.href = `vscode://file${filename}:${lineNumber}`
    }, [])
    useEffect(() => {
        const root: Document = ref.current
        if (!root) {
            console.error(new Error(`no root ref`))
        }
        if (enabled) {
            const elements = Array.from(
                root.querySelectorAll('.click-to-source-enabled *[data-vitro-filename]'),
            )

            elements.forEach((elem) => {
                elem.addEventListener('click', onClickToSource)
            })
        } else {
            const elements = Array.from(
                root.querySelectorAll('*[data-vitro-filename]'),
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
