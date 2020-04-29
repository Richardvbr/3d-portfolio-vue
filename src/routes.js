import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MessageSent from './components/MessageSent'

export const routes = [
  { path: '/index', component: Home },
  { path: '', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/form-submit/success', component: MessageSent }
];