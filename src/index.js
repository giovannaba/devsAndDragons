import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoCassio = new Mago('Cassio', 4, 'fogo', 4, 3)
const magoGigi = new Mago ('Gigi', 8, 'gelo', 7, 10)
const arqueiroCassinho = new Arqueiro('Cassinho', 10, 7)
const arquerioMagoMalu = new ArqueiroMago('Malu', 7, 10, 'ar', 4, 8)
const guerreiraJanaina = new Guerreiro('Janaina', 8)

const personagens = [magoCassio, magoGigi, arqueiroCassinho, arquerioMagoMalu, guerreiraJanaina]

new PersonagemView(personagens).render()

console.log(Personagem.verificarVencedor(magoCassio, magoGigi))