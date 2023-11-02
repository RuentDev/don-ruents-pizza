// "use client"
// import React from 'react'
// import InputDropList from './Input/InputDropList'
// import InputText from './Input/InputText'
// import { InputImage } from '.'
// import useInfoEditor from '@/hooks/useInfoEditor'
// import Button from './Buttons/Button'


// const InfoEditor = () => {

// 	const { 
// 		imageFrontPreviewURL,
// 		imageBackPreviewURL,
// 		imageTopPreviewURL,
// 		imageBottomPreviewURL,
// 		handleModelNameChange, 
// 		handleModelRPriceChange, 
// 		handleModelSPriceChange,
// 		handleClientNameChange,
// 		handleModelCategoryChange,
// 		handleModelTypeChange,
// 		handleModelStatusChange,
// 		handleModelSKUChange,
// 		handleModelSizeChange,
// 		handleModelDimChange,
// 		handleModelWeightChange,
// 		handleModelDescriptionChange,
// 		handleModelImageChange,
// 		handlePublishModel
// 	} = useInfoEditor()
	
// 	return (
// 		<>
// 			{/* <div className='model-editor h-[85%] px-5 py-10 rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
// 					<span className='font-semibold'>Product Settings</span>
// 					<div className='container-settings h-full flex my-2'>
// 						{/* LEFT */}
// 						<div className='model-settings-left w-[55%]'>
// 							{/* IMAGES */}
// 							<div className='images-container'>
// 								<span className="model-setting-title font-semibold text-sm text-gray-500">Model Images</span>
// 								<div className="model-images flex gap-4 ">
// 									<div className='h-[250px] w-[80%] flex gap-4'>
// 										<InputImage id='frontImage' label='Front Image' onChange={handleModelImageChange} imagePreviewURL={imageFrontPreviewURL} />
// 										<InputImage id='backImage' label='Back Image' onChange={handleModelImageChange} imagePreviewURL={imageBackPreviewURL} />
// 									</div>
// 									<div className='h-[250px] w-[20%] flex flex-col gap-1'>
// 										<InputImage id='topImage' label='Top Image'  onChange={handleModelImageChange} imagePreviewURL={imageTopPreviewURL}/>
// 										<InputImage id='bottomImage' label='Bottom Image'  onChange={handleModelImageChange} imagePreviewURL={imageBottomPreviewURL}/>
// 									</div>
// 								</div>
// 							</div>
							
// 							{/* DESCRIPTION */}
// 							<div className="model-description py-5">
// 								<span className="model-setting-title font-semibold text-sm text-gray-500">Description</span>
// 								<textarea
// 									onChange={handleModelDescriptionChange} 
// 									className='model-description-content w-full min-h-[180px] max-h-[250px] my-3 text-xs text-justify border p-5 rounded-md over resize-none' 
// 								/>
// 							</div>
							
// 							{/* ATTRIBUTES */}
// 							<div>
// 								<span className="model-setting-title font-semibold text-sm text-gray-500">Attributes</span>
// 								<div className="model-attributes grid grid-cols-4 grid-rows-1 gap-5">
// 									<InputDropList id='modelSize' label='Size' data={['small', 'medium', 'lg', '2xl']} onChange={handleModelSizeChange}/>
// 									<InputText type='text' id='modelColor' label='Color' defaultValue='' placeholder='eg: white' onChange={handleModelDimChange}/>
// 									<InputText type='text' id='modelDimension' label='L*W*H, Inches' defaultValue='0 * 0 * 0' onChange={handleModelDimChange}/>
// 									<InputText type='number' id='modelWeight' label='Weight, kg' defaultValue='0.0' onChange={handleModelWeightChange}/>
// 								</div>
// 							</div>

// 						</div>
						
// 						{/* RIGHT */}
// 						<div className='model-settings-right w-[45%] pl-5'>
// 							<div className="model-settings-right-content h-auto w-full mb-10">
// 								<InputText type="text" id='modelName' label='Model Name' defaultValue='model-' onChange={handleModelNameChange}/>
// 								<div className='grid grid-cols-2 grid-rows-3 gap-1'>
// 									<InputDropList id='modelClientName' label='Client Name' data={['id-yours', 'ai-dai', 'soeyeware']} onChange={handleClientNameChange}/>
// 									<InputDropList id='modelCategory' label='Category' data={['vto', '360view']} onChange={handleModelCategoryChange}/>
// 									<InputText type="number" id='modelRPrice' label='Regular Price' defaultValue='0.00' onChange={handleModelRPriceChange}/>
// 									<InputText type="number" id='modelSPrice' label='Sale Price' defaultValue='0.00' onChange={handleModelSPriceChange}/>
// 									<InputDropList id='modelModelType' label='Model Type' data={['glasses', 'mask', 'earring', 'hat']} onChange={handleModelTypeChange}/>
// 									<InputDropList id='modelStatus' label='Model Status' data={['active', 'inactive']} onChange={handleModelStatusChange}/>
// 								</div>
// 								<InputDropList id='modelShowcase' label='Showcase' data={['showcase1', 'showcase2']}/>
// 								<InputText type="text" id='modelSKU' label='SKU' defaultValue='SKU-' onChange={handleModelSKUChange}/>
// 							</div>
// 							<div className='model-settings-info-button-container flex'>
// 								<Button text='Save to Drafts' borderColor="colorSecondary" textColor='colorSecondary'/>
// 								<Button text='Publish Model' color="colorPrimary" hoverColor="colorPrimary1" onClick={handlePublishModel}/>
// 							</div>
// 						</div>
// 					</div>
// 			</div> */}
// 		</>
// 	)
// }

// export default InfoEditor