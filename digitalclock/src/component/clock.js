import {React,useState,useEffect} from 'react';

function Clock(){



    const [time,setTime]=useState({
        hours:'',
        min:'',
        sec:''
    });

    useEffect(() => {
        const tick = () => {
          const date = new Date();

            let seconds= date.getSeconds();
            if(seconds < 9)
                seconds="0"+seconds;
          
          setTime({
            hours: date.getHours(),
            min: date.getMinutes(),
            sec:seconds
          });
        };
    
        // Initial call to set the time immediately on component mount
        tick();
    
        // Set interval to update time every second
        const timerId = setInterval(tick, 1000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(timerId);
      }, []);


    return(
        <>
        <div className=" ">
            <div className="a text-2xl flex absolute min-w-full min-h-full justify-center items-center bg-black text-white">
                <div className="mr-10 ">
                    <div  className="cont flex justify-center items-center">Hours</div>
                    <p className=" bg-grey md:text-8xl text-2xl text-white md:w-40 md:h-24 flex justify-center items-center">{time.hours}</p>
                </div>
                <div className="mr-10">
                    <div className="cont flex justify-center items-center">Minutes</div>
                    <p className="bg-grey md:text-8xl text-2xl text-white md:w-40 md:h-24 flex justify-center items-center">{time.min}</p>
                </div>
                <div className="">
                    <div className="cont flex justify-center items-center">Seconds</div>
                    <p className="bg-grey md:text-8xl text-2xl text-white md:w-40 md:h-24 flex justify-center items-center">{time.sec}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Clock;