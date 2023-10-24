import { setRSModelCategory, setRSModelClientName, setRSModelDescription, setRSModelDim, setRSModelImages, setRSModelName, setRSModelRPrice, setRSModelSKU, setRSModelSPrice, setRSModelSize, setRSModelStatus, setRSModelType, setRSModelWeight } from "@/redux/features/modelSlice"
import { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { client } from "@/apolloClient"
import { INSERT_MODEL } from "@/graphql/queries"
const useInfoEditor = () => {
    const [imageFrontPreviewURL, setFrontImagePriviewURL] = useState<any>()
    const [imageBackPreviewURL, setBackImagePriviewURL] = useState<any>()
    const [imageTopPreviewURL, setTopImagePriviewURL] = useState<any>()
    const [imageBottomPreviewURL, setBottomImagePriviewURL] = useState<any>()

    const modelData = useSelector((state: RootState) => state.model)

    const dispatch = useDispatch()
    const handleModelNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRSModelName(e.target.value))
    }
    const handleClientNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRSModelClientName(e.target.value))
    }
    const handleModelCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRSModelCategory(e.target.value))
    }
    const handleModelRPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const newFloatValue = parseFloat(value)
        dispatch(setRSModelRPrice(newFloatValue))
    }
    const handleModelSPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const newFloatValue = parseFloat(value)
        dispatch(setRSModelSPrice(newFloatValue))
    }
    const handleModelTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRSModelType(e.target.value))
    }

    const handleModelStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        switch (value) {
            case "active":
                dispatch(setRSModelStatus(true))
                break;
            case "inactive":
                dispatch(setRSModelStatus(false))
                break;
            default:
                break;
        }
    }
    const handleModelSKUChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRSModelSKU(e.target.value))
    }
    const handleModelSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRSModelSize(e.target.value))
    }
    const handleModelDimChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRSModelDim(e.target.value))
    }
    const handleModelWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const newFloatValue = parseFloat(value)
        dispatch(setRSModelWeight(newFloatValue))
    }

    const handleModelDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        dispatch(setRSModelDescription(value))
    }

    const handleModelImageChange = (e: any) => {
        const id = e.target.id 
        const file = e.target?.files[0]
        switch (id) {
            case "frontImage":
                if(file){
                    const blob = new Blob([file], { type: file.type });
                    const blobURL = URL.createObjectURL(blob)
                    setFrontImagePriviewURL(blobURL)
                    dispatch(setRSModelImages({name: "front", imageName: file.name}))
                }
                break;
            case "backImage":
                if(file){
                    const blob = new Blob([file], { type: file.type });
                    const blobURL = URL.createObjectURL(blob)
                    setBackImagePriviewURL(blobURL)
                    dispatch(setRSModelImages({name: "back", imageName: file.name}))
                }
                break;
            case "topImage":
                if(file){
                    const blob = new Blob([file], { type: file.type });
                    const blobURL = URL.createObjectURL(blob)
                    setTopImagePriviewURL(blobURL)
                    dispatch(setRSModelImages({name: "top", imageName: file.name}))
                }
                break;
            case "bottomImage":
                if(file){
                    const blob = new Blob([file], { type: file.type });
                    const blobURL = URL.createObjectURL(blob)
                    setBottomImagePriviewURL(blobURL)
                    dispatch(setRSModelImages({name: "bottom", imageName: file.name}))
                }
                break;
            default:
                break;
        }
    }

    const handlePublishModel = (e: any) => {
        
        client.query({
            query: INSERT_MODEL,
            variables: {    
                sku: modelData.sku,
                name: modelData.name,
                path: "",
                showcase: modelData,
                category: modelData.category,
                color: "",
                rprice: modelData.rPrice,
                sPrice: modelData.sPrice,
            }
        })
    }

    return{
        imageFrontPreviewURL,
        imageBackPreviewURL,
        imageTopPreviewURL,
        imageBottomPreviewURL,
        handleModelNameChange,
        handleClientNameChange,
        handleModelCategoryChange,
        handleModelRPriceChange,
        handleModelSPriceChange,
        handleModelTypeChange,
        handleModelStatusChange,
        handleModelSKUChange,
        handleModelSizeChange,
        handleModelDimChange,
        handleModelWeightChange,
        handleModelDescriptionChange,
        handleModelImageChange,
        handlePublishModel
    }
}

export default useInfoEditor