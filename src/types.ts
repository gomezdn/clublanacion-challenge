export type TourismAccountCardData = {
    name: string
    image: string
    url: string
    highestDiscounts: {
        [BenefitProgram.classic]: number,
        [BenefitProgram.premium]: number,
        [BenefitProgram.black]: number
    }
    nearestBranchDistance: number
}

export enum BenefitProgram {
    classic = 'Club La Nación Classic',
    premium = 'Club La Nación Premium',
    black = 'Club La Nación Black'
}

export type DiscountAccountCardData = {
    name: string
    image: string
    url: string
}