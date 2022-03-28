USE new_stock;

-- solution 1

SELECT
	count(forex_symbols.id),
    forex_symbols.name,
    forex_symbols.description
FROM 
	forex_symbols

LEFT JOIN _stock_oanda_eur_usd AS EUR_USD
ON EUR_USD.symbol_id = forex_symbols.id

LEFT JOIN _stock_oanda_aud_usd AS AUD_USD
ON AUD_USD.symbol_id = forex_symbols.id

LEFT JOIN _stock_oanda_gbp_usd AS GBP_USD
ON GBP_USD.symbol_id = forex_symbols.id

WHERE forex_symbols.id IN (32, 60, 90)
GROUP BY forex_symbols.id;



-- solution 2

SELECT
	count(forex_symbols.id),
    forex_symbols.name,
    forex_symbols.description
FROM forex_symbols
LEFT JOIN _stock_oanda_eur_usd AS EUR_USD 
ON EUR_USD.symbol_id = forex_symbols.id
WHERE forex_symbols.id = 32
UNION
SELECT
	count(forex_symbols.id),
    forex_symbols.name,
    forex_symbols.description
FROM forex_symbols
LEFT JOIN _stock_oanda_aud_usd AS AUD_USD
ON AUD_USD.symbol_id = forex_symbols.id
WHERE forex_symbols.id = 60
UNION
SELECT
	count(forex_symbols.id),
    forex_symbols.name,
    forex_symbols.description
FROM forex_symbols
LEFT JOIN _stock_oanda_gbp_usd AS GBP_USD
ON GBP_USD.symbol_id = forex_symbols.id
WHERE forex_symbols.id = 90

GROUP BY forex_symbols.id;
