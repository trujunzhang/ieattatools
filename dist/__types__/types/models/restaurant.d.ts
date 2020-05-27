export interface IFBRestaurant {
    uniqueId: string;
    flag: string;
    createdAt: string;
    updatedAt: string;
    creatorId: string | null;
    geoHash: string;
    latitude: number;
    longitude: number;
    displayName: string;
    originalUrl: string;
    thumbnailUrl: string;
    extraNote: string;
    isNew: boolean;
    address: string;
    street_number: string;
    route: string;
    locality: string;
    sublocality: string;
    country: string;
    postal_code: string;
    administrative_area: string;
}
