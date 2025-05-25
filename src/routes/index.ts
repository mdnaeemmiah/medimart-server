import { Router } from 'express';
import authRouter from '../app/modules/auth/auth.route';
// import postPreferenceRouter from '../app/modules/PostPreference/postPreference.route';
import messageRoute from '../app/modules/message/message.route';
import userRouter from '../app/modules/user/user.route';
import medicineRouter from '../app/modules/addMedicine/addMedicine.route';
import orderRouter from '../app/modules/order/order.route';
import doctorRoute from '../app/modules/doctor/doctor.route';
import needMedicineRoute from '../app/modules/needMedicine/needMedicine.route';
import helpRoute from '../app/modules/help/help.route';



const router = Router();

const moduleRoutes = [
    {
    path: '/auth',
    route: authRouter,
    },
    {
      path: '/addMedicine',
      route: medicineRouter,
    },
    {
      path: '/doctor',
      route: doctorRoute,
    },
    {
      path: '/order',
      route: orderRouter,
    },
    {
      path: '/message',
      route: messageRoute,
    },
    {
      path: '/user',
      route: userRouter,
    },
    {
      path: '/needMedicine',
      route: needMedicineRoute,
    },
    {
      path: '/help',
      route: helpRoute,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;