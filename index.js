import{a as q,S as M,i}from"./assets/vendor-CFFvTae-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function m(n,s){const o="https://pixabay.com",r="/api/",e=new URLSearchParams({key:"56397687-63b06f309fb1b7ea5ddc55358",q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}),t=`${o}${r}?${e}`;return(await q.get(t)).data}const p=document.querySelector("ul.gallery");let h=null;const y=document.querySelector("span"),g=document.querySelector("button.load-more");function w(n,s){function o({webformatURL:e,largeImageURL:t,tags:a,likes:u,views:S,comments:$,downloads:P}){return`
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
          <p>${u}</p>
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
        </li>`}function r(e){return e.map(o).join("")}s===!0&&(p.innerHTML=""),p.insertAdjacentHTML("beforeend",r(n)),h===null?h=new M(".gallery a",{captionsData:"alt",captionDelay:250}):h.refresh()}function B(){p.innerHTML=""}function L(){y.classList.remove("hidden")}function v(){y.classList.add("hidden")}function b(){g.classList.remove("hidden")}function c(){g.classList.add("hidden")}const f=document.querySelector("form.form");document.querySelector("ul.gallery");const E=document.querySelector("button.load-more");let d,l;f.addEventListener("submit",async n=>{if(c(),n.preventDefault(),l=1,d=new FormData(f).get("search-text"),d.trim()==="")i.show({title:"hey",message:"fill in empty field"});else{B(),L();try{const o=await m(d,l),r=o;if(o.hits.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}const e=w(r.hits,!0),t=15;let a=t*l;r.totalHits<=t||r.totalHits<Math.ceil(a)?(c(),i.show({message:"We're sorry, but you've reached the end of search results."})):b()}catch(o){console.log(o),i.error({title:"error",message:"an error accured while trying to get images"});return}finally{v()}}});E.addEventListener("click",async n=>{try{const s=document.querySelector("li.li");L(),c(),n.preventDefault(),l+=1;const r=await m(d,l),e=w(r.hits,!1),t=s.getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"});const a=15;let u=a*l;r.totalHits<=a||r.totalHits<Math.ceil(u)?(i.show({message:"We're sorry, but you've reached the end of search results."}),c()):b()}catch(s){console.log(s),i.error({title:"error",message:"an error accured while trying to get images"}),c()}finally{v()}});
//# sourceMappingURL=index.js.map
