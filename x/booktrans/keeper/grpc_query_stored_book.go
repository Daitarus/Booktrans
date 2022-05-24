package keeper

import (
	"context"

	"github.com/Daitarus/Booktrans/x/booktrans/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) StoredBookAll(c context.Context, req *types.QueryAllStoredBookRequest) (*types.QueryAllStoredBookResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storedBooks []types.StoredBook
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storedBookStore := prefix.NewStore(store, types.KeyPrefix(types.StoredBookKeyPrefix))

	pageRes, err := query.Paginate(storedBookStore, req.Pagination, func(key []byte, value []byte) error {
		var storedBook types.StoredBook
		if err := k.cdc.Unmarshal(value, &storedBook); err != nil {
			return err
		}

		storedBooks = append(storedBooks, storedBook)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoredBookResponse{StoredBook: storedBooks, Pagination: pageRes}, nil
}

func (k Keeper) StoredBook(c context.Context, req *types.QueryGetStoredBookRequest) (*types.QueryGetStoredBookResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetStoredBook(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoredBookResponse{StoredBook: val}, nil
}
