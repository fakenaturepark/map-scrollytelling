var config = {
  style: "mapbox://styles/tonifluegel/cl55swuzk000l14pepnbmjqi8",
  accessToken:
    "pk.eyJ1IjoidG9uaWZsdWVnZWwiLCJhIjoiY2wzbGZhOXozMHNwczNjbzcyM2RiZXB4dyJ9.RwBX5OQw4sGmYzp99VtWlQ",
  showMarkers: true,
  theme: "light",
  use3dTerrain: false,
  // title
  title: "meet me where?",
  subtitle: "",
  byline: "",
  footer:
    '',
/*   callback: "backgroundUpdate1", */


  chapters: [


    // Einleitungstext
    {
      id: "Einleitung", // id HAS TO be unique
      alignment: "left",
      title: "",
      image: "",
      description: "<p>Dies ist eine Arbeit über das Design von Städten. Für eine gut funktionierende Stadt benötigt man Orte, die für alle zugänglich sind, an denen sich verschiedene Gruppen vermischen *hier vielleicht ein anderes wort* und an denen sie sich begegnen können. Doch so wie Städte heutzutage gestaltet werden, werden diese Orte immer weniger. In Berlin Friedrichshain wurde mit dem Projekt Mediaspee ein Großteil des Spreeufers quasi-privatisiert. Die neuen Bauprojekte an der East Side Gallery haben den gleichen Effekt. Außerdem sind viele der heuteigen Begegnungsorte an Konsum geknüpft: so zum Beisp8iel die von Ray Oldenburg beschriebenen Third Places wie Kinos, Cafés, Bars und Shopping Malls. Da Geld sehr ungleich in der Gesellschaft verteilt ist, haben Menschen nicht den gleichen Zugang. </p> <p>Wie und wo begegnen sich heute Menschen im öffentlichen Raum? Verschieben sich Begegnungen zunehmend ins Private oder gibt es neue Orte? Und falls ja: wie sehen sie aus und wo befinden sie sich?</p> <p>Wie wird ein Ort zu einem Begegnunsort? Was für Faktoren wirken sich positiv auf ein Begegnen aus? </p> <p>All diesen Fragen widmen sich Friedrichshainer_innen und erzählen über für sie wichtige Begegnungsorte im Kiez.</p> ", 

      
      location: {
        // look for offset in documentation / center of display 16:9 passt
        center: [13.45208, 52.51299],
        zoom: 13.01,
        pitch: 0,
        bearing: 0,
      },
       /* callback:"backgroundUpdate1", */
    // here come layers which you want to hide or show
      onChapterEnter: [
        
      ],
      onChapterExit: [],
    },

    {
      id: "vorstellungRuth", // id HAS TO be unique
      alignment: "left",
      title: "Ruth",
      image: "",
      description: "<span>'hier kommmt der vorstellungstext von Ruth' style='border-image: url('/assets/speechbubble.png');border-width: 45px 45px 125px 70px;border-image-slice: 45 45 125 70 fill;border-style: solid; border-image-repeat: round;'></span>  <span id='hello'><img src='./assets/ruth.png' style='width:200px;' /></span>", 

      
      location: {
        // look for offset in documentation / center of display 16:9 passt
        center: [13.45208, 52.51299],
        zoom: 13.01,
        pitch: 0,
        bearing: 0,
      },
       callback:"backgroundUpdate1",
    // here come layers which you want to hide or show
      onChapterEnter: [
        
      ],
      onChapterExit: [],
    },
  ],
};
