const STAGING_URL = 'https://mavericks.api.getcollyde.com';
 

export const BASE_URL = STAGING_URL;

const VERSION = '/v1'

export const PREFIX_URL = BASE_URL + VERSION;

export const API = {
    PHONE_LOGIN: PREFIX_URL + `/user/phoneLogin`,
    VERIFY_OTP: PREFIX_URL + `/user/verify-otp`,
    SOCIAL_LOGIN: PREFIX_URL + `/user/socialLogin`,
    TIMEZONES: (params = '') => PREFIX_URL + `/timezone/getAllTimezones` + params,
    UPDATE_PROFILE: PREFIX_URL + `/user/updateProfile`,
    UPLOAD_FILE: PREFIX_URL + `/uploadFile`,
    WATCH_PARTIES: (params = '') => PREFIX_URL + `/watchParty/listing` + params,
    CHAT_ROOMS: (params = '') => PREFIX_URL + `/group` + params,
    GET_PROFILE: PREFIX_URL + `/user/getProfile`,
    BAN_USER: PREFIX_URL + `/watchParty/banUser`,
    FLAG_MESSAGE: PREFIX_URL + `/watchParty/group/reportMessage`,
}