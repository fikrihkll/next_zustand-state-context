import { Sleep } from "../utils/sleep"

const getListData = async () => {
    let listData = [
        {
            company: "Tokopedia",
            name: "Jonathan Filber",
            role: "Software Engineer - Web Platform"
        },
        {
            company: "Tokopedia",
            name: "Jonathan Darwin",
            role: "Software Engineer - Android"
        },
        {
            company: "Foodpanda",
            name: "Fikri Haikal",
            role: "Software Engineer - Android"
        },
        {
            company: null,
            name: "Nam Do-San",
            role: "ML Engineer"
        },
    ];
    await Sleep(5000);
    return listData;
}

export {
    getListData
}