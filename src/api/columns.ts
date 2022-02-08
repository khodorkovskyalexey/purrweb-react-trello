import { IdExistsInterface } from "../common/interfaces";

export interface ColumnModel extends IdExistsInterface {
    name: string;
}

export const ColumnsArray: ColumnModel[] = [
    { id: 0, name: 'TODO' },
    { id: 1, name: 'In Progress' },
    { id: 2, name: 'Testing' },
    { id: 3, name: 'Done' }
];
