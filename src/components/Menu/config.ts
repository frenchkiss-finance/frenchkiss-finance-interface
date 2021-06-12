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
    href: '/',
    status: {
      text: 'SOON',
      color: 'warning',
    },
  /*
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
  */
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        // href: 'https://voting.frenchkisss.finance',
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
        href: 'https://frenchkiss.finance/docs/whitepaper.pdf',
      },
      {
        label: 'Docs',
        // href: 'https://docs.frenchkiss.finance',
        href: '/',
        status: {
          text: 'SOON',
          color: 'warning',
        },
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@frenchkiss.finance',
      },
      {
        label: 'Support',
        // href: 'https://docs.frenchkiss.finance/contact-us',
        href: '/',
        status: {
          text: 'SOON',
          color: 'warning',
        },
      },
    ],
  },
]

export default config
