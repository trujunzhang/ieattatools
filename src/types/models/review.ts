export interface IFBReview {
    id: string
    uniqueId: string
    flag: string
    createdAt: string
    updatedAt: string
    creatorId: string
    reviewType: string
    restaurantId?: string
    event_id?: string
    recipeId?: string
    rate: number
    body: string
}
