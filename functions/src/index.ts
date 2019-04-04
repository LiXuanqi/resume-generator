import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const serviceAccount = require("../resume-70e66-firebase-adminsdk-n31xm-46bbf55e51.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://resume-70e66.firebaseio.com"
});

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const getAllDocumentofCollection = (collectionName: string) => {
  const list: any[] = [];
  return db.collection(collectionName).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        list.push({
          id: doc.id,
          ...doc.data()
        });
      })
      return list;
    });

}

exports.getProjects = functions.https.onRequest(async (req, res) => {
  const data = await getAllDocumentofCollection('projects');
  return res.json(data);
});

exports.getEducations = functions.https.onRequest(async (req, res) => {
  const data = await getAllDocumentofCollection('educations');
  return res.json(data);
});

exports.getWorkExperiences = functions.https.onRequest(async (req, res) => {
  const data = await getAllDocumentofCollection('workExperiences');
  return res.json(data);
});
