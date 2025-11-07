import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const HybridPower = () => {
      // Function to calculate the difference in days
      const calculateDaysSince = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        const difference = now - start;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return days;
    };

    // Calculate days since January 19, 2019
    const daysSinceLaunch = calculateDaysSince('2019-01-16');

    return (
        <div id="about">
          <section id="home--HybridPower" className="section-2023 pt-60 pb-80">
            <div className="container">
              <h2 className="title-2023 mb-20">LTO Network is shutting downy</h2>
              <p>The Layer 1 blockchain is <span style={{ color:"#00FFFF" }}>shutting down</span>. The story will continue on Base as EQTY</p>
              <p>The LTO to EQTY <strong>swap period has ended</strong> on 31 October 23:59. It&quot;s no longer possible to swap or trade LTO tokens.</p>
            </div>
          </section>
        </div>
    );
}

export default HybridPower;
