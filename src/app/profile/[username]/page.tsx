import ProfileForm from "./Profile";
import Nav from "./Nav";
import { getUserByUsername } from "src/api/user-service";
import Image from 'next/image';

const pathPage = async ({params,}: {params: {username:string}}) => {
  const user = await getUserByUsername(params.username);
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-5 w-96">
        <div className='flex flex-col items-center w-full'>
            <h1 className="text-4xl font-medium">{user.username}</h1>
            <div className='mt-12'>
            <div className=''>
                <Image src={"/pepe.webp"} width="100" height="100" alt='Picture of Pasha'/>
            </div>
        </div>
        

        {/* Section for Tickets */}
        <div className="flex flex-col w-full items-start">
          <h2>Tickets</h2>
          <li>fed c</li>
          <li>small c</li>
   {/*        <ul>
            {user.tickets.map((ticket, index) => (
              <li key={index}>{ticket}</li>
            ))}
          </ul> */}
        </div>

        {/* Section for Bets */}
        <div className="flex flex-col w-full items-start">
        </div>

        {/* Add any additional profile sections as needed */}
        {/* For example:
        <div className="flex flex-col">
          <h2>Additional Section</h2>
          <p>Additional information...</p>
        </div>
        */}
      </div>
    </div>
    </div>
  );
};

export default pathPage;
