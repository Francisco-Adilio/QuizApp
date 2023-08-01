interface IQuiz {
  title: string;
  image?: string;
}

export function QuizBox(params: IQuiz) {
  return (
    <div className='bg-white h-60 rounded-lg mt-4 relative'>
      <p className='bg-black opacity-80 text-white text-lg mx-3 rounded-md px-4 absolute right-0 left-0 bottom-0 mb-3 '>
        {params.title}
      </p>
    </div>
  )
}