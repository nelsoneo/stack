import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectReducer
});