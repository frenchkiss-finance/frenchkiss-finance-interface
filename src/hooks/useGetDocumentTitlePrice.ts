import { useEffect } from 'react'
import useGetKissBusdLpPrice from 'utils/useGetKissBusdLpPrice'

const useGetDocumentTitlePrice = () => {

  const kissPriceUsd = useGetKissBusdLpPrice()

  const kissPriceUsdString =
    Number.isNaN(kissPriceUsd) || kissPriceUsd === 0 || !kissPriceUsd
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
