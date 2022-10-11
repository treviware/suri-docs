import{_ as i,o as a,c as n,a as e,b as t,d as r,e as o,r as c}from"./app.2fb5230d.js";const h={},d=o('<h1 id="suris-are-represented-by-nfts" tabindex="-1"><a class="header-anchor" href="#suris-are-represented-by-nfts" aria-hidden="true">#</a> Suris are represented by NFTs</h1><p>Every suri has an associated NFT which acts as its proof of ownership. (i.e. the owner of the NFT is the owner of the associated suri).</p><div class="custom-container note"><p class="custom-container-title">Insight</p><p>Metadata and images of the NFTs are auto generated on-demand by an off-chain service.</p></div><h2 id="why-using-nfts" tabindex="-1"><a class="header-anchor" href="#why-using-nfts" aria-hidden="true">#</a> Why using NFTs?</h2><p>NFTs are a great way to represent and affirm ownership over a digital asset. They are unique, non-fungible, and can be transferred from one owner to another. They are also greatly integrated in the Solana ecosystem:</p><ul><li>Anyone can review all suris they own by simply looking at the NFT section of their preferred wallet.</li><li>They can be transferred from one owner to another by simply sending the NFT.</li><li>They can be listed and sold on any Solana marketplace.</li><li>They can be used in DeFi applications, auctions, raffles, etc.</li><li>...</li></ul><p>Using NFTs helps <strong>Suri Project</strong> to be finely integrated within the ecosystem from the beginning.</p><h2 id="edge-cases" tabindex="-1"><a class="header-anchor" href="#edge-cases" aria-hidden="true">#</a> Edge cases</h2><p>The NFT mapping is not perfect. For example, if a suri expires, the NFT will still be owned by the previous owner. As you probably already know, once someone owns an SPL token no one can take it away from them, so we cannot get back the NFT from the previous user.</p><p>To work around this problem, the off-chain NFT service will check for edge cases, like suri expiration, lack of funds, in-program sales, etc. and will update the minting information of the NFT according to the new status.</p><div class="custom-container note"><p class="custom-container-title">Insight</p><p>Once a suri is expired, the NFT will be rendered useless, so it is recommended to burn it to cleanup your wallets and recover some funds coming from minting costs.</p></div><h3 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h3><p>There is a short lapse of time in between the moment a suri reaches one of those edge cases and the moment the NFT service detects it and updates the NFT. During this time, the NFT will be displaying the previous state of the suri, which can be misleading.</p><p>To avoid problems coming from this scenario, such as scamming, selling expired NFTs, etc. users will need to make sure the <em>SVC</em> (Suri Verification Code) showed in the NFT matches the real one, present in the blockchain. This way, users can be sure the suri is in the right state.</p>',14),l={class:"custom-container note"},u=e("p",{class:"custom-container-title"},"Insight",-1),p={href:"https://suri.domains",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"children-customization",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#children-customization","aria-hidden":"true"},"#"),t(" Children customization")],-1),f=e("p",null,"NFTs represent the ownership of a suri, but they can also represent their parents. This way, parents will have the ability to include a custom message and picture in their children's NFTs as a way of making them unique or branded.",-1);function g(y,b){const s=c("ExternalLinkIcon");return a(),n("div",null,[d,e("div",l,[u,e("p",null,[t("A verification service will be offered at "),e("a",p,[t("suri.domains"),r(s)]),t(" specifically devised to check the SVC of a suri.")])]),m,f])}const T=i(h,[["render",g],["__file","nfts.html.vue"]]);export{T as default};