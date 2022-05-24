package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/Daitarus/Booktrans/testutil/keeper"
	"github.com/Daitarus/Booktrans/testutil/nullify"
	"github.com/Daitarus/Booktrans/x/booktrans/keeper"
	"github.com/Daitarus/Booktrans/x/booktrans/types"
)

func createTestNewBook(keeper *keeper.Keeper, ctx sdk.Context) types.NewBook {
	item := types.NewBook{}
	keeper.SetNewBook(ctx, item)
	return item
}

func TestNewBookGet(t *testing.T) {
	keeper, ctx := keepertest.BooktransKeeper(t)
	item := createTestNewBook(keeper, ctx)
	rst, found := keeper.GetNewBook(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestNewBookRemove(t *testing.T) {
	keeper, ctx := keepertest.BooktransKeeper(t)
	createTestNewBook(keeper, ctx)
	keeper.RemoveNewBook(ctx)
	_, found := keeper.GetNewBook(ctx)
	require.False(t, found)
}
