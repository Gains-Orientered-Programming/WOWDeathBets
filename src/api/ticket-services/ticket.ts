import axios, { AxiosError } from 'axios';

export const ticket = async (ticketData: {
	charactername: string;
	amount: number
}) => {
	return await axios
		.post(
			'https://api-gateway-nyxm4.ondigitalocean.app/ticket-service/tickets',
			{
				charactername: ticketData.charactername,
				amount: ticketData.amount
			}
		)

};
