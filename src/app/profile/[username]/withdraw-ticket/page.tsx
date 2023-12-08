import TicketForm from './Form';

const WithdrawPage = () => {
	return (
		<div className="w-full">
			<TicketForm username={''} />{' '}
			{/* lavede en tom username prop fordi ellers breaker build */}
		</div>
	);
};

export default WithdrawPage;
