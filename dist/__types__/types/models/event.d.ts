export interface IFBEvent {
    id: string;
    uniqueId: string;
    createdAt: string;
    updatedAt: string;
    creatorId: string;
    restaurantId?: string | null;
    displayName: string;
    want: string;
    start: string;
    end: string;
    flag: string;
}
