export type Blog = {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
  content: string;
};

export const blogPosts: Blog[] = [
  {
    id: 1,
    title: "Blog Post One",
    date: "01/19/19",
    image:
      "https://images.unsplash.com/photo-1499750310159-5b5f38e3163a?q=80&w=2000&auto=format&fit=crop",
    slug: "blog-post-one",
    content: `It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.

Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do.

Be clear, be confident and don't overthink it. The beauty of your story is that it's going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.`,
  },
  {
    id: 2,
    title: "Blog Post Two",
    date: "01/19/19",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2000&auto=format&fit=crop",
    slug: "blog-post-two",
    content: `This is the content for Blog Post Two. It has different content than the first post.

Here we can discuss different topics, ideas, or share different stories. The key is that each post has its own unique URL and content.`,
  },
  {
    id: 3,
    title: "Blog Post Three",
    date: "01/19/19",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2000&auto=format&fit=crop",
    slug: "blog-post-three",
    content: `Welcome to Blog Post Three. Nature is a common theme in our placeholder images, so let's talk about nature.

Nature allows us to disconnect from the digital world and reconnect with ourselves.`,
  },
  {
    id: 4,
    title: "Blog Post Four",
    date: "01/19/19",
    image:
      "https://images.unsplash.com/photo-1526746323145-5ac81d598585?q=80&w=2000&auto=format&fit=crop",
    slug: "blog-post-four",
    content: `And finally, Blog Post Four. This post concludes our sample data.

Hopefully, this demonstrates how dynamic routing works in Next.js.`,
  },
];
