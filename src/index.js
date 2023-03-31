import express from "express";
import {dirname, join} from 'path'
import { fileURLToPath, pathToFileURL } from "url";
import indexRouters from '../router/router.js'
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))
app.use(indexRouters)

app.use(express.static(join(__dirname, 'public')))

app.listen(3000, () => {
  console.log("El servidor esta escuchando en el puerto 3000");
});
