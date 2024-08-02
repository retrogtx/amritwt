import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
    <div className='flex flex-col'> 
      <h1 className="text-4xl font-bold mb-1">
          amrit rai
        </h1>
      <h2 className="text-gray-500 mb-5">
        self taught engineer
      </h2>
    </div>

      <p className="mb-10">
        {`20 year old something guy.`}
        <br />
        {'i read alot too. i write sometimes. i like technology.'}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}