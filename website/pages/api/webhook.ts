import { NextApiHandler } from 'next/types'
import { Webhooks } from '@octokit/webhooks'

const webhooks = new Webhooks({
    secret: 'mysecret',
})

webhooks.on('push', (ev) => {
    console.log(ev.name, 'event received')
    console.log(JSON.stringify(ev.payload, null, 4))
    const { ref, commits, pusher, installation, repository } = ev.payload
    repository.html_url
    pusher.name
    pusher.email
    // TODO check if a vitro.config.js exists, if yes then create a new vercel deployment, after deploy run the screen shotter and update database with screenshots locations, dashboard will show the screenshots diffs and easily navigate between stories ...
})

const handler: NextApiHandler = async (req, res) => {
    await webhooks.middleware(req, res, (err) => {
        console.error(err)
    })
}
