import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3006 //iga arendaja m22rab omale pordi. || on v@i kumbki
const animals = ['koer', 'inimene', 'lammas']

const app = express()

app.get('/') //essa klient kes http lahti votab maandub / siia

app.get('/animals', (request, response) => {
    response.status(200).json(animals) //vastan kliendile et reede on
})

app.listen(PORT, () => { //app on nyyd express. sulgudega on callback
    console.log(`Server listening on http://localhost:${ PORT }`)
})