import cookie from 'cookie';

const handler = (req, res) => {
	if (req.method === 'POST') {
		const { username, password } = req.body;
		if (username === process.env.USERNAME && password === process.env.PASSWORD) {
			res.setHeader(
				'Set-Cookie',
				cookie.serialize('token', process.env.TOKEN, {
					maxAge: 60 * 60,
					sameSite: 'strict',
					path: '/'
				})
			);
			res.status(200).json('Succesfull');
		} else {
			res.status(400).json('Wrong Credentials');
		}
	}
};

export default handler;
