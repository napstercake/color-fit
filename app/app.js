var btn = document.getElementById('btnoutfit');
var ofSwetcher = document.getElementById('ofSwetcher');
var ofTees = document.getElementById('ofTees');
var ofPants = document.getElementById('ofPants');
var ofShoes = document.getElementById('ofShoes');
btn.addEventListener('click', makeOutfit);
var swetcherColor = ['000000', 'FFFFFF', '454545', '808000', 'C0392B'];
var teesColor     = ['000000', 'FFFFFF', '454545', '5DADE2'];
var pantsColor    = ['000000', '0000FF', '454545', '808000', '5DADE2'];
var shoesColor    = ['000000', 'FFFFFF', 'C0392B'];

function makeOutfit() {
  var mainColor = '#808000';
  ofShoes.style.backgroundColor = mainColor;
  ofPants.style.backgroundColor = hexToComplimentary(rgb2hex(ofShoes.style.backgroundColor));
  ofTees.style.backgroundColor = hexToComplimentary(rgb2hex(ofPants.style.backgroundColor));
  ofSwetcher.style.backgroundColor = hexToComplimentary(rgb2hex(ofTees.style.backgroundColor));
}

function hexToComplimentary(n){var r="rgb("+(n=n.replace("#","")).match(new RegExp("(.{"+n.length/3+"})","g")).map(function(r){return parseInt(n.length%2?r+r:r,16)}).join(",")+")";r=r.replace(/[^\d,]/g,"").split(",");var t=r[0],e=r[1],a=r[2];t/=255,e/=255,a/=255;var i,o,u=Math.max(t,e,a),h=Math.min(t,e,a),g=(u+h)/2;if(u==h)i=o=0;else{var l=u-h;o=g>.5?l/(2-u-h):l/(u+h),u==t&&e>=a?i=1.0472*(e-a)/l:u==t&&a>e?i=1.0472*(e-a)/l+6.2832:u==e?i=1.0472*(a-t)/l+2.0944:u==a&&(i=1.0472*(t-e)/l+4.1888)}if(i=i/6.2832*360+0,i+=180,i>360&&(i-=360),i/=360,0===o)t=e=a=g;else{var p=function(n,r,t){return 0>t&&(t+=1),t>1&&(t-=1),1/6>t?n+6*(r-n)*t:.5>t?r:2/3>t?n+(r-n)*(2/3-t)*6:n},c=.5>g?g*(1+o):g+o-g*o,m=2*g-c;t=p(m,c,i+1/3),e=p(m,c,i),a=p(m,c,i-1/3)}return t=Math.round(255*t),e=Math.round(255*e),a=Math.round(255*a),r=a|e<<8|t<<16,"#"+(16777216|r).toString(16).substring(1)}
function rgb2hex(s){return s=s.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),s&&4===s.length?"#"+("0"+parseInt(s[1],10).toString(16)).slice(-2)+("0"+parseInt(s[2],10).toString(16)).slice(-2)+("0"+parseInt(s[3],10).toString(16)).slice(-2):""}