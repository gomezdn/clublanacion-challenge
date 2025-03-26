import { useEffect, useState } from "react"
import { DiscountAccountCardData, TourismAccountCardData } from "@/types"
import { getDiscountsAccountCardsData, getTourismAccountCardsData } from "./services"

export function useTourismAccounts() {
    const [accounts, setAccounts] = useState<TourismAccountCardData[]>([])
    const [nextPage, setNextPage] = useState<number | null>(null)
    const [previousPage, setPreviousPage] = useState<number | null>(null)

    useEffect(() => {
        getAccounts()
    }, [])

    async function getAccounts(page = 1) {
        const {
            accounts,
            nextPage,
            previousPage
        } = await getTourismAccountCardsData(page)

        setAccounts(accounts)
        setNextPage(nextPage)
        setPreviousPage(previousPage)
    }

    async function getNextPageAccounts() {
        if (nextPage) {
            await getAccounts(nextPage)
        }
    }

    async function getPreviousPageAccounts() {
        if (previousPage) {
            await getAccounts(previousPage)
        }
    }

    return {
        accounts,
        nextPage,
        previousPage,
        getNextPageAccounts,
        getPreviousPageAccounts
    }
}

export function useDiscountsAccounts() {
    const [accounts, setAccounts] = useState<DiscountAccountCardData[]>([])
    const [nextPage, setNextPage] = useState<number | null>(null)
    const [previousPage, setPreviousPage] = useState<number | null>(null)

    useEffect(() => {
        getAccounts()
    }, [])

    async function getAccounts(page = 1) {
        const {
            accounts,
            nextPage,
            previousPage
        } = await getDiscountsAccountCardsData(page)

        setAccounts(accounts)
        setNextPage(nextPage)
        setPreviousPage(previousPage)
    }

    async function getNextPageAccounts() {
        if (nextPage) {
            await getAccounts(nextPage)
        }
    }

    async function getPreviousPageAccounts() {
        if (previousPage) {
            await getAccounts(previousPage)
        }
    }

    return {
        accounts,
        nextPage,
        previousPage,
        getNextPageAccounts,
        getPreviousPageAccounts
    }
}