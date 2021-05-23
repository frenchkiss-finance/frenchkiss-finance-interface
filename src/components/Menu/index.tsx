import React from 'react'
import { Menu as UikitMenu } from '@frenchkiss-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useAuth from 'hooks/useAuth'
import links from './config'
import { KISS } from '../../constants'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()
  // const kissPriceUsd = priceData ? Number(priceData.data[KISS.address].price) : undefined
  const kissPriceUsd = 1

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang="EN"
      kissPriceUsd={kissPriceUsd}
      {...props}
    />
  )
}

export default Menu
