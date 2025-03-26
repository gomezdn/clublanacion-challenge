import { RefObject, useEffect, useState } from "react"
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
            setAccounts([])
            await getAccounts(nextPage)
        }
    }

    async function getPreviousPageAccounts() {
        if (previousPage) {
            setAccounts([])
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
            setAccounts([])
            await getAccounts(nextPage)
        }
    }

    async function getPreviousPageAccounts() {
        if (previousPage) {
            setAccounts([])
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

export function useScroll({ width, ref, requestNext, requestPrevious }: { width: number, ref: RefObject<HTMLDivElement | null>, requestNext: CallableFunction, requestPrevious: CallableFunction }) {
    function scrollRight() {
        if (ref && ref.current) {
            if ((ref.current.scrollLeft + Math.max(width, ref.current.clientWidth) < ref.current.scrollWidth)) {
                ref?.current?.scrollBy({
                    left: width,
                    behavior: 'smooth'
                })
            } else {
                requestNext()
            }
        }
    }

    function scrollLeft() {
        if (ref && ref.current) {
            if ((ref.current.scrollLeft > 0)) {
                ref?.current?.scrollBy({
                    left: -width,
                    behavior: 'smooth'
                })
            } else {
                requestPrevious()
            }
        }
    }

    return {
        scrollRight,
        scrollLeft
    }
}