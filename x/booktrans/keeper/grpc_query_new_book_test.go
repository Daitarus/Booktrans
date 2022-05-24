package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/Daitarus/Booktrans/testutil/keeper"
	"github.com/Daitarus/Booktrans/testutil/nullify"
	"github.com/Daitarus/Booktrans/x/booktrans/types"
)

func TestNewBookQuery(t *testing.T) {
	keeper, ctx := keepertest.BooktransKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestNewBook(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetNewBookRequest
		response *types.QueryGetNewBookResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetNewBookRequest{},
			response: &types.QueryGetNewBookResponse{NewBook: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.NewBook(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
