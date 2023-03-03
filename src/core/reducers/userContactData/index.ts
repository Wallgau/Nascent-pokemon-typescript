import { ACTION_TYPES } from '../../constants/userContactData';
import { AnyAction } from 'redux';

export interface ContactInfoType {
    contactInfo: {
        name: string;
        lastname: string;
        phoneNumber: string;
        address: string;
        postalCode: string;
        city: string;
    };
}

const initialState = {
    contactInfo: {
        name: '',
        lastname: '',
        phoneNumber: '',
        address: '',
        postalCode: '',
        city: ''
    },
    isLoading: false
};

const userContactDataReducer = (state: ContactInfoType = initialState, action: AnyAction) => {
    switch (action.type) {
        case ACTION_TYPES.GET_CONTACT_USER_INFOS:
            const { contactInfo } = action;
            return {
                ...state,
                contactInfo
            };
        default:
            return state;
    }
};

export default userContactDataReducer;
