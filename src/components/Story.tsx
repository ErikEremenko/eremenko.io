export default function Story() {
  return (
    <section className="sec" id="about">
      <div className="wrap story">
        <h2>From particles to prediction markets</h2>
        <div className="story-body">
          <p>
            I got into simulation through my Computer Science courses at TUM.
            In the molecular simulation lab course, our team built a molecular
            dynamics simulator in C++: particles, forces, time steps, and a lot
            of testing and profiling to make sure the results could be trusted.
          </p>
          <p>
            At the same time I was writing a seminar paper on online learning
            for financial time series, and at HackaTUM I took part in IMC&apos;s
            trading challenge. The two interests met there. A market can be
            simulated too, and the interesting part is what happens when one
            order meets the order book.
          </p>
          <p>
            Prediction markets are an unusually clean place to study that. Every
            contract settles at 0 or 1, the prices read as probabilities, and on
            Polymarket the full order book is public. That is why we built
            PolySimulator: anyone can trade these markets with paper money
            against the real order book, and we can measure how their orders
            would have filled.
          </p>
          <p>
            The part I enjoy most is the data: recording every change to the
            order books, replaying it, and checking the simulator against what
            really happened.
          </p>
        </div>
      </div>
    </section>
  );
}
