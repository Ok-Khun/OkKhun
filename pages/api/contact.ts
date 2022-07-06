import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Invalid request!' })
        return
    }

    res.status(200).json({ message: 'this is a test' })
}
