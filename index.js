import{a as w,S as b,i as l}from"./assets/vendor-CFFvTae-.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function d(o,a){const s="https://pixabay.com",r="/api/",e=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:`${a}`}),t=`${s}${r}?${e}`;return(await w.get(t)).data}const p=document.querySelector("ul.gallery");let c=null;const f=document.querySelector("span"),m=document.querySelector("button.load-more");function h(o){function a({webformatURL:r,largeImageURL:e,tags:t,likes:i,views:g,comments:v,downloads:L}){return`
          <li class="li">
          <a class="gallery-link" href="${e}">
            <img
            class="gallery-image"
            src="${r}" 
            alt="${t}">
          </a>
          <div class="firstWrapper">
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${i}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Views</h3>
          <p>${g}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Comments</h3>
          <p>${v}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">downloads</h3>
          <p>${L}</p>
          </div>
          </div>
        </li>`}function s(r){return r.map(a).join("")}p.innerHTML=s(o),c===null?c=new b(".gallery a",{captionsData:"alt",captionDelay:250}):c.refresh()}function $(){p.innerHTML=""}function S(){f.classList.remove("is-invisible")}function q(){f.classList.add("is-invisible")}function y(){m.classList.remove("is-invisible")}function M(){m.classList.add("is-invisible")}const u=document.querySelector("form.form"),P=document.querySelector("button.load-more");let n;u.addEventListener("submit",async o=>{if(o.preventDefault(),n=new FormData(u).get("search-text"),n.trim()==="")l.show({title:"hey",message:"fill in empty field"});else{$(),S();try{const s=await d(n),r=s;if(s.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}const e=h(r.hits)}catch(s){console.log(s),l.show({title:"error",message:"an error accured while trying to get images"});return}finally{q()}y()}});P.addEventListener("click",async o=>{M(),o.preventDefault();const r=await d(n,1);h(r.hits),y()});
//# sourceMappingURL=index.js.map
