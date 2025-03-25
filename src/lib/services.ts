import topslider1 from '@public/promos/placeholder1.png'
import topslider2 from '@public/promos/placeholder2.png'
import topslider3 from '@public/promos/placeholder3.png'
import { sleep,  } from './utils'
import { Account, DiscountAccountCardData, Filter, Sort, TourismAccountCardData } from '@/types'
import { formatDiscountAccountData, formatTourismAccountData } from './account'

export async function getPromos() {
    await sleep(200)

    return [topslider1, topslider2, topslider3]
}

export async function getAccounts({ sort, filter }: { sort: Sort | null, filter: Filter | null }): Promise<Account[]> {
    let params = ''

    if (sort) {
        const { sortField, sortOrder } = sort
        params += `sortField=${sortField}&sortOrder=${sortOrder}&`
    }

    if (filter) {
        const { filterField, filterValue } = filter
        params += `filterField=${filterField}&filterValue=${filterValue}`
    }

    const res = await fetch(`/api/accounts?${params}`)
    const { data } = await res.json()

    return data.data
}

export async function getTourismAccountCardsData(): Promise<TourismAccountCardData[]> {
    const accounts = await getAccounts({
        sort: {
            sortField: 'distance',
            sortOrder: 'ascending'
        },
        filter: {
            filterField: 'tagName',
            filterValue: 'Turismo en Buenos Aires'
        }
    })

    return accounts.map(formatTourismAccountData)
}

export async function getDiscountsAccountCardsData(): Promise<DiscountAccountCardData[]> {
    const accounts = await getAccounts({
        sort: {
            sortField: 'name',
            sortOrder: 'descending'
        },
        filter: {
            filterField: 'haveVoucher',
            filterValue: 'true'
        }
    })

    return accounts.map(formatDiscountAccountData)
}