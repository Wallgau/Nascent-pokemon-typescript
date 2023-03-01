import { Action } from "redux";
import { ACTION_TYPES } from "../../../core/constants/userContactData";
import { ContactInfoType } from "../../reducers/userContactData";

export interface ContactInfoSet extends Action {
  type: typeof ACTION_TYPES.GET_CONTACT_USER_INFOS;
  contactData: ContactInfoType;
}
