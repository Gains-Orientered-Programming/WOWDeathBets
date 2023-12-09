import { Ticket } from '@/src/types/ticket-service.t';
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

export const createTicket = async (ticketData: Ticket) => {
	const res = await axios.get<Ticket[]>(
	  `https://api-gateway-nyxm4.ondigitalocean.app/ticket-service/tickets`
	);
  
	ticketData
  };

export const getTicketsByUserId = async (userId: string) => {
	const res = await axios.get<Ticket[]>(
	  `https://api-gateway-nyxm4.ondigitalocean.app/ticket-service/tickets/userId/${userId}`
	);
  
	return res;
  };
  
  export const getAllTickets = async () => {
	const res = await axios.get<Ticket[]>(
	  "https://api-gateway-nyxm4.ondigitalocean.app/ticket-service/tickets"
	);
  
	return res;
  };

  
