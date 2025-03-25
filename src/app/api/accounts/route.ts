import { NextRequest, NextResponse } from "next/server"
import { accountsUrl } from "@/lib/config"
import { getRequestData, initResponseData, paginate } from "@/lib/request"
import { filterAccounts, sortAccounts } from "@/lib/account"

export async function GET(req: NextRequest) {
    const { sort, page, filter } = getRequestData(req)
    let { data, error, status } = initResponseData()

    try {
        const res = await fetch(accountsUrl!)
        let { accounts } = await res.json()

        if (filter) {
            const { filterField, filterValue } = filter
            accounts = filterAccounts(filterField, filterValue, accounts)
        }

        if (sort) {
            const { sortField, sortOrder } = sort
            accounts = sortAccounts(sortField, sortOrder, accounts)
        }

        data = paginate(page, accounts)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        error = e.message
        status = 500
    }

    return NextResponse.json({ data, error }, { status })
}