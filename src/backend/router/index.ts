import * as trpc from '@trpc/server';
import { z } from 'zod';

// export type definition of API
export type AppRouter = typeof appRouter;

export const appRouter = trpc.router().query("hello", {
    input: z.object({
        text: z.string().nullish(),
    })
        .nullish(),
    resolve({ input }) {
        return {
            greeting: `Hello, ${input?.text ?? 'Bro'}!`,
        };
    }
})
    // .mutation('createUser', {
    //     input: z.object({ name: z.string().min(5) }),
    //     async resolve(req) {
    //         return await UserModel.create({
    //             data: req.input,
    //         });
    //     }
    // })