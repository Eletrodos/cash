import { firestore } from "./fb";
import { IGroupData } from "./types";

const groupsCollection = firestore.collection("groups");

/** Salva o grupo em uma coleção do firestore */
export const saveGroup = async (data: IGroupData) => {
  try {
    await groupsCollection.add(data);
  } catch (error) {
    throw "Não foi póssivel criar o grupo";
  }
};
