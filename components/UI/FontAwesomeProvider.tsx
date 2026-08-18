"use client"
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const FontAwesomeProvider = ({ children }: { children: React.ReactNode }) => {
	library.add(fas)
	library.add(far)
	library.add(fab)
	return (
		<>
			{children}
		</>
	)
}

export default FontAwesomeProvider