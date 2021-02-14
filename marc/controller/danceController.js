import firebase from '../firebase/firebase'

export function addDanceMove(dance, addComplete){
    firebase
        .firestore()
        .collection("DanceMoves")
        .add(dance)
        .then((snapshot) => {
            dance.id = snapshot.id
            snapshot.set(dance)
        })
        .then(() => addComplete(dance))
        .catch((error) => console.log(error))
}

export async function getDanceMoves(dancesRetrived){
    var danceList = []
    var snapshot = await firebase
                            .firestore()
                            .collection("DanceMoves")
                            .orderBy("name")
                            .get()
    snapshot.forEach((doc) => {
        const danceDoc = doc.data()
        danceDoc.id = doc.id
        danceList.push(danceDoc)
    })
    dancesRetrived(danceList)
}

export async function updateDanceMove(dance, updateComplete){
    firebase.
    firestore().
    collection("DanceMoves").
    doc(dance.id).
    set(dance).then(() => updateComplete(dance)).
    catch((error) => console.log(error))
}

export async function deleteDanceMove(dance, deleteComplete){
    firebase.
        firestore().
        collection("DanceMoves").
        doc(dance.id).
        delete().
        then(() => deleteComplete()).
        catch((error) => console.log(error))
} 