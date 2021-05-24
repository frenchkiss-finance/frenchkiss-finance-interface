import React from 'react'
import { Menu as UikitMenu } from '@frenchkiss-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import useGetKissBusdLpPrice from 'utils/useGetKissBusdLpPrice'
import useAuth from 'hooks/useAuth'
import links from './config'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const kissPriceUsd = useGetKissBusdLpPrice()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang="EN"
      kissPriceUsd={kissPriceUsd === undefined ? parseFloat('0.000000000000000001') : kissPriceUsd}
      {...props}
    />
  )
}

export default Menu
