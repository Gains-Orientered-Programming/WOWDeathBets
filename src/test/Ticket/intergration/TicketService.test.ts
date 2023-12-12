import { seedTickets, deleteSeededTickets } from "../../utils/seedTickets";
import {
  createTicket,
  getTicketsByUserId,
  getAllTickets,
} from "../../../api/ticket-services";
import { Ticket } from "src/types/ticket-service.t";

describe("Ticket Service Integration Tests", () => {
  let seededTickets: Ticket[] = [];

  beforeAll(async () => {
    seededTickets = await seedTickets();
  });

  it("should create a ticket", async () => {
    const ticketData = {
      userId: "123",
      characterName: "Petrice",
      amount: 1000,
    };

    const response = await createTicket(ticketData);
    expect(response.status).toBe(201);
    expect(response.data.characterName).toEqual(ticketData.characterName);
    expect(response.data.amount).toEqual(ticketData.amount);
    expect(response.data.userId).toEqual(ticketData.userId);
  });

  it("should get tickets by user ID", async () => {
    const tickets = await getTicketsByUserId(seededTickets[0].userId);

    expect(tickets.data).toEqual(seededTickets); // Checks if the seeded tickets are the same as the tickets returned from the API
    expect(Array.isArray(tickets.data)).toBe(true);
  });

  it("should get all tickets", async () => {
    const tickets = await getAllTickets();
    expect(Array.isArray(tickets.data)).toBe(true);
    expect(tickets.status).toBe(200);
  });


  afterAll(async () => {
    await deleteSeededTickets(seededTickets);
  });
});
