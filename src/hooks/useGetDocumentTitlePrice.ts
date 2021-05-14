import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { KISS } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  // const kissPriceUsd = priceData ? parseFloat(priceData.data[KISS.address].price) : 0
  const kissPriceUsd = 1

  const kissPriceUsdString =
    // Number.isNaN(kissPriceUsd) || kissPriceUsd === 0
    Number.isNaN(kissPriceUsd) || kissPriceUsd < 1
      ? ''
      : ` - $${kissPriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `FrenchKiss Finance${kissPriceUsdString}`
  }, [kissPriceUsdString])
}
export default useGetDocumentTitlePrice
