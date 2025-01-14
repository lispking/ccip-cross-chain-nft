/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Withdraw,
  WithdrawInterface,
} from "../../../contracts/utils/Withdraw";

const _abi = [
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000087576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200007e90620002a7565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146200010e576200010d816200011760201b60201c565b5b5050506200033b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000188576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200017f9062000319565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b60006200028f60188362000246565b91506200029c8262000257565b602082019050919050565b60006020820190508181036000830152620002c28162000280565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006200030160178362000246565b91506200030e82620002c9565b602082019050919050565b600060208201905081810360008301526200033481620002f2565b9050919050565b610af3806200034b6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633aeac4e11461005c57806351cff8d91461007857806379ba5097146100945780638da5cb5b1461009e578063f2fde38b146100bc575b600080fd5b6100766004803603810190610071919061070f565b6100d8565b005b610092600480360381019061008d919061074f565b61021f565b005b61009c61031e565b005b6100a66104b3565b6040516100b3919061078b565b60405180910390f35b6100d660048036038101906100d1919061074f565b6104dc565b005b6100e06104f0565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161011b919061078b565b602060405180830381865afa158015610138573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015c91906107dc565b90508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b8152600401610199929190610818565b6020604051808303816000875af11580156101b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dc9190610879565b507f604b702cac71190b75319816a8873429af0c5fadcfd607ac162239ffe2e295dc3384848460405161021294939291906108a6565b60405180910390a1505050565b6102276104f0565b600047905060008273ffffffffffffffffffffffffffffffffffffffff16826040516102529061091c565b60006040518083038185875af1925050503d806000811461028f576040519150601f19603f3d011682016040523d82523d6000602084013e610294565b606091505b50509050806102de573383836040517f9d11f5630000000000000000000000000000000000000000000000000000000081526004016102d593929190610931565b60405180910390fd5b7f0b7c911e3a1aa30ec65363059a1edabbd5237c3a7d683f8b5761a734b75b52f733848460405161031193929190610931565b60405180910390a1505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a5906109c5565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104e46104f0565b6104ed81610580565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461057e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057590610a31565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590610a9d565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106dc826106b1565b9050919050565b6106ec816106d1565b81146106f757600080fd5b50565b600081359050610709816106e3565b92915050565b60008060408385031215610726576107256106ac565b5b6000610734858286016106fa565b9250506020610745858286016106fa565b9150509250929050565b600060208284031215610765576107646106ac565b5b6000610773848285016106fa565b91505092915050565b610785816106d1565b82525050565b60006020820190506107a0600083018461077c565b92915050565b6000819050919050565b6107b9816107a6565b81146107c457600080fd5b50565b6000815190506107d6816107b0565b92915050565b6000602082840312156107f2576107f16106ac565b5b6000610800848285016107c7565b91505092915050565b610812816107a6565b82525050565b600060408201905061082d600083018561077c565b61083a6020830184610809565b9392505050565b60008115159050919050565b61085681610841565b811461086157600080fd5b50565b6000815190506108738161084d565b92915050565b60006020828403121561088f5761088e6106ac565b5b600061089d84828501610864565b91505092915050565b60006080820190506108bb600083018761077c565b6108c8602083018661077c565b6108d5604083018561077c565b6108e26060830184610809565b95945050505050565b600081905092915050565b50565b60006109066000836108eb565b9150610911826108f6565b600082019050919050565b6000610927826108f9565b9150819050919050565b6000606082019050610946600083018661077c565b610953602083018561077c565b6109606040830184610809565b949350505050565b600082825260208201905092915050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b60006109af601683610968565b91506109ba82610979565b602082019050919050565b600060208201905081810360008301526109de816109a2565b9050919050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b6000610a1b601683610968565b9150610a26826109e5565b602082019050919050565b60006020820190508181036000830152610a4a81610a0e565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000610a87601783610968565b9150610a9282610a51565b602082019050919050565b60006020820190508181036000830152610ab681610a7a565b905091905056fea26469706673582212202b19aecef94f48d3440c2b69851ed34c8e2e171c7d4b2e21832eb5c67606099364736f6c63430008130033";

type WithdrawConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Withdraw__factory extends ContractFactory {
  constructor(...args: WithdrawConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Withdraw & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Withdraw__factory {
    return super.connect(runner) as Withdraw__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawInterface {
    return new Interface(_abi) as WithdrawInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Withdraw {
    return new Contract(address, _abi, runner) as unknown as Withdraw;
  }
}
