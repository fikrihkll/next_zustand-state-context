import create from 'zustand';
import {State} from '../utils/state';
import { getListData } from '../repositories/item-repository';

const useListItem = create((set) => ({
    state: State.Initial,
    listData: [],
    message: "",
    currentPerson: "",
    setNewPerson: (name) => set((state) => ({currentPerson: name})), 
    getListData: () => handleGetListData(set),
    setStateError: (msg) => set((state) => ({state: State.Error, message: msg}))
}));

const handleGetListData = async (set) => {
    set((state) => ({state: State.Loading}));
    let data = await fetchData();
    console.log("will be delivered");
    set((state) => ({
        state: State.Loaded,
        listData: data
    }));
    console.log("done");
}

const fetchData = async () => {
    let listData = await getListData();
    console.log("finish load");
    for (let i=0; i<listData.length; i++) {
        if (listData[i].company == null) {
            delete listData[i];
        }
    }
    console.log("filter done");
    return listData;
}

export const ListItemState = {
    state: () => useListItem((state) => state.state),
    listData: () =>  useListItem((state) => state.listData),
    message: () => useListItem((state) => state.message),
    getListData: () => useListItem((state) => state.getListData),
    setStateError: () => useListItem((state) => state.setStateError),
    useCurrentPerson: () => useListItem((state) => state.currentPerson),
    useSetCurrentPerson: () => useListItem((state) => state.setNewPerson),
};
