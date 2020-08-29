import { HomePage } from '@vitro/ui'
import experimentsTree from '@vitro-root/experimentsTree.json'

export default function Page() {
    return (
        <HomePage
            experimentsTree={experimentsTree}
        />
    )
}
