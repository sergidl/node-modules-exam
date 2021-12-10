## Introducció

En aquest exercici anem a re-construir una versió nova de Movies.

<br>

## Requisits

- Primer fer un _Fork_ d'aquest repositori https://github.com/rgarciamvm/node-modules-exam.git
- Després clona __el teu__ repositori

## Lliurament

Una vegada finalitzat...:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```
## Enviament

Per enviar l'exercici feu servir el classroom:

1. Heu d'enviar-me el link del vostre repositori github (exemple : https://github.com/usuari/node-modules-exam.git)
2. Heu d'enviar-me els fitxers **manager-fs.js** i **moviesController.js**. Adjunteu aquests fitxers a la tasca.

## 1era Iteració (2 punts)

- Codificar **managers-fs.js**. **Només** heu de afegir codi on trobeu **// ..**
  - Codificar el constructor de la classe **ManagerFs**.
  - Codificar el metode **getData()** perquè llegeixi un JSON i retorni un array[]
- Podeu consultar https://sebhastian.com/fs-readfilesync/
- Fixar-vos com s'usa la classe **ManagerFs** en cada un dels models. moviesModelo.js i actorsModel.js


## 2ona Iteració (8 punts). 

- Codificar **moviesController.js**. **Només** heu de afegir codi on trobeu **// ..**
- Consultar el resultat esperat de cada crida en le fitxer **result.txt**

### 1 Punt per cada crida de app.js

1. Película con id:2 (1pto)
2. Eliminar la película con id:2 (1pto)
3. Añade una nueva película (1pto)
4. Modifica la película con id:3 (1pto)
5. Devuelve todas las peliculas (1pto)
6. Todas las peliculas del año 1994 (1pto)
7. Añadir un actor a la pelicula id:4 (1pto)
8. Película con id:20  (1pto)

- El resultat esperat per la crida número 8 ** Película con id:20  (1pto)** ha de ser **¡Ups! id of movie not found**
