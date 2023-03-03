import { ActionCreator } from 'redux';
import { ACTION_TYPES } from '../../constants/userContactData';
import { ContactInfoType } from 'core/reducers/userContactData';
import { ContactInfoSet } from './userContactDataActionType';

export const getContactUserInfo: ActionCreator<ContactInfoSet> = (contactData: ContactInfoType) => {
    return {
        type: ACTION_TYPES.GET_CONTACT_USER_INFOS,
        contactData
    };
};
