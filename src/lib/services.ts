import topslider1 from '@public/promos/placeholder1.png'
import topslider2 from '@public/promos/placeholder2.png'
import topslider3 from '@public/promos/placeholder3.png'
import { sleep,  } from './utils'
import { Filter, PageData, Sort } from '@/types'
import { formatDiscountAccountData, formatTourismAccountData } from './account'

export async function getPromos() {
    await sleep(200)

    return [topslider1, topslider2, topslider3]
}

export async function getAccounts({ sort, filter, page }: { sort: Sort | null, filter: Filter | null, page?: number }): Promise<PageData> {
    let params = ''

    if (sort) {
        const { sortField, sortOrder } = sort
        params += `sortField=${sortField}&sortOrder=${sortOrder}&`
    }

    if (filter) {
        const { filterField, filterValue } = filter
        params += `filterField=${filterField}&filterValue=${filterValue}`
    }

    const res = await fetch(`/api/accounts?${params}${page ? `&page=${page}` : ''}`)
    const { data } = await res.json()

    return data
}

export async function getTourismAccountCardsData(page: number = 1) {
    const {
        data: accounts,
        previousPage,
        nextPage
    } = await getAccounts({
        sort: {
            sortField: 'distance',
            sortOrder: 'ascending'
        },
        filter: {
            filterField: 'tagName',
            filterValue: 'Turismo en Buenos Aires'
        },
        page
    })

    return {
        accounts: accounts.map(formatTourismAccountData),
        previousPage,
        nextPage
    }
}

export async function getDiscountsAccountCardsData(page: number = 1) {
    const {
        data: accounts,
        previousPage,
        nextPage
    } = await getAccounts({
        sort: {
            sortField: 'name',
            sortOrder: 'descending'
        },
        filter: {
            filterField: 'haveVoucher',
            filterValue: 'true'
        },
        page
    })

    return {
        accounts: accounts.map(formatDiscountAccountData),
        previousPage,
        nextPage
    }}