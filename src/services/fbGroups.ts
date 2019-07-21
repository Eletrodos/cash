import { firestore } from "./fb";
import { IGroupData } from "./types";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";

const groupsCollection = firestore.collection("groups");

/** Salva o grupo em uma coleção do firestore */
export const saveGroup = async (data: IGroupData) => {
  try {
    await groupsCollection.add(data);
  } catch (error) {
    throw "Não foi possível criar o grupo";
  }
};

/** Pega a lista de grupos do usuário atual */
export const getGroups = async () => {
  try {
    const querySnapshot = await groupsCollection.get();
    const groups: IGroupData[] = [];
    // Mapeia os grupos no tipe IGroupData[]
    querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
      const { name, volume, rules } = doc.data();
      groups.push({
        name,
        volume,
        rules
      });
    });
    return groups;
  } catch (error) {
    throw "Não foi possível listar os grupos";
  }
};
