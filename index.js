import{a as b,S as $,i as l}from"./assets/vendor-CFFvTae-.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function p(o,a){const r="https://pixabay.com",s="/api/",e=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:a}),t=`${r}${s}?${e}`;return(await b.get(t)).data}const f=document.querySelector("ul.gallery");let u=null;const h=document.querySelector("span"),m=document.querySelector("button.load-more");function y(o){function a({webformatURL:s,largeImageURL:e,tags:t,likes:i,views:v,comments:w,downloads:L}){return`
          <li class="li">
          <a class="gallery-link" href="${e}">
            <img
            class="gallery-image"
            src="${s}" 
            alt="${t}">
          </a>
          <div class="firstWrapper">
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${i}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Views</h3>
          <p>${v}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Comments</h3>
          <p>${w}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">downloads</h3>
          <p>${L}</p>
          </div>
          </div>
        </li>`}function r(s){return s.map(a).join("")}f.innerHTML=r(o),u===null?u=new $(".gallery a",{captionsData:"alt",captionDelay:250}):u.refresh()}function S(){f.innerHTML=""}function q(){h.classList.remove("is-invisible")}function M(){h.classList.add("is-invisible")}function g(){m.classList.remove("is-invisible")}function P(){m.classList.add("is-invisible")}const d=document.querySelector("form.form"),O=document.querySelector("button.load-more");let c,n;d.addEventListener("submit",async o=>{if(o.preventDefault(),n=1,c=new FormData(d).get("search-text"),c.trim()==="")l.show({title:"hey",message:"fill in empty field"});else{S(),q();try{const r=await p(c,n),s=r;if(r.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}const e=y(s.hits)}catch(r){console.log(r),l.show({title:"error",message:"an error accured while trying to get images"});return}finally{M()}g()}});O.addEventListener("click",async o=>{P(),o.preventDefault(),n+=1;const r=await p(c,n);y(r.hits);let s=15*n;r.totalhits<Math.ceil(s)?l.show({message:"We're sorry, but you've reached the end of search results."}):g()});
//# sourceMappingURL=index.js.map
