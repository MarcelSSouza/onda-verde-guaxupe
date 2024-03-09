import React from 'react';

export default function MyFacebook() {
  return (
    <>
      <div className="bg-success text-white m-0">
        <h1 className="m-0">Nosso Facebook</h1>
      </div>
      <div className="bg-success text-white bg-image m-0">
        <br />
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fondaverdegxp&tabs=timeline&width=350&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="350"
          height="500"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <br />
        <br />
      </div>
    </>
  );
}
