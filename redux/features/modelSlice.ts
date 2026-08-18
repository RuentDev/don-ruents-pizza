import { createSlice, PayloadAction} from '@reduxjs/toolkit';


type ModelInitialState = {
    name: string
    clientName: string
    category: string
    rPrice: number
    sPrice: number
    modelType: string
    modelStatus: string
    sku: string
    images: string[]
    dimension: string
    size: string
    weight: number
    description: string
}

const initialState: ModelInitialState = {
    name: "",
    clientName: "",
    category: "",
    rPrice: 0.00,
    sPrice: 0.00,
    modelType: "",
    modelStatus: "",
    sku: "",
    images: [],
    size: "",
    dimension: "0 * 0 * 0",
    weight: 0.0,
    description: ""
}

export const model = createSlice({
    name: "model",
    initialState: initialState,
    reducers: {
        resetModelState: () => initialState,
        setRSModelName: (state, actions) => {
            state.name = actions.payload
        },
        setRSModelClientName: (state, actions) => {
            state.clientName = actions.payload
        },
        setRSModelCategory: (state, actions) => {
            state.category = actions.payload
        },
        setRSModelRPrice: (state, actions) => {
            state.rPrice = actions.payload
        },
        setRSModelSPrice: (state, actions) => {
            state.sPrice = actions.payload
        },
        setRSModelType: (state, actions) => {
            state.modelType = actions.payload
        },
        setRSModelStatus: (state, actions) => {
            state.modelStatus = actions.payload
        },
        setRSModelSKU: (state, actions) => {
            state.sku = actions.payload
        },
        setRSModelSize: (state, actions) => {
            state.size = actions.payload
        },
        setRSModelDim: (state, actions) => {
            state.dimension = actions.payload
        },
        setRSModelWeight: (state, actions) => {
            state.weight = actions.payload
        },
        setRSModelDescription: (state, actions) => {
            state.description = actions.payload
        },
        setRSModelImages: (state, actions) => {
            state.images.push(actions.payload)
        }
    }
})


export const {resetModelState,
    setRSModelName,
    setRSModelClientName,
    setRSModelCategory,
    setRSModelRPrice,
    setRSModelSPrice,
    setRSModelType,
    setRSModelStatus,
    setRSModelSKU,
    setRSModelSize,
    setRSModelDim,
    setRSModelWeight,
    setRSModelDescription,
    setRSModelImages
} = model.actions
export default model.reducer
