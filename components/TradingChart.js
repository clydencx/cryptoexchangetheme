import React from 'react';
import { AdvancedChart } from 'react-tradingview-embed';

export default function TradingChart() {
  return (
    <AdvancedChart
      widgetProps={{
        theme: 'light',
        symbol: 'BINANCE:BTCUSDT',
        allow_symbol_change: true,
        toolbar_bg: '#fff',
        height: 550,
      }}
    />
  );
}
