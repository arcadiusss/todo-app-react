import React from 'react'
import { createRoot } from 'react-dom/client'

const element = (
  <div>
    <h1>Bonjour tout le monde</h1>
    <p>Coucou les amis</p>
  </div>
)

const root = document.querySelector('#root')

if (!root)
  throw new Error('Il manque la balise root dans le fichier index.html!!')

createRoot(root).render(element)
