var $=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var root=document.documentElement,names={light:'Light',dark:'Dark',green:'Cyber Green',purple:'Midnight Purple'};
function mark(){$$('.td').forEach(function(d){var on=d.dataset.th===root.dataset.theme;d.classList.toggle('on',on);d.setAttribute('aria-pressed',on)})}
try{var t=localStorage.getItem('ar-theme');if(names[t])root.dataset.theme=t}catch(e){}
mark();
$$('.td').forEach(function(d){d.onclick=function(){var n=d.dataset.th;root.dataset.theme=n;try{localStorage.setItem('ar-theme',n)}catch(e){}mark();toast('Theme: '+names[n])}});
var menu=$('#menu'),bg=$('#bg');
bg.onclick=function(){var o=menu.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.textContent=o?'✕':'☰'};
$$('.menu a').forEach(function(a){a.onclick=function(){menu.classList.remove('open');bg.textContent='☰';bg.setAttribute('aria-expanded',false)}});
var tt;function toast(m){var x=$('#ts');x.textContent=m;x.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){x.classList.remove('show')},2600)}
$$('[data-t]').forEach(function(a){a.onclick=function(e){e.preventDefault();toast(a.dataset.t)}});
$('#cf').onsubmit=function(e){e.preventDefault();var F=e.target,ok=true;['n','e','m'].forEach(function(i){if(!$('#'+i).checkValidity())ok=false});
if(!ok){toast('Please fill all required fields correctly');return}
var nm=$('#n').value.trim(),em=$('#e').value.trim(),ms=$('#m').value.trim(),bt=F.querySelector('button[type=submit]');
bt.disabled=true;bt.textContent='Sending…';
fetch('https://formsubmit.co/ajax/akashraval3709@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:nm,email:em,message:ms,_subject:'[Portfolio] Message from '+nm,_replyto:em})})
.then(function(r){if(!r.ok)throw 0;return r.json()})
.then(function(){toast('Message sent! I will reply soon.');F.reset()})
.catch(function(){location.href='mailto:akashraval3709@gmail.com?subject='+encodeURIComponent('[Portfolio] Message from '+nm)+'&body='+encodeURIComponent(ms+'\n\n— '+nm+' ('+em+')');toast('Opening your email app…')})
.then(function(){bt.disabled=false;bt.textContent='Send Message ➤'})};
$('#pr').onclick=function(){try{window.print()}catch(e){}if(window.top!==window){toast('Print not opening? Open this page in its own tab, then try again')}};
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
(function(){var bs=$$('.cpv'),lb=$('#lb'),im=$('#lbi'),cur=null;if(!bs.length||!lb)return;
function op(b){cur=b;im.src=b.querySelector('img').src;lb.classList.add('open');document.body.style.overflow='hidden';$('#lbx').focus()}
function cl(){lb.classList.remove('open');$('.lbs').classList.remove('zoom');document.body.style.overflow='';if(cur)cur.focus()}
bs.forEach(function(b){b.onclick=function(){op(b)}});
im.onclick=function(e){e.stopPropagation();$('.lbs').classList.toggle('zoom')};$('#lbx').onclick=cl;lb.onclick=function(e){if(e.target===lb||e.target.classList.contains('lbs'))cl()};
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open'))cl()})})();
(function(){var tabs=$$('.rt'),papers=$$('.paper'),dl=$('#rdl'),dt=$('#rdlt');if(!tabs.length||!dl)return;
var F={py:'assets/Akash_Raval_Python_Developer_Resume.pdf',web:'assets/Akash_Raval_Web_Developer_Resume.pdf'};
tabs.forEach(function(t){t.onclick=function(){tabs.forEach(function(o){o.setAttribute('aria-selected',o===t?'true':'false')});
papers.forEach(function(p){p.hidden=p.id!==t.getAttribute('aria-controls')});
var f=F[t.dataset.k];dl.href=f;dl.setAttribute('download',f.split('/').pop());dt.textContent='Download PDF ('+t.textContent+')'}})})();
