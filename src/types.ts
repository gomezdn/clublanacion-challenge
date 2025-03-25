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

export type Account = {
    id: string
    crmid: string
    name: string
    isGeoLocal: boolean
    haveVoucher: boolean
    cuit: string
    status: string
    tags: Tag[]
    branches: Branch[]
    benefits: Benefit[]
    phone: string
    email: string
    web: string
    highlighted: string
    created_on: string
    updated_on: string
    ecommerce: boolean
    images: Image[]
    relevance: number
    description: string
    virtualCard: boolean
    socialNetworks: SocialNetworks
}

type SocialNetwork = {
    name: string
    type: string
    prefix: string
    url: string
}

type SocialNetworks = {
    facebook?: SocialNetwork
    twitter?: SocialNetwork
    instagram?: SocialNetwork
}

type Image = {
    id: string
    type: string
    url: string
    highlighted: boolean
    thumb: boolean
}

type Validity = {
    date_from: string
    date_to: string
}

export type Benefit = {
    ids: string[]
    id: string
    program_name: BenefitProgram[]
    name: string
    type: string
    type_benefit: string
    type_weight: number
    category: string
    subcategory: string
    gender: string | null
    exclusive: boolean
    alliance: string | null
    title: string
    description: string
    legal: string
    images: Image[]
    value: string
    weekdays: string[]
    status: string
    auto_renew: string
    validity: Validity
    crm_ids: string[]
    created_on: string
    updated_on: string
    transactionTypes: string[]
    urlBenefit: string | null
    haveVoucher: boolean
}

export type Branch = {
    id: string
    crmid: string
    country: string
    state: string
    city: string
    cuit: string
    neighborhood: string
    zip_code: string
    region: string
    address: string
    number: string
    observations: string
    location: number
    status: string
    phone: string
    virtualCard: boolean
    created_on: string
    updated_on: string
}

type Tag = {
    name: string
    id_web: string
    type_id: string
    type: string
}

export type PageData = {
    data: Account[]
    previousPage: number | null
    nextPage: number | null
    totalPages: number | null
    page: number | null
}

export type SortOrder = 'ascending' | 'descending'

export type SortField = 'name' | 'distance'

export type FilterField = 'haveVoucher' | 'tagName'

export type Sort = {
    sortField: SortField,
    sortOrder: SortOrder
}

export type Filter = {
    filterField: FilterField,
    filterValue: string
}