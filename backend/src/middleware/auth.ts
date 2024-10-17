import userModel from "../models/user";
import { NextFunction, Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";

declare global{
  namespace Express{
    interface Request{
      userId:string,
      auth0Id:string,
    }
  }
}

// export const jwtCheck = auth({
//   audience: process.env.AUTH0_AUDIENCE as string,
//   issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
//   tokenSigningAlg: "RS256",
// });

export const jwtCheck = auth({
  audience: "mern-food-ordering-app-api",
  issuerBaseURL: "https://dev-f8k7e0882glc0pof.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.sendStatus(401);
  }
  const token = authorization.split(" ")[1];

  try {
    const decode = jwt.decode(token) as jwt.JwtPayload;
    const auth0Id = decode.sub;
    const user = await userModel.findOne({ auth0Id });
    if (!user) return res.sendStatus(401);
    req.auth0Id = auth0Id as string;
    req.userId = user._id.toString();
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
