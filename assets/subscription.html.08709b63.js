import{_ as e,o as t,c as i,e as n}from"./app.75df36fd.js";const o={},r=n('<h1 id="subscription-model" tabindex="-1"><a class="header-anchor" href="#subscription-model" aria-hidden="true">#</a> Subscription model</h1><p>When suris are sold, there is an agreement with their parents on how to pay them using a subscription model. Parents can configure this subscription model settings by adjusting the following parameters:</p><ul><li><strong>Expiration</strong>: the date in which the suri will expire.</li><li><strong>Subscription interval</strong>: the number of seconds between each subscription payment.</li><li><strong>Subscription amount</strong>: the amount of tokens (can be any SPL token) that will be paid each subscription interval.</li><li><strong>Extra initial payment</strong>: the amount of tokens that will be paid at the moment of the subscription + the <strong>Subscription amount</strong> of the first period.</li><li><strong>Initial paid periods</strong>: the number of periods that have been already paid at the moment of the subscription. This allows to give offers like &quot;3 months free&quot;.</li></ul><div class="custom-container note"><p class="custom-container-title">Insight</p><p>Note that once a suri is bought, this configuration cannot be changed until expiration.</p></div><p>This model offers different payment possibilities, such as:</p><ul><li>Free for a period, e.g. 1 year free.</li><li>Single payment for a period, e.g. 10$ for 1 year.</li><li>Recurring payment for a period, e.g. 1$ per month up to 1 year.</li></ul><p>With this model we achieve one of <strong>Suri</strong>&#39;s main goals: suris expire instead of being granted for an endless period of time.</p><h2 id="parent-control" tabindex="-1"><a class="header-anchor" href="#parent-control" aria-hidden="true">#</a> Parent control</h2><p>Parents define the contract with their children. After a child suri domain is bought, the contract is fixed and cannot be changed until expiration. This means that parents cannot perform changes to a live subscription nor can they make changes to the price of the suri.</p><p>But, parents can perform some actions to control their children:</p><ul><li><strong>Freeze</strong>: parents can freeze children. This means that the suri cannot be configured until unfreezing it.</li><li><strong>Expire</strong>: parents can force the expiration of their children, transferring the ownership to another user or opening them to be bought again.</li></ul><p>These actions can harm the current children&#39;s owners so during the buying process both sides can agree a fee the parent will pay to children if any of these actions are taken. This would be a way to protect children&#39;s owners from parents&#39; rogue or dishonest actions without entirely removing parents the control of their children.</p>',12),s=[r];function a(h,c){return t(),i("div",null,s)}const p=e(o,[["render",a],["__file","subscription.html.vue"]]);export{p as default};
