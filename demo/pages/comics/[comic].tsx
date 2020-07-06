const context = require.context('example-package/', true)

export default function Page(props) {
    const C = context('./src/index').Component
    const exports = Object.keys(context('./src/index'))

    return (
        <div>
            <div>{JSON.stringify({ props })}</div>
            <div>{JSON.stringify({ keys: context.keys() })}</div>
            <div>{JSON.stringify({ exports })}</div>
            <C />
        </div>
    )
}
