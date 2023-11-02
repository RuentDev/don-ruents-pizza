"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { InputText, LoginButton, SubmitButton } from '..'
import { INSERT_USER } from '@/graphql/queries'
import { client } from '@/apolloClient'
import { areAllPropertiesNull } from '@/utils/utils'

const UserRegisterForm = () => {
	const [userData, setUserData] = useState({registerName: "", registerMobile: "", registerEmail: "", registerPassword: "", registerRePassword: ""})
	const [formErrors, setFormErrors] = useState({registerName: "", registerMobile: "", registerEmail: "", registerPassword: "", registerRePassword: ""})

	const handleInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		// CHECK NON NUMBER
		if (event.target.name === "registerMobile") {
			const regex = /\D/; // This regex matches any non-numeric character
			if (regex.test(value)) {
				setFormErrors({ ...formErrors, [event.target.name]: "Invalid Character!" });
			} else {
				setFormErrors({ ...formErrors, [event.target.name]: "" });
			}
		}
		
		// CHECK EMAIL
		if (event.target.name === "registerEmail") {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(value)) {
				setFormErrors({ ...formErrors, [event.target.name]: "Invalid Email!" });
			} else {
				setFormErrors({ ...formErrors, [event.target.name]: "" });
			}
		}
		

		// CHECK PASSWORD MISSMATCH
		if (event.target.name === "registerPassword" || event.target.name === "registerRePassword") {
			if (userData.registerPassword && userData.registerRePassword) {
				if (value !== userData.registerPassword && value !== userData.registerRePassword) {
					setFormErrors({ ...formErrors, [event.target.name]: "Passwords do not match!" });
				} else {
					// Clear the error for both password fields
					setFormErrors({ ...formErrors, registerPassword: "", registerRePassword: "" });
				}
			}
		}	

		setUserData({...userData, [event.target.name]: value})
	}
	

	const handleRegister = (event: FormEvent) => {
		event.preventDefault()
		if(!areAllPropertiesNull(formErrors)){
			client.mutate({
				mutation: INSERT_USER,
				variables: {
					name: userData.registerName,
					mobile: userData.registerMobile,
					email: userData.registerEmail,
					password: userData.registerPassword,
				}
			}).then((res) => {
				console.log(res)
			})
		}
	}


	return (
		<div className='h-auto w-[100%] select-none'>
			<form onSubmit={handleRegister} className="form w-full flex flex-col gap-3 justify-center items-center">
				{/* NAME */}
				<InputText label='Full name' id='registerName' name='registerName' type="text" placeholder='Exg: John Doe' validationLabel={formErrors.registerName} onChange={handleInputTextChange}/>
				{/* MOBILE */}
				<InputText label='Mobile' id='registerMobile' name='registerMobile' type="text" placeholder='09099543415' validationLabel={formErrors.registerMobile} onChange={handleInputTextChange}/>
				{/* EMAIL */}
				<InputText label='Email' id='registerEmail' name='registerEmail' type="email" placeholder='john@example.com' validationLabel={formErrors.registerEmail} onChange={handleInputTextChange}/>
				{/* PASSWORD */}
				<InputText label='Password' id='registerPassword' name='registerPassword' type="password" placeholder='********' iconColor='red' validationLabel={formErrors.registerPassword} onChange={handleInputTextChange}/>
				{/*RETYPE PASSWORD */}
				<InputText label='Retype Password' id='registerRePassword' name='registerRePassword' type="password" placeholder='********' iconColor='red' validationLabel={formErrors.registerRePassword} onChange={handleInputTextChange}/>
				{/* SUBMIT */}
				<SubmitButton text='Register' color="colorPrimary"/>
			</form>
			<div className='m-1 flex items-center justify-center'>
				<span className='select-none'>or</span>
			</div>
				<div className='flex items-center justify-evenly gap-6'>
					<LoginButton 
						label='Github' 
						icon={{
							prefix: 'fab', 
							iconName: "github"
						}} 
						size={5}
						/>
					<LoginButton 
						label='Facebook' 
						icon={{
							prefix: 'fab', 
							iconName: "facebook"
						}} 
						size={5}
						color={'#1674EA'}
						/>
					<LoginButton 
						label='Google' 
						icon={{
							prefix: 'fab', 
							iconName: "google"
						}} 
						size={5}
					/>
				</div>
		</div>
	)
}

export default UserRegisterForm
