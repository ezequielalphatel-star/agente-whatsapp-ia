import express from "express";

const app = express();
app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.send("AGENTE ONLINE");
});

// rota webhook GET (validação)
app.get("/webhook", (req, res) => {
  res.status(200).send("WEBHOOK OK");
});

// rota webhook POST (mensagens)
app.post("/webhook", async (req, res) => {

  console.log("Mensagem recebida:");
  console.log(JSON.stringify(req.body, null, 2));

  res.status(200).send("EVENT_RECEIVED");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
