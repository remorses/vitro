import { VitroApp } from '@vitro/ui/src'
import storiesMap from '@/storiesMap'

export default function App(props) {
    return <VitroApp {...props} storiesMap={storiesMap} />
}
