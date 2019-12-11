# DartsUI
Training app
Vereisten:
S-account
SAP Cloud Platform trial-account op CloudFoundry, met tenminste één space

In dit project staat een oefenapp die je kan helpen uit te gooien met darten. De app is nog niet af. Door de onderstaande instructies te volgen kan je zelf de app afmaken.

# Handleiding
# 1. Klonen

Kloon het project. Open de webIDE, en rechtermuisklik op "Workspace", en vervolgens op "Clone Project". Kloon het project vanaf https://github.com/Samleijenhorst/DartsUI

# 2. Starten van de API

Open het DartsUI-project in de webIDE. Rechtermuisklik op de map src en klik op "Run as Node.js-application", en wacht tot de server gestart is.

# 3. Voorbereiden van de webapp

Rechtermuisklik op de map web en ga naar Run>Run configurations>Run index.html, en selecteer "Run on Cloud Foundry" als Target Environment, en klik op "OK"

# 4. Starten van de webapp

Rechtermuisklik op de map web en klik op Run>Run Index.html. Wacht tot de app opent. Mogelijk wordt deze als popup geblokkeerd, als dit zo is kan je kiezen om popups van de webIDE toe te staan. De app draait nu maar er staat nog niets in.

# 5. Toevoegen van een scherm aan de app

Nu ga je code toevoegen. De code om toe te voegen kan je in de map snippets vinden. De naamgeving van de bestanden in die map komt overeen met de nummers van de stappen in deze handleiding.

Het eerste wat je aan de app gaat toevoegen is een scherm, waarin de rest van de inhoud weergegeven zal worden. Open het bestand met de naam "manifest.json". Hierin benoem je de views en de navigatie ernaartoe door het eerste stukje code uit 5.txt onderaan het bestand erin te kopiëren, onderaan de tag routes.

Maak nu de view aan door in web/webapp/view een nieuw bestand aan te maken met de naam DartsUI.view.xml. In dit bestand geef je aan welke elementen op het scherm komen. Plak hierin het tweede stukje code uit 5.txt. Op dit moment staat er nog niets in de view.

De besturing van de view wordt gedaan door een controller. Hierin staan functies in javascript geschreven die bepalen wat er gebeurt in de view. Maak in web/webapp/controller een nieuw bestand aan met DartsUI.controller.js aan en plak het derde stukje uit 5.txt hierin. Sla alles op en start de webapp.

# 6. Toevoegen van een lijst aan het scherm

Nu gaan we een lijst toevoegen aan de app. In 6.txt staat een lijst die je in de view kan plakken. Dit moet tussen de twee content-tags. Onder "items" in deze lijst staat de verwijzing naar een datamodel. Om een datamodel aan de lijst toe te voegen zodat er later gegevens in kunnen verschijnen moet je de onderste twee regels code uit 6.txt in de init-functie van de controller plakken.
  
Sla alles op en start de app opnieuw. Er staat nu een lijst in, maar nog geen gegevens.

# 7. Toevoegen van gegevens aan de lijst

De volgende stap is het ophalen van de data uit de API en het toevoegen aan de lijst. Hiervoor voegen we een zoekbalk toe aan de lijst waarin je de huidige score kan toevoegen. De server geeft vervolgens de snelste volgorde van worpen terug waarmee je uit kan gooien. Voeg in de view, net boven <items>, het eerste codeblok uit 7.txt toe. De eigenschappen onChange van deze zoekbalk verwijzen naar een functie in de Controller. Deze functie wordt aangeroepen als je de waarde in de zoekbalk wijzigt.

Het tweede blokje code bevat deze functie. Voeg deze toe aan de controller, net onder de init-functie. Hierin wordt de API aangesproken, en wanneer de reactie van de server binnenkomt worden de resultaten in de lijst gezet. Als het zoekveld leeg is wordt de lijst ook geleegd.

Om de API vanuit de app bereikbaar te maken moet ook het laatste stukje code aan bestand xs-app.json toegevoegd worden, onder "routes". 

Sla alles op en herstart de app.

# 8. Toevoegen foutafhandeling

Voeg bovenaan de controller de eerste regel uit 8.txt toe, onderaan het define-blok. Voeg achteraan het stukje code uit de vorige stap het tweede blokje code uit 8.txt toe. Als de API nu een foutmelding teruggeeft, krijgt je de melding dat de invoer ongeldig is. Dit kan je uitproberen door bijvoorbeeld een waarde hoger dan 501 in te voeren.

# 9. Toevoegen kleuren

We gaan nu de UI wat aantrekkelijker maken door de kleuren van het dartbord weer te geven in de lijst.

Voeg de eerste regel van 9.txt toe als eigenschap aan de tag <StandardListItem> in de view. Maak vervolgens een bestand met de naam formatter.js in web/webapp/model en plak hierin de rest van de code uit 9.txt. 
  
 Sla alles op en herstart de app.
