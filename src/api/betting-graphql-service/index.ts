import { Betting } from "@/src/types/betting-service.t";
import { request, gql } from "graphql-request";

const endpoint = "http://localhost:8080/api";

export const getBettings = gql`
query Query {

}`;
