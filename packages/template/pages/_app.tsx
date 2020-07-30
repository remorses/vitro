import { VitroApp } from '@vitro/ui'
import experimentsMap from '@vitro-root/experimentsMap'

export default function App(props) {
    return <VitroApp {...props} experimentsMap={experimentsMap} />
}
