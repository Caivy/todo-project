export * from "./schema/todo.js";
import * as todo from "./schema/todo.js";

import { drizzle } from "drizzle-orm/node-postgres";

export const schema = {
  ...todo,
};

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: schema,
});
