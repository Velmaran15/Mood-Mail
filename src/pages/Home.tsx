import Moodinput from "@/components/ui/Moodinput"
import Moodoutput from "@/components/ui/Moodoutput"
import { useState } from "react" 


const Home = () => {
    const [mood, setmood] = useState("")
    const [sub, setsub] = useState("")
    const [footer, setfooter] = useState("")
    const [generated, setgenerated] = useState(false)

    const handlegenerate = () => {
      const lowerMood = mood.toLowerCase();
      if (lowerMood.includes("happy")) {
        setsub("Happy Day!")
        setfooter("You’re doing amazing, and it shows! Keep it up, you’ve got this! 🎉🙌")
      }else if(lowerMood.includes("sad")) {
        setsub("Sad Day!")
        setfooter("😌 It's okay to feel tired. Rest is part of growth too. 🛌✨")
    }else if(lowerMood.includes("angry")) {
        setsub("Need To Calm Down")
        setfooter("It’s okay to feel angry – your emotions are valid. Breathe. You’re not alone. 🤗🧘")
    }else{
        setsub("Neutral Mood")
        setfooter("💛Take Care🌟")
      }
      setgenerated(true);
      setmood("");
    }

    const handlereset = () => {
      setmood("");
      setsub("");
      setfooter("");
      setgenerated(false);
    }


    
  return (
    <div className='max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-lg bg-white space-y-6'>
        <h1 className='text-2xl font-bold text-center'>Email Template Generator</h1>
        <p className='text-center text-gray-600'>Generate personalized email templates based on your mood.</p>

        {!generated ? (
           <Moodinput
          mood={mood}
          setMood={setmood}
          onGenerate={handlegenerate}
          disabled={generated}
         />
      ):(
          <Moodoutput subject={sub} footer={footer} onReset={handlereset} />
        )}
    </div>
  )
}

export default Home