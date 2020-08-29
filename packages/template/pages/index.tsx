import { HomePage } from '@vitro/ui'
import experimentsMap from '@vitro-root/experimentsMap'
import experimentsTree from '@vitro-root/experimentsTree'

export default function Page() {
    return (
        <HomePage
            experimentsTree={experimentsTree}
            experimentsMap={experimentsMap}
        />
    )
}
