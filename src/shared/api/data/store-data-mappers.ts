import { EntityDTO } from "shared/lib/types";

export function toServerFormat<Data extends { id: string }>(
  data: Data
): Omit<Data, "id"> {
  const { id, ...body } = data;
  return body;
}

export function toEntityFormat<Data extends { id: string }>(
  data: EntityDTO<Data>,
  id: string
): Data {
  return { ...data, id } as Data;
}
