import React from 'react'
interface DropdownListProps{
	text: string
}
const DropdownList = (props: DropdownListProps) => {

  return (
    <>
			<div className='w-full md:w-1/4 my-2 border py-1 px-3 rounded-md'>
				<button id="dropdownDefaultButton" 
					data-dropdown-toggle="dropdown" 
					className="w-full flex justify-between items-center text-colorLightDark " type="button">
					{props.text}
					<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
					</svg>
				</button>
				<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
					<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
						<li>
							<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
						</li>
					</ul>
				</div>
			</div>
    </>

  )
}

export default DropdownList
