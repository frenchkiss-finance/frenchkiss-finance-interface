import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetKissBusdLpPrice = () => {

    const kissAddress = '0x3b44b0cFe3a290906F3C6479df56457db9d7cd59'
    const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    
    const inputCurrency = useCurrency(kissAddress)
    const outputCurrency = useCurrency(busdAddress)

    const parsedAmount = tryParseAmount("1", inputCurrency ?? undefined)

    const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)

    const price = bestTradeExactIn?.executionPrice.toSignificant(6)

    return price ? parseFloat(price) : undefined

}

export default useGetKissBusdLpPrice