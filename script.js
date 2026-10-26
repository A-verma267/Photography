(function(){
var nav=document.getElementById('nav'),menu=document.getElementById('menu');
addEventListener('scroll',function(){nav.classList.toggle('solid',scrollY>40)},{passive:true});
document.getElementById('burger').onclick=function(){menu.classList.toggle('open')};
menu.addEventListener('click',function(){menu.classList.remove('open')});
var w=["Candid","Cinematic","Timeless","Destination","Romantic","Editorial","Heartfelt"],s='';
for(var i=0;i<2;i++)w.forEach(function(x){s+='<span>'+x+'</span>'});
document.getElementById('strip').innerHTML=s;
var data=[["Every photo felt like a memory we hadn’t had yet. We cried all over again.","Riya & Kabir"],["So calm and invisible. We forgot she was there, and the photos are pure magic.","Meera & Arjun"],["Our families still talk about how warm and kind the whole team was.","Sana & Dev"],["The light, the colours, the candid moments. Absolutely stunning work.","Naina & Veer"],["Delivered earlier than promised and every frame was better than the last.","Tara & Ishan"],["She captured the little things we would have missed. Truly grateful.","Anika & Rohan"]],h='';
for(var r=0;r<2;r++)data.forEach(function(d){h+='<div class="quote"><div class="stars">★★★★★</div><p>“'+d[0]+'”</p><div class="who">'+d[1]+'</div></div>'});
document.getElementById('track').innerHTML=h;
document.getElementById('filters').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
this.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});
document.querySelectorAll('.tile').forEach(function(t){t.classList.toggle('hide',b.dataset.f!=='all'&&t.dataset.c!==b.dataset.f)})});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('in');
e.target.querySelectorAll('[data-n]').forEach(function(el){var n=+el.dataset.n,i=0,t=setInterval(function(){i+=Math.ceil(n/40);if(i>=n){i=n;clearInterval(t)}el.textContent=i+'+'},35)});io.unobserve(e.target)})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
document.getElementById('form').addEventListener('submit',function(e){e.preventDefault();document.getElementById('ok').style.display='block';e.target.reset()});
})();
