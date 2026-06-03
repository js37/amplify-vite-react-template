import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  // Require a phone number so it can be used as the SMS MFA destination.
  userAttributes: {
    phoneNumber: {
      required: true,
      mutable: true,
    },
  },
  // Enable SMS (phone number) based multi-factor authentication.
  multifactor: {
    mode: 'REQUIRED',
    sms: true,
  },
});
