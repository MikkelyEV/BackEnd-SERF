import express from 'express';
import { Sequelize } from 'sequelize';
import { conn } from './db.js'
import { PORT } from './config.js'

const app = express();

app.get('/oficinas', async (req, res) => {
    const [oficinas] = await conn.query(`SELECT * FROM OFICINA AS OFICINAS`);
    console.log(oficinas)
    res.send(oficinas)
})

app.get('/primas_pendientes', async (req, res) => {
    const oficina = req.body.id_oficina;
    const [primas_pendientes] = await conn.query(`SELECT * FROM PRIMA_PENDIENTE WHERE ID_OFICINA=${oficina}`);
    console.log(primas_pendientes)
    res.send(primas_pendientes)
})

app.listen(PORT)
console.log('Server on port 3000')