export interface ColumnModel {
    id: number;
    name: string;
}

export const ColumnsArray: ColumnModel[] = [
    { id: 0, name: 'TODO' },
    { id: 1, name: 'In Progress' },
    { id: 2, name: 'Testing' },
    { id: 3, name: 'Done' }
];