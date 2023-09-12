import * as yup from 'yup';

export const inviteValidationSchema = yup.object().shape({
  status: yup.string().required(),
  inviter_id: yup.string().nullable().required(),
  invitee_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
