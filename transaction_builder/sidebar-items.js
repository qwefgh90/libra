initSidebarItems({"fn":[["_encode_mint_script_internal","Encode a program creating `amount` coins for sender"],["_encode_publishing_option_script_internal","Modify publishing options. Takes the LCS bytes of a `VMPublishingOption` object as input."],["_encode_update_libra_version_internal","Update Libra version"],["encode_add_currency_to_account_script","Add the currency identified by the type `currency` to the sending accounts. Aborts if the account already holds a balance fo `currency` type."],["encode_add_recovery_rotation_capability","Add the `KeyRotationCapability` for `to_recover_account` to the `RecoveryAddress` resource under `recovery_address`. Aborts if `to_recovery_account` and `to_recovery_address belong to different VASPs, if `recovery_address`does not have a`RecoveryAddress`resource, or if`to_recover_account`has already extracted its`KeyRotationCapability`."],["encode_add_validator_script","Encode a program adding `new_validator` to the pending validator set. Fails if the `new_validator` address is already in the validator set, already in the pending validator set, or does not have a `ValidatorConfig` resource stored at the address"],["encode_block_prologue_script",""],["encode_burn_script","Permanently destroy the coins stored in the oldest burn request under the `Preburn` resource stored at `preburn_address`. This will only succeed if the sender has a `BurnCapability` stored under their account and `preburn_address` has a pending burn request"],["encode_burn_txn_fees_script","Burn transaction fees that have been collected in the given `currency`, and relinquish to the association. The currency must be non-synthetic."],["encode_cancel_burn_script","Cancel the oldest burn request from `preburn_address` and return the funds to `preburn_address`.  Fails if the sender does not have a published `BurnCapability`."],["encode_create_child_vasp_account","Create an account with the ChildVASP role at `address` with authentication key `auth_key_prefix` | `new_account_address` and `initial_balance` of type `currency` transferred from the sender. If `add_all_currencies` is true, 0 balances for all available currencies in the system will also be added to the account. This account will be a child of the transaction sender, which must be a ParentVASP."],["encode_create_designated_dealer","Creates designated dealer at 'new_account_address"],["encode_create_parent_vasp_account","Create an account with the ParentVASP role at `address` with authentication key `auth_key_prefix` | `new_account_address` and a 0 balance of type `currency`. If `add_all_currencies` is true, 0 balances for all available currencies in the system will also be added. This can only be invoked by an Association account."],["encode_create_recovery_address","Extract the `KeyRotationCapability` for `recovery_account` and publish it in a `RecoveryAddress` resource under  `recovery_account`. Aborts if `recovery_account` has delegated its `KeyRotationCapability`, already has a`RecoveryAddress` resource, or is not a VASP."],["encode_create_validator_account","Creates a validator account at `new_validator_address` with `auth_key_prefix`"],["encode_freeze_account","Freezes account with address addr."],["encode_mint_lbr","Mints `amount_lbr` LBR from the sending account's constituent coins and deposits the resulting LBR into the sending account."],["encode_mint_script","Encode a program creating `amount` coins for sender"],["encode_preburn_script","Preburn `amount` coins from the sender's account. This will only succeed if the sender already has a published `Preburn` resource."],["encode_publish_shared_ed25519_public_key_script","(1) Rotate the authentication key of the sender to `public_key` (2) Publish a resource containing a 32-byte ed25519 public key and the rotation capability of the sender under the sender's address. Aborts if the sender already has a `SharedEd25519PublicKey` resource. Aborts if the length of `new_public_key` is not 32."],["encode_publishing_option_script",""],["encode_reconfigure_script","Reconfigures the ValidatorSet by copying local validators' configs into the global ValidatorSet."],["encode_remove_validator_script","Encode a program adding `to_remove` to the set of pending validator removals. Fails if the `to_remove` address is already in the validator set or already in the pending removals."],["encode_rotate_authentication_key_script","Encode a program that rotates the sender's authentication key to `new_key`. `new_key` should be a 256 bit sha3 hash of an ed25519 public key."],["encode_rotate_authentication_key_script_with_nonce","Encode a program that rotates the sender's authentication key to `new_key`. `new_key` should be a 256 bit sha3 hash of an ed25519 public key. This script also takes nonce"],["encode_rotate_authentication_key_with_recovery_address_script","Rotate the authentication key of `to_recover` to `new_key`. Can be invoked by either `recovery_address` or `to_recover`. Aborts if `recovery_address` does not have the `KeyRotationCapability` for `to_recover`."],["encode_rotate_base_url_script","Encode a program that rotates `vasp_root_addr`'s base URL to `new_url`."],["encode_rotate_compliance_public_key_script","Encode a program that rotates `vasp_root_addr`'s compliance public key to `new_key`."],["encode_rotate_shared_ed25519_public_key_script","(1) rotate the public key stored in the sender's `SharedEd25519PublicKey` resource to `new_public_key` (2) rotate the authentication key using the capability stored in the sender's `SharedEd25519PublicKey` to a new value derived from `new_public_key` Aborts if the sender does not have a `SharedEd25519PublicKey` resource. Aborts if the length of `new_public_key` is not 32."],["encode_set_validator_config_script","Encode a program setting a consensus config for a validator. `consensus_pubkey` should be a Ed25519 public c=key."],["encode_stdlib_script","Encode `stdlib_script` with arguments `args`. Note: this is not type-safe; the individual type-safe wrappers below should be used when possible."],["encode_stdlib_upgrade_transaction",""],["encode_tiered_mint","Mints 'mint_amount' to 'designated_dealer_address' for 'tier_index' tier. Max valid tier index is 3 since there are max 4 tiers per DD. Sender should be treasury compliance account and receiver authorized DD"],["encode_transfer_with_metadata_script","Encode a program transferring `amount` coins to `recipient_address` with (optional) associated metadata `metadata` and (optional) `signature` on the metadata, amount, and sender address. The `metadata` and `signature` parameters are only required if `amount` >= 1_000_000 micro LBR and the sender and recipient of the funds are two distinct VASPs. Fails if there is no account at the recipient address or if the sender's balance is lower than `amount`"],["encode_unfreeze_account","Unfreezes account with address addr."],["encode_unmint_lbr","Unmints `amount_lbr` LBR from the sending account into the constituent coins and deposits the resulting coins into the sending account."],["encode_update_exchange_rate","Updates the on-chain exchange rate to LBR for the given `currency` to be given by`new_exchange_rate_denominator/new_exchange_rate_numerator`."],["encode_update_libra_version",""],["encode_update_minting_ability","Allows--true--or disallows--false--minting of `currency` based upon `allow_minting`."],["encode_update_travel_rule_limit","Encode a program that updates the travel rule limit to 'new_micro_lbr_limit'"],["encode_update_unhosted_wallet_limits","Updates the nonzero thresholds for regular (unhosted) accounts. If the U64 holds the value 0, the script ignores the update to that threshold"],["get_stdlib_script_abis",""],["get_transaction_name","Returns a user friendly mnemonic for the transaction type if the transaction is for a known, white listed, transaction."]]});