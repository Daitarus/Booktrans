package keeper

import (
	"context"

	"github.com/Daitarus/Booktrans/x/booktrans/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NewBook(c context.Context, req *types.QueryGetNewBookRequest) (*types.QueryGetNewBookResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetNewBook(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetNewBookResponse{NewBook: val}, nil
}
