"use client"

import { NavEntity, NavInterface } from "@/_data/entity/NavEntity";
import { NavData } from "@/_data/sample/NavData";
import { create } from "zustand";


interface Props {
    data: NavInterface
    toggleMenu: boolean
    selectedData: NavInterface
    dataList: NavInterface[]
    setToggleMenu: (i: boolean) => void
    setData: (i: NavInterface) => void
    setSelectedData: (i: NavInterface) => void
    setDataList: (i: NavInterface[]) => void
}


export const useNavStore = create<Props>((set, get) => ({
    data: NavEntity,
    toggleMenu: false,
    selectedData: NavData[0],
    dataList: NavData,
    setToggleMenu: (i) => {
        set({
            toggleMenu: i
        })
    },
    setData: (i) => {
        set({
            data: i
        })
    },
    setSelectedData: (i) => {
        set({
            selectedData: i
        })
    },
    setDataList: (i) => {
        set({
            dataList: i
        })
    },
}))