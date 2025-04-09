import { Router } from 'express';
import authRouter from '../app/modules/auth/auth.route';
// import mealProviderRouter from '../app/modules/mealProvider/mealProvider.route';
// import postPreferenceRouter from '../app/modules/PostPreference/postPreference.route';
// import orderRouter from '../app/modules/order/order.route';
// import messageRoute from '../app/modules/message/message.route';
import userRouter from '../app/modules/user/user.route';



const router = Router();

const moduleRoutes = [
    {
    path: '/auth',
    route: authRouter,
    },
    // {
    //   path: '/mealProvider',
    //   route: mealProviderRouter,
    // },
    // {
    //   path: '/postPreference',
    //   route: postPreferenceRouter,
    // },
    // {
    //   path: '/order',
    //   route: orderRouter,
    // },
    // {
    //   path: '/message',
    //   route: messageRoute,
    // },
    {
      path: '/user',
      route: userRouter,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;