import{a as M,S as m,i as l}from"./assets/vendor-CFFvTae-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function g(s,o){const r="https://pixabay.com",a="/api/",e=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),t=`${r}${a}?${e}`;return(await M.get(t)).data}const p=document.querySelector("ul.gallery");let i=null,S,h;const y=document.querySelector("span"),w=document.querySelector("button.load-more");function q(s){function o({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:v,comments:b,downloads:$}){return`
          <li class="li">
          <a class="gallery-link" href="${e}">
            <img
            class="gallery-image"
            src="${a}" 
            alt="${t}">
          </a>
          <div class="firstWrapper">
          <div class="wrapper">
          <h3 class="h3">Likes</h3>
          <p>${n}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Views</h3>
          <p>${v}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">Comments</h3>
          <p>${b}</p>
          </div>
          <div class="wrapper">
          <h3 class="h3">downloads</h3>
          <p>${$}</p>
          </div>
          </div>
        </li>`}function r(a){return a.map(o).join("")}p.innerHTML=r(s),i===null?i=new m(".gallery a",{captionsData:"alt",captionDelay:250}):i.refresh()}function D(){p.innerHTML=""}function P(){y.classList.remove("hidden")}function T(){y.classList.add("hidden")}function L(){w.classList.remove("hidden")}function u(){w.classList.add("hidden")}function B(s){console.log(h),p.insertAdjacentHTML("beforeend",h),i===null?i=new m(".gallery a",{captionsData:"alt",captionDelay:250}):i.refresh(),window.scrollBy({top:S.top,behavior:"smooth"})}const f=document.querySelector("form.form"),O=document.querySelector("button.load-more");let d,c;f.addEventListener("submit",async s=>{if(u(),s.preventDefault(),c=1,d=new FormData(f).get("search-text"),d.trim()==="")l.show({title:"hey",message:"fill in empty field"});else{D(),P();try{const r=await g(d,c),a=r;if(r.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}const e=q(a.hits);L()}catch(r){console.log(r),l.error({title:"error",message:"an error accured while trying to get images"});return}finally{T()}}});O.addEventListener("click",async s=>{try{u(),s.preventDefault(),c+=1;const r=await g(d,c),a=B(r.hits);let e=15*c;r.totalHits<=15||r.totalHits<Math.ceil(e)?l.show({message:"We're sorry, but you've reached the end of search results."}):L()}catch(o){console.log(o),l.error({title:"error",message:"an error accured while trying to get images"}),u()}});
//# sourceMappingURL=index.js.map
