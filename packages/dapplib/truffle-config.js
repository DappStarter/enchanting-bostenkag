require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace indoor sure security trap cruise ridge toss give knee tackle slam'; 
let testAccounts = [
"0x4e8724a52503b3e6fda4a22fdd6a3c6c68f51366b157a5a1a914c8bf5d94933d",
"0xb8f3edbf33270b61a40c33c7ba42661e9222afc3513bf2973d4441cb697968ed",
"0x4096a6e3fc25785bf04580923c22ced3399e8a6f4e69f80eb3d60b4fb882e185",
"0x4b36a896707bda4ca5b68ee405089c377024ed99801ff89fce3510df630ed31b",
"0x0507f0f7d08902b5bec7098cf685cb56aaaa637be5458b5994de0e936c446d76",
"0xf8b315c78545d498695d0d3bbde31616e493b014f81e505c3390f5cae441201e",
"0xe3a1f662b42080f846fc9d2c482ea47e7039bce9a845a04ac9adf906aa6b8065",
"0xaf252240c22e0bc146c8830aceeee293002468525d9097c8ca049a0728fa6b0f",
"0xf925979fd3b75a4465eab7b365108823ced775fa33b14254ecb6c08524f19f12",
"0x75e6464a05c282a2ca6f58752eab5c5218e52d1d6470e8aa193dae51ed6d9dc9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

