package booktrans_test

import (
	"testing"

	keepertest "github.com/Daitarus/Booktrans/testutil/keeper"
	"github.com/Daitarus/Booktrans/testutil/nullify"
	"github.com/Daitarus/Booktrans/x/booktrans"
	"github.com/Daitarus/Booktrans/x/booktrans/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BooktransKeeper(t)
	booktrans.InitGenesis(ctx, *k, genesisState)
	got := booktrans.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
