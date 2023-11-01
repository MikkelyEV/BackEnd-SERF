import express from 'express';
import { Sequelize } from 'sequelize';
import { conn } from './db.js'
import { PORT } from './config.js'
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/oficinas', async (req, res) => {
    const [oficinas] = await conn.query(`SELECT * FROM OFICINA AS OFICINAS`);
    res.send(oficinas)
})

app.get('/primas_pendientes', async (req, res) => {
    const oficina = req.query.id_oficina;
    const [primas_pendientes] = await conn.query(`SELECT * FROM PRIMA_PENDIENTE3 WHERE ID_OFICINA=${oficina}`);
    res.send(primas_pendientes)
})

app.listen(PORT)
console.log('Server on port 3000')