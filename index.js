import{a as q,S as M,i}from"./assets/vendor-CFFvTae-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function p(n,s){const r="https://pixabay.com",o="/api/",e=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}),t=`${r}${o}?${e}`;return(await q.get(t)).data}const h=document.querySelector("ul.gallery");let u=null;const m=document.querySelector("span"),y=document.querySelector("button.load-more");function g(n,s){function r({webformatURL:e,largeImageURL:t,tags:a,likes:b,views:S,comments:$,downloads:P}){return`
          <li class="li">
          <a class="gallery-link" href="${t}">
            <img
            class="gallery-image"
            src="${e}" 
            alt="${a}">
          </a>
          <div class="firstWrapper">
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${b}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Views</h3>
          <p>${S}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Comments</h3>
          <p>${$}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">downloads</h3>
          <p>${P}</p>
          </div>
          </div>
        </li>`}function o(e){return e.map(r).join("")}s&&(h.innerHTML=""),h.insertAdjacentHTML("beforeend",o(n)),u===null?u=new M(".gallery a",{captionsData:"alt",captionDelay:250}):u.refresh()}function B(){h.innerHTML=""}function w(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function v(){y.classList.remove("hidden")}function c(){y.classList.add("hidden")}const f=document.querySelector("form.form");document.querySelector("ul.gallery");const E=document.querySelector("li.li"),H=document.querySelector("button.load-more");let d,l;f.addEventListener("submit",async n=>{if(c(),n.preventDefault(),l=1,d=new FormData(f).get("search-text"),d.trim()==="")i.show({title:"hey",message:"fill in empty field"});else{B(),w();try{const r=await p(d,l),o=r;if(r.hits.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}const e=g(o.hits,!0),t=15;let a=t*l;o.totalHits<=t||o.totalHits<Math.ceil(a)?(c(),i.show({message:"We're sorry, but you've reached the end of search results."})):v()}catch(r){console.log(r),i.error({title:"error",message:"an error accured while trying to get images"});return}finally{L()}}});H.addEventListener("click",async n=>{try{w(),c(),n.preventDefault(),l+=1;const r=await p(d,l),o=g(r.hits,!1),e=E.getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"});const t=15;let a=t*l;r.totalHits<=t||r.totalHits<Math.ceil(a)?(i.show({message:"We're sorry, but you've reached the end of search results."}),c()):v()}catch(s){console.log(s),i.error({title:"error",message:"an error accured while trying to get images"}),c()}finally{L()}});
//# sourceMappingURL=index.js.map
