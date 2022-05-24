package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoredBookKeyPrefix is the prefix to retrieve all StoredBook
	StoredBookKeyPrefix = "StoredBook/value/"
)

// StoredBookKey returns the store key to retrieve a StoredBook from the index fields
func StoredBookKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
