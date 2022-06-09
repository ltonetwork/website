import React, { useEffect } from "react";
import Link from "next/link"; 

const BlogsThreeColumn1 = ({ subBG }) => {
  useEffect(() => {
    console.log('loading blog!');
    parse('/data/news.xml', 'feed', 'feed-wrap');
  }, []);

  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container" id="feed-wrap">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <h3 className="wow" data-splitting>
            Our Blogs.
          </h3>
          <span className="tbg">Blogs</span>
        </div>
        <div className="row" id="feed">
        </div>
      </div>
    </section>
  );
};

function parse(rssUrl, rssList, rssListW) {
    const request = new XMLHttpRequest();
    request.open('GET', rssUrl);
    request.addEventListener('load', (event) => {
      if (event.target.status !== 200) {
        const e = '<p>Error ' + event.target.status + ': ' + event.target.statusText + ' (sorry)</p>';
          document.getElementById(rssList).insertAdjacentHTML('beforeend', e);
          return;
      }

      const result = event.target.responseText;

      let data = [];

      result.split('<item>').forEach(element => {
        const postTitle = element.split('<title>')[1].split('</title>')[0];
        const postLink = element.split('<link>')[1].split('</link>')[0];

        var postDate = undefined; // item 0 (blog link/title) has no pubDate
        if (element.includes('<pubDate>')) {
          var postDate = element.split('<pubDate>')[1].split('</pubDate>')[0];
        };

        var postAuthor = undefined; // item 0 (blog link/title) has no author
        if (element.includes('<dc:creator>')) {
          var postAuthor = element.split('<dc:creator>')[1].split('</dc:creator>')[0];
        };

        var postImage = undefined;
        if (element.includes('<media')) {
          var postImage = element.split('<media:content url="')[1].split(' medium')[0];
        }

        let post = {};
        post.postTitle = fixCData(postTitle);
        post.postLink = postLink;
        post.postDate = postDate;
        post.postImage = postImage;
        post.postAuthor = fixCData(postAuthor);
        data.push(post);

        console.log('parsing...', post.postTitle);
      });

      addPosts(data, 1, 6, rssList, rssListW);
    });
    request.send();
}

function addPosts(data, start, finish, rssList, rssListW) {
  var d = document.getElementById(rssList);
  var dw = document.getElementById(rssListW);

  for (var i = start; i <= finish; i++) {
    if (data[i] === undefined) return;
    var newPost = 
      `<a href="${data[i].postLink}" class="col-lg-4 col-md-6 mb-30 wow fadeInUp" data-wow-delay=".3s">
        <div class="item bg-img h-100" style="background-image: url(${data[i].postImage})">
          <div class="cont d-flex flex-column h-100">
            <span class="date custom-font">
              <i>${data[i].postDate.substring(5, 7)}</i> ${data[i].postDate.substring(8, 11)} ${data[i].postDate.substring(12, 16)}
            </span>
            <div class="info custom-font">
              <span class="author">by / ${data[i].postAuthor}</span>
            </div>
            <h6>${data[i].postTitle}</h6>
            <div class="btn-more custom-font" style="margin-top: auto;">
              <span class="simple-btn">Read More</span>
            </div>
          </div>
        </div>
      </a>`;

    d.insertAdjacentHTML('beforeend', newPost);
  }

  const l = document.getElementById('load-more');

  if (data.length > finish && l == null) {
    dw.insertAdjacentHTML('beforeend', '<div class="row"><button data-count=1 id="load-more" class="btn-curve btn-lit bg-color m-auto"><span>Load More</span></button></div>');
    document.getElementById('load-more').addEventListener('click',function(){
      var page = this.dataset.count;
      addPosts(data, (page*6) + 1, (page*6) + 6, rssList, rssListW);
      this.setAttribute('data-count', parseInt(page) + 1);
    });
  }

  if (data.length < finish) {
    l.parenNode.removeChild(l);
  }
}

function fixCData(string) {
  if (string !== undefined) {
    return string.replace(/^<\!\[CDATA\[|\]\]>$/g,'')
  }
}

export default BlogsThreeColumn1;
