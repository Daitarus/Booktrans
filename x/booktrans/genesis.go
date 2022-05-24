package booktrans

import (
	"github.com/Daitarus/Booktrans/x/booktrans/keeper"
	"github.com/Daitarus/Booktrans/x/booktrans/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.NewBook != nil {
		k.SetNewBook(ctx, *genState.NewBook)
	}
	// Set all the storedBook
	for _, elem := range genState.StoredBookList {
		k.SetStoredBook(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all newBook
	newBook, found := k.GetNewBook(ctx)
	if found {
		genesis.NewBook = &newBook
	}
	genesis.StoredBookList = k.GetAllStoredBook(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
