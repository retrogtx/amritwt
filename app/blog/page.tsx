import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'what i wrote for you',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">what i wrote for you</h1>
      <BlogPosts />
    </section>
  )
}
