# Maquetació II

Projecte realitzat amb [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) i [Parcel](https://parceljs.org/) com a bundler. Faig servir mínimament [GSAP](https://greensock.com/3/).

## Scripts disponibles

```
npm run dev
```

Posa en marxa la web en mode de desenvolupament.
Es pot consultar l'adreça http://localhost:1234 per obrir-la al navegador.

```
npm run build
```

Genera la pàgina per a producció a la carpeta `dist`.
Optimitza els fitxers per a reduir espai i fa servir hashes als noms per possibilitar millor caching.

## Estructura

Per a cada nivell hi ha una carpeta, i per a cada exercici hi ha un commit. He afegit un nivell Bonus, en què també he afegit el menú per a mobile i animacions fade-in.

## Dubtes

### Bootstrap

- Es pot modificar la font-size de tots els p? O es pot modificar el padding de tots els .btn?

- El resultat no és gens DRY perquè es repeteixen classes constantment.

### JS

- Com puc fer que a un document js pugui referenciar una string que conté un path i que quan Parcel faci el bundle la reescrigui.
