import { VitroApp } from '@vitro/ui/src'
import experimentsMap from '@vitro-root/experimentsMap'
import experimentsTree from '@vitro-root/experimentsTree.json'

export default function App(props) {
    return (
        <VitroApp
            {...props}
            experimentsMap={experimentsMap}
            experimentsTree={experimentsTree}
        />
    )
}
