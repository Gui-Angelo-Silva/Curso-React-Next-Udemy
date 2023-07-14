import firebaseApp from "../config";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "../ClienteRepositorio";
import { QueryDocumentSnapshot, SnapshotOptions, DocumentData } from "firebase/firestore";

import { getFirestore, collection, doc, setDoc, addDoc, deleteDoc, getDoc, getDocs } from 'firebase/firestore';

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            };
        },
        fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options: SnapshotOptions): Cliente {
            const dados = snapshot.data(options);
            return new Cliente(dados.nome, dados.idade, snapshot.id);
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            const clienteData = this.#conversor.toFirestore(cliente);
            await setDoc(doc(collection(firebaseApp, 'clientes'), cliente.id), clienteData);
            return cliente;
        } else {
            const clienteData = this.#conversor.toFirestore(cliente);
            const docRef = await addDoc(collection(firebaseApp, 'clientes'), clienteData);
            const doc = await getDoc(docRef);
            const data = doc.data();
            return new Cliente(data?.nome, data?.idade, doc.id);
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        await deleteDoc(doc(collection(firebaseApp, 'clientes'), cliente.id));
    }

    async obterTodos(): Promise<Cliente[]> {
        const querySnapshot = await getDocs(collection(firebaseApp, 'clientes'));
        return querySnapshot.docs.map(doc => {
            const data = doc.data();
            return new Cliente(data.nome, data.idade, doc.id);
        }) ?? [];
    }
}
