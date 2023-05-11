import axios from "axios";
interface IData {
  wid: string;
  countryInstance: string;
  typeAccount: string;
  webhookUrl: string;
  webhookUrlToken: string;
  delaySendMessagesMilliseconds: number;
  markIncomingMessagesReaded: string;
  markIncomingMessagesReadedOnReply: string;
  outgoingWebhook: string;
  outgoingMessageWebhook: string;
  stateWebhook: string;
  incomingWebhook: string;
  deviceWebhook: string;
  statusInstanceWebhook: string;
  sendFromUTC: string;
  sendToUTC: string;
}

const apiHost = "https://api.green-api.com";

const URL_GET_USER = (idInstance: string, api: string) =>
  `/waInstance${idInstance}/GetSettings/${api}`;
export const fetchLogIn = (idInstance: string, api: string) =>
  axios.get<IData>(`${apiHost}${URL_GET_USER(idInstance, api)}`);
