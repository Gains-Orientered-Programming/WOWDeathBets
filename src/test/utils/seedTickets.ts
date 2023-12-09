import axios from "axios";
import { Ticket } from "src/types/ticket-service.t"; // Update the import to match your actual type

export const seedTickets = async (): Promise<Ticket[]> => {
  try {
    const tickets: Ticket[] = [
      {
        userId: "seed_user",
        characterName: "test_characterName",
        amount: 0,
      },
      {
        userId: "seed_user",
        characterName: "test_characterName2",
        amount: 0,
      },
    ];

    const seededTickets: Ticket[] = [];

    for (const ticketData of tickets) {
      const response = await axios.post(
        "https://api-gateway-nyxm4.ondigitalocean.app/ticket-service/tickets",
        ticketData
      );

      if (response.status === 201) {
        console.log("Ticket data seeded successfully:", ticketData);
        seededTickets.push(response.data as Ticket); // Add seeded ticket to the array
      } else {
        console.error("Failed to seed ticket data:", response.statusText);
      }
    }

    return seededTickets;
  } catch (error) {
    console.error("Error seeding ticket data:", error);
    return []; 
  }
};

export const deleteSeededTickets = async (
  seededTickets: Ticket[]
): Promise<void> => {
  try {
    for (const ticket of seededTickets) {
      const response = await axios.delete(
        `https://api-gateway-nyxm4.ondigitalocean.app/ticket-service/tickets/${ticket._id}`
      );

      if (response.status === 200) {
        console.log(
          `Seeded ticket data with ID ${ticket._id} deleted successfully.`
        );
      } else {
        console.error(
          `Failed to delete seeded ticket data with ID ${ticket._id}:`,
          response.statusText
        );
      }
    }
    console.log("All seeded tickets deleted successfully.");
  } catch (error) {
    console.error("Error deleting seeded tickets:", error);
  }
};
