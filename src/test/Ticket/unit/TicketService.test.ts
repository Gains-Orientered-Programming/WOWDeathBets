import {
  getAllTickets,
  getTicketsByUserId,
  createTicket,
} from "../../../api/ticket-services";
import axios from "axios";

jest.mock("axios");

describe("Ticket Service Tests", () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a ticket", async () => {
    const mockTicketData = {
      userId: "123",
      characterName: "Petrice",
      amount: 1000,
    };
    const mockResponse = {
      data: {
        userId: "123",
        characterName: "Petrice",
        amount: 1000,
      },
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse.data);

    const result = await createTicket(mockTicketData);

    expect(mockedAxios.post).toHaveBeenCalledWith(
      "https://api-gateway-nyxm4.ondigitalocean.app/ticket-service/tickets",
      mockTicketData
    );
    expect(result).toEqual(mockResponse.data);
  });

  it("should get tickets by user ID", async () => {
    const mockUserId = "123";
    const mockResponse = {
      data: [
        {
          _id: "6093eb433fc0a31f2cc1cc83", // Mocked ID
          userId: "test",
          characterName: "test_characterName",
          amount: 0,
        },
        {
          _id: "7093eb433fc0a31f2cc1cc84", // Mocked ID
          userId: "test",
          characterName: "test_characterName2",
          amount: 0,
        },
      ],
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await getTicketsByUserId(mockUserId);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api-gateway-nyxm4.ondigitalocean.app/ticket-service/tickets/userId/${mockUserId}`
    );
    expect(result.data).toEqual(mockResponse.data);
  });

  it("should get all tickets", async () => {
    const mockResponse = {
      data: [
        {
          _id: "6093eb433fc0a31f2cc1cc83", // Mocked ID
          userId: "test",
          characterName: "test_characterName",
          amount: 0,
        },
        {
          _id: "7093eb433fc0a31f2cc1cc84", // Mocked ID
          userId: "test",
          characterName: "test_characterName2",
          amount: 0,
        },
      ],
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await getAllTickets();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://api-gateway-nyxm4.ondigitalocean.app/ticket-service/tickets"
    );
    expect(result.data).toEqual(mockResponse.data);
  });
});
