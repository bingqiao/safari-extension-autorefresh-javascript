#  Safari Web Extension - AutoRefresh

See article on [Medium](https://medium.com/@bingqiao/safari-auto-refresh-web-extension-javascript-only-sort-of-9298970ec0ac).  

App store [download](https://apps.apple.com/gb/app/autorefresh/id1592466003) (free and no Ads).  

There are a few websites that I visit and that time out after a short period.  
It started annoying me. There are Safari extensions from App store that enable  
autorefreshing but none was free. I started looking for my own solutions. 

It took a couple of minutes of searching online to find some articles on how to  
create Safari Web Extension. It seems that creating extensions for Safari is now  
less complicated than it used to be. I only had to rely on Apple's official docs  
and Mozilla MDN for this small project.

Please refer to [Safari Web Extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions) on how to create a Safari Web Extension  
project and how to install it locally on Mac. Please refer to [Browser Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)  
for how different components work with each other and API docs for browser  
extensions in general.

This AutoRefresh extension allows you to auto refresh individual tabs in Safari.  
The `enable` checkbox controlls if autorefresh is enabled, for all tabs, while  
`start/stop` button controlls if an individual tab should be autorefreshing.  
The implementation is not perfect. you have to "stop/start" for individual tabs if  
"enable" flag is toggled. There could be other bugs too so even though this works  
for me but it is really mainly for demo purpose for others.
