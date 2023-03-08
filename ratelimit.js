    const countreqs = new Map();
    function rateLimitMiddleware() {
      const ip = getIpAddress();
      const now = Date.now();
      const requests = countreqs.get(ip) || [];

      function getIpAddress() {
        const userip = window.location.hostname;
      return userip;
    }
      while (requests.length > 0 && now - requests[0] > 60000) { // Every 1 min
        requests.shift();
      }
      requests.push(now);
      countreqs.set(ip, requests);
      if (requests.length > 5) { // Maximum requests
        alert('You are being rate limited, please try again later!');
        return false;
      }
      return true;
    }
    const form = document.querySelector('form');

    form.addEventListener('submit', event => {
      if (!rateLimitMiddleware()) {
        event.preventDefault();
      }
    });
