import { async } from "@firebase/util";
import { collection, doc, setDoc, getDoc, getFirestore} from "firebase/firestore"; 
import { app } from "../firebase/clientApp";

const db = getFirestore(app);
const toDos = collection(db, "todos");

export async function readData() {
    return await (await getDoc(doc(toDos, "HTKJkaVl0IYCuQjCELTu"))).data();
}

