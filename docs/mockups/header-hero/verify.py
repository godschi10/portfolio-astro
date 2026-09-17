# Run with BU_CDP_URL=http://127.0.0.1:9222 BH_RECORD=0 browser-harness < verify.py
# Assumes this mockup is the current tab. No browser/service creation.
import json,base64,pathlib,time
out=pathlib.Path('/home/ubuntu/portfolio-astro/docs/mockups/header-hero')
rows=[]
for w,h in [(320,1000),(390,1150),(768,1250),(1023,1250),(1024,1100),(1440,1000)]:
 cdp('Emulation.setDeviceMetricsOverride',width=w,height=h,deviceScaleFactor=1,mobile=False)
 goto_url('file:///home/ubuntu/portfolio-astro/docs/mockups/header-hero/index.html')
 wait_for_load()
 js("(()=>{Promise.all([400,700,800].map(w=>document.fonts.load(w+' 16px \"JetBrains Mono\"'))).then(r=>window.fontLoads=r.map(x=>x.length));})()")
 time.sleep(.3)
 js('window.scrollTo(0,0)')
 r=js('''JSON.stringify({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,h1:getComputedStyle(document.querySelector('h1')).fontSize,fonts:[...document.fonts].map(f=>({family:f.family,weight:f.weight,status:f.status})),overflow:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+.5||r.left<-.5)&&getComputedStyle(e).position!=='fixed'}).map(e=>({tag:e.tagName,cls:e.className,width:e.getBoundingClientRect().width})),controls:[...document.querySelectorAll('a,button')].filter(e=>{let r=e.getBoundingClientRect();return r.width&&r.height&&r.y>=0&&!e.closest('[hidden]')}).map(e=>({text:e.textContent.trim()||e.getAttribute('aria-label'),w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height})),title:document.querySelector('h1').textContent.trim(),hero:document.querySelector('.hero').getBoundingClientRect().toJSON(),actions:document.querySelector('.hero-actions').getBoundingClientRect().toJSON(),h1Box:document.querySelector('h1').getBoundingClientRect().toJSON(),cursor:document.querySelector('.cursor').getBoundingClientRect().toJSON(),folio:document.querySelector('.folio').getBoundingClientRect().toJSON(),heroBefore:(getComputedStyle(document.querySelector('.hero'),'::before').backgroundImage||'none')==='none'?'none':'present'})''')
 rows.append(json.loads(r))
 if w in [390,768,1440]:
  data=cdp('Page.captureScreenshot',format='png')['data'];(out/('viewport-'+str(w)+'.png')).write_bytes(base64.b64decode(data))
(out/'measurements.json').write_text(json.dumps(rows,indent=2))
print(json.dumps([{k:r[k] for k in ['width','scrollWidth','h1','overflow','heroBefore','cursor','folio']} for r in rows],indent=2))
cdp('Emulation.setDeviceMetricsOverride',width=390,height=844,deviceScaleFactor=1,mobile=False)
js("document.querySelector('.menu-toggle').focus()")
cdp('Input.dispatchKeyEvent',type='rawKeyDown',key='Enter',code='Enter',windowsVirtualKeyCode=13)
cdp('Input.dispatchKeyEvent',type='keyUp',key='Enter',code='Enter',windowsVirtualKeyCode=13)
def state():
 return json.loads(js("JSON.stringify({open:!document.querySelector('.menu-overlay').hidden,expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded'),focus:document.activeElement.className,locked:document.querySelector('main').inert,notice:!document.querySelector('.route-notice').hidden})"))
checks={'trustedEnter':state()}
if not checks['trustedEnter']['open']:
 js("document.querySelector('.menu-toggle').click()")
checks['clickOpen']=state()
js("document.querySelector('.overlay-hire').focus()")
cdp('Input.dispatchKeyEvent',type='rawKeyDown',key='Tab',code='Tab',windowsVirtualKeyCode=9)
checks['tabWrap']=state()
cdp('Input.dispatchKeyEvent',type='rawKeyDown',key='Tab',code='Tab',windowsVirtualKeyCode=9,modifiers=8)
checks['shiftTabWrap']=state()
data=cdp('Page.captureScreenshot',format='png')['data'];(out/'menu-390.png').write_bytes(base64.b64decode(data))
cdp('Input.dispatchKeyEvent',type='rawKeyDown',key='Escape',code='Escape',windowsVirtualKeyCode=27)
checks['escapeReturn']=state()
js("document.querySelector('.hero-actions [data-preview]').click()")
checks['workScopeNote']=state()
js("document.querySelector('.route-notice button').click()")
checks['scopeReturn']=state()
(out/'interaction-checks.json').write_text(json.dumps(checks,indent=2))
print(json.dumps(checks,indent=2))
cdp('Emulation.setDeviceMetricsOverride',width=1280,height=900,deviceScaleFactor=1,mobile=False)
