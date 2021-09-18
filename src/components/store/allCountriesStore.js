import create from 'zustand';

export const allCountriesStore = create(set => ({
    filter:"",
    country:[],
    show:false,
    setFilter: (filter) => set((state) => ({
        ...state,
        filter,
        show:true,
    })),
    setShow: (filter) => set((state) => ({
        ...state,
        filter,
        show:false
    })),
    setCountry: (country) => set((state) => ({
        ...state,
        country,
    }))
}))