import { MenuEntry } from '@frenchkiss-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://frenchkiss.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://frenchkiss.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://frenchkiss.finance/pools',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://nft.frenchkiss.finance',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.frenchkiss.finance',
      },
      {
        label: 'Tokens',
        href: 'https://info.frenchkiss.finance/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.frenchkiss.finance/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.frenchkiss.finance/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        // href: 'https://voting.pancakeswap.finance',
        href: '/',
        status: {
          text: 'SOON',
          color: 'warning',
        },
      },
      {
        label: 'Github',
        href: 'https://github.com/frenchkiss-finance',
      },
      {
        label: 'Whitepaper',
        href: '#/',
      },
      {
        label: 'Docs',
        href: 'https://docs.frenchkiss.finance',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@frenchkiss.finance',
      },
      {
        label: 'Support',
        href: 'https://docs.frenchkiss.finance/contact-us',
      },
    ],
  },
]

export default config
