import create from 'zustand';

export const useStore1 = create(set => ({
    count: 0,
    increase: () =>
    set(state => ({
        count: state.count + 1
    })),
    decrease: () =>
    set(state => ({
        count: state.count -1
    }))
}))
