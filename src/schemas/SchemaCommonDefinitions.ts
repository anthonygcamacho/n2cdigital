import { z } from 'zod';


const inputFieldRequired = (required_error: string, message: string) => z
	.string({ required_error })
	.min(1, { message })
	.trim()

const inputFieldMinNoSpacesRequired = (min: number, required_error: string, message: string) => z
	.string({ required_error })
	.min(min, { message })
	.trim()
	.refine(s => !s.includes(' '), 'No spaces.')

const inputFieldMinNoSpacesLettersNumbersRequired = (min: number, required_error: string, message: string) => z
	.string({ required_error })
	.min(min, { message })
	.trim()
	.refine(s => !s.includes(' '), 'No spaces.')
	.refine(s => !s.match(/[^A-Za-z0-9]+/), 'Letters and numbers only.')

const inputFieldNotRequired = () => z
	.string()
	.trim()

const textFieldRequired = (message: string) => z
	.array( z.string() )
	.min( 1, { message } )

const textFieldNotRequired = () => z
	.array( z.string() )

const emailFieldRequired = (required_error: string, message: string) => z
	.string({ required_error })
	.email({ message })
	.trim()

const selectFieldRequired = (values: any, message: string) => z.enum(values, {
	errorMap: (issue: { code: any; }, _ctx: any) => {
		switch (issue.code) {
			case 'invalid_type':
				return { message };
			case 'invalid_enum_value':
				return { message };
			default:
				return { message };
		}
	},
})

const selectMultipleValuesRequired = (values: any, message: string) => z.enum( values ).array().min( 1, { message } )

const checkboxFieldNotRequired = (values: any, message: string) => z.enum(values, {
	errorMap: (issue: { code: any; }, _ctx: any) => {
		switch (issue.code) {
			case 'invalid_type':
				return { message };
			case 'invalid_enum_value':
				return { message };
			default:
				return { message };
		}
	},
})

// const checkboxFieldNotRequired = (message: string) => z.enum(["true", "false"], {
// 	errorMap: (issue: { code: any; }, _ctx: any) => {
// 		switch (issue.code) {
// 			case 'invalid_type':
// 				return { message };
// 			case 'invalid_enum_value':
// 				return { message };
// 			default:
// 				return { message };
// 		}
// 	},
// })

const checkboxFieldRequired = (message: string) => z.enum(["true"], {
	errorMap: (issue: { code: any; }, _ctx: any) => {
		switch (issue.code) {
			case 'invalid_type':
				return { message };
			case 'invalid_enum_value':
				return { message };
			default:
				return { message };
		}
	},
})

const dateFieldRequired = (required_error: string) => z
	.date({ required_error })

const imageUploadFieldRequired = (fileSize: number, fileSizeError: string, fileTypes: string[], fileTypeError: string) => z
	.any()
	.refine((file: { size: number; }) => {
		return (file?.size <= fileSize) && (file?.size != 0);
	}, fileSizeError)
	.refine(
		(file: { type: string; }) => fileTypes.includes(file?.type),
		fileTypeError
	)

const imageUploadField = (fileSize: number, fileSizeError: string, fileTypes: string[], fileTypeError: string) => z
	.any()
	.refine((file: { size: number; }) => {
		return file?.size <= fileSize;
	}, fileSizeError)
	.refine(
		(file: { type: string; }) => fileTypes.includes(file?.type),
		fileTypeError
	)

// const generalImage = (fileSize: number, fileSizeError: string) => z
// 	.any()
// 	.refine((file: { size: number; }) => {
// 		return file?.size <= fileSize;
// 	}, fileSizeError)
// 	.refine(
// 		(file: { type: string; }) => [ "image/jpeg", "image/jpg", "image/png", "application/octet-stream" ].includes(file?.type),
// 		"Only .jpg, .jpeg, and .png formats are supported."
// 	)
	
const radioSelectRequired = (values: readonly [string, ...string[]], required_error: string) => z
	.enum(values, { required_error })


	
const numberFieldNotRequired = () => z
	.coerce.number()

const numberFieldMinRequired = (min: number, message: string) => z
	.coerce.number()
	.min(min, { message })

const numberFieldMinMaxRequired = (min: number, max: number, message: string) => z
	.coerce.number()
	.min(min, { message })
	.max(max, { message })


export default {
	inputFieldRequired,
	inputFieldMinNoSpacesRequired,
	inputFieldMinNoSpacesLettersNumbersRequired,
	inputFieldNotRequired,
	textFieldRequired,
	textFieldNotRequired,
	selectFieldRequired,
	selectMultipleValuesRequired,
	checkboxFieldNotRequired,
	checkboxFieldRequired,
	emailFieldRequired,
	dateFieldRequired,
	imageUploadFieldRequired,
	imageUploadField,
	radioSelectRequired,
	numberFieldNotRequired,
	numberFieldMinRequired,
	numberFieldMinMaxRequired
}