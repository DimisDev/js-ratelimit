# js-ratelimit
Very Simple JS Script that Rate-Limits connections to html Websites

# How it works:
The js script sets timers for each ip every time set and counts the requests incomming from these ips on the website, if the amount of requests is higher than the limit, it temporally drops them with a rate limit error code.

# Installation:
1. Place the js script on the same folder as your html page
2. Include the js script on the html page you with to rate limit with ```<script src="ratelimit.js"></script>```


# Warning: Im still testing it, might not work perfectly
Don't rely on it as a basic firewall, I made it in like 10 mins and still not sure if it works properly


## Credits
- [@DimisSSH](https://github.com/DimisSSH)
