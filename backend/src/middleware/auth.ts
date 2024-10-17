import { auth } from "express-oauth2-jwt-bearer";

// export const jwtCheck = auth({
//   audience: process.env.AUTH0_AUDIENCE,
//   issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
//   tokenSigningAlg: "RS256",
// });

export const jwtCheck = auth({
  audience: "mern-food-ordering-app-api",
  issuerBaseURL: "https://dev-f8k7e0882glc0pof.us.auth0.com/",
  tokenSigningAlg: "RS256",
});