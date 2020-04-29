import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MessageSent from './components/MessageSent'
import NoMansLand from './components/NoMansLand'
import Mark1Tank from './components/Mark1Tank'
import Nieuport11 from './components/Nieuport11'
import Lantern from './components/Lantern'
import AtT4CS from './components/AtT4CS'
import Gloves from './components/Gloves'
import Stielhandgranate from './components/Stielhandgranate'
import Detonator from './components/Detonator'
import Explosive from './components/Explosive'

export const routes = [
  { path: '/index', component: Home, meta: { title: "3D Modeling Portfolio | Richard van Brunschot" } },
  { path: '', component: Home, meta: { title: "3D Modeling Portfolio | Richard van Brunschot" } },
  { path: '/about', component: About, meta: { title: "About | Richard van Brunschot" } },
  { path: '/contact', component: Contact, meta: { title: "Contact | Richard van Brunschot" } },
  { path: '/form-submit/success.html', component: MessageSent, meta: { title: "Message Sent | Richard van Brunschot" } },
  { path: '/projects/nomansland', component: NoMansLand, meta: { title: "No Man's Land | Richard van Brunschot" } },
  { path: '/projects/mark1tank', component: Mark1Tank, meta: { title: "Mark 1 Tank | Richard van Brunschot" } },
  { path: '/projects/nieuport11', component: Nieuport11, meta: { title: "Nieuport 11 | Richard van Brunschot" } },
  { path: '/projects/lantern', component: Lantern, meta: { title: "Lantern | Richard van Brunschot" } },
  { path: '/projects/at4cs', component: AtT4CS, meta: { title: "AT4-CS | Richard van Brunschot" } },
  { path: '/projects/gloves', component: Gloves, meta: { title: "Gloves | Richard van Brunschot" } },
  { path: '/projects/stielhandgranate', component: Stielhandgranate, meta: { title: "Stielhandgranate | Richard van Brunschot" } },
  { path: '/projects/detonator', component: Detonator, meta: { title: "Detonator | Richard van Brunschot" } },
  { path: '/projects/explosive', component: Explosive, meta: { title: "Explosive | Richard van Brunschot" } }
];