setInterval(function() {
  function r(el, deg) {
    el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
  }
  var d = new Date()
  r(sec, 6*d.getSeconds())  
  r(min, 6*d.getMinutes())
  r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)
  var c = new Date()
  r(sec1, 6*c.getSeconds())  
  r(min1, 6*c.getMinutes())
  r(hour1, 30*(c.getHours()%12) + c.getMinutes()/2)
}, 1)
  