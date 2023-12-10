/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  SourceMinter,
  SourceMinterInterface,
} from "../../contracts/SourceMinter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "link",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "FailedToWithdrawEth",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "WithdrawSuccessfull",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "WithdrawTokenSuccessfull",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "enum SourceMinter.PayFeesIn",
        name: "payFeesIn",
        type: "uint8",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620019b4380380620019b48339818101604052810190620000379190620003e7565b338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000ac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a3906200048f565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620001335762000132816200024e60201b60201c565b5b5050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505060a05173ffffffffffffffffffffffffffffffffffffffff1663095ea7b36080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401620001ff929190620004dd565b6020604051808303816000875af11580156200021f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000245919062000547565b505050620005eb565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620002bf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002b690620005c9565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003af8262000382565b9050919050565b620003c181620003a2565b8114620003cd57600080fd5b50565b600081519050620003e181620003b6565b92915050565b600080604083850312156200040157620004006200037d565b5b60006200041185828601620003d0565b92505060206200042485828601620003d0565b9150509250929050565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b6000620004776018836200042e565b915062000484826200043f565b602082019050919050565b60006020820190508181036000830152620004aa8162000468565b9050919050565b620004bc81620003a2565b82525050565b6000819050919050565b620004d781620004c2565b82525050565b6000604082019050620004f46000830185620004b1565b620005036020830184620004cc565b9392505050565b60008115159050919050565b62000521816200050a565b81146200052d57600080fd5b50565b600081519050620005418162000516565b92915050565b60006020828403121562000560576200055f6200037d565b5b6000620005708482850162000530565b91505092915050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000620005b16017836200042e565b9150620005be8262000579565b602082019050919050565b60006020820190508181036000830152620005e481620005a2565b9050919050565b60805160a0516113956200061f60003960006106a20152600081816106f6015281816107c1015261086601526113956000f3fe6080604052600436106100595760003560e01c80633aeac4e11461006557806351cff8d91461008e57806379ba5097146100b75780638da5cb5b146100ce578063ec99afa2146100f9578063f2fde38b1461012257610060565b3661006057005b600080fd5b34801561007157600080fd5b5061008c60048036038101906100879190610baa565b61014b565b005b34801561009a57600080fd5b506100b560048036038101906100b09190610bea565b610292565b005b3480156100c357600080fd5b506100cc610391565b005b3480156100da57600080fd5b506100e3610526565b6040516100f09190610c26565b60405180910390f35b34801561010557600080fd5b50610120600480360381019061011b9190610ca6565b61054f565b005b34801561012e57600080fd5b5061014960048036038101906101449190610bea565b610947565b005b61015361095b565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161018e9190610c26565b602060405180830381865afa1580156101ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cf9190610d2f565b90508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b815260040161020c929190610d6b565b6020604051808303816000875af115801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f9190610dcc565b507f604b702cac71190b75319816a8873429af0c5fadcfd607ac162239ffe2e295dc338484846040516102859493929190610df9565b60405180910390a1505050565b61029a61095b565b600047905060008273ffffffffffffffffffffffffffffffffffffffff16826040516102c590610e6f565b60006040518083038185875af1925050503d8060008114610302576040519150601f19603f3d011682016040523d82523d6000602084013e610307565b606091505b5050905080610351573383836040517f9d11f56300000000000000000000000000000000000000000000000000000000815260040161034893929190610e84565b60405180910390fd5b7f0b7c911e3a1aa30ec65363059a1edabbd5237c3a7d683f8b5761a734b75b52f733848460405161038493929190610e84565b60405180910390a1505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610421576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041890610f18565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006040518060a001604052808460405160200161056d9190610c26565b6040516020818303038152906040528152602001336040516024016105929190610c26565b6040516020818303038152906040527f6a627842000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050508152602001600067ffffffffffffffff81111561062f5761062e610f38565b5b60405190808252806020026020018201604052801561066857816020015b610655610b17565b81526020019060019003908161064d5790505b50815260200160018081111561068157610680610f67565b5b84600181111561069457610693610f67565b5b146106a05760006106c2565b7f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff16815260200160405180602001604052806000815250815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166320487ded86846040518363ffffffff1660e01b815260040161074f9291906111bc565b602060405180830381865afa15801561076c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107909190610d2f565b905060006001808111156107a7576107a6610f67565b5b8460018111156107ba576107b9610f67565b5b03610864577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f987856040518363ffffffff1660e01b815260040161081a9291906111bc565b6020604051808303816000875af1158015610839573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085d9190611222565b9050610906565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f98388866040518463ffffffff1660e01b81526004016108c09291906111bc565b60206040518083038185885af11580156108de573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906109039190611222565b90505b7fb06a7d56e5736d613c3122470fadaf19fa9b76fbc2244c4ed1bab9c2c4d6213b338260405161093792919061125e565b60405180910390a1505050505050565b61094f61095b565b610958816109eb565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e0906112d3565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a509061133f565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b7782610b4c565b9050919050565b610b8781610b6c565b8114610b9257600080fd5b50565b600081359050610ba481610b7e565b92915050565b60008060408385031215610bc157610bc0610b47565b5b6000610bcf85828601610b95565b9250506020610be085828601610b95565b9150509250929050565b600060208284031215610c0057610bff610b47565b5b6000610c0e84828501610b95565b91505092915050565b610c2081610b6c565b82525050565b6000602082019050610c3b6000830184610c17565b92915050565b600067ffffffffffffffff82169050919050565b610c5e81610c41565b8114610c6957600080fd5b50565b600081359050610c7b81610c55565b92915050565b60028110610c8e57600080fd5b50565b600081359050610ca081610c81565b92915050565b600080600060608486031215610cbf57610cbe610b47565b5b6000610ccd86828701610c6c565b9350506020610cde86828701610b95565b9250506040610cef86828701610c91565b9150509250925092565b6000819050919050565b610d0c81610cf9565b8114610d1757600080fd5b50565b600081519050610d2981610d03565b92915050565b600060208284031215610d4557610d44610b47565b5b6000610d5384828501610d1a565b91505092915050565b610d6581610cf9565b82525050565b6000604082019050610d806000830185610c17565b610d8d6020830184610d5c565b9392505050565b60008115159050919050565b610da981610d94565b8114610db457600080fd5b50565b600081519050610dc681610da0565b92915050565b600060208284031215610de257610de1610b47565b5b6000610df084828501610db7565b91505092915050565b6000608082019050610e0e6000830187610c17565b610e1b6020830186610c17565b610e286040830185610c17565b610e356060830184610d5c565b95945050505050565b600081905092915050565b50565b6000610e59600083610e3e565b9150610e6482610e49565b600082019050919050565b6000610e7a82610e4c565b9150819050919050565b6000606082019050610e996000830186610c17565b610ea66020830185610c17565b610eb36040830184610d5c565b949350505050565b600082825260208201905092915050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b6000610f02601683610ebb565b9150610f0d82610ecc565b602082019050919050565b60006020820190508181036000830152610f3181610ef5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b610f9f81610c41565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610fdf578082015181840152602081019050610fc4565b60008484015250505050565b6000601f19601f8301169050919050565b600061100782610fa5565b6110118185610fb0565b9350611021818560208601610fc1565b61102a81610feb565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61106a81610b6c565b82525050565b61107981610cf9565b82525050565b6040820160008201516110956000850182611061565b5060208201516110a86020850182611070565b50505050565b60006110ba838361107f565b60408301905092915050565b6000602082019050919050565b60006110de82611035565b6110e88185611040565b93506110f383611051565b8060005b8381101561112457815161110b88826110ae565b9750611116836110c6565b9250506001810190506110f7565b5085935050505092915050565b600060a083016000830151848203600086015261114e8282610ffc565b915050602083015184820360208601526111688282610ffc565b9150506040830151848203604086015261118282826110d3565b91505060608301516111976060860182611061565b50608083015184820360808601526111af8282610ffc565b9150508091505092915050565b60006040820190506111d16000830185610f96565b81810360208301526111e38184611131565b90509392505050565b6000819050919050565b6111ff816111ec565b811461120a57600080fd5b50565b60008151905061121c816111f6565b92915050565b60006020828403121561123857611237610b47565b5b60006112468482850161120d565b91505092915050565b611258816111ec565b82525050565b60006040820190506112736000830185610c17565b611280602083018461124f565b9392505050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b60006112bd601683610ebb565b91506112c882611287565b602082019050919050565b600060208201905081810360008301526112ec816112b0565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000611329601783610ebb565b9150611334826112f3565b602082019050919050565b600060208201905081810360008301526113588161131c565b905091905056fea26469706673582212205e03fafaa074c637a60507e212a08ab9e2cdd5597b98055ca5c7d3879a421e3c64736f6c63430008130033";

type SourceMinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SourceMinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SourceMinter__factory extends ContractFactory {
  constructor(...args: SourceMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    router: AddressLike,
    link: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(router, link, overrides || {});
  }
  override deploy(
    router: AddressLike,
    link: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(router, link, overrides || {}) as Promise<
      SourceMinter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SourceMinter__factory {
    return super.connect(runner) as SourceMinter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SourceMinterInterface {
    return new Interface(_abi) as SourceMinterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SourceMinter {
    return new Contract(address, _abi, runner) as unknown as SourceMinter;
  }
}
