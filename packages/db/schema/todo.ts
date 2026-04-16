import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: text("id").primaryKey(),
  name: text("name"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});
