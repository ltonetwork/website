import React, { useState, useEffect } from "react";
import Link from "next/link"; 

const BlogsThreeColumn1 = ({ subBG }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('loading blog!');
    parse('https://cors-anywhere.herokuapp.com/https://blog.ltonetwork.com/rss/', 'feed');
  }, []);

  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <h3 className="wow" data-splitting>
            Our Blogs.
          </h3>
          <span className="tbg">Blogs</span>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div
              className="item bg-img"
              style={{ backgroundImage: "url(/img/blog/1.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                    <span>
                      <i>06</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div
              className="item active bg-img"
              style={{ backgroundImage: "url(/img/blog/2.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                    <span>
                      <i>11</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div
              className="item bg-img"
              style={{ backgroundImage: "url(/img/blog/3.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                    <span>
                      <i>09</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="feed"></div>
      </div>
    </section>
  );
};

function parse(rssUrl, rssList) {
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

        let post = {};
        post.postTitle = postTitle;
        post.postLink = postLink;
        post.postDate = postDate;
        data.push(post);
      });

      var d = document.getElementById(rssList);
      var i;
      for (i = 1; i < 4; i++) {
        var t = data[i].postDate; // MMM DD, YYYY
        var t = '<div class="date">' + t.substring(8, 11) + ' ' + t.substring(5, 7) + ', ' + t.substring(12, 16) + '</div>';
        var s = '<li>' + t + '<a target="_blank" href="' + data[i].postLink + '">' + data[i].postTitle + '</a></li>';
        d.insertAdjacentHTML('beforeend', s);
      }
    });
    request.send();
}

export default BlogsThreeColumn1;
