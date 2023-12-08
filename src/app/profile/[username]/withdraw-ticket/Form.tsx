"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ticket } from "src/api/ticket-services/ticket";
import { useRouter } from "next/navigation";
import { toast, useToast } from "src/components/ui/Toast/use-toast";


type Inputs = {
  charactername: string;
  amount: number;
};

const TicketForm = ({username}: {username:string}) => {
  
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const [loading, setLoading] = React.useState(false);
  const {toast} = useToast()

  const onSubmit = async (data: Inputs) => {
    setLoading(true);
    await ticket(data).then(function(responds){
      if(responds.status === 201){
        toast({title:"Withdraw ticket succes", description:"Ticket was created"})
      }else{
        toast({title:"error", description:"Error happend"})
      }
    });
    setLoading(false);
    router.push("/profile/" + username); 
  };


  return (
    <div className="w-full flex justify-center mt-32">
      <form
        className="flex flex-col gap-5 w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-medium text-center">Withdraw ticket</h1>
        <h3 className="text-center">Write your ingame character name and amount of currency you wish to exchange into ingame gold</h3>
        <div className="flex flex-col">
          <label>Character name:</label>
          <input
            className="h-10 rounded text-black indent-2"
            {...register("charactername", {
              required: true,
            })}
          />
        </div>
        <div className="flex flex-col">
          <label>Amount:</label>
          <input
            className="h-10 rounded text-black indent-2"
            {...register("amount", {
                required: true,
              })}
          />
        </div>
        <div>
          <button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
            Submit withdraw ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
