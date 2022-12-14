import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import AuthOptions from './auth/[...nextauth]';

const Restricted = async (req: NextApiRequest, res: NextApiResponse<any>) => {
    const session = await unstable_getServerSession(req, res, AuthOptions);

    if (session) {
        res.send({
            content: 'This is protected content. You can access this content because you are signed in.',
        });
    } else {
        res.send({
            error: 'You must be sign in to view the protected content on this page.',
        });
    }
};

export default Restricted;