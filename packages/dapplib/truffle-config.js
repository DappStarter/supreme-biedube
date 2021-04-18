require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note meadow coach good prison off gasp'; 
let testAccounts = [
"0xc5160e327f5e60cf10db1e394e29ac0e83f35c3837c923635847c29d6226b86c",
"0x3485516e0b84e1af786c437686aabf62cf5c4a66837e8f5abd51007566d87c85",
"0x87ed6d47de4a392c25b55a710ec57d55c822c778681a8e1fa591273f3065545e",
"0xbc69cfd7286f4729c6900adf0716db1d6f9252afbb374e397aceda038cc58f13",
"0xd881cbf8847176652468f67db93a8874f05239ac5e739992e8b56ce2cf94d3ff",
"0xa855657b5ab06422d542a531831e81c98360625310134e1c7167a03e16e0b45b",
"0xf84ad9a7a0c8e66656a5cd6d7e6626b6d0c473d6e4463befc65fd9c0f49f54cb",
"0xe76cc598a9d91b26f318acfd9c570bfccace8f16dc03b6be0e845a406bfd3513",
"0xa4673a17c84d38dec33ff1d5036ad41c7f55e361114134743d6653b625e29e09",
"0x1ead497f4d4ed5fbb979408c17b996e6b092f59ae14b7aa1bad449a7b7cb187e"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
