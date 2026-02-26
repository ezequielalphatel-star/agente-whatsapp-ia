import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook", async (req, res) => {

  console.log("Mensagem recebida:");
  console.log(JSON.stringify(req.body, null, 2));

  res.sendStatus(200);
});

app.get("/", (req,res)=>{
  res.send("AGENTE ONLINE");
});

app.listen(3000, () => console.log("rodando"));
