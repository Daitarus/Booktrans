package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/Daitarus/Booktrans/testutil/keeper"
	"github.com/Daitarus/Booktrans/testutil/nullify"
	"github.com/Daitarus/Booktrans/x/booktrans/keeper"
	"github.com/Daitarus/Booktrans/x/booktrans/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNStoredBook(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.StoredBook {
	items := make([]types.StoredBook, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetStoredBook(ctx, items[i])
	}
	return items
}

func TestStoredBookGet(t *testing.T) {
	keeper, ctx := keepertest.BooktransKeeper(t)
	items := createNStoredBook(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoredBook(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoredBookRemove(t *testing.T) {
	keeper, ctx := keepertest.BooktransKeeper(t)
	items := createNStoredBook(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoredBook(ctx,
			item.Index,
		)
		_, found := keeper.GetStoredBook(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestStoredBookGetAll(t *testing.T) {
	keeper, ctx := keepertest.BooktransKeeper(t)
	items := createNStoredBook(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoredBook(ctx)),
	)
}
