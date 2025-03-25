import { 
    Account,
    Benefit,
    BenefitProgram,
    Branch,
    FilterField,
    SortField,
    SortOrder
} from "@/types"

function getAccountUrl(crmid: string) {
    return `https://club.lanacion.com.ar/${crmid}`
}

function getHighestDiscounts(benefits: Benefit[]) {
    const highestDiscounts = benefits.reduce((discounts, currentBenefit) => {
        const {
            program_name: programs,
            value
        } = currentBenefit

        for (const p of programs) {
            if (Number(value) > discounts[p]) {
                discounts[p] = Number(value)
            }
        }

        return discounts
        
    }, { [BenefitProgram.classic]: 0, [BenefitProgram.premium]: 0, [BenefitProgram.black]: 0 })

    return highestDiscounts
}

export function formatDistance(distance: number) {
    if (distance > 1000) {
        return `${(distance / 1000).toFixed(1)} km`
    } else if (distance < 1000) {
        return `${distance} m`
    } else {
        return '1 km'
    }
}

export function getShortestDistance(branches: Branch[]) {
    return [...branches].sort((b1, b2) => b1.location - b2.location)[0].location
}

export function formatTourismAccountData(account: Account) {
    const {
        name,
        images: [{ url: image }],
        crmid,
        branches,
        benefits
    } = account

    return {
        name,
        image,
        url: getAccountUrl(crmid),
        nearestBranchDistance: getShortestDistance(branches),
        highestDiscounts: getHighestDiscounts(benefits)
    }
}

export function formatDiscountAccountData(account: Account) {
    const {
        name,
        images: [{ url: image }],
        crmid
    } = account

    return {
        name,
        image,
        url: getAccountUrl(crmid)
    }
}

export function filterAccounts(field: FilterField, value: string, accounts: Account[]) {
    switch (field) {
        case 'tagName':
            return accounts.filter(a => a.tags.some(t => t.name === value))
        case 'haveVoucher':
            return accounts.filter(a => a.haveVoucher === JSON.parse(value))
    }
}

export function sortAccounts(field: SortField, order: SortOrder, accounts: Account[]) {
    switch (field) {
        case 'name':
            return [...accounts].sort((a1, a2) => {
                return order === 'descending' ? a2.name.localeCompare(a1.name) : a1.name.localeCompare(a2.name)
            })

        case 'distance':
            return [...accounts].sort((a1, a2)  => {
                const d1 = getShortestDistance(a1.branches)
                const d2 = getShortestDistance(a2.branches)

                return order === 'descending' ? d2 - d1 : d1 - d2
            })
    }
}