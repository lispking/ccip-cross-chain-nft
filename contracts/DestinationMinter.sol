// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {MyNFT} from "./MyNFT.sol";

contract DestinationMinter is CCIPReceiver {
    MyNFT nft;

    event MintCallSuccessfull(address nftAddress);

    error FailedToMintCall(address owner, address nftAddress);

    constructor(address router, address nftAddress) CCIPReceiver(router) {
        nft = MyNFT(nftAddress);
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory message
    ) internal override {
        (bool success, ) = address(nft).call(message.data);
        if (!success) {
            revert FailedToMintCall(msg.sender, address(nft));
        }
        emit MintCallSuccessfull(address(nft));
    }
}
