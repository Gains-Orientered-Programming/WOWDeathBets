import TicketForm from "./Form";

const DepositPage = ({params} : {params: {username:string}}) => {
  return (
    <div className="w-full">
      <TicketForm username = {params.username} />
    </div>
  );
};

export default DepositPage;
