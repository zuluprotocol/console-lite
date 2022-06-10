import { MarketState, MarketTradingMode } from '@vegaprotocol/types';
import merge from 'lodash/merge';
import type { PartialDeep } from 'type-fest';
import type { DealTicketQuery } from '@vegaprotocol/deal-ticket';

export const generateDealTicketQuery = (
  override?: PartialDeep<DealTicketQuery>
): DealTicketQuery => {
  const defaultResult: DealTicketQuery = {
    market: {
      id: 'market-id',
      name: 'ETHBTC Quarterly (30 Jun 2022)',
      decimalPlaces: 2,
      positionDecimalPlaces: 1,
      state: MarketState.Active,
      tradingMode: MarketTradingMode.Continuous,
      tradableInstrument: {
        instrument: {
          product: {
            quoteName: 'BTC',
            settlementAsset: {
              __typename: 'Asset',
              id: '5cfa87844724df6069b94e4c8a6f03af21907d7bc251593d08e4251043ee9f7c',
              symbol: 'tBTC',
              name: 'tBTC TEST',
            },
            __typename: 'Future',
          },
          __typename: 'Instrument',
        },
        __typename: 'TradableInstrument',
      },
      depth: {
        __typename: 'MarketDepth',
        lastTrade: {
          __typename: 'Trade',
          price: '100',
        },
      },
      __typename: 'Market',
    },
  };

  return merge(defaultResult, override);
};
