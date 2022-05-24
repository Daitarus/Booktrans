package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/booktrans module sentinel errors
var (
	ErrSample      = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInvalidName = sdkerrors.Register(ModuleName, 1101, "Name is invalid: %s")
	ErrInvalidAdd  = sdkerrors.Register(ModuleName, 1102, "Address is invalid: %s")
)
