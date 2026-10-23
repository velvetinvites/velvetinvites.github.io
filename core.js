/* Velvet Invites - motor comun */
(function(){
function $(i){return document.getElementById(i);}
window.openLink=function(u){window.open(u,'_blank','noopener');};
var F=['fe','fa','fd','ft','fp','fm','fc','fr','fw'];
function enc(o){return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');}
function dec(s){s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return JSON.parse(decodeURIComponent(escape(atob(s))));}
function L(){try{return lang;}catch(e){return 'en';}}
var TX={es:{ready:'¡Tu invitación está lista! Envía este enlace a tus invitados:',share:'Enviar por WhatsApp',copy:'Copiar enlace',copied:'¡Enlace copiado!',prev:'Ver como invitado'},en:{ready:'Your invitation is ready! Send this link to your guests:',share:'Send by WhatsApp',copy:'Copy link',copied:'Link copied!',prev:'Preview as a guest'}};
var bc=$('bc');if(!bc)return;var orig=bc.onclick;
var q=new URLSearchParams(location.search).get('i');
if(q){var o=null;try{o=dec(q);}catch(e){}
 if(o){if(o.l){var b=document.querySelector('.lg button[data-l="'+o.l+'"]');if(b)b.click();}
  F.forEach(function(k){var el=$(k);if(el&&o[k]!=null)el.value=o[k];});
  orig.call(bc);
  var bb=$('bb');if(bb)bb.style.display='none';
  if(o.fe)document.title=o.fe;
  return;}}
var ex=document.createElement('style');ex.textContent='.vi-out{margin-top:16px}.vi-box{padding:12px;border:2px dashed currentColor;border-radius:10px;word-break:break-all;font-size:13px;margin-bottom:6px}.vi-out a{text-decoration:none}';document.head.appendChild(ex);
F.forEach(function(k){var el=$(k);if(el&&(el.tagName==='TEXTAREA'||el.type==='text'||el.type==='tel'||!el.type)){el.placeholder=el.value;el.value='';}});
var out=document.createElement('div');out.className='vi-out';out.style.display='none';
var anchor=$('er')||bc;anchor.parentNode.insertBefore(out,anchor.nextSibling);
bc.onclick=function(){var req=['fe','fd','ft','fp'];if($('fa'))req.push('fa');
 var ok=req.every(function(k){return $(k)&&$(k).value.trim();});
 if(!ok){if($('er'))$('er').classList.remove('hd');return;}
 if($('er'))$('er').classList.add('hd');
 var o={l:L()};F.forEach(function(k){var el=$(k);if(el&&el.value.trim())o[k]=el.value.trim();});
 var url=location.origin+location.pathname+'?i='+enc(o);var t=TX[L()]||TX.en;
 out.innerHTML='';
 var box=document.createElement('div');box.className='vi-box';box.textContent=t.ready+' '+url;
 var a1=document.createElement('a');a1.className='bt';a1.textContent=t.share;a1.target='_blank';a1.rel='noopener';a1.href='https://wa.me/?text='+encodeURIComponent(url);
 var a2=document.createElement('button');a2.className='bt al';a2.textContent=t.copy;a2.onclick=function(){navigator.clipboard.writeText(url).then(function(){a2.textContent=t.copied;});};
 var a3=document.createElement('a');a3.className='bt al';a3.textContent=t.prev;a3.target='_blank';a3.rel='noopener';a3.href=url;
 out.appendChild(box);out.appendChild(a1);out.appendChild(a2);out.appendChild(a3);out.style.display='block';out.scrollIntoView({behavior:'smooth'});};
})();
