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
    href: '/',
    status: {
      text: 'SOON',
      color: 'warning',
    },
    // href: 'https://https://docs.frenchkiss.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/',
    status: {
      text: 'SOON',
      color: 'warning',
    },
    // href: 'https://https://docs.frenchkiss.finance/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/',
    status: {
      text: 'SOON',
      color: 'warning',
    },
    // href: 'https://https://docs.frenchkiss.finance/lottery',
    // status: {
    //   text: 'WIN',
    //   color: 'warning',
    // },
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://https://docs.frenchkiss.finance/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://https://docs.frenchkiss.finance/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://https://docs.frenchkiss.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://https://docs.frenchkiss.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://https://docs.frenchkiss.finance/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: '/',
    status: {
      text: 'SOON',
      color: 'warning',
    },
    // items: [
    //   {
    //     label: 'Overview',
    //     href: 'https://info.frenchkiss.finance',
    //   },
    //   {
    //     label: 'Tokens',
    //     href: 'https://info.frenchkiss.finance/tokens',
    //   },
    //   {
    //     label: 'Pairs',
    //     href: 'https://info.frenchkiss.finance/pairs',
    //   },
    //   {
    //     label: 'Accounts',
    //     href: 'https://info.frenchkiss.finance/accounts',
    //   },
    // ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://https://docs.frenchkiss.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.frenchkiss.finance/contact-us',
      },
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
        label: 'Docs',
        href: 'https://docs.frenchkiss.finance',
      },
      {
        label: 'Blog',
        href: 'https://frenchkiss-finance.medium.com',
      },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
