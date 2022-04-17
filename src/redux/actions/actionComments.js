import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesComments } from "../types/types";
 
//---------------listar----------------//
export const listCommentsAsync = () => {
    return async (dispatch) => {
        const collectionTraer = await getDocs(collection(db, "posts"));
        const comments = [];
        collectionTraer.forEach((doc) => {
            comments.push({
                ...doc.data()
            })
        })
        console.log(comments);
        dispatch(listCommentsSync(comments));
    }
}

export const listCommentsSync = (comments) => {
    return {
        type: typesComments.list,
        payload: comments
    }
}

//-------------agregar---------------//
export const addCommentAsync = (comment) => {
    console.log(comment);
    return (dispatch) => {
        addDoc(collection(db, "posts"), comment)
            .then(resp => {
                dispatch(addCommentSync(comment));
            })
            .catch(error => {
                console.warn(error);
            })

    }
}

export const addCommentSync = (comment) => {
    return {
        type: typesComments.add,
        payload: comment
    }
}
