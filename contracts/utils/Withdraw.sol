// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/token/ERC20/IERC20.sol";

contract Withdraw is OwnerIsCreator {
    event WithdrawSuccessfull(address owner, address target, uint256 value);
    event WithdrawTokenSuccessfull(address owner, address target, address token, uint256 value);

    error FailedToWithdrawEth(address owner, address target, uint256 value);

    function withdraw(address beneficiary) public onlyOwner {
        uint256 amount = address(this).balance;
        (bool sent, ) = beneficiary.call{value: amount}("");
        if (!sent) {
            revert FailedToWithdrawEth(msg.sender, beneficiary, amount);
        }
        emit WithdrawSuccessfull(msg.sender, beneficiary, amount);
    }

    function withdrawToken(
        address beneficiary,
        address token
    ) public onlyOwner {
        uint256 amount = IERC20(token).balanceOf(address(this));
        IERC20(token).transfer(beneficiary, amount);
        emit WithdrawTokenSuccessfull(msg.sender, beneficiary, token, amount);
    }
}
