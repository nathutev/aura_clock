const timeLabel = document.getElementById("time");

update();
setInterval(update, 100);

function update(){
  let time = new Date();
  
  timeLabel.innerHTML = formatTime(time);

  function formatTime(time){
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();


    if(hour <= 9 && minute <= 9){
      return `0${hour}:0${minute}`;
    }

    else if(hour <= 9 && minute <= 9){
      return `0${hour}:0${minute}`;
    }

    else if(minute <= 9){
      return `${hour}:0${minute}`;
    }

    else if(hour <= 9){
      return `${hour}:0${minute}`;
    }

    else if(minute <= 9){
      return `${hour}:0${minute}`;
    }

    else{
      return `${hour}:${minute}`;
    };
  };
};