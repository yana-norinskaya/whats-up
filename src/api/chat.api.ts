import axios from "axios";

const apiHost = "https://api.green-api.com";

// Get info contact
interface IBody {
  chatId: string;
}

const URL_GET_CONTACT = (idInstance: string, api: string) =>
  `/waInstance${idInstance}/getContactInfo/${api}`;

export const fetchContactInfo = (
  idInstance: string,
  api: string,
  body: IBody
) => axios.post(`${apiHost}${URL_GET_CONTACT(idInstance, api)}`, body);

// Check whats app
interface IBodyCheck {
  phoneNumber: number;
}
const URL_CHECK = (idInstance: string, api: string) =>
  `/waInstance${idInstance}/CheckWhatsapp/${api}`;

export const fetchCheckWhatsapp = (
  idInstance: string,
  api: string,
  body: IBodyCheck
) => axios.post(`${apiHost}${URL_CHECK(idInstance, api)}`, body);
