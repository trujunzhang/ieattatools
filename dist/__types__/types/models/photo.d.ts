/**
 * IFBPhotoStatus:
 *
 */
export declare enum IFBPhotoStatus {
    offline_unknown = "offline_unknown",
    offline_match = "offline_match",
    online_unknown = "online_unknown",
    online_match = "online_match"
}
/**
 * Firebase updated object
 *
 */
export interface IFBPhotoUpdateStatus {
    status: IFBPhotoStatus;
}
export interface IFBPhoto {
    uniqueId: string;
    flag: string;
    createdAt: string;
    updatedAt: string;
    creatorId?: string;
    originalUrl: string;
    thumbnailUrl: string;
    url?: string;
    extraNote: string;
    photoType: string;
    restaurantId?: string;
    recipeId?: string;
    userId?: string;
    geoHash: string;
    latitude: number;
    longitude: number;
    status: IFBPhotoStatus;
    offlinePath: string;
}
