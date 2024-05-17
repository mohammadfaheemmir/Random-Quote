let btn=document.getElementById('btn');

const RandomJoke=()=>{
    let joke=[`Patient: Doctor! You've got to help me! Nobody ever listens to me. No one ever pays any attention to what I have to say.
    Doctor: Next please!`,

    `A man goes to the doctor and says, "Doctor, wherever I touch, it hurts."
    The doctor asks, "What do you mean?"
    The man says, "When I touch my shoulder, it really hurts. If I touch my knee - OUCH! When I touch my forehead, it really, really hurts."
    The doctor says, "I know what's wrong with you - you've broken your finger!"`,

    `A: Hey, man! Please call me a taxi.
    B: Yes, sir. You are a taxi.`,

    `
    A teenage girl had been talking on the phone for about half an hour, and then she hung up.
    "Wow!," said her father, "That was short. You usually talk for two hours. What happened?"
    
    "Wrong number," replied the girl.`,

    `Son: Dad, what is an idiot?
    Dad: An idiot is a person who tries to explain his ideas in such a strange and long way that another person who is listening to him can't understand him. Do you understand me?
    Son: No.`

    ] ;
    
    let jokes=document.getElementById('heading');
    jokes.innerHTML=joke[Math.floor(Math.random()*joke.length)];
}