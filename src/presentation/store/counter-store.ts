import { create } from "zustand";


export interface CounterState{
    count: number;
    incrementBy: (value: number)=> void;
}

//useCounterStore nombre al store

export const useCounterStore = create<CounterState>()( (set, get) => ({
    count: 0,

    incrementBy: (count: number) =>{
        console.log(get());
        set({count: count})

        //set({count: get().count + count});
        //set(state=>({count:state.count + count}))

    }

}))