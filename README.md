Inlämningsuppgift i kursen Webutveckling - Vill du ha mitt nyhetsbrev?

Uppgiften var att bygga en enkel webbapplikation som samlar information från besökare och sedan gör dem tillgängliga för webbsidans administratör.
Till denna uppgift var kravet att använda mig utav node.js som backend.
Applikationen skulle bestå av en frontend webbsida där användaren kan skapa ett konto samt välja om de vill prenumerera på ditt nyhetsbrev, samt en backend där en administratör ska kunna logga in och se samtliga registrerade användare samt en lista på vilka användare som önskar ett nyhetsbrev.

För frontend fick vi använda valfritt javascript ramverk och bibliotek men det jag valde var React med anledning att vi fick chansen att få bättre tips och handledning från kursansvarige i det fallet.

I uppgiften fick vi lära oss att få hantera läsning och presentation utav data på lite olika sätt då vi kombinerade en Headless frontend med ett Monolit backend. 


## G krav:


Backend:
Administrationsvyn ska enbart nås från backend applikationen. 
En administratör skall kunna se en lista på samtliga användare samt en sträng (kommaseparerad) på alla mailadresser för dem som valt att prenumerera på nyhetsbrev.

Frontend:
En besökare ska kunna registrerar sig som ny användare via frontend sidan.
Användaren ska sparas i en json fil på servern. 
En registerad användare ska kunna logga in med sina sparade uppgifter och ändra prenumerationsstatus (Ja/Nej).


## VG krav:

Administrationsvyn i backend skall vara skyddad bakom en inloggning.
Det skall finnas en hårdkodad administratör med användarnamn "test" samt lösenordet "1234" för backend admin.
Användarens (frontend) lösenord ska krypteras (på backend) innan det sparas.
Lämna en skriftlig reflektion utav uppgiften (Max 4 A4-sidor)


Lämna in uppgiften via github med ett repo med två mappar "frontend" samt "backend".
Länken samt reflektionen (om ni siktar på VG kraven) lämnas in via Ping Pong senast fredag 5 juni kl 2300. 
Reflektion får lämnas in som en del utav repot i readme.md! Notera då detta när ni lämnar in.


Mitt resultat på inlämningen: VG
