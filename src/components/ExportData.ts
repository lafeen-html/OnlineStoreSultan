export const sortProducts: { value: string; name: string }[] = [
    { value: "", name: "" },
    { value: "nameAsc", name: "Название по возрастанию" },
    { value: "nameDesc", name: "Название по убыванию" },
    { value: "priceAsc", name: "Сначала дешёвые" },
    { value: "priceDesc", name: "Сначала дорогие" },
]

export const manufacturersArray: { title: string; active: boolean }[] = [
    { title: 'Synergetic', active: false },
    { title: 'Bioderma', active: false },
    { title: 'Ducray', active: false },
    { title: "Johnson's Baby", active: false },
    { title: 'VICHY', active: false },
];

export const careTypesArray: { name: string; id: string }[] = [
    { name: "Уход за телом", id: "care-body" },
    { name: "Уход за руками", id: "care-hands" },
    { name: "Уход за ногами", id: "care-legs" },
    { name: "Уход за лицом", id: "care-face" },
]