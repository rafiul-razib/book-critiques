const Contacts = () => {
  return (
    <div className="max-w-[82%] mx-auto">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <br />
      <p className="text-md">
        Have a question, suggestion, or just want to say hello? We'd love to
        hear from you! At Book Critiques, we're committed to providing excellent
        service and fostering meaningful connections with our readers.
      </p>
      <br />
      <p className="text-md">
        Feel free to reach out to us via email at{" "}
        <a className="text-orange-500" href="mailto:contact@bookcritiques.com">
          contact@bookcritiques.com
        </a>{" "}
        for any inquiries, including partnership opportunities, advertising
        inquiries, or general feedback. Our dedicated team will do their best to
        respond to your message promptly.
      </p>
      <br />
      <p className="text-md">
        You can also connect with us on social media platforms such as{" "}
        <a
          className="text-orange-500"
          href="https://www.facebook.com/bookcritiques"
        >
          Facebook
        </a>
        , and{" "}
        <a className="text-orange-500" href="https://twitter.com/bookcritiques">
          Twitter
        </a>
        ,{" "}
        <a
          className="text-orange-500"
          href="https://www.instagram.com/bookcritiques"
        >
          Instagram
        </a>{" "}
        to stay updated on the latest book reviews, discussions, and community
        events.
      </p>
      <br />
      <p className="text-md">
        Thank you for being a part of the Book Critiques community. We look
        forward to hearing from you!
      </p>
    </div>
  );
};

export default Contacts;
