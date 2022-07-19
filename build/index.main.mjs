// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const map0_ctc = ctc1;
  
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v48 = stdlib.protect(ctc2, interact.addressToWhiteList, 'for Deployer\'s interact field addressToWhiteList');
  
  const txn1 = await (ctc.sendrecv({
    args: [v48],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v52], secs: v54, time: v53, didSend: v27, from: v51 } = txn1;
      
      ;
      
      await stdlib.simMapSet(sim_r, 0, v52, null);
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v52], secs: v54, time: v53, didSend: v27, from: v51 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.reportInfo(), {
    at: './index.rsh:23:24:application',
    fs: ['at ./index.rsh:23:24:application call to [unknown function] (defined at: ./index.rsh:23:24:function exp)', 'at ./index.rsh:23:24:application call to "liftedInteract" (defined at: ./index.rsh:23:24:application)'],
    msg: 'reportInfo',
    who: 'Deployer'
    });
  
  await stdlib.mapSet(map0, v52, null);
  stdlib.protect(ctc0, await interact.displayAddress(v52), {
    at: './index.rsh:26:28:application',
    fs: ['at ./index.rsh:26:28:application call to [unknown function] (defined at: ./index.rsh:26:28:function exp)', 'at ./index.rsh:26:28:application call to "liftedInteract" (defined at: ./index.rsh:26:28:application)'],
    msg: 'displayAddress',
    who: 'Deployer'
    });
  
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgEAACI1ADEYQQC6KWRJIls1AYEIWzUCMRkjEkEACDEAKChmQgCINhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBFyISRIGgjQaIAJYiNAESRDQESSISTDQCEhFESTUFNf+ABPuGb+40/1CwNP8ogAEBZkIAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIzE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v52",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v52",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161063138038061063183398101604081905261002291610160565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a1610085341560076100e1565b60208181018051516001600160a01b03908116600090815260049093526040808420805460ff1916600190811790915592515190911683528220805462ff0000191690558180558190556100db9060029061010a565b50610254565b816101065760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b50805461011690610219565b6000825580601f10610126575050565b601f0160209004906000526020600020908101906101449190610147565b50565b5b8082111561015c5760008155600101610148565b5090565b600081830360408082121561017457600080fd5b80518082016001600160401b0380821183831017156101a357634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101bc57600080fd5b8351945060208501915084821081831117156101e857634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b038216821461020757600080fd5b90825260208101919091529392505050565b600181811c9082168061022d57607f821691505b6020821081141561024e57634e487b7160e01b600052602260045260246000fd5b50919050565b6103ce806102636000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780633bc5b7bf1461006d578063832307571461009a578063ab53f2c6146100af57005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5061008d610088366004610273565b6100d2565b60405161006491906102b9565b3480156100a657600080fd5b5060015461005a565b3480156100bb57600080fd5b506100c46100fe565b604051610064929190610300565b60408051606081018252600080825260208201819052918101919091526100f88261019b565b92915050565b6000606060005460028080546101139061035d565b80601f016020809104026020016040519081016040528092919081815260200182805461013f9061035d565b801561018c5780601f106101615761010080835404028352916020019161018c565b820191906000526020600020905b81548152906001019060200180831161016f57829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156101e7576101e76102a3565b1415610264576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610228576102286102a3565b6001811115610239576102396102a3565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b60006020828403121561028557600080fd5b81356001600160a01b038116811461029c57600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106102de57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b8181101561033457858101830151858201606001528201610318565b81811115610346576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061037157607f821691505b6020821081141561039257634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220a6f6e33646a7e8da5a3b713db188632757566e63ab04613d1022eae1fb70035464736f6c634300080c0033`,
  BytecodeLen: 1585,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer
  };
export const _APIs = {
  };
