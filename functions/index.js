/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
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
      umur: req.body.umur,
      provinsi: req.body.provinsi,
      q1: req.body.q1,
      q2: req.body.q2,
      q3: req.body.q3,
      q4: req.body.q4,
      q5: req.body.q5,
      q6: req.body.q6,
      q7: req.body.q7,
      score: req.body.score,
      rank: req.body.rank,
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
          umur: doc.data().umur,
          provinsi: doc.data().provinsi,
          q1: doc.data().q1,
          q2: doc.data().q2,
          q3: doc.data().q3,
          q4: doc.data().q4,
          q5: doc.data().q5,
          q6: doc.data().q6,
          q7: doc.data().q7,
          score: doc.data().score,
          rank: doc.data().rank,
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
      umur: req.body.umur,
      provinsi: req.body.provinsi,
      q1: req.body.q1,
      q2: req.body.q2,
      q3: req.body.q3,
      q4: req.body.q4,
      q5: req.body.q5,
      q6: req.body.q6,
      q7: req.body.q7,
      score: req.body.score,
      rank: req.body.rank,
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

