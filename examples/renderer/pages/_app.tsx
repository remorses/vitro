import { VitroApp } from '@vitro/ui/src'
import experimentsTree from '_vitro-root_/experimentsTree.json'

export default function App(props) {
    return (
        <VitroApp
            {...props}
            experimentsTree={experimentsTree}
        />
    )
}
