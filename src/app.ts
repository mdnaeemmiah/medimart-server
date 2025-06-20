import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import router from "./routes";


// express
const app :Application= express();

// parsers
app.use(express.json());
app.use(cors({origin:"https://medimart-client-seven.vercel.app",credentials:true}));
app.use(cookieParser());

app.use('/api', router);


app.get("/", (req: Request, res: Response) => {
  res.send("MediMart And Doctors World!");
});


app.use(globalErrorHandler);
app.use(notFound);

export default app;