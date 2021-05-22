import React, { useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { Pair } from '@frenchkiss-libs/sdk'
import { Button, CardBody, Text } from '@frenchkiss-libs/uikit'
import { Link } from 'react-router-dom'
import CardNav from 'components/CardNav'
import Question from 'components/QuestionHelper'
import FullPositionCard from 'components/PositionCard'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { StyledInternalLink } from 'components/Shared'
import { LightCard } from 'components/Card'
import { RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'
import Container from 'components/Container'

import { useActiveWeb3React } from 'hooks'
import { usePairs } from 'data/Reserves'
import { toLiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import { Dots } from 'components/swap/styleds'
import PageHeader from 'components/PageHeader'
import AppBody from '../AppBody'

export default function Pool() {
  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()

  // fetch the user's balances of all tracked LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toLiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens,
  ])
  const [PairsBalances, fetchingPairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, PairsBalances]
  )

  const pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingPairBalances || pairs?.length < liquidityTokensWithBalances.length || pairs?.some((V2Pair) => !V2Pair)

  const allPairsWithLiquidity = pairs.map(([, pair]) => pair).filter((_pair): _pair is Pair => Boolean(_pair))

  return (
    <Container>
      <CardNav activeIndex={1} />
      <AppBody>
        <PageHeader
          title='Liquidity'
          description="Add liquidity to receive LP tokens"
        >
          <Button id="join-pool-button" as={Link} to="/add/BNB">
            Add Liquidity
          </Button>
        </PageHeader>
        <AutoColumn gap="lg" justify="center">
          <CardBody>
            <AutoColumn gap="12px" style={{ width: '100%' }}>
              <RowBetween padding="0 8px">
                <Text color={theme.colors.text}>Your Liquidity</Text>
                <Question
                  text='When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below.'

                />
              </RowBetween>

              {!account ? (
                <LightCard padding="40px">
                  <Text color="textDisabled" textAlign="center">
                    Connect to a wallet to view your liquidity.
                  </Text>
                </LightCard>
              ) : v2IsLoading ? (
                <LightCard padding="40px">
                  <Text color="textDisabled" textAlign="center">
                    <Dots>Loading</Dots>
                  </Text>
                </LightCard>
              ) : allPairsWithLiquidity?.length > 0 ? (
                <>
                  {allPairsWithLiquidity.map((v2Pair) => (
                    <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                  ))}
                </>
              ) : (
                <LightCard padding="40px">
                  <Text color="textDisabled" textAlign="center">
                    No liquidity found.
                  </Text>
                </LightCard>
              )}

              <div>
                <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  Don&lsquo;t see a pool you joined?
                    <StyledInternalLink id="import-pool-link" to="/find">
                    Import it.
                  </StyledInternalLink>
                </Text>
                <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  Or, if you staked your LP tokens in a farm, unstake them to see them here.
                </Text>
              </div>
            </AutoColumn>
          </CardBody>
        </AutoColumn>
      </AppBody>
    </Container >
  )
}
