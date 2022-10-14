import{_ as e,o,c as s,e as a}from"./app.e6540cbf.js";const r={},i=a('<h1 id="modelo-de-suscripcion" tabindex="-1"><a class="header-anchor" href="#modelo-de-suscripcion" aria-hidden="true">#</a> Modelo de suscripci\xF3n</h1><p>Cuando se venden suris, se llega a un acuerdo con sus padres sobre c\xF3mo pagarles mediante un modelo de suscripci\xF3n. Los padres pueden establecer la configuraci\xF3n de este modelo de suscripci\xF3n ajustando los siguientes par\xE1metros:</p><ul><li><strong>Expiraci\xF3n</strong>: la fecha en la que el suri expirar\xE1.</li><li><strong>Intervalo de suscripci\xF3n</strong>: el n\xFAmero de segundos entre cada pago de suscripci\xF3n.</li><li><strong>Importe de la suscripci\xF3n</strong>: la cantidad de tokens (puede ser cualquier SPL token) que se pagar\xE1 en cada intervalo de suscripci\xF3n.</li><li><strong>Pago inicial extra</strong>: la cantidad de tokens que se pagar\xE1 en el momento de la suscripci\xF3n + el <strong>Importe de la suscripci\xF3n</strong> del primer periodo.</li><li><strong>Per\xEDodos iniciales pagados</strong>: el n\xFAmero de per\xEDodos que ya se han pagado en el momento de la suscripci\xF3n. Esto permite dar ofertas como &quot;3 meses gratis&quot;.</li></ul><div class="custom-container note"><p class="custom-container-title">M\xE1s info</p><p>Tenga en cuenta que una vez que se compra un suri, esta configuraci\xF3n no se puede cambiar hasta su vencimiento.</p></div><p>Este modelo ofrece diferentes posibilidades de pago, como:</p><ul><li>Gratis por un periodo, por ejemplo, 1 a\xF1o gratis.</li><li>Pago \xFAnico por un periodo, por ejemplo 10$ por 1 a\xF1o.</li><li>Pago recurrente durante un periodo, por ejemplo 1$ al mes hasta m\xE1ximo 1 a\xF1o.</li></ul><p>Con este modelo conseguimos uno de los principales objetivos de <strong>Suri</strong>: los suris caducan en lugar de concederse por un periodo de tiempo ilimitado.</p><h2 id="control-de-los-padres" tabindex="-1"><a class="header-anchor" href="#control-de-los-padres" aria-hidden="true">#</a> Control de los padres</h2><p>Los padres definen el contrato con sus hijos. Despu\xE9s de comprar un dominio suri hijo, el contrato queda fijado y no puede cambiarse hasta que expire. Esto significa que los padres no pueden realizar cambios en una suscripci\xF3n activa ni pueden hacer cambios en el precio del suri.</p><p>Sin embargo, los padres pueden realizar algunas acciones para controlar a sus hijos:</p><ul><li><strong>Congelar</strong>: los padres pueden congelar a los hijos. Esto significa que el suri no puede ser configurado hasta que se descongele.</li><li><strong>Expiraci\xF3n</strong>: los padres pueden forzar la expiraci\xF3n de sus hijos, transfiriendo la propiedad a otro usuario o abri\xE9ndolos para que sean comprados de nuevo.</li></ul><p>Estas acciones pueden perjudicar a los actuales propietarios de los hijos, por lo que durante el proceso de compra ambas partes pueden acordar una penalizaci\xF3n que el padre deber\xE1 pagar a los ni\xF1os si toma alguna de estas acciones. Esta ser\xEDa una forma de proteger a los propietarios de los hijos de las acciones deshonestas de los padres sin quitarles a los \xFAltimos el control de sus hijos.</p>',12),n=[i];function d(l,c){return o(),s("div",null,n)}const p=e(r,[["render",d],["__file","subscription.html.vue"]]);export{p as default};