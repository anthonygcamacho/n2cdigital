import { z } from 'zod';
import SchemaCommonDefinitions from './SchemaCommonDefinitions';

const ContactFormSchema = z
	.object({
		subject: SchemaCommonDefinitions.selectFieldRequired(['inquiry', 'other'], 'Type required.'),
		email: SchemaCommonDefinitions.emailFieldRequired('Email is required', 'Email must be a valid email address'),
		confirmEmail: SchemaCommonDefinitions.emailFieldRequired('Confirm Email is required', 'Confirm Email must be a valid email address'),
		message: SchemaCommonDefinitions.textFieldRequired('Message is required'),
		captcha: SchemaCommonDefinitions.checkboxFieldRequired('Invalid Captcha.')
	})
	.superRefine(({ email, confirmEmail }, ctx) => {
		if (email !== confirmEmail) {
			ctx.addIssue({
				code: 'custom',
				message: 'Email and Confirm Email must match',
				path: ['email']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'Email and Confirm Email must match',
				path: ['confirmEmail']
			});
		}
	});

export default ContactFormSchema;