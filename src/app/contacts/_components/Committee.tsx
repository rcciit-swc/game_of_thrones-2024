import React from 'react'

const CommitteeDetails = [
    {
        title:"Faculty-In-Charge (Sports) and Assistant Professor, RCCIIT" ,
        members:[{
            name : "Sarbojit Mukherjee",
            role:"",
            phone : "+919433852385"
        }]
    },
    {
        title:"SWC Faculty Sub Committee (Sports)" ,
        members:[{
            name : "Naiwrita Dey",
            role:"Assistant Professor, RCCIIT",
            phone : "+918420479505"
        },
    {
        name : "Dipan Bandyopadhyay",
        role:"Assistant Professor, RCCIIT",
        phone : "+917003467858"
    },
    {
        name : "Deepam Gangopadhyay ",
        role:"Assistant Professor, RCCIIT",
        phone : "+918240668401"
    }]
    },
    {
        title:"For Event Details" ,
        members:[{
            name : "Pritam Sarkar",
            role:"",
            phone : " +918918969446"
        },
    {
        name : "Prasanna Biswas ",
        role:"",
        phone : "+919830360175"
    },
    {
        name : "Arnab Das",
        role:"",
        phone : " +916289881455"
    }]
    },
    {
        title:"For Sponsorship" ,
        members:[{
            name : "Aritra Kr. Basu ",
            role:"",
            phone : "+916291080552"
        }]
    },
    {
        title:"SWC Student Representatives" ,
        members:[{
            name : "Sanmoy Mallick  ",
            role:" Assistant General Secretary , Cultural",
            phone : " +919433018776"
        },
    {
        name : "Arghya Guha",
        role:" Assistant General Secretary,Tech",
        phone : "+918777498780"
    },
    {
        name : "Arghya Guha  ",
        role:" Assistant General Secretary,Tech",
        phone : "+918777498780"
    },
    {
        name : "Gautami Sinha ",
        role:"General Secretary",
        phone : " +917980345714"
    }
 ]
    },
]

const Committee = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-16 '>
        {
            CommitteeDetails.map((item,index)=>{
                return(
                    <div key={index} className='flex flex-col items-center gap-5 px-5'>
                        <h1 className='text-2xl font-got text-primary tracking-wider text-center'>{item.title}</h1>
                        <div className='flex flex-row justify-center flex-wrap items-center gap-20'>
                            {
                                item.members.map((member,index)=>{
                                    return(
                                        <div key={index} className='flex flex-row flex-wrap  items-center gap-2 text-xl'>
                                           
                                            <div className='flex flex-col items-center text-center'>
                                                <p className='font-semibold'>{member.name}</p>
                                                <p>{member.role}</p>
                                                <p>{member.phone}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Committee