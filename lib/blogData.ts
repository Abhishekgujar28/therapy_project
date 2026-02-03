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
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=1500w",
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
      "https://images.unsplash.com/photo-1500634245200-e5245c5a0066?q=80&w=1200&auto=format&fit=crop",
    slug: "blog-post-two",
    content: `This is the content for Blog Post Two. It has different content than the first post.

Here we can discuss different topics, ideas, or share different stories. The key is that each post has its own unique URL and content.`,
  },
  {
    id: 3,
    title: "Blog Post Three",
    date: "01/19/19",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop",
    slug: "blog-post-three",
    content: `Welcome to Blog Post Three. Nature is a common theme in our placeholder images, so let's talk about nature.

Nature allows us to disconnect from the digital world and reconnect with ourselves.`,
  },
  {
    id: 4,
    title: "Blog Post Four",
    date: "01/19/19",
    image:
      "https://images.unsplash.com/photo-1516205651411-a42796ac27f3?q=80&w=1200&auto=format&fit=crop",
    slug: "blog-post-four",
    content: `And finally, Blog Post Four. This post concludes our sample data.

Hopefully, this demonstrates how dynamic routing works in Next.js.`,
  },
];
