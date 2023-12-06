import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"

const personagemPedrinho = new Personagem('Pedro', 5, 'Mago')
const personagemJose = new Personagem ('Jose', 3, 'Arqueiro')

const personagens = [personagemPedrinho, personagemJose]

new PersonagemView(personagens).render()

console.log(new Mago('gelo', 7, 9))