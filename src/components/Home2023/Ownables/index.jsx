import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Ownables = () => {
    return (
        <section id="home--Ownables" className="section-2023 pt-100 pb-100">
          <div className="container">
            <img src="/img/home-2023/ownables-bg.png" alt="" className="ownables-bg" />
            <img src="/img/home-2023/ownables-title.png" alt="Ownables text plus 3d shaped symbols" className="mb-30 title-image" />
            <p style={{ color:"#00FFFF" }} className="mb-30">Ownables redefine digital collectibles.</p>
            <p style={{ color:"#00FFFF" }} className="mb-20">Private and unlockable content along with advanced dynamic & consumable content.</p>            
            <Link href="https://ownables.info/">
              <a className="link-2023 mt-30" target="_blank">Get the SDK</a>
            </Link>
            <img src="/img/home-2023/proofi-blocks.png" style={{ margin: "50px auto 0", display: "block" }} alt="3d cubes with different terrain on them" />
          </div>
        </section>
    );
}

export default Ownables;
