import { VitroApp } from '@vitro/ui'
import experimentsMap from '@/experimentsMap'

export default function App(props) {
    return <VitroApp {...props} experimentsMap={experimentsMap} />
}
