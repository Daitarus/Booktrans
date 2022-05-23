package keeper_test

import (
	"testing"

	testkeeper "github.com/Daitarus/Booktrans/testutil/keeper"
	"github.com/Daitarus/Booktrans/x/booktrans/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.BooktransKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
