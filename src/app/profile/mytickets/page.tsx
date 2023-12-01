import Image from 'next/image';

const MyTickets = () => {
  return (
    <div className="w-full flex justify-center">
    <div className="flex flex-col gap-5 w-96">
      <div className='flex flex-col items-center w-full'>
          <h1 className="text-4xl font-medium">Johnny's Profile</h1>
          <div className='mt-12'>
          <div className=''>
              <Image src={"/pepe.webp"} width="100" height="100" alt='Picture of Pasha'/>
          </div>
      </div>
      

       {/* Section for Tickets */}
       <div className="flex flex-col w-full items-start">
          <h2>Tickets</h2>
          <li>fed cock</li>
          <li>small cock</li>
   {/*        <ul>
            {user.tickets.map((ticket, index) => (
              <li key={index}>{ticket}</li>
            ))}
          </ul> */}
        </div>
    </div>
  </div>
  </div>
  );
};

export default MyTickets;
