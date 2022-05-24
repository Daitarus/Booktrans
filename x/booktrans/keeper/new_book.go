package keeper

import (
	"github.com/Daitarus/Booktrans/x/booktrans/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetNewBook set newBook in the store
func (k Keeper) SetNewBook(ctx sdk.Context, newBook types.NewBook) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NewBookKey))
	b := k.cdc.MustMarshal(&newBook)
	store.Set([]byte{0}, b)
}

// GetNewBook returns newBook
func (k Keeper) GetNewBook(ctx sdk.Context) (val types.NewBook, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NewBookKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNewBook removes newBook from the store
func (k Keeper) RemoveNewBook(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NewBookKey))
	store.Delete([]byte{0})
}
