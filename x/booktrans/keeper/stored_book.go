package keeper

import (
	"github.com/Daitarus/Booktrans/x/booktrans/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetStoredBook set a specific storedBook in the store from its index
func (k Keeper) SetStoredBook(ctx sdk.Context, storedBook types.StoredBook) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredBookKeyPrefix))
	b := k.cdc.MustMarshal(&storedBook)
	store.Set(types.StoredBookKey(
		storedBook.Index,
	), b)
}

// GetStoredBook returns a storedBook from its index
func (k Keeper) GetStoredBook(
	ctx sdk.Context,
	index string,

) (val types.StoredBook, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredBookKeyPrefix))

	b := store.Get(types.StoredBookKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStoredBook removes a storedBook from the store
func (k Keeper) RemoveStoredBook(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredBookKeyPrefix))
	store.Delete(types.StoredBookKey(
		index,
	))
}

// GetAllStoredBook returns all storedBook
func (k Keeper) GetAllStoredBook(ctx sdk.Context) (list []types.StoredBook) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredBookKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoredBook
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
