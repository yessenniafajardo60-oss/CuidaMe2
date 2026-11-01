document.addEventListener('DOMContentLoaded',()=>{
const cfg=window.CUIDAME_CONFIG||{};
for(const el of document.querySelectorAll('[data-business-name]')) el.textContent=cfg.legalName||'CuidaME';
for(const el of document.querySelectorAll('[data-last-updated]')) el.textContent=cfg.lastUpdated||'1 de noviembre de 2026';
for(const el of document.querySelectorAll('[data-location]')) el.textContent=cfg.location||'Chile';
const phone=(cfg.whatsapp||'').replace(/\D/g,'');
const contact=document.querySelectorAll('[data-whatsapp]');
for(const el of contact){if(phone.length>=10){el.href='https://wa.me/'+phone+'?text='+encodeURIComponent('Hola, quiero información sobre CuidaME.'); el.classList.remove('hidden');}else{el.remove();}}
for(const el of document.querySelectorAll('[data-email]')){if(cfg.email&&cfg.email.includes('@')){el.href='mailto:'+cfg.email;el.textContent=cfg.email;el.classList.remove('hidden')}else{el.remove()}}
for(const el of document.querySelectorAll('[data-contact-empty]')){if(phone.length>=10||cfg.email?.includes('@'))el.remove()}
});
