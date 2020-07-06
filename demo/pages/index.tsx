import { Component } from 'example-package/src/'

export default function Page(props) {
    return (
        <div>
            <Component />
            {JSON.stringify(props)}
        </div>
    )
}
