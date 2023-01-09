import{_ as e,O as o,P as s,a2 as a}from"./framework-6e4ab73c.js";const r={},i=a('<h1 id="modelo-de-suscripcion" tabindex="-1"><a class="header-anchor" href="#modelo-de-suscripcion" aria-hidden="true">#</a> Modelo de suscripción</h1><p>Cuando se venden suris, se llega a un acuerdo con sus padres sobre cómo pagarles mediante un modelo de suscripción. Los padres pueden establecer la configuración de este modelo de suscripción ajustando los siguientes parámetros:</p><ul><li><strong>Expiración</strong>: la fecha en la que el suri expirará.</li><li><strong>Intervalo de suscripción</strong>: el número de segundos entre cada pago de suscripción.</li><li><strong>Importe de la suscripción</strong>: la cantidad de tokens (puede ser cualquier SPL token) que se pagará en cada intervalo de suscripción.</li><li><strong>Pago inicial extra</strong>: la cantidad de tokens que se pagará en el momento de la suscripción + el <strong>Importe de la suscripción</strong> del primer periodo.</li><li><strong>Períodos iniciales pagados</strong>: el número de períodos que ya se han pagado en el momento de la suscripción. Esto permite dar ofertas como &quot;3 meses gratis&quot;.</li></ul><div class="hint-container note"><p class="hint-container-title">Más info</p><p>Tenga en cuenta que una vez que se compra un suri, esta configuración no se puede cambiar hasta su vencimiento.</p></div><p>Este modelo ofrece diferentes posibilidades de pago, como:</p><ul><li>Gratis por un periodo, por ejemplo, 1 año gratis.</li><li>Pago único por un periodo, por ejemplo 10$ por 1 año.</li><li>Pago recurrente durante un periodo, por ejemplo 1$ al mes hasta máximo 1 año.</li></ul><p>Con este modelo conseguimos uno de los principales objetivos de <strong>Suri</strong>: los suris caducan en lugar de concederse por un periodo de tiempo ilimitado.</p><h2 id="control-de-los-padres" tabindex="-1"><a class="header-anchor" href="#control-de-los-padres" aria-hidden="true">#</a> Control de los padres</h2><p>Los padres definen el contrato con sus hijos. Después de comprar un dominio suri hijo, el contrato queda fijado y no puede cambiarse hasta que expire. Esto significa que los padres no pueden realizar cambios en una suscripción activa ni pueden hacer cambios en el precio del suri.</p><p>Sin embargo, los padres pueden realizar algunas acciones para controlar a sus hijos:</p><ul><li><strong>Congelar</strong>: los padres pueden congelar a los hijos. Esto significa que el suri no puede ser configurado hasta que se descongele.</li><li><strong>Expiración</strong>: los padres pueden forzar la expiración de sus hijos, transfiriendo la propiedad a otro usuario o abriéndolos para que sean comprados de nuevo.</li></ul><p>Estas acciones pueden perjudicar a los actuales propietarios de los hijos, por lo que durante el proceso de compra ambas partes pueden acordar una penalización que el padre deberá pagar a los niños si toma alguna de estas acciones. Esta sería una forma de proteger a los propietarios de los hijos de las acciones deshonestas de los padres sin quitarles a los últimos el control de sus hijos.</p>',12),n=[i];function d(l,c){return o(),s("div",null,n)}const p=e(r,[["render",d],["__file","subscription.html.vue"]]);export{p as default};