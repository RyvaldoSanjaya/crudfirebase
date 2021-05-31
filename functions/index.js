const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require("express");
const app=express();
const db=admin.firestore();

const cors = require("cors");
app.use( cors({ origin: true }));


app.get("/hello-world", (req, res)=>{
  return res.status(200).send("hello world");
});

// post
app.post("/api/create", async (req, res)=>{
  try {
    await db.collection("customers").doc("/"+req.body.id+"/").create({
      name: req.body.name,
      description: req.body.description,
      sever: req.body.sever,
    });
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// get
app.get("/api/read", async (req, res)=>{
  try {
    const query=db.collection("customers");
    const response=[];

    await query.get().then((querySnapshot) => {
      const docs=querySnapshot.docs;

      for (const doc of docs) {
        const selectedItem={
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          sever: doc.data().sever,
        };
        response.push(selectedItem);
      }
      return response;
    });
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// update
app.put("/api/update/:id", async (req, res)=>{
  try {
    const document=db.collection("customers").doc(req.params.id);

    await document.update({
      name: req.body.name,
      description: req.body.description,
      sever: req.body.sever,
    });

    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// delete
app.delete("/api/delete/:id", async (req, res)=>{
  try {
    const document=db.collection("customers").doc(req.params.id);
    await document.delete();
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});
exports.app=functions.https.onRequest(app);

