import React from "react";
import { z } from "zod";

const hobbies = ["Programming", "Weigh Lifting", "Guitar"] as const;

// const UserSchema = z.object({
//   username: z.string().min(5).max(100),
//   age: z.number().gt(0),
//   birthday: z.date(),
//   isProgrammer: z.boolean().nullable().default(true),
//   hobby: z.enum(hobbies),
// });
// type User = z.infer<typeof UserSchema>;

// const user: User = {
//   username: "Mohamed",
//   age: 20,
//   birthday: new Date(),
// isProgrammer: null,
// hobby: "Programming",
// };

// console.log(UserSchema.safeParse(user));
// console.log(UserSchema.partial().parse(user));

// const UserSchema = z
//   .object({
//     id: z.union([z.string(), z.number()]),
//     username: z.string(),
//     friend: z.array(z.string()).nonempty(),
//     coords: z.tuple([z.number(), z.number(), z.number()]),
//   })
//   .strict();

// type User = z.infer<typeof UserSchema>;

// const user: User = {
//   id: 14,
//   username: "Mohamed",
//   friend: ["Tommy"],
//   coords: [1, 2, 3],
// };

// console.log(UserSchema.parse(user));

const UserMap = z.map(
  z.string(),
  z.object({
    name: z.string(),
  })
);

const user = new Map([
  ["id-john", { name: "john" }],
  ["id-mo", { name: "Mohamed" }],
]);

// console.log(UserMap.parse(user));

const Dummy = () => {
  return <></>;
};

export default Dummy;
