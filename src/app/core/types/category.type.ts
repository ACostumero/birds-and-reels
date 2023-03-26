import {TEntry} from "@app-core/types/entry.type";

export type TCreatureResponse = { food: TEntry[], non_food: TEntry[] }
export type TCategoryResponse = {data: TEntry[] | TCreatureResponse };
