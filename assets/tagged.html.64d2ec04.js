import{_ as a,o as i,c as s,a as e,b as t,d as o,e as r,r as c}from"./app.203b0193.js";const l={},d=r('<h1 id="tagged-suris" tabindex="-1"><a class="header-anchor" href="#tagged-suris" aria-hidden="true">#</a> Tagged suris</h1><p>Tagged suris consist of a prefix denoting a special meaning and a list of suri names separated by a dot <code>.</code>, e.g. <code>@myUserName.twitter</code>, <code>#subject</code>, <code>$USDC</code>, etc.</p><div class="custom-container note"><p class="custom-container-title">Insight</p><p>Tagged domains are just a special representation of an equivalent canonical suri, thus they do not have any special meaning to the system or added functionality.</p></div>',3),u={href:"https://en.wikipedia.org/wiki/Top-level_domain",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"Some examples are:",-1),p=e("em",null,"mention",-1),g=e("code",null,"@username",-1),_=e("code",null,"@username.twitter",-1),f=e("code",null,"@username.facebook",-1),m={href:"https://en.wikipedia.org/wiki/Top-level_domain",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"username",-1),b=e("li",null,[e("p",null,[t("A Web3 project is minting a new token and exposing its data using a "),e("em",null,"cashtag"),t(),e("code",null,"$MY_TOKEN"),t(". They want to store its public information, like where to buy it, the project's website, etc. in the suri's records but storing the pricing information in "),e("code",null,"$MY_TOKEN.pricing"),t(" to separate the concepts, using the suri as a kind of oracle. With the prefix "),e("code",null,"$"),t(" we have clear that it is a token and not a brand or user.")])],-1),k=e("p",null,[t("If instead of using a tagged suri we use a regular suri, we would have ended with "),e("code",null,"username.twitter"),t(" or "),e("code",null,"MY_TOKEN.pricing"),t(", which are perfectly fine but do not emphasize the actual subject of the action.")],-1),y=e("p",null,[t("You can check the full "),e("a",{href:"/en/domains/formats#tagged-format"},"definition"),t(" and all tagged types in the following section.")],-1);function T(v,x){const n=c("ExternalLinkIcon");return i(),s("div",null,[d,e("p",null,[t("The idea behind this representation is to add some special meaning to a name, like identity or subject, which defines the "),e("a",u,[t("TLD"),o(n)]),t(" of the suri. This is especially useful to differentiate users from brands or specific subjects.")]),h,e("ul",null,[e("li",null,[e("p",null,[t("We want to use a suri as a source of our digital identity, we can use a "),p,t(),g,t(" and then use subdomains to split the content for our social networks, e.g. "),_,t(),f,t(", etc. We could have used a "),e("a",m,[t("TLD"),o(n)]),t(" here like just "),w,t(" but this way we are emphasizing we are a person and not a brand.")])]),b]),k,y])}const N=a(l,[["render",T],["__file","tagged.html.vue"]]);export{N as default};
