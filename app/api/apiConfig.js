export const blockTradesAPIs = {
    BASE: "https://api.blocktrades.us/v2",
    // BASE_OL: "https://api.blocktrades.us/ol/v2",
    BASE_OL: "https://ol-api1.openledger.info/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const rudexAPIs = {
    BASE: "https://gateway.rudex.org/api/v0_1",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/new-deposit-address"
};

export const cryptoBridgeAPIs = {
    BASE: "https://api." + (__TESTNET__ ? "testnet." : "") +"crypto-bridge.org/api/v1",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/wallets",
    MARKETS: "/markets",
    TRADING_PAIRS: "/trading-pairs",
};

const WSS_TEST_NODES = [
    {url: "wss://fake.automatic-selection.com", location: {translate: "settings.api_closest"}},
    {url: "ws://127.0.0.1:8090", location: "Locally hosted"},
    {url: "wss://bitshares.testnet.crypto-bridge.org", location: "Testnet"}
];

const WSS_PROD_NODES = [
    {url: "wss://fake.automatic-selection.com", location: {translate: "settings.api_closest"}},
    {url: "ws://127.0.0.1:8090", location: "Locally hosted"},
    {url: "wss://us-west-1.bts.crypto-bridge.org", location: "North California, USA"},
    {url: "wss://us-east-1.bts.crypto-bridge.org", location: "North Virginia, USA"},
    {url: "wss://sa-east-1.bts.crypto-bridge.org", location: "Sao Paulo, Brazil"},
    {url: "wss://ap-northeast-1.bts.crypto-bridge.org", location: "Tokyo, Japan"},
    {url: "wss://ap-northeast-2.bts.crypto-bridge.org", location: "Seoul, South Korea"},
    {url: "wss://ap-southeast-1.bts.crypto-bridge.org", location: "Singapore"},
    {url: "wss://ap-southeast-2.bts.crypto-bridge.org", location: "Sydney, Australia"},
    {url: "wss://eu-west-1.bts.crypto-bridge.org", location:  "Ireland"},
    {url: "wss://eu-central-1.bts.crypto-bridge.org", location: "Frankfurt, Germany"}
];

export const settingsAPIs = {
    DEFAULT_WS_NODE: "wss://fake.automatic-selection.com",
    WS_NODE_LIST: __TESTNET__ ? WSS_TEST_NODES : WSS_PROD_NODES,
    DEFAULT_FAUCET: "https://api.crypto-bridge.org",
    TESTNET_FAUCET: "https://api.testnet.crypto-bridge.org",
    RPC_URL: "https://openledger.info/api/"
};
