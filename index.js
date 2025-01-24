import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const d="48273516-22e71b99033a61f3653b23d90",f="https://pixabay.com/api/";function g(e){const o=`${f}?key=${d}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("No images found");return r.hits})}function m(e){const o=document.querySelector(".gallery");if(o.innerHTML="",e.length===0)return;const r=e.map(s=>`
    <div class="gallery-item">
      <a href="${s.largeImageURL}" class="gallery-link">
        <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-image" />
      </a>
      <div class="image-info">
        <p><strong>Likes:</strong> ${s.likes}</p>
        <p><strong>Views:</strong> ${s.views}</p>
        <p><strong>Comments:</strong> ${s.comments}</p>
        <p><strong>Downloads:</strong> ${s.downloads}</p>
      </div>
    </div>
  `).join("");o.innerHTML=r}function l(e){c.error({title:"Error",message:e,position:"topRight"})}function h(){const e=document.querySelector(".loader");e?e.classList.remove("hidden"):console.warn("⚠️ Элемент .loader не найден в DOM.")}function p(){const e=document.querySelector(".loader");e?e.classList.add("hidden"):console.warn("⚠️ Элемент .loader не найден в DOM.")}const y=document.getElementById("search-form"),w=document.getElementById("search-input"),L=document.querySelector(".gallery");let a=null;y.addEventListener("submit",async e=>{e.preventDefault();const o=w.value.trim();if(o===""){l("Please enter a search query");return}L.innerHTML="",console.log("Показать индикатор загрузки"),h();try{const r=await g(o);if(console.log("Полученные изображения:",r),r.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}m(r),a?a.refresh():a=new u(".gallery a")}catch(r){console.error("Ошибка запроса:",r),l("An error occurred. Please try again later.")}finally{p()}});
//# sourceMappingURL=index.js.map
