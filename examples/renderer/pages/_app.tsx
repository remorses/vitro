import { VitroApp } from '@vitro/ui/src'
import experimentsMap from '@vitro-root/experimentsMap'

export default function App(props) {
    return <VitroApp {...props} experimentsMap={experimentsMap} />
}
