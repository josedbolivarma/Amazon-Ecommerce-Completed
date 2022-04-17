import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { typesRegister } from "../types/types";

export const registerAsync = (email, pass, name) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
            .then(async ({user}) => {
                console.log(user);
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(registerSync(email, pass, name))
                console.log('Usuario agregado');
            })
            .catch(error => {
                console.warn(error, 'No autorizado');
            })
    }
}

export const registerSync = (email, pass, name) => {
    return {
        type: typesRegister.register,
        payload: {
            email,
            pass,
            name
        }
    }
}