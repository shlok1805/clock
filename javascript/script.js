setInterval(function () {
  d=new Date();
  h=d.getHours();
  m=d.getMinutes();
  s=d.getSeconds();
  hrotate=30*h + m/2;
  mrotate=6*m + s/10;
  srotate=6*s;
  hours.style.transform=`rotate(${hrotate}deg)`;
  minutes.style.transform=`rotate(${mrotate}deg)`;
  seconds.style.transform=`rotate(${srotate}deg)`;
    }, 1000);
