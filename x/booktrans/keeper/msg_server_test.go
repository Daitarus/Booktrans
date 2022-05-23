package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/Daitarus/Booktrans/testutil/keeper"
	"github.com/Daitarus/Booktrans/x/booktrans/keeper"
	"github.com/Daitarus/Booktrans/x/booktrans/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.BooktransKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
