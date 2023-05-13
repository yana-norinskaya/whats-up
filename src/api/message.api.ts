import axios from "axios";

const apiHost = "https://api.green-api.com";

interface IBody {
  chatId: string;
  message: string;
}
// Send message
const URL_SEND_MESSAGE = (idInstance: string, api: string) =>
  `/waInstance${idInstance}/sendMessage/${api}`;

export const fetchSendMessage = (
  idInstance: string,
  api: string,
  body: IBody
) => axios.post(`${apiHost}${URL_SEND_MESSAGE(idInstance, api)}`, body);

// Get Message

interface IMessageData {
  typeMessage: string;
  textMessageData: { textMessage: string };
}
interface ISenderData {
  chatId: string;
  chatName: string;
  sender: string;
  senderName: string;
}
interface IInstanceData {
  idInstance: number;
  wid: string;
  typeInstance: string;
}
interface IBodyMessage {
  typeWebhook: string;
  instanceData: IInstanceData;
  timestamp: number;
  idMessage: string;
  senderData: ISenderData;
  messageData: IMessageData;
}
interface IGetMessageBody {
  receiptId: number;
  body: IBodyMessage;
}

const URL_GET_MESSAGE = (idInstance: string, api: string) =>
  `/waInstance${idInstance}/ReceiveNotification/${api}`;

export const fetchGetMessage = (idInstance: string, api: string) =>
  axios.get<IGetMessageBody | null>(
    `${apiHost}${URL_GET_MESSAGE(idInstance, api)}`
  );

// Delete notification
const DELETE_NOTIFICATION = (idInstance: string, api: string, id: number) =>
  `/waInstance${idInstance}/deleteNotification/${api}/${id}`;

export const fetchDeleteNotification = (
  idInstance: string,
  api: string,
  id: number
) => axios.delete(`${apiHost}${DELETE_NOTIFICATION(idInstance, api, id)}`);
