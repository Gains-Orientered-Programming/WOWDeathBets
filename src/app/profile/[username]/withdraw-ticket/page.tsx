import TicketForm from "./Form";

const WithdrawPage = ({params} : {params: {username:string}}) => {
  return (
    <div className="w-full">
      <TicketForm username = {params.username} />
    </div>
  );
};

export default WithdrawPage;
