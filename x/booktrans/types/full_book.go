package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (StoredBook *StoredBook) GetAdd() (address sdk.AccAddress, err error) {
	address, errAdd := sdk.AccAddressFromBech32(StoredBook.Address)
	return address, sdkerrors.Wrapf(errAdd, ErrInvalidAdd.Error(), StoredBook.Address)
}

func (StoredBook *StoredBook) GetN() (name sdk.AccAddress, err error) {
	name, errAdd := sdk.AccAddressFromBech32(StoredBook.Name)
	return name, sdkerrors.Wrapf(errAdd, ErrInvalidName.Error(), StoredBook.Name)
}

