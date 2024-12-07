export type EntityDTO<Entity extends { id: string }> = Omit<Entity, "id">;
