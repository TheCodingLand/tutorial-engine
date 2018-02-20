
const articles = [
    {
        id:0,
date : "Identifiez votre navigateur",
title : "Le programme que vous utilisez pour accèder à internet est important pour la suite.",
text : "Si votre navigateur a été détecté correctement par ce petit site d'aide, vous devriez voir l'icône correspondante à votre navigateur dans la barre de menu du site. Ces icones représentent dans l'ordre : Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Opera et Internet Explorer",
image : {url : "images/browsers.jpg", height : 144, width : 664} ,
},
    {
        id:1,
date : "Google Chrome et Microsoft Edge :",
title : "Plus aucun support de plugins n'est disponible pour ces navigateurs. Contournement du problème : ",
text : "Il est assez simple d'enregistrer sur votre ordinateur le fichier PDF qui se cache derrière ce message d'erreur. Faites simplement un clic droit, et enregistrer sous. Ensuite, le formulaire devrait pouvoir être ouvert depuis votre ordinateur.  Si adobe est bien le programme par défaut, il devrait s'ouvrir directement.",
image : {url : "images/saveas.jpg", height : 501, width : 637},
},
{
    id:2,
date : "Mozilla Firefox - Partie 1",
title : "Configurer Firefox",
text : "Dans un premier temps, trouvez le menu des options. il se situe en haut à droite de la fenêtre de votre navigateur.",
image : {url : "images/ffoptions.jpg", height : 348, width : 271},
},

{
    id:3,
date : "Mozilla Firefox - Partie 2",
title : "Changer le comportement de Firefox pour les fichiers PDF",
text : "Dans ce menu, il y a une partie \"Applications\", dans le tableau, en face de PDF, changez le comportement de \"apercu dans Firefox\" vers \"Utiliser Adobe Acrobat (Default)\". la prochaine fois que vous ouvrirez un formulaire depuis le site, il devrait s'ouvrir dans le plugin Adobe Acrobat.",
image : {url : "images/ffpdf.jpg", height : 721, width : 981},
},

{
    id:4,
date : "Safari - Partie 1",
title : "Ouvrir les préférences de safari",
text : "Dans le menu \"Safari\", cliquez sur l'option \"Préférences\" ",
image : {url : "images/safari-preferences.jpg", height : 260, width : 318},
},

{
    id:5,
    date : "Safari - Partie 2",
    title : "Activer Adobe Reader pour le site www.rcsl.lu, ou alors activez le pour tous les sites internet :",
    text : "Dans ce menu, vous pouvez cliquer sur Adobe Reader, et cocher la cas pour l'activer. Ensuite, cliquez en face du site www.rcsl.lu, sur le mot \"Ask\" pour le changer en On. Si vous le souhaitez, vous pouvez aussi changer le comportement pour tous les autres sites web, avec l'option pour tous les sites web présente un peu plus bas.",
    image : {url : "images/safari-plugins.png", height : 610, width : 805},
    },
]

// Le plus vieux calendrier lunaire ? Ces encoches pratiquées dans une plaquette en os de l'Abri Blanchard en Dordogne (-30'000) correspondraient au trajet de l'astre dans le ciel avec ses différentes phases.

export default articles