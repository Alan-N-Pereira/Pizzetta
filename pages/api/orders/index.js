import dbConnect from '../../../util/mongo';
import Order from '../../../models/Order';

const handler = async (req, res) => {
	const { method } = req;

	await dbConnect();

	if (method === 'GET') {
	}
	if (method === 'POST') {
		try {
			const order = await Order.create(req.body);
			res.status(201).json(order);
		} catch (error) {
			res.status(500).json(error);
		}
	}
};

export default handler;
