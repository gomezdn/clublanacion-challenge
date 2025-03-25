import { NextRequest } from "next/server"
import { Account, FilterField, PageData, SortField, SortOrder } from "@/types"
import { PAGE_SIZE } from "./constants"

export function getRequestData(req: NextRequest) {
    const filterField = req.nextUrl.searchParams.get('filterField')
    const filterValue = req.nextUrl.searchParams.get('filterValue')
    const sortField = req.nextUrl.searchParams.get('sortField')
    const sortOrder = req.nextUrl.searchParams.get('sortOrder')
    console.log({filterField, filterValue, sortField, sortOrder})

    return { 
        sort: sortField && sortOrder ? { sortField, sortOrder } as { sortField: SortField, sortOrder: SortOrder } : null,
        filter: filterField && filterValue ? { filterField, filterValue } as { filterField: FilterField, filterValue: string } : null,
        page: Number(req.nextUrl.searchParams.get('page')) || 1
    }
}

export function initResponseData() {
    return {
        error: '',
        data: { data: [], nextPage: null, previousPage: null, totalPages: null, page: null } as PageData,
        status: 200
    }
}

export function paginate(page: number, accounts: Account[]): PageData {
    const pageStart = (page - 1) * PAGE_SIZE
    const pageEnd = pageStart + PAGE_SIZE
    const totalPages = Math.floor(accounts.length / PAGE_SIZE)
    const nextPage = page + 1
    const previousPage = page - 1

    return {
        data: accounts.slice(pageStart, pageEnd),
        nextPage: nextPage <= totalPages ? nextPage : null,
        previousPage: previousPage >= 1 ? previousPage : null,
        totalPages,
        page
    }
}