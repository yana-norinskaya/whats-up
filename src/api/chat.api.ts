import axios from "axios";

interface IBody {
  chatId: string;
}

const apiHost = "https://api.green-api.com";

const URL_GET_CONTACT = (idInstance: string, api: string) =>
  `/waInstance${idInstance}/getContactInfo/${api}`;

export const fetchContactInfo = (
  idInstance: string,
  api: string,
  body: IBody
) => axios.post(`${apiHost}${URL_GET_CONTACT(idInstance, api)}`, body);
