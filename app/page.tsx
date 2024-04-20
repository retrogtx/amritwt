import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-10 text-2xl font-semibold tracking-tighter">
        amrit's space
      </h1>
      <p className="mb-10">
        {`i'm amrit, a 20 year old something guy.`}
        <br />
        {'i read alot too. i write sometimes.'}
        <br />
        {'welcome to my space.'}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}