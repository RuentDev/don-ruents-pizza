import { gql } from "@apollo/client";

export const GET_MODELS =  gql`
    query GetModels {
		getModels {
			category
			color
			createdBy
			hdrSrc
			modelID
			name
			path
			price
			showcase
			sku
		}
    }
`

export const INSERT_MODEL =  gql`
	mutation InsertModel($sku: String, $name: String, $path: String, $showcase: String, $category: String, $color: String, $rprice: Float, $sprice: Float, $createdBy: String, $hdrSrc: String, $thumbnail: String) {
		insertModel(sku: $sku, name: $name, path: $path, showcase: $showcase, category: $category, color: $color, rprice: $rprice, sprice: $sprice, createdBy: $createdBy, hdrSrc: $hdrSrc, thumbnail: $thumbnail) {
			filename
			statusText
		}
	}
`

export const INSERT_USER = gql`
	mutation InsertUser($name: String, $mobile: String, $email: String, $password: String) {
		insertUser(name: $name, mobile: $mobile, email: $email, password: $password) {
			name
			mobile
			email
			password
		}
	}
`