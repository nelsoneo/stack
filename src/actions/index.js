export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        playload: libraryId
    };
};