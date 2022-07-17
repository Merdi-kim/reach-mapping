// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    whiteListed: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc1,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    whiteListed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
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
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    whiteListed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_UInt;
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:19:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:19:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v96, time: v95, didSend: v22, from: v94 } = txn1;
      
      ;
      
      const v98 = stdlib.checkedBigNumberify('./index.rsh:27:19:decimal', stdlib.UInt_max, '0');
      const v99 = v95;
      
      if (await (async () => {
        const v105 = stdlib.lt(v98, stdlib.checkedBigNumberify('./index.rsh:29:39:decimal', stdlib.UInt_max, '5'));
        
        return v105;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v96, time: v95, didSend: v22, from: v94 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.reportInfo(), {
    at: './index.rsh:20:24:application',
    fs: ['at ./index.rsh:20:24:application call to [unknown function] (defined at: ./index.rsh:20:24:function exp)', 'at ./index.rsh:20:24:application call to "liftedInteract" (defined at: ./index.rsh:20:24:application)'],
    msg: 'reportInfo',
    who: 'Deployer'
    });
  
  let v98 = stdlib.checkedBigNumberify('./index.rsh:27:19:decimal', stdlib.UInt_max, '0');
  let v99 = v95;
  
  while (await (async () => {
    const v105 = stdlib.lt(v98, stdlib.checkedBigNumberify('./index.rsh:29:39:decimal', stdlib.UInt_max, '5'));
    
    return v105;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v114], secs: v116, time: v115, didSend: v64, from: v113 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v118 = v114[stdlib.checkedBigNumberify('./index.rsh:30:7:spread', stdlib.UInt_max, '0')];
    const v119 = stdlib.lt(v98, stdlib.checkedBigNumberify('./index.rsh:33:42:decimal', stdlib.UInt_max, '5'));
    stdlib.assert(v119, {
      at: './index.rsh:33:12:application',
      fs: ['at ./index.rsh:31:14:application call to [unknown function] (defined at: ./index.rsh:31:14:function exp)'],
      msg: 'Whitelist spots are done',
      who: 'Deployer'
      });
    const v120 = {
      whiteListed: true
      };
    await stdlib.mapSet(map0, v118, v120);
    const v121 = stdlib.add(v98, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, '1'));
    await txn2.getOutput('Participant_whiteList', 'v121', ctc6, v121);
    const cv98 = v121;
    const cv99 = v115;
    
    v98 = cv98;
    v99 = cv99;
    
    continue;
    
    }
  return;
  
  
  };
export async function Participant_whiteList(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Participant_whiteList expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Participant_whiteList expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    whiteListed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v98] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4]);
  const v108 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:30:7:application call to [unknown function] (defined at: ./index.rsh:30:7:function exp)', 'at ./index.rsh:30:7:application call to [unknown function] (defined at: ./index.rsh:30:7:function exp)'],
    msg: 'in',
    who: 'Participant_whiteList'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v98, v108],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v114], secs: v116, time: v115, didSend: v64, from: v113 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Participant_whiteList"
        });
      ;
      const v118 = v114[stdlib.checkedBigNumberify('./index.rsh:30:7:spread', stdlib.UInt_max, '0')];
      const v119 = stdlib.lt(v98, stdlib.checkedBigNumberify('./index.rsh:33:42:decimal', stdlib.UInt_max, '5'));
      ;
      const v120 = {
        whiteListed: true
        };
      await stdlib.simMapSet(sim_r, 0, v118, v120);
      const v121 = stdlib.add(v98, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, '1'));
      const v122 = await txn1.getOutput('Participant_whiteList', 'v121', ctc4, v121);
      
      const v179 = v121;
      const v181 = stdlib.lt(v121, stdlib.checkedBigNumberify('./index.rsh:29:39:decimal', stdlib.UInt_max, '5'));
      if (v181) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v114], secs: v116, time: v115, didSend: v64, from: v113 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v118 = v114[stdlib.checkedBigNumberify('./index.rsh:30:7:spread', stdlib.UInt_max, '0')];
  const v119 = stdlib.lt(v98, stdlib.checkedBigNumberify('./index.rsh:33:42:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v119, {
    at: './index.rsh:33:12:application',
    fs: ['at ./index.rsh:31:14:application call to [unknown function] (defined at: ./index.rsh:31:14:function exp)'],
    msg: 'Whitelist spots are done',
    who: 'Participant_whiteList'
    });
  const v120 = {
    whiteListed: true
    };
  await stdlib.mapSet(map0, v118, v120);
  const v121 = stdlib.add(v98, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, '1'));
  const v122 = await txn1.getOutput('Participant_whiteList', 'v121', ctc4, v121);
  if (v64) {
    stdlib.protect(ctc0, await interact.out(v114, v122), {
      at: './index.rsh:30:8:application',
      fs: ['at ./index.rsh:30:8:application call to [unknown function] (defined at: ./index.rsh:30:8:function exp)', 'at ./index.rsh:35:8:application call to "k" (defined at: ./index.rsh:31:14:function exp)', 'at ./index.rsh:31:14:application call to [unknown function] (defined at: ./index.rsh:31:14:function exp)'],
      msg: 'out',
      who: 'Participant_whiteList'
      });
    }
  else {
    }
  
  const v179 = v121;
  const v181 = stdlib.lt(v121, stdlib.checkedBigNumberify('./index.rsh:29:39:decimal', stdlib.UInt_max, '5'));
  if (v181) {
    return;
    }
  else {
    return;
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Participant_whiteList(address)uint64`],
    pure: [],
    sigs: [`Participant_whiteList(address)uint64`]
    },
  appApproval: `BiAFAAEFAgMmAgEAACI1ADEYQQE/KWRJIls1AYEIWzUCMRkjEkEACzEAKIACAABmQgEKNhoAF0lBABQiNQQjNQaBqrCHjAUSRDYaAUIAFjYaAhc1BDYaAzYaARdJJQxAAFklEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDFzX/STUFNf6ABCsLwXc0/lCwNP8kDEQ0/iiAAgEBZjT/Iwg1/YAIAAAAAAAAAHk0/RZQsDT9FjUHNP0yBkIAJyISRCI0ARJENARJIhJMNAISEUSABF8Nq/qwgaCNBogAgSIyBkIAADX/STX+JAxBABY0/hYoSwFXAAhnSCEENQEyBjUCQgAeQgAAMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 1,
  stateSize: 8,
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
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
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T7",
                "name": "v114",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v121",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Participant_whiteList",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "_whiteListed",
                "type": "bool"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
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
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T7",
                "name": "v114",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d0e38038062000d0e833981016040819052620000269162000270565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000b0565b6200008d62000159565b60208082018051600090525143910152620000a881620000da565b505062000318565b81620000d65760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151600511156200013e57604080516020808201835260008083528482015151808452600390915543600155835191820152909101604051602081830303815290604052600290805190602001906200013992919062000190565b505050565b6000808055600181905562000156906002906200021f565b50565b60405180604001604052806000151581526020016200018b604051806040016040528060008152602001600081525090565b905290565b8280546200019e90620002db565b90600052602060002090601f016020900481019282620001c257600085556200020d565b82601f10620001dd57805160ff19168380011785556200020d565b828001600101855582156200020d579182015b828111156200020d578251825591602001919060010190620001f0565b506200021b92915062000259565b5090565b5080546200022d90620002db565b6000825580601f106200023e575050565b601f0160209004906000526020600020908101906200015691905b5b808211156200021b57600081556001016200025a565b6000604082840312156200028357600080fd5b604080519081016001600160401b0381118282101715620002b457634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620002cf57600080fd5b60208201529392505050565b600181811c90821680620002f057607f821691505b602082108114156200031257634e487b7160e01b600052602260045260246000fd5b50919050565b6109e680620003286000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633bc5b7bf1461008357806369afda47146100b057806373127915146100c357806383230757146100d6578063ab53f2c6146100eb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b506100a361009e366004610773565b61010e565b60405161007a91906107ad565b61005d6100be3660046107f5565b61014c565b6100706100d1366004610773565b610177565b3480156100e257600080fd5b50600154610070565b3480156100f757600080fd5b506101006101cb565b60405161007a92919061080d565b61013d604080516060810190915280600081526000602080830182905260408051918201815291815291015290565b61014682610268565b92915050565b60408051602081019091526000815261017361016d368490038401846108a1565b8261035f565b5050565b600061018f6040518060200160405280600081525090565b610197610631565b604080518082019091526001600160a01b03851660208083019182529082528201526101c3818361035f565b505192915050565b6000606060005460028080546101e090610931565b80601f016020809104026020016040519081016040528092919081815260200182805461020c90610931565b80156102595780601f1061022e57610100808354040283529160200191610259565b820191906000526020600020905b81548152906001019060200180831161023c57829003601f168201915b50505050509050915091509091565b610297604080516060810190915280600081526000602080830182905260408051918201815291815291015290565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156102c6576102c6610797565b1415610350576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561030757610307610797565b600181111561031857610318610797565b81528154610100900460ff90811615156020808401919091526040805191820181526001909401549091161515815291015292915050565b60008082526020820152919050565b61036f600360005414600a61058d565b815161038a90158061038357508251600154145b600b61058d565b60008080556002805461039c90610931565b80601f01602080910402602001604051908101604052809291908181526020018280546103c890610931565b80156104155780601f106103ea57610100808354040283529160200191610415565b820191906000526020600020905b8154815290600101906020018083116103f857829003601f168201915b505050505080602001905181019061042d9190610966565b90506104516040805160608101825260009181018281528152602081019190915290565b60408051338152855160208083019190915286015151516001600160a01b03168183015290517f397fbf74ee760faaaf416e26711cae0f761d205a28047865f4cb3b3fdc062bbc9181900360600190a16104ad3415600861058d565b6104bf6005836000015110600961058d565b80516001908190526020858101805151516001600160a01b03908116600090815260049093526040808420805460ff1990811687179091558651935151519092168452909220905190830180549092169015151790558251610521919061098a565b60208281018290526040519182527f9533425b29f30160a29d304cf2590d968d95c86447f40ff82cd2c381bb499c64910160405180910390a16020810151835261056961065e565b6020808301518282018051919091525143910152610586816105b2565b5050505050565b816101735760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515160051115610613576040805160208082018352600080835284820151518084526003909155436001558351918201529091016040516020818303038152906040526002908051906020019061060e92919061068f565b505050565b6000808055600181905561062990600290610713565b50565b905290565b60405180604001604052806000815260200161062c60408051808201909152600060208201908152815290565b604051806040016040528060001515815260200161062c604051806040016040528060008152602001600081525090565b82805461069b90610931565b90600052602060002090601f0160209004810192826106bd5760008555610703565b82601f106106d657805160ff1916838001178555610703565b82800160010185558215610703579182015b828111156107035782518255916020019190600101906106e8565b5061070f929150610749565b5090565b50805461071f90610931565b6000825580601f1061072f575050565b601f01602090049060005260206000209081019061062991905b5b8082111561070f576000815560010161074a565b6001600160a01b038116811461062957600080fd5b60006020828403121561078557600080fd5b81356107908161075e565b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106107d257634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151511515604083015292915050565b60006040828403121561080757600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561084157858101830151858201606001528201610825565b81811115610853576000606083870101525b50601f01601f191692909201606001949350505050565b6040516020810167ffffffffffffffff8111828210171561089b57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360408112156108b457600080fd5b6040516040810181811067ffffffffffffffff821117156108e557634e487b7160e01b600052604160045260246000fd5b604052833581526020601f19830112156108fe57600080fd5b61090661086a565b915061091061086a565b602085013561091e8161075e565b8152825260208101919091529392505050565b600181811c9082168061094557607f821691505b6020821081141561080757634e487b7160e01b600052602260045260246000fd5b60006020828403121561097857600080fd5b61098061086a565b9151825250919050565b600082198211156109ab57634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212202aa2df2892936cf4b5552f5d43b416cf17ca016f795b9bcfaa27f5da8892c51164736f6c634300080c0033`,
  BytecodeLen: 3342,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:47:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:27:17:after expr stmt semicolon',
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
  "Deployer": Deployer,
  "Participant_whiteList": Participant_whiteList
  };
export const _APIs = {
  Participant: {
    whiteList: Participant_whiteList
    }
  };
