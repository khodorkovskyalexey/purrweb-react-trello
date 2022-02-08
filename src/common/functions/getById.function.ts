import { IdExistsInterface } from "../interfaces";

export function getById<T extends IdExistsInterface>(array: T[], id: number): T {
    return array.filter(item => item.id === id)[0];
}
