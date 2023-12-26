import rickandmorty from "./assets/rickandmorty.png"
import videogames from "./assets/videogames.png"
import proceso from "./assets/enproceso.png"
import solidario from "./assets/solidario.png"


interface project {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const projects: project[] = [
   {
     id: 0,
     category: "only",
     img: rickandmorty,
     title: "Rick and Morty",
   },
   {
     id: 1,
     category: "only",
     img: videogames,
    title: "Videogames",
   },
   {
     id: 2,
     category: "only",
     img: proceso,
     title: "En proceso...",
   },
   {
     id: 3,
     category: "team",
     img: solidario,
     title: "Fundación Potenciar Solidario ",
   },
   {
     id: 4,
     category: "team",
     img: proceso,
     title: "En proceso...",
   },
   {
     id: 5,
     category: "team",
     img: proceso,
     title: "En proceso...",
   },
];
