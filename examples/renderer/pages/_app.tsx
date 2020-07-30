import { VitroApp } from '@vitro/ui/src'
import experimentsMap from '@/experimentsMap'

export default function App(props) {
    return <VitroApp {...props} experimentsMap={experimentsMap} />
}
